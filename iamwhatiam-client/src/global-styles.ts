import reset from "styled-reset";
import { createGlobalStyle } from "./typed-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
    @import url('//cdnjs.cloudflare.com/ajax/libs/antd/3.10.1/antd.min.css');
    @import url('//cdn.quilljs.com/1.2.6/quill.snow.css');
    @import 'react-mde/lib/styles/css/react-mde-all.css';
    @import 'antd/dist/antd.css';
    @import 'ant-design-pro/dist/ant-design-pro.css';
    ${reset}

    *{
        box-sizing: border-box;
    }
    body{
        font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a{
        color:inherit;
        text-decoration: none;
    }
    input,
    button{
        &:focus,
        &:active{outline:none}
    }
`;

export default GlobalStyle;