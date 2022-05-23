import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2%;
`;

export const Banner = styled.div`

width: 1440px;
height: 280px;
background-image: url('../../../../images/jellyshop/jellybanner.png');
background-repeat: no-repeat;
background-size: contatin;
background-position: 100%;
border-radius: 20px;

@media ${breakPoints.tablet}{
width: 550px;
height: 200px;
background-position: 10%;
margin-left: 5%;

}
@media ${breakPoints.mobile}{
width: 100%;
height: 150px;
background-position: 15%;
margin: 0%;
}


`
export const Title = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3% 0%;

`;
export const Title1 = styled.div`
font-size: 25px;
font-family: GmarketSans;
color: #FF6A9E;
@media ${breakPoints.tablet}{
  font-size: 20px;
}
@media ${breakPoints.mobile}{
  font-size: 15px;
}
`
export const Title2 = styled.div`
font-size: 30px;
font-family: GmarketSans;
font-weight: bolder;
background: linear-gradient(90deg, #eaeaa7 , #ffcdf3aa, #c1b0e6) 
border-box; 
background-size: contain; 
border: 4px solid transparent;
@media ${breakPoints.tablet}{
  font-size: 20px;
}
@media ${breakPoints.mobile}{
  font-size: 15px;
}

`

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
justify-content: space-around;
flex-wrap: wrap;
`;
export const ProductWrapper = styled.div`
    width: 230px;
    height: 230px;
    margin: 3%;
 @media ${breakPoints.mobile}{
    width: 125px;
    height: 125px;
    margin: 6%;
  }
`;
export const ProductImage = styled.img`
    height: 75%;
    width: 95%;
    box-shadow:1px 2px 2px #999;
    
`;
export const ProductName = styled.div`
    height: 13%;
    padding: 2%;
    font-size: 18px;
    overflow: hidden;
    font-family: GmarketSans;
    @media ${breakPoints.mobile}{
    font-size: 11px;
  }
`;
export const ProductPrice = styled.div`
    margin-top: 3px;
    height: 10%;
    padding: 2%;
    font-size: 15px;
    font-family: GmarketSans;
    font-weight: bolder;
    @media ${breakPoints.mobile}{
    font-size: 11px;
  }
`;