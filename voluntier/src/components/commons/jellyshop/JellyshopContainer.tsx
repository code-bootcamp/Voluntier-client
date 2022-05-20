import { useState } from "react";
import JellyshopModalUI from "./JellyshopPresenter";

export default function JellyshopModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const onClickModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data) => {
    setIsOpen((prev) => !prev);
    setZipcode(data.zonecode);
    setAddress(data.address);
    console.log(data);
  };

  return (
    <JellyshopModalUI
      UserData={props.UserData}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      onClickModal={onClickModal}
      onCompleteAddressSearch={onCompleteAddressSearch}
    />
  );
}
