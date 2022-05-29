import ProductListUI from "./ProductListPresenter";
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { MouseEvent } from "react";

const FETCH_PRODUCTS = gql`
    query fetchProducts{
        fetchProducts{
            id
            name
            price
            productImage{
                imageUrl
            }
        }
    }
`

export default function ProductList(){
const router = useRouter()
const {data} = useQuery(FETCH_PRODUCTS)

const MoveProduct = (event:MouseEvent<HTMLImageElement>) => {
    router.push(`/products/${(event.target as HTMLImageElement).id}`)
}
    return (<ProductListUI data={data} MoveProduct={MoveProduct}/>)
}