# Fusion Slider v1.4
Fusion Slider is an easy to use, lightweight library developed for making fluent and responsive sliders for almost any web framework. To get started quickly, please refer to the code below:

## Getting Started
This slider relies on `jQuery`, so make sure its being pulled in **before** the fusion-slider.


HTML
```HTML
<div class="banner-container">
	<ul class="banners">
    	<li class="banner-slide">
        	<a href="">
            	<div class="banner-slide-image" style="background-image: url('https://placeimg.com/1000/600/nature');" ></div>
				<div class="banner-text">Banner 1</div>
			</a>
		</li>
    	<li class="banner-slide">
        	<a href="http://google.com">
            	<div class="banner-slide-image" style="background-image: url('https://placeimg.com/1000/600/nature');" ></div>
				<div class="banner-text">Banner 2</div>
			</a>
		</li>
        <div class="clearfix"></div>
	</ul>
    <ul class="banner-thumbnails">
        <li class="1 active"></li>
        <li class="2"></li>
    </ul>
	<div class="banner-gallery-controls">
		<div id="left" class="slide-control" style="display: block;"><i class="fa fa-angle-left"></i></div>
		<div id="right" class="slide-control" style="display: block;"><i class="fa fa-angle-right"></i></div>
	</div>
</div>

<script>
jQuery(document).ready(function(){
	var slider = new Slider();
	slider.init('ul.banners', 'ul.banners li.banner-slide', 'ul.banner-thumbnails li', 5000, true, '.banner-gallery-controls', true);
});
</script>
```

CSS
```CSS
.banner-container{overflow: hidden; position:relative; transition:opacity 0.3s; margin: 0 auto; max-width:1090px;}
.banner-container ul.banners{padding: 0px; margin: 0px;}
.banner-container ul.banners li{height: 100%; list-style: none; background-size:cover; background-position:center; position:relative;}
.banner-container ul.banners li img{width:100%; height:auto; max-height:600px;}
.banner-container ul.banners li .slide-text {display:none;}
.banner-container ul.banners li a{height: 100%; width:100%; display:block;}
.banner-text {text-align:center; font-size:1.3em; padding-top:20px; letter-spacing:0.08em; position:relative;}
.banner-slide-image {width:100%; height:557px; background-size:cover; background-position:center; background-repeat:no-repeat; background-color:#ddd;}
.banner-container .banner-gallery-controls{position: absolute; width: 100%; top: calc(50% - 55px);}
.banner-container .banner-gallery-controls div{width: 50%; font-size: 55px; color: white;}
.banner-container .banner-gallery-controls div i{padding: 0px 8px; background-color: rgba(0,0,0,0.6); line-height: 42px;}
.banner-container .banner-gallery-controls #left{text-align: left; float: left;}
.banner-container .banner-gallery-controls #right{text-align: right; float: right;}
.gallery-banner ul.banners {height:calc(100vh - 150px);}
ul.banner-thumbnails{display: block; list-style: none; padding: 0px; margin: 0px;}
ul.banner-thumbnails li{display: inline-block; height: 10px; width: 10px; background-color: #e2eaec; margin: 20px 10px 0px; border-radius: 5px;}
ul.banner-thumbnails li.active{background-color: #343a42;}
```





