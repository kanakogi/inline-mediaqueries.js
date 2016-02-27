# inline-mediaqueries.js

media quariesと似た動作をインラインのstyle属性で記述できます。

## Usage

### HTML

if you want to write like this,

	 @media screen and (max-width: 767px) and (min-width: 768px) {
 		.inline{
 			width:auto;
	 	}
	 }
	  @media screen and (min-width: 768px) {
	 	.inline{
 			width:1000px;
 		}
	 }
You can write this.

	<div class="inline" data-screen='{"max767":{"width":"auto"}, "min768":{"width":"1000px"} }'></div>



### Script
		
	<script>
	  jQuery(function($){
	    $('.inline').mediaqueries();
	  });
	</script>
		