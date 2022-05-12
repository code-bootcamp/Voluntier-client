import '../styles/globals.css'
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from 'recoil';
import LayOut from '../src/commons/layout';
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client'

function MyApp({ Component, pageProps }:AppProps) {

  const client = new ApolloClient({
    uri: "http://backendapi.voluntier.site/graphql",
    cache: new InMemoryCache()
  })

  return (
  <RecoilRoot>
    <ApolloProvider client={client}>
      <Global styles={globalStyles}/>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </ApolloProvider>
  </RecoilRoot>
  )
}

export default MyApp
