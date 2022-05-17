import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWrite from "../../../../src/components/units/Product/productWrite/ProductWriteContainer";
const FETCH_PRODUCT = gql`
    query fetchProduct($productId:String!){
      fetchProduct(productId:$productId){
        id
        name
        price
        details
        createdAt
        productImage{
          imageUrl
        }
    }
  }
`

export default function ProductEditPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT,{
        variables:{productId:router.query.productId}
      })
      console.log(data)

    return(
    <ProductWrite data={data} isEdit={true}/>
    )
}