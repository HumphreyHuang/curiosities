import styled from 'styled-components';

const VideoPlayer = ({ src }) => {
    return (
        <Main>
            <Player src={src} frameBorder="0" allowFullScreen />
        </Main>
    );
};

// iframe styles applied based on this article
// https://www.smashingmagazine.com/2014/02/making-embedded-content-work-in-responsive-design/
const Main = styled.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    margin: 0 7px;
    height: 0;
`;

const Player = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export default VideoPlayer;
