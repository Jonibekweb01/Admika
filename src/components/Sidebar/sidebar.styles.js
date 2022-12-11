import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledSidebar = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    width: 20vw;
    background-color: teal;
    padding: 20px;
    position: fixed;
`

export const Stylednavlink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    margin-bottom: 30px;
`