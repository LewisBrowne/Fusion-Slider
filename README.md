# Fusion Slider v1.45
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
		<div id="left" class="slide-control" style="display: block;"><i class="fal fa-chevron-left"></i></div>
		<div id="right" class="slide-control" style="display: block;"><i class="fal fa-chevron-right"></i></div>
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
.banner-container{overflow: hidden; position:relative; margin: 0 auto; max-width:1090px;}
.banner-container ul.banners{padding: 0px; margin: 0px; transition: all 300ms;}
.banner-container ul.banners li{height: 100%; list-style: none; background-size:cover; background-position:center; position:relative;}
.banner-container ul.banners li img{width:100%; height:auto; max-height:600px;}
.banner-container ul.banners li a{height: 100%; width:100%; display:block;}
.banner-container .banner-gallery-controls{position: absolute; width: 100%; top: calc(50% - 55px); pointer-events: none;}
.banner-container .banner-gallery-controls div{width: 50%; font-size: 55px; color: white;}
.banner-container .banner-gallery-controls div i{padding: 0px 8px; background-color: rgba(0,0,0,0.6); line-height: 42px; pointer-events: all;}
.banner-container .banner-gallery-controls #left{text-align: left; float: left;}
.banner-container .banner-gallery-controls #right{text-align: right; float: right;}
ul.banner-thumbnails{display: block; list-style: none; padding: 0px; margin: 0px;}
ul.banner-thumbnails li{display: inline-block; height: 10px; width: 10px; background-color: #e2eaec; margin: 20px 10px 0px; border-radius: 5px;}
ul.banner-thumbnails li.active{background-color: #343a42;}
```





