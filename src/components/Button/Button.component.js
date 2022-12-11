import { StyledAdditionButton, StyledSubmitterButton } from "./button.styles"


export const ButtonSubmitter = (props) => {
    return <StyledSubmitterButton {...props}>Submit</StyledSubmitterButton>
}



export const ButtonAddition = (props) => {
    return <StyledAdditionButton {...props}>ADD</StyledAdditionButton>
}