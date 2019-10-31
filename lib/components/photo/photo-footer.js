import React, { useState, useRef, useEffect } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

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
`;

const Emoji = styled.section`
    position: absolute;
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
    const [emoji, setEmoji] = useState('');
    const [openEmoji, setOpenEmoji] = useState(false);
    const pickerRef = useRef(null);

    const onLike = () => setCount(count + 1);
    const onEmojiClick = () => {
        console.log('here 1');
        setOpenEmoji(!openEmoji);
    };
    const addEmoji = e => setEmoji(emoji.concat(e.native));

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = event => {
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            console.log('here 2');

            setOpenEmoji(false);
        }
    };

    return (
        <Footer>
            <Section>
                <Like
                    onClick={onLike}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                />
                <Rocket
                    onClick={onEmojiClick}
                    whileHover={{ rotate: -27 }}
                    whileTap={{ rotate: -27 }}
                />
            </Section>
            <Comment>
                <Count>
                    {count} LIKE{count > 1 ? 's' : ''} {emoji}
                </Count>
                {openEmoji && (
                    <Emoji ref={pickerRef}>
                        <Picker
                            onSelect={addEmoji}
                            showPreview={false}
                            showSkinTones={false}
                        />
                    </Emoji>
                )}
            </Comment>
            <Explanation>
                <Paragraph>{props.explanation}</Paragraph>
            </Explanation>
        </Footer>
    );
}

export default PhotoFooter;
