import * as S from './ProductListStyles'

export default function ProductListUI(){


    return (
    <>
    <S.Wrapper>
        <S.Title>
            <S.Image>Jelly Shop</S.Image>
            <S.Search>
             <S.SearchImage src='/images/boardList/search_button.png'></S.SearchImage>
             <S.SearchContents placeholder='상품검색'></S.SearchContents>
            </S.Search>
        </S.Title>
        <S.Contents>
            {[1,2,3].map((el)=>(                
                <S.ProductWrapper key={el}>
                <S.ProductImage></S.ProductImage>
                <S.ProductName>발룬티어키링</S.ProductName>
                <S.ProductPrice>5000원</S.ProductPrice>
            </S.ProductWrapper>
                ))}
        </S.Contents>
    </S.Wrapper>
    
    </>
    )
}