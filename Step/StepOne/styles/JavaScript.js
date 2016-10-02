var numberImg=1;
var crsl=1;
var timer;
var index=0;
$(document).ready(function(){
	numberImg=$(".bannerContainer img").length;
	for(var x=1;x<=numberImg;x++){
		$(".sliderPaper ul").append("<li atl='"+x+"'></li>");
	}
	$(".bannerContainer img:first-child,.sliderPaper ul li:first-child").addClass("focus");
	$(".bannerContainer img").on("mouseenter",pauseSlider).on("mouseleave",startSlider);
	startSlider();
	$(".nextIcon,.prevIcon").hover(function(){
		pauseSlider();	
	},function(){
		startSlider();
	});
	$(".sliderPaper ul li").hover(function(){
		pauseSlider();
	},function(){
		startSlider();
	});

	function Slidernext(){
		var next;
		if(crsl==numberImg){
			next=1;
		}
		else{
			next=crsl+1;
		}
		slide(crsl,next);

	}

	function Sliderprev(){
		var prev;
		if(crsl==1){
			prev=numberImg;
		}
		else{
			prev=crsl - 1;
		}
		slide(crsl,prev);

	}
	function slide(pcrsl,ptn){
		$(".bannerContainer img:nth-child("+pcrsl+")").fadeOut("slow",function(){
			$(".bannerContainer img:nth-child("+ptn+")").fadeIn("slow",function(){
				crsl=ptn;
			});
		});
		$(".sliderPaper ul li").removeClass("focus");
		$(".sliderPaper ul li:nth-child("+ptn+")").addClass("focus");
	}
	$(".sliderPaper ul").on("click","li",function(){
		index=parseInt($(".sliderPaper ul li").index(this)+ 1);
		slide(crsl,index);
		pauseSlider();
	})
	function startSlider(){
		timer=setInterval(function(){
			Slidernext();
		},3000)
	}

	function pauseSlider(){
		clearInterval(timer);
	}

	$(".nextIcon").click(function(){
		Slidernext();
		pauseSlider();	
	});

	$(".prevIcon").click(function(){
		Sliderprev();
		pauseSlider();	
	});
});