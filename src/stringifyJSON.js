// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  //number or boolean return string
  if (typeof obj === 'number' || typeof obj === 'boolean'){
    return '' + obj;
  }
  //string return '"' + string + '"'
  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }
  //function return null
  if (typeof obj === 'function'){
    return 'null';
  }
  //undefined return null
  if (obj === undefined){
    return 'null';
  }
  //null return null
  if (obj === null){
    return 'null';
  }

  //array return '[' + array (use recursion map then .join(',')) + ']' 
  if (Array.isArray(obj)){
    return '[' + obj.map(function(i){
      return stringifyJSON(i);
    }) + ']';
  }
  //object return '{' + string(key) + ': ' + string(value) + '}'
  
  if (typeof obj === 'object'){
    var result = [];
    Object.keys(obj).forEach(function(key){
      var value = stringifyJSON(obj[key]);
      if (obj[key] !== undefined && typeof obj[key] !== 'function'){
        result.push('"' + key + '":' + value);
      }
    })
    return '{' + result.join(',') + '}';
  }
  
};