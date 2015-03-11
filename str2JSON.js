function str2JSON(str) {
	var data='';
	if (typeof JSON !== 'undefined'){ // IE7兼容模式不存在JSON对象
		data = JSON.parse(str);
	}else{
		eval('data='+str);
	}
	return data;
}

