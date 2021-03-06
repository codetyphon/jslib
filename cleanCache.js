//判断浏览器类型
function browser_version(){
    var ua = navigator.userAgent.toLowerCase();     
    return ua.match(/msie ([\d.]+)/)? 1 :   
    ua.match(/firefox\/([\d.]+)/) ? 3 :   
    ua.match(/chrome\/([\d.]+)/) ? 5 :   
    ua.match(/opera.([\d.]+)/) ? 9 :   
    ua.match(/version\/([\d.]+).*safari/) ? 7 : 1;   
}
function cleanCache(f){
	var xmlHttp = false;
	try {
	  xmlHttp = new XMLHttpRequest();
	} catch (trymicrosoft) {
		  try {
		      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		  } catch (othermicrosoft) {
			  try {
			   xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			  } catch (failed) {
			   xmlHttp = false;
			  }
		  }
		}
	if (!xmlHttp){
		alert("请按F5刷新页面");
		return;
	}
	xmlHttp.open('GET', f);
	var version=browser_version();
	switch(version){
		case 1://ie
			xmlHttp.setRequestHeader('If-Modified-Since', '0');
			xmlHttp.setRequestHeader('Cache-Control', 'no-cache,no-store'); 
			xmlHttp.setRequestHeader('Pragma', 'no-cache');
			break; 
		case 3://firfox 还发不出请求
			xmlHttp.open('POST', f);
			xmlHttp.setRequestHeader('Cache-Control', 'no-cache,no-store');
			break;
		case 5://chrome
			xmlHttp.setRequestHeader('Cache-Control', 'no-cache');
			xmlHttp.setRequestHeader('Pragma', 'no-cache');
			break
		case 7://safari
			xmlHttp.setRequestHeader('Cache-Control', 'max-age=0');
			break;
		case 9://opera
	}

	xmlHttp.send();
}
if (location.hash){
	//var file = location.hash.substring(1,location.href.length);
	var file = location.href.substring(location.href.indexOf("#")+1, location.href.length);
	cleanCache(file);
}
