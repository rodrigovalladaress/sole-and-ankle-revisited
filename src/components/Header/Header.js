import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileHeader>
        <MarginRightAuto>
          <Logo />
        </MarginRightAuto>

        <UnstyledButton>
          <Icon id="shopping-bag"></Icon>

          <VisuallyHidden>Open cart</VisuallyHidden>
        </UnstyledButton>

        <UnstyledButton>
          <Icon id="search"></Icon>

          <VisuallyHidden>Search</VisuallyHidden>
        </UnstyledButton>

        <UnstyledButton onClick={() => setShowMobileMenu(true)}>
          <Icon id="menu"></Icon>

          <VisuallyHidden>Open menu</VisuallyHidden>
        </UnstyledButton>
      </MobileHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const HeaderBase = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const MainHeader = styled(HeaderBase)`
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileHeader = styled(HeaderBase)`
  @media ${QUERIES.laptopAndSmaller} {
    display: none;
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 2.125rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    gap: 1.063rem;
    padding-inline: 16px;
  }
`;

const MarginRightAuto = styled.div`
  margin-inline-end: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8vw - 4rem, 3rem);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
