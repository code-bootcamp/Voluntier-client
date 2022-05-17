import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput:CreateProductInput!){
    createProduct(createProductInput:$createProductInput){
      id
      name
      price
      productImage{
        imageUrl
      }
    }
  }
`
export const UPDATE_PRODUCT = gql`
  mutation updateProduct($productId: String! $updateProductInput: UpdateProductInput!){
    updateProduct(productId:$productId updateProductInput: $updateProductInput){
      id
      name
    }
  }
`