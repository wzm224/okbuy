$(function(){
//alert(1)

/////////////////////////////////////
	function login(){
		//alert(1)

	//console.log($('#head').find('p').html())
	var id = sessionStorage.getItem("userid")

	//console.log(id)
	if (id) {
		$('#head').find('p').html('<span id="loginid">'+id+'</span><span>退出</span>')

		$('#loginid').next(0).click(function(){

			//alert(1)
			sessionStorage.removeItem("userid")

			$('#head').find('p').html('<a href="login.html" style="border-right:1px solid #dcdcdc">登录</a><a href="register.html">注册</a>')
		});
	}else{
		$('#head').find('p').html('<a href="login.html" style="border-right:1px solid #dcdcdc">登录</a><a href="register.html">注册</a>')
	}

	}

	//login()




function head(){

////////
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


}

//head()login()
/////////////////////////////购物车鼠标移动事件


function gouwuche(){

	//alert(1)

	$('#buycar').mouseenter(function(){
		//alert(1)
		$('#shangping').css("display","block")
	});
	$('#buycar').mouseleave(function(){

		$('#shangping').css("display","none")
	});

	$('#shangping').mouseenter(function(){

		$('#shangping').css("display","block")
	});
	$('#shangping').mouseleave(function(){

		$('#shangping').css("display","none")
	});

}

//gouwuche()head()login()

///////////////////////////////////////////////////


function jzajax(){


/////////nav1

	$.ajax({
		url:"../date/nav11.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res)   //11  已获取json数据
				var nav1='';
			for (var i = 0; i < res.length-1; i++) {			
				//console.log(res.length)   //  11
				 nav1 +='<a href="'+res[i].href+'">'+res[i].name+'</a>'
			};
				var b1 ='<b>'+res[i].class+'</b>'
				//console.log(i)  //最末尾一个为分类名
				$('.navhide').eq(0).find('.hide').eq(0).find('p').eq(0).html(b1+nav1)
		}			
	})

	$.ajax({
		url:"../date/nav12.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res)   //11  已获取json数据
				var nav2='';
			for (var i = 0; i < res.length-1; i++) {			
				//console.log(res.length)   //  11
				 nav2 +='<a href="'+res[i].href+'">'+res[i].name+'</a>'
			};
				var b2 ='<b>'+res[i].class+'</b>'
				//console.log(i)  //最末尾一个为分类名
				$('.navhide').eq(0).find('.hide').eq(0).find('p').eq(1).html(b2+nav2)
		}			
	})

	$.ajax({
		url:"../date/nav13.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res)   //11  已获取json数据
				var nav3='';
			for (var i = 0; i < res.length-1; i++) {			
				//console.log(res.length)   //  11
				 nav3 +='<a href="'+res[i].href+'">'+res[i].name+'</a>'
			};
				var b3 ='<b>'+res[i].class+'</b>'
				//console.log(i)  //最末尾一个为分类名
				$('.navhide').eq(0).find('.hide').eq(0).find('p').eq(2).html(b3+nav3)
		}			
	})

	$.ajax({
		url:"../date/nav13.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res)   //11  已获取json数据
				var nav3='';
			for (var i = 0; i < res.length-1; i++) {			
				//console.log(res.length)   //  11
				 nav3 +='<a href="'+res[i].href+'">'+res[i].name+'</a>'
			};
				var b3 ='<b>'+res[i].class+'</b>'
				//console.log(i)  //最末尾一个为分类名
				$('.navhide').eq(0).find('.hide').eq(1).find('p').eq(0).html(b3+nav3)
		}			
	})

	$.ajax({
		url:"../date/nav13.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res)   //11  已获取json数据
				var nav3='';
			for (var i = 0; i < res.length-1; i++) {			
				//console.log(res.length)   //  11
				 nav3 +='<a href="'+res[i].href+'">'+res[i].name+'</a>'
			};
				var b3 ='<b>'+res[i].class+'</b>'
				//console.log(i)  //最末尾一个为分类名
				$('.navhide').eq(0).find('.hide').eq(1).find('p').eq(1).html(b3+nav3)
		}			
	})

	$.ajax({
		url:"../date/nav13.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res)   //11  已获取json数据
				var nav3='';
			for (var i = 0; i < res.length-1; i++) {			
				//console.log(res.length)   //  11
				 nav3 +='<a href="'+res[i].href+'">'+res[i].name+'</a>'
			};
				var b3 ='<b>'+res[i].class+'</b>'
				//console.log(i)  //最末尾一个为分类名
				$('.navhide').eq(0).find('.hide').eq(1).find('p').eq(2).html(b3+nav3)
		}			
	})

