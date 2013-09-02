var each = function(collection, iterator) {
  if(Array.isArray(collection)){
    for(var i =0; i<collection.length; i++){
      iterator(collection[i], i, collection);
    }
  } else {
    for(var key in collection){
      iterator(collection[key], key, collection);
    }
  }

};

// Return the results of applying an iterator to each element.
var map = function(array, iterator) {
  // map() is a useful primitive iteration function that works a lot
  // like each(), but in addition to running the operation on all
  // the members, it also maintains an array of results.
  var results = [];
  each(array, function(value, index){
    var result = iterator(value);
    results.push(result);
    console.log("result returned " + result);
  });
  
  return results;
};

//Recursive stringify function
var stringifyJSON = function(obj){

	// if bool, string, num, null, undefined
	// return '' + obj (string version)
	if(typeof(obj) === "number" || typeof(obj) === "boolean" || obj == undefined){
      console.log("primitive " + obj);
  		return String(obj);
	} 
  else if(typeof(obj) === "string"){
    //maintain the printing of the quotation marks for strings.
    // ***Look into espcaping rules***
    return "" + obj + "" ;
  }

  // if obj is an array
  // return map of each element passed to stringify
  // ex: [1,2,3] return [1,2,3].map(function(el){ return stringify(el)}).join(', ')
  // return result of map

  else if(obj instanceof Array){
    return ("[" + map(obj, function(item){
      console.log("array " + item);
      return stringifyJSON(item);
    }).join(", ") + "]");
  } 

  // return: handle objects too, again values recursive

}