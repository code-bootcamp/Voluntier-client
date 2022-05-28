import { UseFormRegister, FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { IQuery } from "../../../commons/types/generated/types";
import { Dispatch, SetStateAction } from 'react';

export interface IPropsJellyshopModal {
    UserData? : Pick<IQuery, "fetchLoginUser">
    data? : Pick<IQuery, "fetchProduct">
    setIsClosed : Dispatch<SetStateAction<boolean>>
  }
  
  export interface IFormCreatePurchase {
    userId? : string
    productId? : string
    receiverName? : string
    receiverPhone? : string
    address? : string
    addressDetail? : string
    itemCount? : number
  }

  export interface IPropsJellyshopModalUI {
    UserData? : Pick<IQuery, "fetchLoginUser">
    data? : Pick<IQuery, "fetchProduct">
    isOpen : boolean
    address : string
    zipcode : string
    onClickModal : () => void
    onCompleteAddressSearch : (data:any) => void
    onTogglePostModal : () => void
    setIsOpen : Dispatch<SetStateAction<boolean>>
    setIsClosed : Dispatch<SetStateAction<boolean>>
    CreatePurchase : (data:IFormCreatePurchase) => void
    register : UseFormRegister<FieldValues>
    handleSubmit : UseFormHandleSubmit<FieldValues>
    setValue : any
  }
  