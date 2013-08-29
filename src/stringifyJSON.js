// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {

	var stringifiedObj = "";
	var stringify = function(item){
		stringifiedObj = stringifiedObj+", "+item;
	}
	//Test if obj is a string
	if(typeof(obj) === "string"){
		stringify(obj);
	}
	//Test if obj is Array
	if(obj instanceof Array){
		//pull out elements from array
		for(var i=0; i<obj.length; i++){
			//TEST: if element is empty
			if(obj[i].length === 0){
				stringify("[]");
			//TEST: if element is an object
			}else if(obj[i] instanceof Object){
				//recurse
				stringifyJSON(obj[i]);
			}else{
				stringify(obj[i]);
			}
		}
	}
	//If obj is Object
	if(obj instanceof Object){
		//Pull out 1 element from object
		for(var property in obj){
			//test if object is empty
			}if(obj[property].length === 0){
				stringify("{}");
			//TEST: if element is embeded object
			}else if(obj[property] instanceof Object){
				//recurse
				stringifyJSON(obj[property]);
			}else{
				//stringify element
				stringify(obj[property]);
			}
		}
	}
	console.log(stringifiedObj);
};
