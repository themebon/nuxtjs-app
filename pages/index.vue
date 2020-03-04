<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        app
      </h1>


      <h2><nuxt-link class="button--green" to="/about">About</nuxt-link></h2>
      <h2>Just Changed</h2>

      <h2 class="subtitle">
        My mathematical Nuxt.js project
      </h2>









<section class="video-section">
        <div class="bg-column" style="background-image: url(images/background/video-bg.jpg);"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 video-column">
                    <div class="video-inner">
                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image" data-caption="">
                            <i class="flaticon-play-button"></i>
                            <span class="ripple"></span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_04">
                        <div class="content-box">
                            <div class="sec-title"><h2>Video Demo App</h2></div>
                            <div class="text">Retarget past customers with second-chance offers and reach new audiences with geo-targeted campaigns during peak dining times using Forks’ push notifications.</div>
                            <div class="btn-box"><a href="#" class="theme-btn-two">Play Video Now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>












    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  mounted() {
    //window.$ = require('jquery')

    // This works now
    $("h2").css("color", "red");
    //LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
  
  }

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
