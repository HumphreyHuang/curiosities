import styled from 'styled-components';

import Photo from './photo/photo';
import PhotoHeader from './photo/photo-header';
import PhotoFooter from './photo/photo-footer';

const Main = styled.div`
    display: flex;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 0;
    border-radius: 3px;
    border: 1px solid #e6e6e6;
    margin-right: 28px;
`;

const ItemContainer = ({ data }) => {
    const { date, title, explanation } = data;

    return (
        <Main>
            <Content>
                <PhotoHeader title={title} date={date} />
                <Photo data={data} />
                <PhotoFooter />
            </Content>
        </Main>
    );
};

export default ItemContainer;
