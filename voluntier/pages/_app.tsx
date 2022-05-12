import '../styles/globals.css'
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from 'recoil';
import LayOut from '../src/commons/layout';

function MyApp({ Component, pageProps }:AppProps) {
  return (
  <>
  <RecoilRoot>
    <Global styles={globalStyles}/>
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  </RecoilRoot>
  </>
  )
}

export default MyApp
