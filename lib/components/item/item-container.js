import styled from 'styled-components';

import Photo from './photo';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 0;
    border-radius: 3px;
    border: 1px solid #e6e6e6;
`;

const Header = styled.header`
    height: 60px;
    background: ${({ theme }) => theme.colors.white};
`;

const Footer = styled.footer`
    min-height: 120px;
    background: ${({ theme }) => theme.colors.white};
`;

const ItemContainer = ({ data }) => {
    return (
        <Main>
            <Header>Date</Header>
            <Photo data={data} />
            <Footer>Like</Footer>
        </Main>
    );
};

export default ItemContainer;
