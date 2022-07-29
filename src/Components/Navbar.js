import React, { useState } from 'react'
import "../App"
import { 
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,  
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
} from './Navbar.style'
import LogoImage from '../logo.png'


function Navbar() {
    const [ extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}> 
        <NavbarInnerContainer>
            <LeftContainer>
                <Logo src={LogoImage}></Logo>
            </LeftContainer>

            <RightContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/SearchFilter"> Home</NavbarLink>
                    <NavbarLink to="/login"> Login</NavbarLink>
                    <NavbarLink to="/details"> Products</NavbarLink>
                    <OpenLinksButton 
                        onClick={() => {
                            setExtendNavbar((curr) => !curr);
                        }}
                    > 
                        {extendNavbar ? <>&#10005;</> : <> &#8801; </>}
                    </OpenLinksButton>
                </NavbarLinkContainer>
            </RightContainer>

        </NavbarInnerContainer>

        {extendNavbar && (
            <NavbarExtendedContainer>
                <NavbarLinkExtended to="/SearchFilter"> Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
                <NavbarLinkExtended to="/details"> Products</NavbarLinkExtended>
            </NavbarExtendedContainer>
        )}
    </NavbarContainer>
  )
}

export default Navbar
