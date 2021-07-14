export default {
  repository: 'https://github.com/metonymize-kripa/product360',
  titleSuffix: ' – InnovationAnalytics',
  logo: (
    <>
     <span className="mr-2 font-extrabold hidden md:inline">Product360</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Product innovation and marketing, at Web Scale
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Product 360" />
      <meta name="og:description" content="Product 360" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/japanese-symbol-for-beginner_1f530.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="/japanese-symbol-for-beginner_1f530.png" />
      <meta name="apple-mobile-web-app-title" content="Product360" />
      <link rel="apple-touch-icon" sizes="180x180" href="/japanese-symbol-for-beginner_1f530.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/japanese-symbol-for-beginner_1f530.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/japanese-symbol-for-beginner_1f530.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/japanese-symbol-for-beginner_1f530.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/japanese-symbol-for-beginner_1f530.png"/>
      <meta name="msapplication-TileImage" content="/japanese-symbol-for-beginner_1f530.png"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()}, © Metonymize</>
}
