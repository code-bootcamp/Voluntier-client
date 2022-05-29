
import Head from "next/head";
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { setAmountDonation } from '../../../commons/store';
import {useRouter }from 'next/router'
import { Modal } from "antd";
import { LegacyRef } from "react";
import { FETCH_LOGIN_USER } from '../../units/Mypage/MypageQueries';

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_DONATION = gql`
  mutation createDonation($impUid:String! $amount:Float!){
    createDonation(impUid:$impUid amount:$amount){
      id
      impUid
    }
  }
`
interface IPropsPaymentPage {
  PayRef: LegacyRef<HTMLButtonElement> | undefined;
}

export default function PaymentPage(props:IPropsPaymentPage) {
  const [amount,] = useRecoilState(setAmountDonation)
  const {data} = useQuery(FETCH_LOGIN_USER)
  const [createDonation] = useMutation(CREATE_DONATION)
  const router = useRouter()
 

  const requestPay = async() => {
    const IMP = window.IMP;
    IMP.init("imp95938145");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "Voluntier후원",
        amount,
        buyer_email: data?.fetchLoginUser.email,
        buyer_name: data?.fetchLoginUser.name,
      },
      (rsp: any) => {
        if (rsp.success) {
            createDonation({
              variables:{impUid : rsp.imp_uid , amount},
              refetchQueries:[{
                query: FETCH_LOGIN_USER,
              }]
            })
            Modal.success({content:"충전에 성공하였습니다."})
            router.push('/donation')
        } else {
          Modal.error({content:"결제에 실패하였습니다. 다시 시도해주세요."});
        }
      }
    );
  };
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button style={{display:"none"}} ref={props.PayRef} onClick={requestPay}></button>
    </div>
  );
}
