import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import ProductDetailUI from "./ProductDetailPresenter";
import { useRouter } from 'next/router';
import { Modal } from "antd";
import { DELETE_PRODUCT, FETCH_PRODUCT } from "./ProductDetailQueries";


export default function ProductDetail() {
  const router = useRouter()
  const [,setIsEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const {data} = useQuery(FETCH_PRODUCT,{
    variables:{productId:router.query.productId}
  })
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const ProductEdit = () => {
    setIsEdit(true)
    router.push(`/products/${router.query.productId}/edit`)
  }

  const ProductDelete = async () => {
    try{
      const result = await deleteProduct({
        variables:{productId:router.query.productId}
      })
      console.log(result)
      Modal.success({content:"게시물 삭제에 성공했습니다."})
      router.push('/products')  
    }catch(error){
      Modal.error({content:error.message})
    }
  }
  return <ProductDetailUI data={data} isOpen={isOpen} onToggleModal={onToggleModal} ProductEdit={ProductEdit} ProductDelete={ProductDelete}/>;
}
