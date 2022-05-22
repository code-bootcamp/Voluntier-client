import { gql, useMutation} from '@apollo/client'
import { Modal } from 'antd';
import { ChangeEvent, useRef, useState } from 'react'
import * as S from './ProfileEditStyles'

const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!){
    updateUser(updateUserInput: $updateUserInput){
      id
      name
    }
  }
`

const UPLOAD_IMAGE = gql`
mutation uploadImage($file: Upload!) {
  uploadImage(file: $file)
}
`;
const UPDATE_USER_IMAGE = gql`
  mutation updateUserImage($profileImageUrl:String!){
    updateUserImage(profileImageUrl:$profileImageUrl){
      id
    }
  }
`
export default function ProfileEditUI(props) {
  const [updateUserImage] = useMutation(UPDATE_USER_IMAGE)
  const [upadateUser] = useMutation(UPDATE_USER)
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  const [Img,setImg] = useState("")
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [passwordCheck,setPasswordCheck] = useState("")
  const [passwordError,setPasswordError] = useState("영문,숫자,특수문자를 포함한 8~16 사이입니다.")
  const [passwordCheckError,setPasswordCheckError] = useState("")

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  console.log(name)
  const onChangePassword = (event) =>{
    setPassword(event.target.value)
    const regex = /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/
    if (regex.test(event.target.value)) {
      setPasswordError("");
    }
  }
  const onChangeCheckPassword = (event) =>{
    setPasswordCheck(event.target.value)
    if (event.target.value === password) {
      setPasswordCheckError("");
    }
  }
 
  const onClickUpdateUser = async() =>{
    if(password !== passwordCheck){
      setPasswordCheckError("비밀번호가 다릅니다.")
    }
    if(password === passwordCheck){
    try{
    const result = await upadateUser({
      variables:{updateUserInput: {name, password}}
    })
    console.log(result)
    alert("이름 및 비밀번호 변경에 성공하였습니다.")
  }catch(error){
    alert(error.message)
  }
}
  }

  

  const addImage = async(event:ChangeEvent<HTMLInputElement>) =>{
    const file:null|any = event.target.files?.[0]
    try{
        const result = await uploadImage({
          variables:{file}
        })
        setImg(result.data.uploadImage)
      }catch(error){
        if(error instanceof Error) Modal.error({content:error.message})
      }
    }

  const UpdateUserImage = async() => {
    await updateUserImage({
      variables:{profileImageUrl:Img}
    })
  }
  
  const onClickImg = () =>{
    fileRef.current?.click()

  }
  
  return (
    <S.Wrapper>
      <S.WrapperLeft>
        <S.ProfileImageWrapper>
          <S.ProfileImage src={`https://storage.googleapis.com/${Img}`} onClick={onClickImg}/>
        </S.ProfileImageWrapper>
        <input type="file" ref={fileRef} style={{display:"none"}} onChange={addImage}/>
        <S.ProfileImageEditButton onClick={UpdateUserImage}>사진 변경</S.ProfileImageEditButton>
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.Input onChange={onChangeName} placeholder="이름"></S.Input>
        <S.Input type="password"  onChange={onChangePassword} placeholder="새로운 비밀번호"></S.Input>
        <S.Error>{passwordError}</S.Error>
        <S.Input type="password" onChange={onChangeCheckPassword} placeholder="비밀번호 확인"></S.Input>
        <S.Error>{passwordCheckError}</S.Error>
        <S.buttonWrapper>
            <S.EditButton onClick={onClickUpdateUser}>수정완료</S.EditButton>
          </S.buttonWrapper>
      </S.WrapperRight>
    </S.Wrapper>
  );
}
