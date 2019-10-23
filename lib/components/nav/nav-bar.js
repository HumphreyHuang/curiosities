import styled from 'styled-components';

import NavBtn from './nav-btn';

const Main = styled.div`
    width: 100%;
    top: 0;
    height: 77px;
    z-index: 1;
    border-bottom: 1px solid #dbdbdb;
    background: ${({ theme }) => theme.colors.white};
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 77px;
    max-width: 1025px;
    margin: 0 auto;
`;

const NavBar = props => (
    <Main>
        <Nav>
            {props.links.map(({ path, label }) => (
                <NavBtn key={path} path={path} label={label} />
            ))}
        </Nav>
    </Main>
);

export default NavBar;
