import React, { useState } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const Footer = styled.footer`
    min-height: 120px;
    background: ${({ theme }) => theme.colors.white};
`;

const Section = styled.section`
    padding: 0 12px;
`;

const Comment = styled(Section)``;

const Like = styled(motion.button)`
    background: url(/static/like.png) no-repeat;
    background-size: 90%;
    cursor: pointer;
    border: none;
    width: 35px;
    height: 35px;
    margin-top: 12px;

    &:focus {
        outline: 0;
    }
`;

const P = styled.p`
    margin: 0;
`;

const Count = styled(P)`
    margin-bottom: 12px;
`;

const Explanation = styled(Section)`
    padding-top: 12px;
    padding-bottom: 15px;
    border-top: 1px solid #efefef;
`;

const Paragraph = styled(P)`
    max-width: 850px;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;

function PhotoFooter(props) {
    const [count, setCount] = useState(1);

    const onClickHandler = () => {
        setCount(count + 1);
    };

    return (
        <Footer>
            <Section>
                <Like
                    onClick={onClickHandler}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                />
            </Section>
            <Comment>
                <Count>
                    {count} LIKE{count > 1 ? 's' : ''}
                </Count>
            </Comment>
            <Explanation>
                <Paragraph>{props.explanation}</Paragraph>
            </Explanation>
        </Footer>
    );
}

export default PhotoFooter;
