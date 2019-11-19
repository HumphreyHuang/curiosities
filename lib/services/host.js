export const host = ({ headers }) => {
    return process.browser
        ? new URL(location).origin
        : `${headers['x-forwarded-proto']}://${headers['x-forwarded-host']}`;
};
