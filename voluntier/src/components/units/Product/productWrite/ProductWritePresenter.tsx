import * as S from "./ProductWriteStyles";
import UploadFile from '../../../commons/ImageUpload/index';
import dynamic from 'next/dynamic'

const ProductEditorUI = dynamic(()=>import('../../../commons/texteditor/editor/productEditor'),{ssr:false})

interface IPropsIProductWriteUI{
  register : any
  handleSubmit : any
  formState: any
  myImage: string[]
  setMyImage : any
  CreateProduct : (data:any) => void
  UpdateProduct : (data:any) => void
  isEdit : boolean
  data : any
  editorRef : any
}

export default function ProductWriteUI(props:IPropsIProductWriteUI) {
  return (
    <S.Wrapper>
      <S.Title>젤리샵 상품 등록</S.Title>
      <S.InnerWrapper>
        <S.Form onSubmit={props.handleSubmit(props.isEdit? props.UpdateProduct : props.CreateProduct)}>
          <S.InputWrapper>
            <S.Label>상품명</S.Label>
            <S.Input defaultValue={props.data?.fetchProduct.name} {...props.register("name")}/>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품가격</S.Label>
            <S.Input type="number" defaultValue={props.data?.fetchProduct.price} {...props.register("price")}/>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품정보</S.Label>
            <ProductEditorUI editorRef={props.editorRef} data={props.data}/>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>상품 이미지 등록</S.Label>
          </S.InputWrapper>
          <UploadFile data={props.data} myImage={props.myImage} setMyImage={props.setMyImage}/>
          <S.ButtonWrapper>
            <S.Button type="submit">{props.isEdit? "수정하기":"등록하기"}</S.Button>
          </S.ButtonWrapper>
        </S.Form>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
