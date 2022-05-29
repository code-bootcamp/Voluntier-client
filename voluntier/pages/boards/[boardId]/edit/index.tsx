import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../src/commons/types/generated/types";
import { FETCH_BOARD } from "../../../../src/components/units/Board/boardDetail/BoardDetailQueries";
import BoardWrite from "../../../../src/components/units/Board/boardWrite/BoardWriteContainer";



export default function BoardEditPage() {
  const router = useRouter()
  const {data : defaultData} = useQuery<Pick<IQuery,"fetchBoard">>(FETCH_BOARD,
    {variables:{boardId: String(router.query.boardId)}})
  
  return <BoardWrite isEdit={true} defaultData={defaultData}
  />;
}
