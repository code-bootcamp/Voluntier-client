import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 50px 24px;
`;

export const DogBiscuit = styled.img`
  width: 230px;
  margin-bottom: 70px;
`;

export const UrgentList = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

export const Urgent = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: #0085cb;
  padding: 16px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

export const DeadLine = styled.div`
  width: 99px;
  height: 48px;
  background-color: #ffffff;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  font-size: 18px;
  color: #ff3400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Detail = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

export const SearchWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Dropdown = styled.select`
  width: 20%;
  border-radius: 0px;
  margin-right: 10px;
`;

export const SearchButton = styled.div`
  /* width: 6%; */
  width: 70px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButtonImage = styled.img`
  width: 50%;
`;

export const TableWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Row = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e3e3e3;
  text-align: center;
  line-height: 38px;

  /* :hover {
    color: #0085cb;
  } */
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  font-size: 18px;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  font-size: 18px;
`;
