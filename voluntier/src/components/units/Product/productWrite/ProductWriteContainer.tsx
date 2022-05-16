import ProductWriteUI from "./ProductWritePresenter";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from 'next/router';

const schema = yup.object({
  name: yup.string(),
  price: yup.number().typeError("상품가격만 숫자로 입력해주세요."),
  details: yup.string()
})
const nonSchema = yup.object({
  name:yup.string(),
  price : yup.number().typeError("상품가격만 숫자로 입력해주세요."),
  details:yup.string(),
})

const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput:CreateProductInput!){
    createProduct(createProductInput:$createProductInput){
      id
      name
    }
  }
`
const UPDATE_PRODUCT = gql`
  mutation updateProduct($productId: String! $updateProductInput: UpdateProductInput!){
    updateProduct(productId:$productId updateProductInput: $updateProductInput){
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

interface IFormValues {
  name : string
  price : number
  details : string
}

interface IPropsProductWrite{
  isEdit?:boolean
  data?:any
}

interface IUpdate{
  name? : string
  price? : number
  details? : string
}

export default function ProductWrite(props:IPropsProductWrite) {
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)
  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  const router = useRouter()
  const [myImage,setMyImage] = useState<string[]>([])
  const {register , handleSubmit, formState} = useForm({
    resolver : yupResolver(props.isEdit? nonSchema:schema),
    mode:"onChange",
})

  const CreateProduct = async (data:IFormValues) => {
    if (myImage.length) {
      const result1 = await uploadImage({
        variables:{file : myImage}
      })
      console.log(result1)
    }else {
      try{
        const result = await createProduct({
          variables:{createProductInput:{
            ...data,
          }}
        })
        console.log(result)
        Modal.success({content:"게시물 등록에 성공했습니다."})
        router.push(`/products/${result.data?.createProduct.id}`)
      }catch(error){
        Modal.error({content:error.message})
      }
    }
    
  }

  const UpdateProduct = async (data:IFormValues) => {
    const updateProductInput : IUpdate = {}
    if(data.name) updateProductInput.name = data.name
    if(data.price) updateProductInput.price = data.price
    if(data.details) updateProductInput.details = data.details

    try{
      const result = await updateProduct({
        variables:{productId: router.query.productId, 
        updateProductInput}
      })
      console.log(result)
      Modal.success({content:"상품 수정에 성공하였습니다."})
      router.push(`/products/${result.data?.updateProduct.id}`)
    }catch(error){
      Modal.error({content:error.message})
    }

  }

  return <ProductWriteUI 
    register={register} 
    handleSubmit={handleSubmit} 
    formState={formState}
    myImage={myImage} setMyImage={setMyImage}
    CreateProduct={CreateProduct}
    UpdateProduct={UpdateProduct}
    isEdit={props.isEdit}
    data={props.data}
  />;
}