///////////////////nav2

	$.ajax({
		url:"../date/nav2.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res[0].children1[0].name)    //11  已获取json数据
				
				var name='';
				name='<h4>'+res[0].name+'</h4><b>'+res[0].tip1+'</b>'
				
				var children1='';
			for (var i = 0; i < res[0].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[0].children1[i].href+'">'+res[0].children1[i].name+'</a>'
			};

				var tip='';
				tip='<b>'+res[0].tip2+'</b>'

				var children2='';

			for (var i = 0; i < res[0].children2.length-1; i++) {			
				//console.log(res.length)   //  11
				 children2 +='<a href="'+res[0].children2[i].href+'">'+res[0].children2[i].name+'</a>'
			};

				$('.navhide').eq(1).find('.hide').eq(0).html(name+children1+tip+children2)
		}			
	})

	$.ajax({
		url:"../date/nav2.json",
		type:"GET",
		dataType:'json',
		success:function(res){

				var tip1='';
				tip1='<h4>'+res[1].name+'</h4><b>'+res[1].tip1+'</b>'				
				var children1='';
			for (var i = 0; i < res[1].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[1].children1[i].href+'">'+res[1].children1[i].name+'</a>'
			};
			////////////////
				var tip2='';
				tip2='<b>'+res[1].tip2+'</b>'

				var children2='';

			for (var i = 0; i < res[1].children2.length-1; i++) {			
				//console.log(res.length)   //  11
				 children2 +='<a href="'+res[1].children2[i].href+'">'+res[1].children2[i].name+'</a>'
			};
			////////////////
				var tip3='';
				tip3='<b>'+res[1].tip2+'</b>'

				var children3='';

			for (var i = 0; i < res[1].children3.length-1; i++) {			
				//console.log(res.length)   //  11
				 children3 +='<a href="'+res[1].children3[i].href+'">'+res[1].children3[i].name+'</a>'
			};

			///////////


				$('.navhide').eq(1).find('.hide').eq(1).html(tip1+children1+tip2+children2+tip3+children3)
		}			
	})
	$.ajax({
		url:"../date/nav2.json",
		type:"GET",
		dataType:'json',
		success:function(res){

				var tip1='';
				tip1='<h4>'+res[2].name+'</h4>'	
				var img='';
				var img='<p><img src="'+res[2].sur+'" alt=""></p>'

/*				var children1='';
			for (var i = 0; i < res[1].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[2].children1[i].href+'" title="'+res[1].children1[i].title+'"></a>'
			};
*/			////////////////

				$('.navhide').eq(1).find('.hide').eq(2).html(tip1+img)
		}			
	})

