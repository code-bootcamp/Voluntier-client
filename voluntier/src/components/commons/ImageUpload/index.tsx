
import styled from "@emotion/styled";
import { useRef, ChangeEvent, MouseEvent, useEffect, useState } from 'react';
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

export default function UploadFile(props:IUploadFile) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState([]);

  const addImage = (event:ChangeEvent<HTMLInputElement>) =>{
    const file:null|any = event.target.files
    if (!file) {
        return alert("파일이 없습니다.");
      }
    const ImageURLList = [...file]
    const fileReader = new FileReader()
    ImageURLList.map(async(el:any) =>{
      await fileReader.readAsDataURL(el)
    })
    fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
            const img = data.target?.result
            setImgUrl((prev:string[]) =>[...prev ,img]);
            ImageURLList.map(async(el:any) =>{
              await props.setMyImage((prev:string[]) =>[...prev ,el]);
            })
          }
    }
  }

  
  const onClickImg = () =>{
    fileRef.current?.click()

  }
  const deleteImage = (event:MouseEvent<HTMLImageElement>) => {
    imgUrl.splice(Number((event.target as HTMLImageElement).id), 1)
    setImgUrl([...imgUrl])
    props.myImage.splice(Number((event.target as HTMLImageElement).id), 1)
    props.setMyImage([...imgUrl])
  }

  useEffect(() => {
    if(props.data?.fetchProduct.images?.length){
      props.setMyImage([...props.data?.fetchProduct.images])
    }
  },[props.data])
  
 
  return (
    <Wrapper>
        <Button type="button" onClick={onClickImg}>이미지등록</Button>
        <InputImage ref={fileRef} style={{display:"none"}} type="file" multiple onChange={addImage} accept=".jpg,.jpeg,.png"/>
      {imgUrl.map((image:any ,index:number)=>(
         <Img key={uuidv4()} id={String(index)} onClick={deleteImage}  src={image}/>
      ))}
    </Wrapper>
  );
}