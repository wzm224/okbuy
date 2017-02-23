






////////////////////////////商品列表加载
$(function(){
	//alert(1) //11


	$.ajax({
		url:"../date/show.json",
		type:"GET",
		dataType:'json',
		success:function(res){
			//console.log(res.length)   //11  已获取json数据


			var pag = Math.ceil(res.length/16)
 				//console.log(pag)

			$('#Pagination').pagination(pag,{

				num_edge_entries:2,
				num_display_entries:2,
				items_per_page:1,
				next_text:'下一页',
				prev_text:'上一页',
				callback:function(index){

					//console.log(index)
					var list='';
					for (var i = 16*index; i < 16*(index+1); i++) {			
					//console.log(res.length)   //  11
					if (i<res.length) {

					list +='<li><div><a href="#" id="'+res[i].id+'"><img src="'+res[i].src+'" alt=""></a></div><span><img src="'+res[i].src2+'" alt=""></span><span><i>'+res[i].class+'　</i><i>'+res[i].class2+'　</i><a href="#" id="'+res[i].id+'">'+res[i].tip+'</a></span><span><b>¥'+res[i].price+'</b>　<strong>'+res[i].oldprice+'</strong></span></li>'

					};

					};
						$('#shows').html(list)

						//商品跳转详情页
			            $('#shows').on('click','a',function(){
			                //alert(this.id)
			                var id=this.id;
			                localStorage.setItem("buyid",id);

			                window.location.href="detail.html"
			            })






					}
				})

		}			
	})//ajax	


///////////////////////////////

$('#showchoose').find('a').click(function(){

	$('#showchoose').find('a').css("height","40px")
	$('#showchoose').find('a').css("background","#fff")

	$(this).css("height","41px")
	$(this).css("background","#fff")
});

	$('#showchoose').find('a').eq(0).css("height","41px")
	$('#showchoose').find('a').eq(0).css("background","#fff")













////////////////////////////尾
 })

