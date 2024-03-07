import React from 'react';
import { Link } from "react-router-dom";
import { Logo, Title, NavBarContainer, NavItem, NavItemsContainer, FilledButton } from './styled'

const NavBar = ({ tab }: { tab: string }) => {
    return <NavBarContainer>
        <Link to="/" style={{ textDecoration: 'none' }}><Logo>@zeli</Logo></Link>
        <NavItemsContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <NavItem active={tab === "Home"}>Home</NavItem>
            </Link>
            <Link to="/music" style={{ textDecoration: 'none' }}>
                <NavItem active={tab === "Music"}>Music</NavItem>
            </Link>
            <Link to="/games" style={{ textDecoration: 'none' }}>
                <NavItem active={tab === "Games"}>Games</NavItem>
            </Link>
            <Link to="/recipes" style={{ textDecoration: 'none' }}>
                <NavItem active={tab === "Recipes"}>Recipes</NavItem>
            </Link>
            <Link to="/other" style={{ textDecoration: 'none' }}>
                <NavItem active={tab === "Other"}>Other</NavItem>
            </Link>
        </NavItemsContainer>
        <Link to="/contact" style={{ textDecoration: 'none' }}><NavItem active={tab === "Contact"}>Contact</NavItem></Link>
    </NavBarContainer>
}

export default NavBar;