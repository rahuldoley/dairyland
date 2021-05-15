import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import {IconContext} from 'react-icons/lib';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : '#000')};
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: relative;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -30px;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

const Cart = styled(Link)`
    color: white;
`;

function Navbar() {

    const [scrollNav, setScrollNav] = useState(false);
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    console.log(basket)

    return (
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <Logo to='/'>Amul</Logo>
            <NavMenu>
                <NavMenuLinks to='/about'>
                    <span>About</span>
                </NavMenuLinks>
                <NavMenuLinks to='/product'>
                    <span>Product</span>
                </NavMenuLinks>
                <NavMenuLinks to={!user && '/signin'}>
                    <div onClick={handleAuthentication}>
                        <span>{user ? 'Sign Out' : 'Sign In' }</span>
                    </div>
                </NavMenuLinks>
                
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
            <Cart to='/checkout'>
                    <ShoppingCartIcon />
                    <span>{basket?.length}</span>
            </Cart>
        </Nav>
        </IconContext.Provider>
    )
}


export default Navbar;

