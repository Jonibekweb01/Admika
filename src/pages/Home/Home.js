import { Route, Routes } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar/Sidebar.component"
import { Products } from "../Products/Products.component"
import { StyledContent, StyledWrapper } from "./home.styles"

export const Home = () => {
    return (
        <>
            <StyledWrapper>
                <Sidebar />
                <StyledContent>
                    <Routes>
                        <Route path="/" element={<div>Home page</div>} />
                        <Route path="/orders" element={<div>ORDERS PAGE</div>} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </StyledContent>
            </StyledWrapper>
        </>
    )
}
