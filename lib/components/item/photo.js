import styled from 'styled-components';

const Main = styled.img`
    width: 100%;
    max-width: 650px;
    height: auto;
`;

const Photo = ({ data }) => {
    const { title, explanation, url, hdurl, date, copyright } = data;
    return <Main src={url} />;
};

export default Photo;
