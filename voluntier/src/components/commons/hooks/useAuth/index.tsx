
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect} from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken"
import { accessTokenState} from "../../../../commons/store";

// @ts-ignore

export default function useAuth(){
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          Modal.error({content:"로그인 후 이용가능합니다."})
          router.push("/login");
        }
      });
    }
  }, []);

  return {

  }
};
