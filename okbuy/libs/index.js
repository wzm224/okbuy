window.onload = function(){

///////////////////////////head按钮

$(function(){

	$('#head').find('li').mouseover(function() {
		//console.log($(this).index())  // 11  0-4
		$('.headdiv').eq($(this).index()).css("display","block")
	});

	$('#head').find('li').mouseout(function() {
		//console.log($(this).index())  // 11  0-4
		$('.headdiv').eq($(this).index()).css("display","none")
	});

//末尾的公告按钮


	$('#head').find('li').eq(4).mouseover(function() {
		//alert(1)  //  111
		$('.headgg1').css("display","block")
		$('.headgg2').css("display","block")
	});
		//console.log($('.headgg1'))
	$('#head').find('li').eq(4).mouseout(function() {
		$('.headgg1').css("display","none")
		$('.headgg2').css("display","none")
	});

})

////////////////////////////////////////nav导航生成





///////////////////////////////////banner 轮播图

$(function(){

	var index = 0;
	var timer;
	timer = setInterval(banners,2000)

		//上一页按钮
		$('.banprev').click(function(){
			//alert(1)  //  11
				clearInterval(timer)

			if (index == 0) {
				index = $('#banner').find('img').length-1;
				//console.log($('#banner').find('img').length-1) //11  7
			}else{
				index --;
				//console.log(index)
			}
					//清空圆点样式
				$('.banbtn').find('li').css("background","#000");
				$('.banbtn').find('li').css("opacity","0.3");
					//设置圆点样式
				$('.banbtn').find('li').eq(index).css("background","#d70057");
				$('.banbtn').find('li').eq(index).css("opacity","1");
				$('#banner').find('img').eq(index).fadeIn().siblings().fadeOut();

				timer = setInterval(banners,2000)		
		})
		//下一页按钮
		$('.bannext').click(function(){
			//alert(1)  //  11
				clearInterval(timer)

			if (index == $('#banner').find('img').length-1) {
				index = 0;
			}else{
				index ++;
			}

				$('.banbtn').find('li').css("background","#000");
				$('.banbtn').find('li').css("opacity","0.3");

				$('.banbtn').find('li').eq(index).css("background","#d70057");
				$('.banbtn').find('li').eq(index).css("opacity","1");
				$('#banner').find('img').eq(index).fadeIn().siblings().fadeOut();

				timer = setInterval(banners,2000)		
		})


	function banners(){

		//console.log(index)

		//console.log($('#banner').find('img').length)// 11  测试有8张图片

		//清空圆点按钮的样式
		$('.banbtn').find('li').css("background","#000");
		$('.banbtn').find('li').css("opacity","0.3");


		if (index == $('#banner').find('img').length - 1) {
			index = 0;
		}else{
			index++;
		}
			//console.log(index)//  11  计时器起作用，1-7循环
		$('#banner').find('img').eq(index).fadeIn().siblings().fadeOut();
		$('.banbtn').find('li').eq(index).css("background","#d70057");
		$('.banbtn').find('li').eq(index).css("opacity","1");


		//圆点按钮的移入移除
		$('.banbtn').find('li').mouseover(function(){
			//console.log($(this).index()) //  11 获取鼠标移动到当前按钮的下标
			clearInterval(timer)
			$('#banner').find('img').eq($(this).index()).fadeIn().siblings().fadeOut();
			//清空圆点按钮的样式
			$('.banbtn').find('li').css("background","#000");
			$('.banbtn').find('li').css("opacity","0.3");
			//当鼠标移入设置样式
		    $('.banbtn').find('li').eq($(this).index()).css("background","#d70057");
		  	$('.banbtn').find('li').eq($(this).index()).css("opacity","1");
		})
		$('.banbtn').find('li').mouseout(function(){
			clearInterval(timer)
			index = $(this).index()
			timer = setInterval(banners,2000)
		})

		//banner图的移入移出
		$('#banner').find('img').mouseover(function(){
			clearInterval(timer);
		});
		$('#banner').find('img').mouseout(function(){
			clearInterval(timer)
			index = $(this).index()
			timer = setInterval(banners,2000)
		})



	}


})






////////////////////////////////////////品牌logo。用json生成
var brand = document.getElementById('brand')

//生成36个a标签
$(function(){
	$.ajax({
		url:"../date/logo.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res)   //11  已获取json数据

				var brands='';
			for (var i = 0; i < res.length; i++) {			
				//console.log(res.length)   //  11

				 brands +='<a href="'+res[i].href+'" target="_blank" title="'+res[i].name+'"  class="brand"><img src="'+res[i].src+'" alt="'+res[i].name+'"></a>'

			};

				$('#brand').html(brands)
		}			

	})
})



//////////////////////////////////////////////list商品列表

$(function(){

    $.ajax({         
    	url:"../date/indexlist1.json",        
    	type:"GET",
		dataType:'json',         
		success:function(res){
		//console.log(res)   //11  已获取json数据                 
		var list1='';
		for (var i = 0; i < res.length; i++) {
		//console.log(res.length)     //11 

		// list1 +='<li><a href="'+res[i].href+'"><img src="'+res[i].src+'" alt=""><div  class="titles"><sapn>'+res[i].span1+'</span><br><span>'+res[i].span2+'</span><h2>'+res[i].h2+'</h2><span id="sometime"><span class="day"><i>'+res[i].day+'</i>天</span><span class="hour"><i>'+res[i].hour+'</i>小时</span><span class="munite"><i>'+res[i].munite+'</i>分</span><span class="second"><i>'+res[i].second+'</i>秒</span><span class="fsecond"><i>'+res[i].fsecond+'</i></span></span></div></a></li>'

		list1 +='<li><a href="'+res[i].href+'"><img src="'+res[i].src+'" alt=""><div  class="titles"><sapn>'+res[i].span1+'</span><br><span>'+res[i].span2+'</span><h2>'+res[i].h2+'</h2><span id="sometime"><span class="day"></span>'+res[i].day+'天<span class="hour">'+res[i].hour+'时</span><span class="minute">'+res[i].munite+'分</span><span class="second">'+res[i].second+'秒</span><span class="fsecond">'+res[i].fsecond+'</span></span></div></a></li>'
				
			};
				$('#list').html(list1)
		}			
	})

})
/////////////////////////////倒计时////////////////////////////////


////////////////////////////////////////////list2商品列表
$(function(){

    $.ajax({         
    	url:"../date/indexlist2.json",        
    	type:"GET",
		dataType:'json',         
		success:function(res){
		//console.log(res)   //11  已获取json数据                 
		var list2='';
		for (var i = 0; i < res.length; i++) {
		//console.log(res.length)     //11 

			list2 +='<li><a href="'+res[i].href+'"><img src="'+res[i].src+'" alt=""><div  class="titles2"><p>'+res[i].span1+'<span>'+res[i].span2+'</span></p><span id="sometime2"><span class="day2"><i>'+res[i].day+'</i>天</span><span class="hour2"><i>'+res[i].hour+'</i>小时</span><span class="munite2"><i>'+res[i].munite+'</i>分</span><span class="second2"><i>'+res[i].second+'</i>秒</span><span class="fsecond2"><i>'+res[i].fsecond+'</i></span></span></div></a></li>'

			};
				$('#list2').html(list2)
		}			
	})

})

/////////////////////////////////////////////商品列表倒计时器
	


















































///////////////////////////////////returntop回到顶部按钮



///////////////////////////////尾//////////////////////////////////////
}


