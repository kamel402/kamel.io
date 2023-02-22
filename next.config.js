const repo = 'kamel.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    swcMinify: true,
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
      images: {
        loader: 'akamai',
        path: '',
      },
};
