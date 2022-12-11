import styled from "styled-components";

export const StyledSubmitterButton = styled.button.attrs({
    type: 'submit'
})
    `
    padding:10px 20px;  
    border:none;
    background-color:teal;
    color:#fff;
    border-radius:12px;
`

export const StyledAdditionButton = styled(StyledSubmitterButton).attrs({
    type: "button"
})`
    background-color: teal;
    color: #fff;
`