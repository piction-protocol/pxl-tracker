import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../Colors';
import Colors from '../Colors';

const Nav = styled.nav`
  border-bottom: 1px solid rgb(242, 242, 242);
  background-color: ${Colors.white};
`;

const NavItems = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 20px;
`;

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  color: ${colors.pictionblue};
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;

const Navigation: React.FC = () => (
  <Nav>
    <NavItems>
      <NavItem>
        <StyledNavLink to="/" exact>PXL tracker</StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to="/about">About</StyledNavLink>
      </NavItem>
    </NavItems>
  </Nav>
)

export default Navigation;