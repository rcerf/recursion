// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	// your code here

	var resultsArray = []

	var traverseDom = function(className, node) {
		//...traverse starting with document.body
		// pushes to resultsArray if a match

		var nodesClassArray = node.classList;
		var l = node.childNodes.length;

		if(!nodesClassArray){
			return;
		}
		
		if(nodesClassArray.contains(className)){

			resultsArray.push(node);

		}

		

		for(var i = 0; i<l; i++) {

			traverseDom(className, node.childNodes[i]);
		}
	};

	traverseDom(className, document.body);	
	console.log(resultsArray);
	return resultsArray;




	// if(node === undefined){
	//   var node = document;
	// }

	// if(node.childNodes.length === 0){
	// // EASY
	// // either this node, or no nodes :D
	// return;

	// } else {

	// // does this node have className?
	// // call getElementsByClassName with each of the childNodes and collect the results
	// var elementsArray = [];
	// // this code will come in handy:
	// 	for(var x =0; x<node.childNodes.length; x++){
	// 		if(node.childNodes[x].classList !== undefined){
	// 			var nodesClassArray = node.childNodes[x].classList;

	// 			// for(var y=0; y<nodesClassArray.length; y++){
	// 			// 	if(nodesClassArray[y].contains(className)){
	// 			// 		elementsArray.push(node.childNodes[x]);
	// 			// 	}
	// 			// }
	// 			return getElementsByClassName(className, node.childNodes[x]);
	// 		}
	// 	}
	// 	return elementsArray;
	// }
};
