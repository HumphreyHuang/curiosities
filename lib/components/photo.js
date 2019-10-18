const Photo = ({ data }) => {
    const { title, explanation, url, hdurl, date, copyright } = data;
    return <img src={url} />;
};

export default Photo;