//////////////////////////////////导航3/////////////////////////////////////////


	$.ajax({
		url:"../date/nav3.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res[0].children1[0].name)    //11  已获取json数据
				
				var name='';
				name='<h4>'+res[0].name+'</h4><b>'+res[0].tip1+'</b>'
				
				var children1='';
			for (var i = 0; i < res[0].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[0].children1[i].href+'">'+res[0].children1[i].name+'</a>'
			};

				var tip='';
				tip='<b>'+res[0].tip2+'</b>'

				var children2='';

			for (var i = 0; i < res[0].children2.length-1; i++) {			
				//console.log(res.length)   //  11
				 children2 +='<a href="'+res[0].children2[i].href+'">'+res[0].children2[i].name+'</a>'
			};

				$('.navhide').eq(2).find('.hide').eq(0).html(name+children1+tip+children2)
		}			
	})

	$.ajax({
		url:"../date/nav3.json",
		type:"GET",
		dataType:'json',
		success:function(res){

				var tip1='';
				tip1='<h4>'+res[1].name+'</h4><b>'+res[1].tip1+'</b>'				
				var children1='';
			for (var i = 0; i < res[1].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[1].children1[i].href+'">'+res[1].children1[i].name+'</a>'
			};
			////////////////
				var tip2='';
				tip2='<b>'+res[1].tip2+'</b>'

				var children2='';

			for (var i = 0; i < res[1].children2.length-1; i++) {			
				//console.log(res.length)   //  11
				 children2 +='<a href="'+res[1].children2[i].href+'">'+res[1].children2[i].name+'</a>'
			};
			////////////////
				var tip3='';
				tip3='<b>'+res[1].tip2+'</b>'

				var children3='';

			for (var i = 0; i < res[1].children3.length-1; i++) {			
				//console.log(res.length)   //  11
				 children3 +='<a href="'+res[1].children3[i].href+'">'+res[1].children3[i].name+'</a>'
			};

			///////////


				$('.navhide').eq(2).find('.hide').eq(1).html(tip1+children1+tip2+children2+tip3+children3)
		}			
	})
	$.ajax({
		url:"../date/nav3.json",
		type:"GET",
		dataType:'json',
		success:function(res){

				var tip1='';
				tip1='<h4>'+res[2].name+'</h4>'	
				var img='';
				var img='<p><img src="'+res[2].sur+'" alt=""></p>'

/*				var children1='';
			for (var i = 0; i < res[1].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[2].children1[i].href+'" title="'+res[1].children1[i].title+'"></a>'
			};
*/			////////////////

				$('.navhide').eq(2).find('.hide').eq(2).html(tip1+img)
		}			
	})


//////////////////////////////////导航444/////////////////////////////////////////


	$.ajax({
		url:"../date/nav4.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res[0].children1[0].name)    //11  已获取json数据
				
				var name='';
				name='<h4>'+res[0].name+'</h4><b>'+res[0].tip1+'</b>'
				
				var children1='';
			for (var i = 0; i < res[0].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[0].children1[i].href+'">'+res[0].children1[i].name+'</a>'
			};

				var tip='';
				tip='<b>'+res[0].tip2+'</b>'

				var children2='';

			for (var i = 0; i < res[0].children2.length-1; i++) {			
				//console.log(res.length)   //  11
				 children2 +='<a href="'+res[0].children2[i].href+'">'+res[0].children2[i].name+'</a>'
			};

				$('.navhide').eq(3).find('.hide').eq(0).html(name+children1+tip+children2)
		}			
	})

	$.ajax({
		url:"../date/nav4.json",
		type:"GET",
		dataType:'json',
		success:function(res){

				var tip1='';
				tip1='<h4>'+res[1].name+'</h4><b>'+res[1].tip1+'</b>'				
				var children1='';
			for (var i = 0; i < res[1].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[1].children1[i].href+'">'+res[1].children1[i].name+'</a>'
			};
	

			///////////


				$('.navhide').eq(3).find('.hide').eq(1).html(tip1+children1)
		}			
	})
	$.ajax({
		url:"../date/nav4.json",
		type:"GET",
		dataType:'json',
		success:function(res){

				var tip1='';
				tip1='<h4>'+res[2].name+'</h4>'	
				var img='';
				var img='<p><img src="'+res[2].sur+'" alt=""></p>'

/*				var children1='';
			for (var i = 0; i < res[1].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[2].children1[i].href+'" title="'+res[1].children1[i].title+'"></a>'
			};
*/			////////////////

				$('.navhide').eq(3).find('.hide').eq(2).html(tip1+img)
		}			
	})


//////////////////////////////////导航5/////////////////////////////////////////


	$.ajax({
		url:"../date/nav5.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res[0].children1[0].name)    //11  已获取json数据
				
				var name='';
				name='<h4>'+res[0].name+'</h4><b>'+res[0].tip1+'</b>'
				
				var children1='';
			for (var i = 0; i < res[0].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[0].children1[i].href+'">'+res[0].children1[i].name+'</a>'
			};

				var tip='';
				tip='<b>'+res[0].tip2+'</b>'

				var children2='';

			for (var i = 0; i < res[0].children2.length-1; i++) {			
				//console.log(res.length)   //  11
				 children2 +='<a href="'+res[0].children2[i].href+'">'+res[0].children2[i].name+'</a>'
			};

				$('.navhide').eq(4).find('.hide').eq(0).html(name+children1+tip+children2)
		}			
	})
	/////////////////////////////////////
	$.ajax({
		url:"../date/nav5.json",
		type:"GET",
		dataType:'json',
		success:function(res){

				var tip1='';
				tip1='<h4>'+res[1].name+'</h4>'	
				var img='';
				var img='<p><a href=""><img src="'+res[1].sur+'" alt=""></a></p>'

/*				var children1='';
			for (var i = 0; i < res[1].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[2].children1[i].href+'" title="'+res[1].children1[i].title+'"></a>'
			};
*/			////////////////

				$('.navhide').eq(4).find('.hide').eq(1).html(tip1+img)
		}			
	})
