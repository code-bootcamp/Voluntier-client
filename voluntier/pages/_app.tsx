import '../styles/globals.css'
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from 'recoil';
import LayOut from '../src/commons/layout';
import ApolloSetting from '../src/commons/apollo';
import { ToastProvider } from "react-toast-notifications";




function MyApp({ Component, pageProps }:AppProps) {

  return (
  <RecoilRoot>
    <ApolloSetting>
    <ToastProvider>
        <Global styles={globalStyles}/>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </ToastProvider>
    </ApolloSetting>
  </RecoilRoot>
  )
}

export default MyApp
