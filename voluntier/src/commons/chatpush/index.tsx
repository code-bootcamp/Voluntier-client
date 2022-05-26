import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { useToasts } from "react-toast-notifications";
import { gql, useQuery } from "@apollo/client";


const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      name
      email
      phone
      isAdmin
    }
  }
`;


const url = "backendapi.voluntier.site/chat";

export default function ChatPush(){
    const { data: Userdata } = useQuery(FETCH_LOGIN_USER);
    const [userId, setUserId] = useState("");
    const { addToast } = useToasts();

    useEffect(() => {
        setUserId(Userdata?.fetchLoginUser?.id);
      }, [Userdata]);

    const socket: Socket = io(url, { transports: ["websocket"] });
    useEffect(() => {
        socket.on(userId, (data) => {
        return addToast(`채팅왔어요 ${data[0]}님에게 ${data[1]}`,{appearance:"info"})
      })
      }, [userId]);

    return(<ChatPush></ChatPush>)
}