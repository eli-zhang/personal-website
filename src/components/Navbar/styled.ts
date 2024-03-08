import styled from 'styled-components'
import logo from '../../images/logo.png'
import { ACCENT_COLOR } from '../../constants'

export const Logo = styled.h1`
    font-size: 60px;
    height: 80px;
    margin: 5px;
    font-family: "Voltaire", sans-serif;
    font-weight: 400;
    color: #ffffff;
`

export const Title = styled.h1`
    color: #333333;
    font-size: 30px;
    font-family: "Voltaire", sans-serif;
    font-weight: 400;
    margin-left: 30px;
`

export const NavBarContainer = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
    background-color: #090909;
    padding: 10px 20px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.05);
    flex-basis: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavItemsContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 7px;
`

interface NavItemProps {
    active?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
    display: block;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 15px;

    color: #cccccc;
    font-size: 20px;
    font-family: "Voltaire", sans-serif;
    text-transform: uppercase;
    transition: all 0.1s ease-in-out;
    position: relative;
    padding-left: 0;
    padding-right: 0;

    &:hover {
        color: #999999;
        cursor: pointer;
        &:before {
            transform: scaleX(1);
        }
    }

    &:before {  
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        z-index: 0;
        background-color: #ffffff;
        transform: scaleX(${props => props.active ? 1 : 0});
        transform-origin: left;
        transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.3s;
    }
`

export const FilledButton = styled.button`
    background-color: ${ACCENT_COLOR};
    color: white;
    margin-right: 15px;

    border-style: none;
    padding: 12px 20px;
    font-size: 1rem;
    font-family: "Voltaire", sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);

    &:hover {
        cursor: pointer;
    }
`