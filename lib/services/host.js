const dev = process.env.NODE_ENV !== 'production';
export const host = dev
    ? 'https://curiosities.humphrey.page'
    : 'https://curiosities.humphrey.page';
