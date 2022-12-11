import styled from "styled-components";
import { ProductTitle } from "../../App.styles";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.4);
`

export const ModalWrapper = styled.div`
    background-color: #fff;
    padding: 20px;
    width: 400px;
    margin: 0 auto;
`

export const ModalContent = styled.div``;


export const ModalTitle = styled(ProductTitle)`margin-bottom:10px`;

export const ModalCloseButton = styled.button``;

export const RowFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`