import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body {
    font-size: 10px;
    font-family: "NotoSans";
  }

  * {
    margin: 0;
    box-sizing: border-box;
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

    /* Sniglet-Regular */
    @font-face {
    font-family: "Sniglet";
    font-style: normal;
    font-weight: 800;
    src: url("/fonts/Sniglet-ExtraBold.ttf");
  }

  @font-face {
    font-family: "Sniglet2";
    font-style: normal;
    font-weight: 800;
    src: url("/fonts/Sniglet-Regular.ttf");
  }

`;
