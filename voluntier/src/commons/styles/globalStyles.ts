import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body {
    width: 100%;
    font-size: 10px;
    font-family: "NotoSans";
  }

  * {
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    width:100%;
    font-size: 10px;
  }

  /* 폰트 */
  /* GmarketSans */
  @font-face {
    font-family: "GmarketSans";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/GmarketSansTTFMedium.ttf");
  }

  /* NotoSans */
  @font-face {
    font-family: "NotoSans";
    font-style: normal;
    /* font-weight: 600; */
    src: url("/fonts/NotoSansKR-Medium.otf");
  }
`;