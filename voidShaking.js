			//防抖！
			function voidShaking(){
				var dom_height =document.documentElement.clientHeight,login_div_top;
				if(dom_height < 820){
					var change_top = 100 - (820 - dom_height),
							change_top = change_top > 0?change_top:0;
					login_div_top = change_top + "px";
				}else{
					login_div_top = "100px";
				}
				document.write('<style>#login_div{top:' + login_div_top + '}</style>');
			}
			voidShaking();
			//防抖done
