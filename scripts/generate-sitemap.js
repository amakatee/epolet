const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

sitemap({
    baseUrl: 'https://epolet-test.netlify.app/',
    pagesDirectory: path.resolve(_dirname, '../out/'),
    targetDirectory: path.resolve(__dirname, '../out/'),
    ignoredExtensions: ['js', 'json', 'png', 'css', 'jpeg', 'icon'],
    ignorePaths: [
        "404",
        "favicon",
        "index"
    ],
    extraPaths: [
        "/"
    ]
})