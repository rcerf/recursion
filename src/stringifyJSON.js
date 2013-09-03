
//Recursive stringify function
var stringifyJSON = function(obj){
  var partial,
      i,
      k,
      v;

	// if bool, string, num, null, undefined
	// return '' + obj (string version)
	if(typeof(obj) === "number" || typeof(obj) === "boolean" || obj === null){
      console.log("primitive " + obj);
  		return String(obj);
	} 
 
 if(typeof(obj) === "string"){
    //maintain the printing of the quotation marks for strings.
    console.log(obj);
    return "\"" + obj + "\"" ;
  }

  // if obj is an array
  // return map of each element passed to stringify
  // ex: [1,2,3] return [1,2,3].map(function(el){ return stringify(el)}).join(', ')
  // return result of map
  if(obj instanceof Object){

    //Make an array to handle partial results
    partial = [];

    //handle arrays
    if(obj instanceof Array){
      //The value is an array. Stringify every element.
      for(i=0; i<obj.length; i++){
        partial[i] = stringifyJSON(obj[i]);
      }

      //Join all the elements together, seperate with commas, and wrap them in brackets.
      v = partial.length === 0
        ? "[]"
        : "[" + partial.join(",") + "]";

      return v;
    }else{
    // handle objects

      for(key in obj){
        v = stringifyJSON(obj[key]);
        k = stringifyJSON(key);
        partial.push(k + ":" + v);
      }
    }
    
    v = partial.length === 0
      ? "{}"
      : "{" + partial.join(",") + "}";

    return v;
  }

}