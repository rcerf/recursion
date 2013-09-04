// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	// your code here
	if(node === undefined){
	var node = document;
	}

	if(node.childNodes.length === 0){
	// EASY
	// either this node, or no nodes :D
	return;

	} else {

	// does this node have className?
	// call getElementsByClassName with each of the childNodes and collect the results
	var elementsArray = [];
	// this code will come in handy:
		for(var x =0; x<node.childNodes.length; x++){
			if(node.childNodes[x].classList !== undefined){
				var nodesArray = node.childNodes[x].classList;

				for(var y=0; y<nodesArray.length; y++){
					if(nodesArray[y].contains(className)){
						elementsArray.push(node.childNodes[x]);
					}
				}
				return node.getElementsByClassName(className);
			}
		}
		return elementsArray;
	}
};
