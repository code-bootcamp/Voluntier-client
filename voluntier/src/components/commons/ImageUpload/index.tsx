
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRef, ChangeEvent, MouseEvent, useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";


const Wrapper = styled.div`
    width: 100%;
  `;
  const InputImage = styled.input`
    border: 1px solid red;
  `
  const Img = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 2%;
    border: 3px solid #F2522E;
    border-radius: 15px;
  `
  const Button = styled.button`
    width: 100px;
    height: 100px;
    font-size: 16px;
  `

  interface IUploadFile {
    myImage?: any
    setMyImage: any
    data?:any
  }

  const UPLOAD_IMAGE = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file)
  }
`;

export default function UploadFile(props:IUploadFile) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const addImage = (event:ChangeEvent<HTMLInputElement>) =>{
    if(props.myImage.length>3){
      return alert("상품 이미지는 최대 4장까지 올릴 수 있습니다.")
    }
    const file:null|any = event.target.files
    const ImageURLList = [...file]
    ImageURLList.map(async (el:any) =>{
    try{
        const result = await uploadImage({
          variables:{file : el}
        })
        props.setMyImage((prev:string[]) =>[...prev ,result.data.uploadImage])
      }catch(error){
        if(error instanceof Error) Modal.error({content:error.message})
      }
    })
  }

  
  const onClickImg = () =>{
    fileRef.current?.click()

  }
  const deleteImage = (event:MouseEvent<HTMLImageElement>) => {
    props.myImage.splice(Number((event.target as HTMLImageElement).id), 1)
    props.setMyImage([...props.myImage])
  }

  
  

  useEffect(() => {
    if(props.data?.fetchProduct.productImage?.length){
      const imageArr = props.data?.fetchProduct.productImage.map((el) => {
        return  el.imageUrl
      })
      props.setMyImage(imageArr)
    }
  },[props.data])

  return (
    <Wrapper>
        <Button type="button" onClick={onClickImg}>이미지등록</Button>
        <InputImage ref={fileRef} style={{display:"none"}} type="file" multiple onChange={addImage} accept=".jpg,.jpeg,.png"/>
     {props.myImage.map((el:any ,index:number)=>(
         <Img key={uuidv4()} id={String(index)} onClick={deleteImage} src={`https://storage.googleapis.com/${el}`}/>
      ))}
    </Wrapper>
  );
}