///////////////////////////////
	$.ajax({
		url:"../date/nav5.json",
		type:"GET",
		dataType:'json',
		success:function(res){

				var tip1='';
				tip1='<h4>'+res[2].name+'</h4>'	
				var img='';
				var img='<p><a href=""><img src="'+res[2].sur+'" alt=""></a></p>'

/*				var children1='';
			for (var i = 0; i < res[1].children1.length-1; i++) {			
				//console.log(res.length)   //  11
				 children1 +='<a href="'+res[2].children1[i].href+'" title="'+res[1].children1[i].title+'"></a>'
			};
*/			////////////////

				$('.navhide').eq(4).find('.hide').eq(2).html(tip1+img)
		}			
	})
///////////////////////////////////////////////////////////////


		//导航菜单的移入移出
	$('.navbtn').mouseover(function() {		
		//console.log($(this).index())  //11  得到的下标是 2-6
		//console.log($('.navhide').length)  //11   5
		$('.navhide').eq($(this).index()-2).css("display","block");
	});

	$('.navbtn').mouseout(function() {		
		$('.navhide').eq($(this).index()-2).css("display","none");
	});
		//div的移入移出事件
	$('.navhide').mouseover(function() {		
		$(this).css("display","block");
	});

	$('.navhide').mouseout(function() {		
		$(this).css("display","none");
	});
///////////////////////////

}

//jzajax()gouwuche()head()login()

////////////////////////购物车商品
        function sc_car(){
            var sc_str = sessionStorage.getItem('goods');
            if(sc_str){//如果购物车cookie不为空。
                var sc_obj = eval(sc_str);
                var sc_num = 0 ; 
                for(var i in sc_obj){
                    sc_num = Number(sc_obj[i].num) + sc_num;
                }
               $('#buynum').find('span').html(sc_num)
               //console.log(sc_num)
                return sc_num;
            }

            	xqtiaoz()////点击图片跳转

        }

/////////////////////将商品加入购物车
        function sc_msg(){
        	//alert(1)
            $.ajax({
                url:'../date/detail.json',
                type:'GET',
                success:function(res){
                    var sc_str = sessionStorage.getItem('goods')
                    //console.log(sc_str)
                    if(sc_str){
                        var sc_obj = eval(sc_str);
                        var sc_num = 0 ;
                        var html = ''; 
                        for(var i in sc_obj){                   
                            html +='<dl><dt id="'+sc_obj[i].id+'"><img src="'+res[sc_obj[i].id].pic+'" alt=""></dt><dd>'+res[sc_obj[i].id].traits+'<br><i>'+res[sc_obj[i].id].price+'</i> RMB x '+sc_obj[i].num+'</dd><span class="dele" id="'+sc_obj[i].id+'">×</span></dl>' 
                        }
                       $('#shangping').find('div').html(html)
                    }

                    xqtiaoz()////点击图片跳转
                    deletegoods()////点击删除商品
                }
            })
        }

/////////////////////////////////总价

	function cartmoney(){
		//console.log("=")
		$.ajax({
			url:'../date/detail.json',
			type:'GET',
			success:function(res){
				//console.log("+")
				var sc_str = sessionStorage.getItem('goods');
				if(sc_str){
					var sc_obj=eval(sc_str);
					var sc_num=0;
					html='';
					var pay=0;
					for(var i in sc_obj){	

						pay+=eval(res[sc_obj[i].id].price*(sc_obj[i].num))
						
					}

					var paym=pay.toFixed(2)
					$('#jiesuan').find('span').html(paym)
				}
			}
		})
	}





