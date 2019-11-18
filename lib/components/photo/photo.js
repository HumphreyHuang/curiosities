import styled from 'styled-components';

import VideoPlayer from '../player/video-player';

const Photo = ({ title, url, hdurl }) => {
    const isVideo = url.includes('www.youtube.com');

    return (
        <>
            {isVideo ? (
                <VideoPlayer src={url} />
            ) : (
                <Main>
                    {/* Todo: onClick -> show hd picture (hdurl) */}
                    <Img src={url} alt={title} />
                </Main>
            )}
        </>
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
