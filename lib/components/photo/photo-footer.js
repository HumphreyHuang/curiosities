import styled from 'styled-components';

const Footer = styled.footer`
    padding: 0 16px;
    min-height: 120px;
    background: ${({ theme }) => theme.colors.white};
`;

const Section = styled.section`
    margin-top: 16px;
`;

const Span = styled.span``;

const Like = styled.button`
    background: url(/static/like.png) no-repeat;
    cursor: pointer;
    border: none;
    width: 48px;
    height: 48px;
`;

const PhotoFooter = () => (
    <Footer>
        <Section>
            <Span>
                <Like />
            </Span>
        </Section>
    </Footer>
);

export default PhotoFooter;
