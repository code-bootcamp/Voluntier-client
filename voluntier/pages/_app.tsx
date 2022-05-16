import '../styles/globals.css'
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { AppProps } from "next/app";
import { RecoilRoot } from 'recoil';
import LayOut from '../src/commons/layout';
import {ApolloClient,ApolloProvider,InMemoryCache,ApolloLink} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client';


function MyApp({ Component, pageProps }:AppProps) {

  const uploadLink = createUploadLink({
		uri : "https://backendapi.voluntier.site/graphql",
	})
  const client = new ApolloClient({
		link : ApolloLink.from([uploadLink as unknown as ApolloLink]),
		cache : new InMemoryCache(),
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
