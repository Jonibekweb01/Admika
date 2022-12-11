import React from 'react'
import { Stylednavlink, StyledSidebar } from './sidebar.styles'

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <Stylednavlink to='/'>Home</Stylednavlink>
            <Stylednavlink to='/orders'>Orders</Stylednavlink>
            <Stylednavlink to='/products'>Products</Stylednavlink>
        </StyledSidebar>
    )
}
