import styled from 'styled-components';

const Main = styled.img`
    width: 100%;
    max-width: 850px;
    height: auto;
`;

const Photo = ({ data }) => {
    const { explanation, url, hdurl, copyright } = data;
    return <Main src={url} />;
};

export default Photo;
