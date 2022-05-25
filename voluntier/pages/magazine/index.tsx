import styled from '@emotion/styled'
import { useEffect, useState } from 'react';

const Magazine = styled.img`
    width: 100%;
    height: 100%;

`

export default function JellyPaperPage(){
    const [windowSize, setWindowSize] = useState(false);

    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setWindowSize(true);
      } else {
        setWindowSize(false);
      }
    };
  
    useEffect(() => {
      if (window.innerWidth <= 767) {
        setWindowSize(true);
      }
      window.addEventListener("resize", handleResize);
      return () => {
      window.removeEventListener("resize", handleResize);
      };
    }, [windowSize]);

return (
    
    <div style={{ padding : "5%"}}>
         {!windowSize && (
        <Magazine src='/images/jellypaper/월간젤리 5월호.png'/>
         )}
          {windowSize && (
        <Magazine src='/images/jellypaper/mobile_월간젤리5월호.png'/>
          )}
    </div>
)


}