import styled from 'styled-components';

const Photo = ({ data }) => {
    const { url, hdurl } = data;
    return (
        <Main>
            <Img src={url} />
        </Main>
    );
};

const Main = styled.div`
    display: flex;
    justify-content: center;
`;

const Img = styled.img`
    width: 100%;
    max-width: 900px;
    height: auto;
`;

export default Photo;
