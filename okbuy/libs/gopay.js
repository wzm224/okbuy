$(function(){



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

                            html +='<dl><div id="tj"><p class="tj">特价</p></div><p  ></p><dt  id="'+sc_obj[i].id+'"><img src="'+res[sc_obj[i].id].pic+'" alt=""></dt><dd class="d1"><a href="detail.html" id=""><b  id="'+sc_obj[i].id+'">'+res[sc_obj[i].id].traits+'</a></b><br><span>尺码：</span>40</dd><dd class="d2" style="width:110px">¥'+res[sc_obj[i].id].price+'</dd><dd class="d3" style="width:240px"><div id="jiajian"><span>-</span><i>'+sc_obj[i].num+'</i><span>+</span></dd><dd class="d4" style="width:110px">¥'+zongshu+'</dd><dd class="d5" style="width:130px"><input type="button"   id="'+sc_obj[i].id+'" class="delbtn"></dd></dl>'


                        }
                       $('#wupin').html(html)
                       
                    }
                        delbtn()
                        sljiajian()
                }
            })
        }/////////////////



		gopayjiaz()
		delbtn()

function delbtn(){

	$('#wupin').find('.delbtn').click(function(){
		//alert(1)

	        $(this).parent().parent().empty()///删除商品
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

                gopayjiaz();
                cartmoney();
                sc_msg();
                sc_car();
                xqtiaoz();
                gotopaynum();

            }

	});


}


	



  function delgood(){


            //sessionStorage.removeItem("goods",id)
            //sessionStorage.setIten("goods",sid)


        }//////////

//////////////////////////////////


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

/////////////////////////////////////



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
                    deletegoods()
                }
            })
        }

////////////////////////////////////

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

/////////////////////////////////////

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

/////////////////////////////////////////////////////

///////////////////////////上面的删除
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
                gotopaynum();
            }
            //sessionStorage.removeItem("goods",id)
            //sessionStorage.setIten("goods",sid)

        })



        }//////////

//////////////////////////////////////
    gotopaynum()

    function gotopaynum(){

        $('.l2').find('span').html(sc_carsss())
        cartmoneysss()
    }



////////////////////////////////////

////////////////////////购物车商品
        function sc_carsss(){
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


        }
///////////////////////////////////


/////////////////////////////////总价

    function cartmoneysss(){
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

                        $('.l3').find('span').html(paym)
                        $('.l4').find('span').html(paym)

                }
            }
        })
    }

///////////////////////////

    //gotopaynumbtn

    $('#gotopaynum').find('.l5').click(function(){
        alert('抱歉、项目正在开发中。。')
    });

////////////////////////////

function sljiajian(){

        var  numss = sc_car();
    //加
    $('#jiajian').find('span').eq(0).click(function(){
        //alert(1)//11
        if (numss>0) {
            numss--
        }else{
            numss=0
        }
      $('#jiajian').find('i').eq(0).html(numss)
    })
    //减
    $('#jiajian').find('span').eq(1).click(function(){
        //alert(1)//11
        numss++
      $('#jiajian').find('i').eq(0).html(numss)
    })


}














})