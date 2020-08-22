import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --content-padding: 50px;
    
    --color-main-background: #fff;
    --color-text-main: #000;
    --color-text-sub: #4c505b;
    --color-box-background: #efefef;

    --color-price: #d79b59;
    --color-error: #EF4836;
  }

  /* Uncomment this to enable dark mode */
  /* @media (prefers-color-scheme: dark) {
    :root {
      --color-main-background: #020210;
      --color-text-main: #fff;
      --color-text-sub: #ddd;
      --color-box-background: #555;
    }
  } */
  
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font: 16px/1 roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: var(--color-main-background);
    color: var(--color-text-sub);
    font-family: 'Manrope', sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
    line-height:1.3;
  }
div{
  font-family: 'Manrope', sans-serif;
  font-weight:500;
}
  h1,
  h2,
  h3,
  h4,
  p,
  blockquote,
  figure,
  ol,
  ul {
    padding: 0;
    font-family: 'Manrope', sans-serif;
  }
  main {
    display: block;
  }
  h1,
  h2,
  h3,
  h4 {
    font-size: inherit;
  }
  div{
    font-size:14px;
  }
  strong {
    font-weight: bold;
  }
  a,
  button {
    color: inherit;
  }
  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p > a {
    border-bottom: 2px solid black;
    font-weight: 600;

    &:hover {
      text-decoration: none;
      border-bottom-color: transparent;
    }
  }
.onelinetext{
  text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}
  button {
    overflow: visible;
    border: 0;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    background: none;
    cursor: pointer;
  }
  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  ::-webkit-input-placeholder { /* Edge */
    color:#999999;
    font-weight:500;
  }
  ::placeholder {
    color: #999999;
    font-size:12px;
    opacity:0.5;
  }
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
  .p10{
    padding:10px;
    width:100%;
  }
  .pt10{
    padding-top:10px;
  }
  .pt20{
    padding-top:20px;
  }
  .mr10{
    margin-right:10px;
  }
  .ml10{
    margin-left:10px;
  }
  .m10{
    margin:10px;
  }
  .secondText{
    color:#999999;
  }
  .fo12{
    font-size:12px;
  }
  .fo16{
    font-size:16px;
  }
  .fo13{
    font-size:13px;
  }
`;