///////////////////////////////////returntop回到顶部按钮
function returntop(){

	//alert(2)
   var returntop=document.getElementById('returntop')
   var topbtn=document.getElementById('topbtn')


    window.onscroll=function(){
    	//获取顶部的值。兼容
  		var topnum=document.documentElement.scrollTop||document.body.scrollTop
        //console.log(topnum)  //1
    
	    //给div设置定位
	    if (topnum == 0) {
	    	returntop.style.display = "none"
	    }else{
	    	returntop.style.display = "block"
	    }
    }

    topbtn.onclick=function(){
    	//alert(1)  //11

	    //当给scrollTop当做左值的时候要用if来去除兼容
	    if(document.documentElement.scrollTop){
	      	document.documentElement.scrollTop=0
	    }else{
	      	document.body.scrollTop=0
	    }     
   }

}////////////

//////////////购物车商品跳转详情页


function xqtiaoz(){
	//console.log($('#shangping').find('dt'))
	//alert(2)
    $('#shangping').find('dt').click(function(){
        //alert(1)
        //alert($(this).id)
        var id=this.id;
		localStorage.setItem("buyid",id)
        window.location.href="detail.html"

    });

    //console.log( $('#shangping').find('dt'))

}

/////////////////////商品删除

        function deletegoods(){

            //console.log($('#shangping').find('.dele'))
       //alert(2)
       

        $('#shangping').find('.dele').click(function(){

            //alert(1)
            
            $(this).parent().empty()///删除商品
			var id = this.id
			var sid = [];
            //sessionStorage.getItem("goods")
			var sc_str = sessionStorage.getItem('goods');
			if(sc_str){
				var sc_obj=eval(sc_str);
				
				for(var i in sc_obj){	
					//console.log(id)
					//console.log(sc_obj[i].id)//找到要删除商品的id
					if (sc_obj[i].id != id) {
						//alert(2)
						sid.push(sc_obj[i])



						//console.log(arrid)
					}
					
				}
				var arrid = JSON.stringify(sid);
            	//console.log(arrid)
            	sessionStorage.setItem("goods",arrid)//z重新获取数据
            	sc_car();
				sc_msg();
				cartmoney();
				gopayjiaz();
			}
            //sessionStorage.removeItem("goods",id)
            //sessionStorage.setIten("goods",sid)

        })



        }//////////

//////////////////////////////////////

/////////////点击跳入购物列表页
function gotopay(){

	$('#jiesuan').find('input').click(function(){
		//alert(1)
		window.location.href="gopay.html"
	});

}
/////////////////////////

///将商品加入购物车
        function gopayjiaz(){
            $.ajax({
                url:'../date/detail.json',
                type:'GET',
                success:function(res){
                    var sc_str = sessionStorage.getItem('goods')
                    //console.log(sc_str)
                    if(sc_str){
                        var sc_obj = eval(sc_str);
                        var sc_num = 0 ;
                        var html = ''; 
                        for(var i in sc_obj){

                        	var zongshu=res[sc_obj[i].id].price*sc_obj[i].num

                            html +='<dl><div id="tj"><p class="tj">特价</p></div><p  ></p><dt  id="'+sc_obj[i].id+'"><img src="'+res[sc_obj[i].id].pic+'" alt=""></dt><dd class="d1"><a href="detail.html" id=""><b  id="'+sc_obj[i].id+'">'+res[sc_obj[i].id].traits+'</a></b><br><span>尺码：</span>40</dd><dd class="d2" style="width:110px">¥'+res[sc_obj[i].id].price+'</dd><dd class="d3" style="width:240px"><div id="jiajian"><span>-</span><i>'+sc_obj[i].num+'</i><span>+</span></dd><dd class="d4" style="width:110px">¥'+zongshu+'</dd><dd class="d5" style="width:130px"><input type="button" value="删除"  id="'+sc_obj[i].id+'"></dd></dl>'


                        }
                       $('#wupin').html(html)
                    }
                        
                }
            })
        }/////////////////


///////////////////////////////////////////////////
setTimeout(function(){
	//alert(1)
	jzajax();
	gouwuche();
	head();
	login();
	returntop();
	sc_car();
	sc_msg();
	xqtiaoz();
	cartmoney();
	deletegoods();
	gotopay();
},500)



})