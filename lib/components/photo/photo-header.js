import styled from 'styled-components';
import dayjs from 'dayjs';

const PhotoHeader = ({ title, date }) => (
    <Header>
        <Section>
            <Title>{title}</Title>
            <Date>{dayjs(date).format('dd MMM DD YYYY')}</Date>
        </Section>
    </Header>
);

const Header = styled.header`
    height: 60px;
    background: ${({ theme }) => theme.colors.white};
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 7px;
    height: 50px;
    line-height: 1.3rem;
`;

const P = styled.p`
    margin: 0;
`;

const Title = styled(P)`
    font-size: 14px;
`;

const Date = styled(P)`
    margin: 0;
    font-size: 12px;
    text-transform: uppercase;
    color: #888;
`;

export default PhotoHeader;
