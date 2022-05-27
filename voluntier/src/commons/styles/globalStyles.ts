import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body{
    font-size: 10px;
    font-family: "NotoSans";
    background-color: white;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
    width: 9px;
    height: 8px;
    border-radius: 6px;
    background: lightgray;
  }
    ::-webkit-scrollbar-thumb{
      background: #0085CB;
     border-radius: 6px;
  }
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
    src: url("/fonts/NotoSansKR-Regular.otf");
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
