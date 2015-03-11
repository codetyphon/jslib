var ref = document.referrer || location.href;
				if(ref.indexOf("://") < 1){
					ref = location.protocol + "//" + location.host + (ref.indexOf("/") == 0?"":location.pathname.substr(0,location.pathname.lastIndexOf("/") + 1)) + ref;
				}
location.href = ref;
