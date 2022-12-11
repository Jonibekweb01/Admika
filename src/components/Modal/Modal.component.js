import { Row } from "../../App.styles"
import { ModalCloseButton, ModalContent, ModalOverlay, ModalTitle, ModalWrapper, RowFlex } from "./modal.styles"

export const Modal = ({ children, setModal }) => {
    return (
        <>
            <ModalOverlay>
                <ModalWrapper>
                    <RowFlex>
                        <ModalTitle>Add</ModalTitle>
                        <ModalCloseButton onClick={() => setModal(false)}>&times;</ModalCloseButton>
                    </RowFlex>
                    <ModalContent>{children}</ModalContent>
                </ModalWrapper>
            </ModalOverlay>
        </>
    )
}
