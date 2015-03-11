			function getCookie(n){
				var r = new RegExp("(?:^|;+|\\s+)" + n + "=([^;]*)"),m = document.cookie.match(r);
				return (!m?"":m[1]);
			}
			function setCookie(name,value,domain,path,hour){
				if(hour){
					var expire = new Date();
					expire.setTime(expire.getTime() + 3600000 * hour);
				}
				document.cookie = name + "=" + value + "; " + (hour?("expires=" + expire.toGMTString() + "; "):"") + (path?("path=" + path + "; "):"path=/; ") + (domain?("domain=" + domain + ";"):("domain=qq.com;"));
				return true;
			}
