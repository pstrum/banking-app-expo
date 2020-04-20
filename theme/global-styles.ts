import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  strong,
  b,
  i,
  th,
  var {
    font-style: normal;
    font-weight: normal;
  }

  caption,
  th {
    text-align:left;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: inherit;
  }

  q:before,
  q:after {
    content: '';
  }

  header,
  aside,
  nav,
  footer,
  section,
  article,
  hgroup,
  address,
  figure,
  figcaption,
  video,
  details,
  small,
  summary,
  img,
  main,
  time,
  dl,dt,dd,
  li {
    display: block;
  }

  body {
    width: ${(props) => props.theme.siteWidth.desktop};
    min-width: ${(props) => props.theme.siteWidth.min};
    max-width: ${(props) => props.theme.siteWidth.max};
    margin: 0 auto;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.55;
    font-weight: ${(props) => props.theme.fontWeight.regular};
    font-size: 18px;
    background-color: ${(props) => props.theme.color.background.primary};

    @media screen and (max-width: ${(props) => props.theme.breakpoint.mobile}) {
      width: 100%;
      padding: 0 calc((100% - ${(props) => props.theme.siteWidth.mobile}) / 2);
    }
  }

  main[role=main] {
    min-height: 50vh;
  }

  body,
  a {
    font-family: ${(props) => props.theme.primaryFont};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  i,
  em {
    font-style: italic;
  }

  b,
  strong {
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  mark {
    background: none;
  }

  mark,
  a {
    color: ${(props) => props.theme.color.base.default};
    text-decoration: none;
    transition: color 200ms;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  fieldset,
  img {
    border: 0;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  /* Remove Chrome's autofill input background-color */
  @-webkit-keyframes autofill {
    to {
      color: inherit;
      background: transparent;
    }
  }

  input:-webkit-autofill {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
  }

  /*   Eliminate stock browser error states */

  :invalid {
    box-shadow: none;
  }

  :-moz-submit-invalid {
    box-shadow: none;
  }

  :-moz-ui-invalid {
    box-shadow:none;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
