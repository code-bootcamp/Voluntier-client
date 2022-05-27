import PaginationUI from "./PaginationPresenter";
import { useState, MouseEvent } from "react";


interface PaginationProps {
  data?: any;
  refetch?: any;
  BoardsCountData?: any;
}

export default function Pagination(props: PaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(props.BoardsCountData?.fetchBoardsCount / 10);
  const [active, setActive] = useState("");
  const index = props.BoardsCountData?.fetchBoardsCount % 10;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    props.refetch({ page: Number(event.target.id) });
    if (event.target instanceof Element) setActive(event.target.id);
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
      startPage={startPage}
      lastPage={lastPage}
      active={active}
      index={index}
    />
  );
}
