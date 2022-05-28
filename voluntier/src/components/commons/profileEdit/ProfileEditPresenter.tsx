import { gql, useMutation } from '@apollo/client'
import { Modal } from 'antd';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'
import * as S from './ProfileEditStyles'


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
const FETCH_USER_LOGIN = gql`
    query fetchLoginUser{
        fetchLoginUser{
            id
            name
            email
            phone
            isAdmin
            profileImageUrl
            donationAmount
            point
            serviceTime
            provider
        }
    }
`
interface IPropsProfileEditUI {
  setIsOpen : Dispatch<SetStateAction<boolean>>
}

export default function ProfileEditUI(props:IPropsProfileEditUI) {
  const [updateUserImage] = useMutation(UPDATE_USER_IMAGE)
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  const [Img,setImg] = useState("")

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
      variables:{profileImageUrl:Img},
      refetchQueries:[{
        query: FETCH_USER_LOGIN
      }]
    })
    props.setIsOpen(false)
  }
  
  const onClickImg = () =>{
    fileRef.current?.click()

  }
  
  return (
    <S.Wrapper>
      <S.WrapperLeft>
        <S.ProfileImageWrapper>
          <S.ProfileImage src={Img? `https://storage.googleapis.com/${Img}` : '/images/marker.png' }/>
        </S.ProfileImageWrapper>
        <input type="file" ref={fileRef} style={{display:"none"}} onChange={addImage}/>
      <S.buttonWrapper>
        <S.ProfileImageEditButton onClick={onClickImg}>사진 변경</S.ProfileImageEditButton>
        <S.EditButton onClick={UpdateUserImage}>변경완료</S.EditButton>
      </S.buttonWrapper>
      </S.WrapperLeft>
    </S.Wrapper>
  );
}
