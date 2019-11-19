const dev = process.env.NODE_ENV !== 'production';
export const host = dev
    ? 'http://localhost:3000'
    : 'https://curiosities.humphrey.page';
