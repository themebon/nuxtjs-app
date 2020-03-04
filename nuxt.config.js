
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    link: [
      { rel: 'stylesheet', href: 'css/font-awesome-all.css' },
      { rel: 'stylesheet', href: 'css/flaticon.css' },
      { rel: 'stylesheet', href: 'css/owl.css' },
      { rel: 'stylesheet', href: 'css/bootstrap.css' },
      { rel: 'stylesheet', href: 'css/jquery.fancybox.min.css' },
      { rel: 'stylesheet', href: 'css/animate.css' },
      { rel: 'stylesheet', href: 'css/imagebg.css' },
      { rel: 'stylesheet', href: 'css/style.css' },
      { rel: 'stylesheet', href: 'css/responsive.css' }
    ],

    script: [
      { src: '/js/jquery.js', type: "text/javascript" },
      { src: '/js/popper.min.js', type: "text/javascript" },
      { src: '/js/bootstrap.min.js', type: "text/javascript" },
      { src: '/js/owl.js', type: "text/javascript" },
      { src: '/js/wow.js', type: "text/javascript" },
      { src: '/js/validation.js', type: "text/javascript" },
      { src: '/js/jquery.fancybox.js', type: "text/javascript" },
      { src: '/js/appear.js', type: "text/javascript" },
      { src: '/js/scrollbar.js', type: "text/javascript" },
      { src: '/js/tilt.jquery.js', type: "text/javascript" },
      //{ src: '/js/script.js', type: "text/javascript" }
    ],

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
