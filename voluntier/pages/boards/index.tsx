import BoardList from "../../src/components/units/Board/boardList/BoardListContainer";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards(
    $page: Int
    $search: String
    $location1: String
    $location2: String
  ) {
    fetchBoards(
      page: $page
      search: $search
      location1: $location1
      location2: $location2
    ) {
      title
      contents
      centerName
      createdAt
      location1
      location2
      id
      address
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
export default function BoardListPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: BoardsCountData } = useQuery(FETCH_BOARDS_COUNT);
  console.log(BoardsCountData);
  return (
    <>
      <BoardList
        data={data}
        refetch={refetch}
        BoardsCountData={BoardsCountData}
      />
    </>
  );
}
