import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const calendarDateState = atom({
  key: "calendarState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: "",
});

export const myLocationState = atom({
  key: "myLocationState",
  default: [33.450701, 126.570667],
});
