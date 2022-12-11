import { StyledProductContent, StyledProductDesc, StyledProductImage, StyledProductItem, StyledProductPrice, StyledProductTitle } from "./card.styles"

export const Card = ({ item }) => {
    return (
        <>
            <StyledProductItem>
                <StyledProductImage src={item.product_img} />
                <StyledProductContent>
                    <StyledProductTitle>{item.product_name}</StyledProductTitle>
                    <StyledProductPrice>{item.product_price}</StyledProductPrice>
                    <StyledProductDesc>{item.product_desc}</StyledProductDesc>
                </StyledProductContent>
            </StyledProductItem>
        </>
    )
}
