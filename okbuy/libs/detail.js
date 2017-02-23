
    $(function(){

        
        // 引入公共样式
    $('#head').load('../html/public.html #head',function(){
    })
    $('#search').load('../html/public.html #search',function(){
        //购物车商品数量
        BuyCar()
        sc_msg()
        sc_car()
        //console.log($('#shangping').find('dl').html())
     })

    $('#nav').load('../html/public.html #nav')
    $('#messagebox').load('../html/public.html #messagebox')
    $('#foot').load('../html/public.html #foot')
    $('#returntop').load('../html/public.html #returntop')


//////////////////////////////吸顶购物车

	//console.log(#topdiv)
    window.onscroll=function(){
        // alert(1)
        //滚动条距顶端的距离的兼容问题
    var top=document.documentElement.scrollTop||document.body.scrollTop
    //console.log(top)
    
    //给div设置定位
    if (top<=800) {
    	$('#topdiv').css("display","none")
    }else{
    	$('#topdiv').css("display","block")
    }
}

///////////////////////////////加载商品详情
    //var id=$.cookie('buyId');
    var id=localStorage.getItem("buyid")

    //console.log($.cookie('buyId'));
 
    $.ajax({
        url:"../date/detail.json",
        type:"GET",
        dataType:'json',
        success:function(res){
            //console.log(res)   //11  已获取json数据

            $('#pic').html('<div class="picmk"></div><img src="'+res[id].pic+'"><div class="picmove"></div>')
            $('#bigpic').html('<div class="bigbox"><img src="'+res[id].pic+'"></div>')

            $('#p1').html('<span>'+res[id].name+'</span><span> '+res[id].sex+' </span><span>'+res[id].traits+'</span>')
            $('#p2').html('特卖价<b>¥  '+res[id].price+'</b><i>¥ '+res[id].oldprice+'</i><p>'+res[id].discount+'</p><strong>累计评论<a href="">1</a></strong>')
            $('#p3').html('活动<span>'+res[id].active+'</span>'+res[id].activetime)
            ///颜色
                var p4='<i>颜色</i>'
                for (var i = 0; i < res[id].color.length; i++) {
                    p4+='<span><img src="'+res[id].color[i].color+'" alt=""></span>'
                };
            $('#p4').html(p4)
            //
            $('#p5').html
            $('#p6').html
            $('#buybtn').html('<p id="'+res[id].id+'">加入购物车</p><span>❤ 收藏该商品</span>')


           fangdajing()
           BuyCar()
           sc_msg()
           shoucang()
           pp4();
           pp5();

        }  //加载赋值         
    }) //ajax

///////////放大镜
function fangdajing(){

        $('.picmk').mouseover(function(){
            
            //alert(1)
            $('.picmove').css("display","block")
            $('#bigpic').css("display","block")
            
        })


        $('.picmk').mousemove(function(event){
            evt=event||window.event
            //alert(3)
            var picmove=document.getElementById('picmove')
            var pic=document.getElementById('pic')

            var bigpic=document.getElementById('bigpic')
            var bigbox=document.getElementById('bigbox')

            var oleft=evt.offsetX-$('.picmove')[0].offsetWidth/2
            var otop=evt.offsetY-$('.picmove')[0].offsetHeight/2

            //console.log($('#picmove')[0].offsetHeight)

            if(oleft<0){
               oleft=0
            }else if(oleft>$('#pic')[0].offsetWidth-$('.picmove')[0].offsetWidth){
               oleft=$('#pic')[0].offsetWidth-$('.picmove')[0].offsetWidth+'px'
            }

            if(otop<0){
               otop=0
            }else if(otop>$('#pic')[0].offsetHeight-$('.picmove')[0].offsetHeight){
               otop=$('#pic')[0].offsetHeight-$('.picmove')[0].offsetHeight+'px'
            }

            $('.picmove')[0].style.left=oleft+'px'
            $('.picmove')[0].style.top=otop+'px'

            var kleft=oleft/($('#pic')[0].offsetWidth-$('.picmove')[0].offsetWidth)
            var ktop=otop/($('#pic')[0].offsetHeight-$('.picmove')[0].offsetHeight)

            $('.bigbox')[0].style.left=kleft*($('#bigpic')[0].offsetWidth-$('.bigbox')[0].offsetWidth)+'px'
            $('.bigbox')[0].style.top=ktop*($('#bigpic')[0].offsetHeight-$('.bigbox')[0].offsetHeight)+'px'

        })

        $('.picmk').mouseout(function(){
            
            //alert(1)
            $('.picmove').css("display","none")
            $('#bigpic').css("display","none")
            
        })

}//////////////////////////////////////////////////////////////


////////////////////////////////购买数量加减

    var  nums = 0;
    //加
    $('#p6').find('span').eq(0).click(function(){
        //alert(1)//11
        if (nums>0) {
            nums--
        }else{
            nums=0
        }
      $('#p6').find('i').eq(0).html(nums)
    })
    //减
    $('#p6').find('span').eq(1).click(function(){
        //alert(1)//11
        nums++
      $('#p6').find('i').eq(0).html(nums)
    })

//////////////////////////加入购物车

    //页面刷新时获取购物车数量;

function BuyCar(){

       // localStorage.setItem("key","value");//以“key”为名称存储一个值“value”
       //localStorage.getItem("goods");sessionStorage

        // console.log()
        // sc_car($.cookie('goods'))

        $('#buybtn').find('p').click(function(){
            //alert(1)
            //购物车数量增加;
            var id = this.id
            var first = sessionStorage.getItem("goods")==null?true:false;//判断是否有cookie进行添加
            var same = false;//判断时候已经追加
            //是否是第一次添加
            if(first){
                //第一次添加,建立json结构。
                sessionStorage.setItem("goods",'[{id:'+id+',num:1}]')
                sessionStorage.setItem("first","false")
                //$.cookie('goods','[{id:'+id+',num:1}]');
                //$.cookie('first','false');
            }else{
                var str = sessionStorage.getItem('goods');
                var arr = eval(str);
                //遍历所有对象。如果id相同，让该商品数量递增 ;
                for(var attr in arr){
                    if(arr[attr].id == id){     
                        arr[attr].num = arr[attr].num + nums;  //让json结构中num自增。
                        var cookieStr = JSON.stringify(arr);//将json对象转换成字符串.
                        sessionStorage.setItem('goods',cookieStr);
                        same = true;
                    }
                }
                //如果id不同，重新建立商品对象;
                
                if(!same){
                    var obj  = {id:id,num:1};
                    arr.push(obj);
                    var cookieStr = JSON.stringify(arr);
                    sessionStorage.setItem('goods',cookieStr);
                }
            }
            sc_car()
            sc_msg()
            cartmoney()
            deletegoods();
            xqtiaoz();
        })

}////////购物车

////////

//////////////////购物车详情跳转

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


}






 ////购物车数量;
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
        }

