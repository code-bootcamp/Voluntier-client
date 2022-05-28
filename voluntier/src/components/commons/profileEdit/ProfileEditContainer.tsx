import { Dispatch, SetStateAction } from "react";
import ProfileEditUI from "./ProfileEditPresenter";

interface IPropsProfileEdit {
  setIsOpen : Dispatch<SetStateAction<boolean>>
}

export default function ProfileEdit(props:IPropsProfileEdit) {
  return <ProfileEditUI setIsOpen={props.setIsOpen}/>;
}
