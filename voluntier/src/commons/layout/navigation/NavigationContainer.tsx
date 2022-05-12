import NavigationUI from "./NavigationPresenter";
import { useState } from "react";

export default function Navigation(){
  const [visible,setVisible] = useState(false)
  
  const hide = () => {
      setVisible(false)
    };
  
  const handleVisibleChange =()=> {
      setVisible(true)
    };

    return(
      <NavigationUI 
      hide={hide} 
      handleVisibleChange={handleVisibleChange}
      visible={visible}
      />
    )
}