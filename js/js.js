$(function() {
			$(document).on('touchstart', function(e) {
				e.preventDefault();
			});
			$('.swiper-wrapper').css({width: $(window).width(), height: $(window).height()});
			$('<div class="mark"><div>Loading...<span id="jdt"><i style="display: inline-block; background: seagreen; height: 0.3rem; width: 0%; position: absolute;"></i></span><span id="num">0%</span></div></div>').appendTo('body');
			$('.mark').css({width: $(window).width(), height: $(window).height(),background:'rgba(0,0,0,.8)',position:'absolute',zIndex:100,top:0,color:'#fff',textAlign:'center',fontSize:'0.68rem'});
			$('.mark div').css({marginTop:'60%'});
			$('#jdt').css({width:'70%',height:'0.3rem',border:'1px solid red',borderRadius:'10px' ,display:'inline-block',overflow:'hidden',position:'relative',textAlign:'left'});
			$('#num').css({fontSize:'0.36rem',marginLeft:'2%'});
			var arr = [
				"img/1-1.png",
				"img/1-2.png",
				"img/1-3.png",
				"img/8-1.png",
				"img/2-1.png",
				"img/2-2.png",
				"img/9-bg.jpg",
				"img/10-1.png",
				"img/11_02.png",
				"img/11_03.png",
				"img/11_04.png",
				"img/11_05.png",
				"img/11_06.png",
				"img/11_07.png",
				"img/11_08.png",
				"img/11_09.png",
				"img/11_10.png",
				"img/81.png",
				"img/82.png",
				"img/83.png",
				"img/84.png",
				"img/85.png",
				"img/86.png",
				"img/101.jpg",
				"img/102.jpg",
				"img/103.jpg",
				"img/104.jpg",
				"img/105.jpg",
				"img/106.jpg",
				"img/107.jpg",
				"img/108.jpg",
				"img/bg-1.jpg",
				"img/arrow.png",
				"img/bj-2.png",
				"img/bj-3.png",
				"img/bj-4.png",
				"img/p12e.jpg",
				"img/p12s.png",
				"img/p12t.png",
				"img/page3.jpg",
				"img/page3t.png",
				"img/page4i.png",
				"img/page5i.png",
				"img/page6i.png",
				"img/page7i.png",
				"img/page8i.png",
				"img/page11.jpg",
				"img/qyhz.png",
			]
			var imgLeng = 0;
			var time = setInterval(function(){
				var makeImg = new Image();
				makeImg.src = arr[i];
				makeImg.onload = function() {
					imgLeng++;
					$('#num').html(parseInt(imgLeng*100/48)+'%');
					$('#jdt i').css({width:imgLeng*100/48+'%'});
					if(imgLeng == 48) {
						$('audio').get(0).play();
						$('#num').html('100%');
						$('#jdt').css({width:'100%'});
						$('.mark').remove();
						clearInterval(time);
					}
				}
			},10);
			
			var mySwiper = new Swiper('.swiper-container', {
				direction: 'vertical',
				onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
					swiperAnimateCache(swiper); //隐藏动画元素 
					swiperAnimate(swiper); //初始化完成开始动画
				},
				onSlideChangeEnd: function(swiper) {
					swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
					if(swiper.activeIndex == 1){
						$('.page2>.p3 div').eq(0).css('animation','move2 1.5s 2.5s ease-out');
						$('.page2>.p3 div').eq(1).css('animation','move2 1.5s 3s ease-out');
						$('.page2>.p3 div').eq(2).css('animation','move2 1.5s 3.5s ease-out');
						$('.page2>.p3 div').eq(3).css('animation','move2 1.5s 4s ease-out');
						$('.page2>.p3 div').eq(4).css('animation','move2 1.5s 4.5s ease-out');
					}else{
						$('.page2>.p3 div').css('animation',"move3 1.5s ease-out");
					}
				}

			});
});