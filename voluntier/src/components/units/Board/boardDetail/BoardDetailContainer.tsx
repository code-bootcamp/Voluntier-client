import BoardDetailUI from "./BoardDetailPresenter";
import {useQuery} from '@apollo/client'
import { FETCH_BOARD } from "./BoardDetailQueries";
import { useRouter } from "next/router";



export default function BoardDetail() {
  const router = useRouter()
  const {data} = useQuery(FETCH_BOARD,
    {variables:{boardId: String(router.query.boardId)}})

  console.log(data)
  return <BoardDetailUI 
  data={data}
  />;
}
