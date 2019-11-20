export const host = req => {
    return process.browser
        ? new URL(location).origin
        : `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`;
};
