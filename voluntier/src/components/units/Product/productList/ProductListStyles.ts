import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2%;
`;
export const Title = styled.div`

`;
export const Image = styled.div`
 background-image: url('../../../../../images/UnionBiscuit.png');
 font-family: "Sniglet";
 width: 200px;
 height: 100px;
 background-size: contain;
 background-repeat: no-repeat;
 text-align: center;
 font-size: 20px;
 color: white;
 letter-spacing: 1px;
 line-height: 375%;


`;
export const Search = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid lightgray;
    border-radius: 30px;
    align-items: center;
`;
export const SearchImage = styled.img`
    width: 30px;   
    margin: 0.5%;

`;
export const SearchContents = styled.input`
border: none;
background-color: none;
margin-left: 0.5%;
font-size: 20px;
::placeholder{
    font-size: 15px;
    letter-spacing: 0.2px;
}
:focus{
    outline: none;
}

`;

export const Contents = styled.div`
padding: 3%;
display: flex;
flex-direction: row;
/* justify-content: space-around; */
flex-wrap: wrap;
`;
export const ProductWrapper = styled.div`
    width: 200px;
    height: 200px;
    background-color: lightblue;
    margin: 3%;
 @media ${breakPoints.mobile}{
    width: 125px;
    height: 125px;
    margin: 6%;
  }
`;
export const ProductImage = styled.img`
    height: 75%;
    width: 100%;
    background-color: blue;
    
`;
export const ProductName = styled.div`
    height: 10%;
    padding: 2%;
    font-size: 16px;
    font-weight: 800;
    @media ${breakPoints.mobile}{
    font-size: 11px;
  }
`;
export const ProductPrice = styled.div`
    height: 10%;
    padding: 2%;
    font-size: 13px;
    font-weight: lighter;
    @media ${breakPoints.mobile}{
    font-size: 11px;
  }
`;