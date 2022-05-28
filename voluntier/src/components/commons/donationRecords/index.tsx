import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";
import { IQuery } from "../../../commons/types/generated/types";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Row = styled.div`
  height: 40px;
  display: flex;
  border-bottom: 1px solid #e3e3e3;

  @media ${breakPoints.tablet} {
    height: 40px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
    height: 30px;
  }
`;

const Column = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    font-size: 13px;
  }

  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

interface IPropsDonationRecords{
  DonationData? : Pick<IQuery,"fetchDonations">
}

export default function DonationRecords(props:IPropsDonationRecords) {
  return (
    <Wrapper>
      <Row style={{ fontWeight: "800", borderBottom: "1px solid #000000" }}>
        <Column style={{ width: "7%" }}>no.</Column>
        <Column style={{ width: "68%" }}>후원 금액</Column>
        <Column style={{ width: "25%" }}>후원 날짜</Column>
      </Row>
        {props.DonationData?.fetchDonations.map((el, index) => (
          <Row key={index}>
            <Column style={{ width: "7%" }}>{index + 1}</Column>
            <Column style={{ width: "68%" }}>{el.amount} 젤리</Column>
            <Column style={{ width: "25%" }}>
              {el.createdAt.slice(0, 10)}
            </Column>
          </Row>
        ))}
    </Wrapper>
  );
}
