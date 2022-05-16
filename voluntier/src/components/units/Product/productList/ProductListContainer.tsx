import ProductListUI from "./ProductListPresenter";
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const FETCH_PRODUCTS = gql`
    query fetchProducts{
        fetchProducts{
            id
            name
            price
        }
    }
`

export default function ProductList(){
const router = useRouter()
const {data} = useQuery(FETCH_PRODUCTS)
console.log(data)
const MoveProduct = (event) => {
    router.push(`/products/${event.target.id}`)
}
    return (<ProductListUI data={data} MoveProduct={MoveProduct}/>)
}