///将商品加入购物车
        function sc_msg(){
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
                        deletegoods()
                        xqtiaoz()
                }
            })
        }/////////////////

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
    }//////////////


/////////////删除购物车商品
/////////////////////商品删除

        function deletegoods(){

            //console.log($('#shangping').find('.dele'))
       //alert(2)
       

        $('#shangping').find('span').click(function(){

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
            }
            //sessionStorage.removeItem("goods",id)
            //sessionStorage.setIten("goods",sid)

        })



        }//////////

//////////////////////////////////////

//收藏商品

function shoucang(){

    $('#buybtn').find('span').click(function(){
        //alert()
        $(this).css("color","rgb(189, 0, 77)")
    });


}




////////////////////////////////////////////
//////////////购物车商品跳转详情页

////////////////////商品型号选择
function pp4(){

    $('#p4').find('span').click(function(){
        $('#p4').find('span').css("border","1px solid #ccc")
        $(this).css("border","1px solid #d70057")
    });

}

function pp5(){

    $('#p5').find('li').click(function(){
        $('#p5').find('li').css("border","1px solid #ccc")
        $(this).css("border","1px solid #d70057")
    });

}

//////////////////////////////
tippage()

function tippage(){

    $('#tip').find('li').click(function(){

        $('#tip').find('li').css("border-bottom","1px solid #ccc")
        $('#tip').find('li').css("color","#000")

        //alert(1)
        $(this).css("border-bottom","2px solid #d70057")
        $(this).css("color","#d70057")
    });

        $('#tip').find('li').eq(0).css("border-bottom","2px solid #d70057")
        $('#tip').find('li').eq(0).css("color","#d70057")


}

















})




