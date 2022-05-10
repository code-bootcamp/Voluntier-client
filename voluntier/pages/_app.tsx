import '../styles/globals.css'
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }:AppProps) {
  return (
  <>
  <RecoilRoot>
    <Global styles={globalStyles}/>
    <Component {...pageProps} />
  </RecoilRoot>
  </>
  )
}

export default MyApp
