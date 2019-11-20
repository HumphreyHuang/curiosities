import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import saveLike from '../../utils/save-like-fn';
import saveEmoji from '../../utils/save-emoji-fn';

function PhotoFooter(props) {
    const { apodRef, explanation, likes, emojis } = props;

    const [counts, setCounts] = useState(likes);
    const [emoji, setEmoji] = useState(emojis);
    const [openEmoji, setOpenEmoji] = useState(false);

    useEffect(() => {
        counts !== likes ? saveLike({ apodRef, counts }) : null;
    }, [counts]);

    useEffect(() => {
        emoji !== emojis ? saveEmoji({ apodRef, emoji }) : null;
    }, [emoji]);

    const addEmoji = e => {
        setEmoji(emoji.concat(e.native));
        setOpenEmoji(!openEmoji);
    };

    return (
        <Footer>
            <Section>
                <Like
                    onClick={() => setCounts(counts + 1)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                />
                <Rocket
                    onClick={() => setOpenEmoji(!openEmoji)}
                    whileHover={{ rotate: -27 }}
                    isOpen={openEmoji}
                />
            </Section>
            <Comment>
                <Counts>
                    {counts} LIKE{counts > 1 ? 's' : ''} {emoji}
                </Counts>
                {openEmoji && (
                    <Emoji>
                        <Picker
                            onSelect={addEmoji}
                            showPreview={false}
                            showSkinTones={false}
                            color="#79FFE1"
                        />
                    </Emoji>
                )}
            </Comment>
            <Explanation>
                <Paragraph>{explanation}</Paragraph>
            </Explanation>
        </Footer>
    );
}

const Footer = styled.footer`
    min-height: 120px;
    background: ${({ theme }) => theme.colors.white};
`;

const Section = styled.section`
    padding: 0 12px;
`;

const Comment = styled(Section)`
    max-width: 850px;
`;

const MontionBtn = styled(motion.button)`
    cursor: pointer;
    border: none;
    width: 42px;
    height: 42px;
`;

const Like = styled(MontionBtn)`
    background: url(/static/icons/like.png) no-repeat;
    background-size: 100%;
    margin-top: 6px;
`;

const Rocket = styled(MontionBtn)`
    background: url(/static/icons/rocket.png) no-repeat;
    background-size: 80%;
    margin-top: 6px;
    margin-left: 12px;

    transform: rotate(${props => (props.isOpen ? '-27deg' : '')});
    transition-duration: 0.5s;
`;

const Emoji = styled.section`
    position: absolute;
`;

const P = styled.p`
    margin: 0;
`;

const Counts = styled(P)`
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

export default PhotoFooter;
