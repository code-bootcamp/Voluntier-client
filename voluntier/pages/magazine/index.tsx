import { gql, useMutation, useQuery } from '@apollo/client';
import styled from '@emotion/styled'
import { Modal } from 'antd';
import { useEffect, useRef, useState } from 'react';

const Magazine = styled.img`
    width: 100%;
    height: 100%;

`
const ManagerBox = styled.div`
  width: fit-content;
  border: 1px solid lightgray;
  padding: 3%;
`
const InputImage = styled.input`
border: 1px solid red;
`
const Arrow = styled.img`
  width: 30px;
  height: 30px;

`
const Img = styled.img`
  width: 100%;
  height: 100%;

`
const UpdateButton = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  font-size: 15px;
  font-family: GmarketSans;
  background-color: gold;
  margin: 10px;
  cursor: pointer;

`

const Warning = styled.span`
  
  font-size: 15px;
  font-family: GmarketSans;
`
const FETCH_USER_LOGIN = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      name
      email
      phone
      isAdmin
    }
  }
`;
const FETCH_WALLPAPER = gql`
  query fetchWallpapers{
    fetchWallpapers{
      imageUrl
    }
  }

`

const UPLOAD_IMAGE = gql`
mutation uploadImage($file: Upload!) {
  uploadImage(file:$file)
}
`;


const UPLOAD_MAGAZINE = gql`
  mutation createWallpaper($title: String!,$imageUrl: String!){
    createWallpaper(title:$title, imageUrl:$imageUrl){
      id
      imageUrl
    }
  }

`

export default function JellyPaperPage(){
    const fileRef = useRef<HTMLInputElement>(null);
    const [windowSize, setWindowSize] = useState(false);
    const [myfile,setFile] = useState([])
    const { data } = useQuery(FETCH_USER_LOGIN);
    const {data : urlData} = useQuery(FETCH_WALLPAPER)
    const [uploadImage] = useMutation(UPLOAD_IMAGE);
    const [uploadMagazine] = useMutation(UPLOAD_MAGAZINE)
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setWindowSize(true);
      } else {
        setWindowSize(false);
      }
    };

    const onClickImg = () =>{
      fileRef.current?.click()
  
    }
    const addImage = async(event) =>{
      const file = event.target.files?.[0]
      console.log(file)
      try{
          const result = await uploadImage({
            variables: {file}
          })
          setFile(result.data.uploadImage)
          Modal.success({content:"사진불러왔어요! 데이터전송버튼 눌러주세요 관리자님!"})
        }catch(error){
          if(error instanceof Error) Modal.error({content:error.message})
        }
     
    }
  
  
    useEffect(() => {
      if (window.innerWidth <= 767) {
        setWindowSize(true);
      }
      window.addEventListener("resize", handleResize);
      return () => {
      window.removeEventListener("resize", handleResize);
      };
    }, [windowSize]);

    const onClickUpload = async()=>{

      try{
        await uploadMagazine({
          variables:{
            title : "월간5월호",
            imageUrl: myfile
          }
        })
        Modal.success({content:"월간젤리호 파일을 전송완료했습니다!"})
      } catch(error){
        Modal.error({content:"월간젤리 등록에 실패했습니다 관리자님ㅠㅠ개발팀에 문의주세요"})
      }

    }


return (
    
    <div style={{ padding : "5%"}}>
{/* 월간젤리 하드코딩  */}
        {!windowSize && (
        <Img src={`https://storage.googleapis.com/${urlData?.fetchWallpapers[0]?.imageUrl}`}/>
        )}
          {windowSize && (
        <Magazine src='/images/jellypaper/mobile_월간젤리5월호.png'/>
          )}

{/* backend에서 fetch한 월간젤리 파일 보여주기 */}
          {/* <Img src={`https://storage.googleapis.com/${urlData?.fetchWallpapers[0]?.imageUrl}`}/> */}
        {data?.fetchLoginUser.isAdmin ? (
        <>
        <br/>
        <Warning> - 관리자용 버튼 매뉴얼 - </Warning>
        <ManagerBox>

          <UpdateButton onClick={onClickImg} >매거진 파일 불러오기</UpdateButton>
          <Arrow src='/images/jellypaper/right-arrow.png'/>
          <UpdateButton onClick={onClickUpload} >매거진 <br/>데이터 전송</UpdateButton>
          <InputImage ref={fileRef} style={{display:"none"}} type="file" multiple onChange={addImage} accept=".jpg,.jpeg,.png"/><br/>
        <br/>
        <span style={{fontSize:"16px", color: "red" }}>매거진 파일 불러오기 (컴퓨터에서 파일 선택) -&gt; 매거진 데이터 전송 클릭 <br/></span>
        </ManagerBox>
        </>
        ) : (
          <></>
        )}
    </div>
)


}