window.onload=function(){
function roatsingBox(){
		var oBox=document.getElementsByClassName('cubeBoxImg')[0];
		var y=36;
		var x=-36;
		oBox.onmousedown=function(ev){
			var oEvent=ev||event;
			var disX=oEvent.clientX-y;
			var disY=oEvent.clientY-x;
			document.onmousemove=function(ev){
				var oEvent=ev||event;
				x=oEvent.clientY-disY;
				y=oEvent.clientX-disX;
				oBox.style.transform='perspective(800px) rotateX('+x+'deg) rotateY('+y+'deg)';
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			};
			return false;
		};
}
roatsingBox();
function roasting(){
	var recommend=document.getElementsByClassName("recommend");
	var pageNumber=document.getElementById("pageNumber");
	var liTag=pageNumber.getElementsByTagName("li");
	var a=0;
	var timer;
	function temp(a){
		/*用于判段状态0 1 2*/
		 switch(a){
				case 0:
					recommend[0].style.display="block";
					recommend[1].style.display="none";
					recommend[2].style.display="none";
					liTag[0].className="the_style";
					liTag[1].className="";
					liTag[2].className="";
					break;
				case 1:
					recommend[0].style.display="none";
					recommend[1].style.display="block";
					recommend[2].style.display="none";
					liTag[0].className="";
					liTag[1].className="the_style";
					liTag[2].className="";
					break;
				case 2:
					recommend[0].style.display="none";
					recommend[1].style.display="none";
					recommend[2].style.display="block";
					liTag[0].className="";
					liTag[1].className="";
					liTag[2].className="the_style";
					break;
				default:
					break;
		}	
	}
	/*循环*/
	function play() {
	    timer = setInterval(function () {
	       a++;
	       if(a>2){
	       	a=0;
	       }
	      temp(a);
	    }, 3000)
	}
	play();

	liTag[0].onclick=function(){
		clearInterval(timer);
		a=0;
		temp(a);
		setTimeout(play(),2000);
	}
	liTag[1].onclick=function(){
		clearInterval(timer);
		a=1;
		temp(a);
		setTimeout(play(),2000);
	}
	liTag[2].onclick=function(){
		clearInterval(timer);	
		a=2;
		temp(a);
		setTimeout(play(),2000);
	}
}
roasting();
}
$(document).ready(function(){
	$(".imagesdiv img").click(function(){
		var cH=(document.documentElement.clientHeight||document.body.clientHeight)+'px';
		$(".imagesdiv").append("<div class='previewImg'></div>");
		$(".imagesdiv .previewImg").append('<img class="previewImgCss" width='+cH+' src='+this.src+'>');
		$(".imagesdiv .previewImg .previewImgCss").click(function(){
				$(".imagesdiv .previewImg").fadeOut(500,function(){
					$(".imagesdiv .previewImg").remove();
				});
		});
	});
	
	$(".logoDiv .logo").click(function(){
		$(this).fadeOut(500).fadeIn(1000);
	})
	/*cubeClick*/
		$(".cubeBoxImg div").dblclick(function(){
			var cH=(document.documentElement.clientHeight||document.body.clientHeight)+'px';
			$(".cubeBox").append("<div class='previewImg'></div>");
			$(".cubeBox .previewImg").append('<img class="previewImgCss" width='+cH+' src='+this.style.backgroundImage.replace("url(","").replace(")","")+'>');
			$(".cubeBox .previewImg .previewImgCss").click(function(){
					$(".cubeBox .previewImg").fadeOut(500,function(){
						$(".cubeBox .previewImg").remove();
					});
			});
	});
});
