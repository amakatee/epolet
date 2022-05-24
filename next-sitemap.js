

module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000/',
    generateRobotsTxt: true,
    robotTxtOptions: {
        policies: [
            {userAgent: "*", disallow: "/galierieia"},
            {userAgent: "*", disallow: "/services"},
            {userAgent: "*", disallow: "/contacts"},
            {userAgent: "*", disallow: "/index_2"},
            {userAgent: "*", disallow: "/price"},
            {userAgent: "*", allow: "/"},
            

        ]

    },
    exclude: ["/galierieia", "/services", "/contacts"," /index_2", "/price"]
  

}