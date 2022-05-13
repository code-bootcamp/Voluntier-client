import NavigationUI from "./NavigationPresenter";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useMoveToPage } from "../../../components/commons/hooks/useMoveToPage";

const CREATE_PRODUCT = gql`
  mutation createProduct($createProdcutInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
    }
  }
`;

export default function Navigation() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [visible, setVisible] = useState(false);

  const onClickMutation = async () => {
    const result = await createProduct({
      variables: {
        createProductInput: {
          name: "아름서형창서",
          price: 3000,
          details: "첫뮤테이션입니다.",
        },
      },
    });
    console.log(result);
  };

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = () => {
    setVisible(true);
  };

  const { moveToPage } = useMoveToPage();

  return (
    <NavigationUI
      hide={hide}
      handleVisibleChange={handleVisibleChange}
      visible={visible}
      onClickMutation={onClickMutation}
      moveToPage={moveToPage}
    />
  );
}
