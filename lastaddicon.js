/*
文章末尾加icon
*/
(function(){
	var TrimLeft = function(str)
	{
		var whitespace = '\t\r\n 　';
		while(str.length > 0 && whitespace.indexOf(str.substr(0, 1)) != -1)
		{
			str = str.substr(1);
		}
		return str;
	};

	var TrimRight = function(str)
	{
		var whitespace = '\t\r\n 　';
		while(str.length > 0 && whitespace.lastIndexOf(str.substr(str.length - 1, 1)) != -1)
		{
			str = str.substr(0, str.length - 1);
		}
		return str;
	};

	var Trim = function(str)
	{
		return TrimLeft(TrimRight(str));
	};

	var GetLastAvaNode = function(nodes)
	{
		for(var i=nodes.length-1; i>=0; --i)
		{
			var itemNode = nodes[i];
			if(itemNode.nodeName != "#text")
				return itemNode;
			else
			{
				if(Trim(itemNode.nodeValue) != "")
					return itemNode;
				else
				{
					continue;
				}
			}
		}
		return null;
	};

	var contentEleObj = document.getElementById('Cnt-Main-Article-QQ');
	 
	if(contentEleObj.childNodes.length>0)
	{
		var lastEleObj = contentEleObj.children[contentEleObj.children.length-1];
		if(lastEleObj.tagName.toLowerCase() == "p")
		{
			var avaNode = GetLastAvaNode(lastEleObj.childNodes);
			if(avaNode && 
				avaNode.nodeName == "#text" && Trim(avaNode.nodeValue).length > 15)
			{
				var iconEleObj = document.createElement("img");
				iconEleObj.src = "http://www.qq.com/favicon.ico";
				iconEleObj.width = "16";
				iconEleObj.height = "16";
				var linkEleObj = document.createElement("a");
				linkEleObj.href = "http://www.qq.com/?pref=article";
				linkEleObj.target = "_blank";
				linkEleObj.alt = "点击进入腾讯首页";
				linkEleObj.title = "点击进入腾讯首页";
				linkEleObj.id = "backqqcom";
				//linkEleObj.setAttribute('bossZone','backqqcom');
				 
        linkEleObj.style.cssText=";white-space:nowrap;";
				var textEleObj = document.createElement("span");
        textEleObj.innerHTML = "返回腾讯网首页>>";
				textEleObj.style.cssText=";padding-left:5px; font-size:14px;"; 
        textEleObj.bossZone = "backqqcom";
				linkEleObj.appendChild(iconEleObj);
				lastEleObj.appendChild(linkEleObj);
				linkEleObj.appendChild(textEleObj);
				linkEleObj.onclick = function(){
         registerZone2({bossZone:'backqqcom',url:'http://www.qq.com/?pref=article'},1)
         }

			}
		}
	}
	 
})();
