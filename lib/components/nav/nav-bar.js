import styled from 'styled-components';

import NavBtn from './nav-btn';

const NavBar = props => (
    <Main>
        <Nav>
            {props.links.map(({ path, label }) => (
                <NavBtn key={path} path={path} label={label} />
            ))}
        </Nav>
    </Main>
);

const Main = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    height: 65px;
    z-index: 1;
    border-bottom: 1px solid #dbdbdb;
    background: ${({ theme }) => theme.colors.white};
`;

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 65px;
    max-width: 1025px;
    margin: 0 auto;
`;

export default NavBar;
