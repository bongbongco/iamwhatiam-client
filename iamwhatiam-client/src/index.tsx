import { Layout } from "antd";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import client from "./apollo";
import App from "./Components/App";
import GlobalStyle from "./global-styles";
// import styled from "./typed-components";

/*
const Footer = styled(Layout)`
    background-color: #FAFAFA;
`;
*/

ReactDOM.render(
  <ApolloProvider client={client}>
    <Layout>
      <App />
      <GlobalStyle />
    </Layout>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
