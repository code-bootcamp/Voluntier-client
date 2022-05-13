import { useState } from "react";
import BoardWriteUI from "./boardWritePresenter";

export default function BoardWrite() {
const [isModalVisible, setIsModalVisible] = useState(false);
const [address,setAddress] = useState("")

const handleComplete = (data: any) => {
  setIsModalVisible((prev) => !prev);
  console.log(data.address)
  setAddress(data.address);
};

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return <BoardWriteUI
        address={address}
        handleComplete={handleComplete} 
        showModal={showModal} 
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
  />;
}
