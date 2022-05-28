import { useMutation, gql } from '@apollo/client';
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import JellyshopModalUI from "./JellyshopPresenter";
import * as yup from 'yup';
import { Modal } from "antd";
import { IFormCreatePurchase, IPropsJellyshopModal } from './JellyshopTypes';

const CREATE_PURCHASE = gql`
  mutation createPurchase($createPurchaseInput: CreatePurchaseInput!) {
    createPurchase(createPurchaseInput: $createPurchaseInput) {
      id
    }
  }
`;

const schema = yup.object({
  receiverName: yup.string().required("수령인 입력은 필수입니다."),
  receiverPhone: yup.string().required("핸드폰 번호는 필수입니다."),
  address: yup.string().required("주소입력은 필수입니다."),
  addressDetail: yup.string().required("상세주소는 필수입니다."),
});



export default function JellyshopModal(props:IPropsJellyshopModal) {
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [createPurchase] = useMutation(CREATE_PURCHASE);

  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const CreatePurchase = async (data:IFormCreatePurchase) => {
    data.userId = props.UserData?.fetchLoginUser.id;
    data.productId = props.data?.fetchProduct.id;
    data.itemCount = 1;
    await createPurchase({
      variables: { createPurchaseInput: { ...data } },
    });
    Modal.success({ content: "젤리 사용 완료!" });
    props.setIsClosed?.(true);
  };

  const onClickModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data:any) => {
    setIsOpen((prev) => !prev);
    setZipcode(data.zonecode);
    setAddress(data.address);
    console.log(data);
  };

  const onTogglePostModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <JellyshopModalUI
      CreatePurchase = {CreatePurchase}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      UserData={props.UserData}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      onClickModal={onClickModal}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onTogglePostModal={onTogglePostModal}
      setIsOpen={setIsOpen}
      setIsClosed={props.setIsClosed}
    />
  );
}
