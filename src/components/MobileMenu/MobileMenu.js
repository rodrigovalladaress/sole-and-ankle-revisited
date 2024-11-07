/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" />

            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </UnstyledButton>
        </CloseButtonWrapper>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <FooterWrapper>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </FooterWrapper>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;

  background-color: oklch(50.25% 0.0136 264.44 / 80%);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  height: 100%;
  margin-inline-start: auto;
  width: ${300 / 16}rem;
  padding: 26px 16px 32px 32px;
`;

const Side = styled.div`
  flex: 1;
`;

const CloseButtonWrapper = styled(Side)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  gap: 16px;

  a:first-of-type {
    color: ${COLORS.secondary};
    font-weight: ${WEIGHTS.medium};
  }

  > a {
    color: ${COLORS.gray[900]};
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const FooterWrapper = styled(Side)``;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;

  > a {
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }
`;

export default MobileMenu;
