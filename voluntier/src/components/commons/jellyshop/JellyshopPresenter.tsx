import { Modal } from "antd";
import * as S from "./JellyshopStyles";
import DaumPostcode from "react-daum-postcode";
import useAuth from "../hooks/useAuth";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export default function JellyshopModalUI(props) {
  useAuth();
  const [createPurchase] = useMutation(CREATE_PURCHASE);
  const { register, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const CreatePurchase = async (data) => {
    data.userId = props.UserData?.fetchLoginUser.id;
    data.productId = props.data?.fetchProduct.id;
    data.itemCount = 1;
    await createPurchase({
      variables: { createPurchaseInput: { ...data } },
    });
    Modal.success({ content: "젤리 사용 완료!" });
    props.setIsClosed?.(true);
  };

  return (
    <>
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.onTogglePostModal}
          onCancel={props.onTogglePostModal}
          closable={false}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <form onSubmit={handleSubmit(CreatePurchase)}>
        <S.Wrapper>
          <S.UpperWrapper>
            <S.UpperLeftWrapper>
              <S.TitleWrapper>
                <S.Label>상품명</S.Label>
                <S.ProductName></S.ProductName>
              </S.TitleWrapper>
              <S.BigImageWrapper>
                <S.BigImage
                  src={`https://storage.googleapis.com/${props.data?.fetchProduct.productImage[0].imageUrl}`}
                />
              </S.BigImageWrapper>
            </S.UpperLeftWrapper>
            <S.UpperRightWrapper>
              <S.Label style={{ marginBottom: "30px" }}>배송지 정보</S.Label>
              <S.SmallLabel>수령인</S.SmallLabel>
              <S.Input {...register("receiverName")} />
              <S.SmallLabel>연락처</S.SmallLabel>
              <S.Input {...register("receiverPhone")} />
              <S.SmallLabel>배송지 주소</S.SmallLabel>
              <S.ZipcodeWrapper>
                <S.Zipcode value={props.zipcode} readOnly={true} />
                <S.SearchButton type="button" onClick={props.onClickModal}>
                  우편번호
                </S.SearchButton>
              </S.ZipcodeWrapper>
              <S.Input
                style={{
                  marginBottom: "8px",
                  paddingLeft: "10px",
                }}
                onChange={setValue("address", props.address || "")}
                value={props.address}
                readOnly={true}
              />
              <S.Input
                {...register("addressDetail")}
                style={{ marginBottom: "30px" }}
              />
              <S.PriceWrapper>
                <S.Label>필요한 젤리</S.Label>
                <S.Price>{props.data?.fetchProduct.price} 개</S.Price>
              </S.PriceWrapper>
            </S.UpperRightWrapper>
          </S.UpperWrapper>
          <S.BuyButton>젤리 사용하기</S.BuyButton>
        </S.Wrapper>
      </form>
    </>
  );
}
