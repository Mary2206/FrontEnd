
	var elements = document.querySelector('.elements');

	var pageHeight = 0;
	 document.addEventListener('scroll', function () {
		var scrollTop = document.body.scrollTop;
		var clientHeight = document.documentElement.clientHeight;
		if (((scrollTop + clientHeight) >= document.body.scrollHeight)&& (document.body.scrollHeight != pageHeight))
		{
			pageHeight = document.body.scrollHeight;
			loadMore();
		}
	});
	
function loadMore(){
  var xhr = new XMLHttpRequest();
  
  xhr.open('GET', './data.json', true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return 

    if (xhr.status === 200 || xhr.status === 201) {
      var data = JSON.parse(xhr.responseText);

      data.goods.forEach(function (item) {
        var itemNode = document.createElement('div');
        itemNode.classList.add('item');

        var previewNode = document.createElement('span');
        previewNode.classList.add('preview');

        var imgNode = document.createElement('img');
        imgNode.src = 'goods/' + item.preview;

        var titleNode = document.createElement('span');
        titleNode.classList.add('title');
        titleNode.appendChild(document.createTextNode(item.title));

        var priceNode = document.createElement('span');
        priceNode.classList.add('price');
        priceNode.appendChild(document.createTextNode(item.price + ' P'));

        previewNode.appendChild(imgNode);

        itemNode.appendChild(previewNode)
        itemNode.appendChild(titleNode)
        itemNode.appendChild(priceNode)
        
        elements.appendChild(itemNode);
      });
    }
  }

  xhr.send();
}
 




