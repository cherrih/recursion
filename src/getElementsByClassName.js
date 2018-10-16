// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// You should use:
//document.body: Returns the <body> or <frameset> node of the current document, or null if no such element exists
//element.childNodes: returns a live NodeList of child nodes of the given element where the first child node is assigned index 0
//element.classList: returns a collection of the class attributes of the element

//input = class to search for
//output = array of nodes

var getElementsByClassName = function(className) {
  var elements = [];

  //function that finds whether each element satisfies a condition (contains className) 
  //add to result
  var matchesClassName = function(element){
    if (element.classList && element.classList.contains(className)){
      elements.push(element);
    }
    if (element.childNodes){
      element.childNodes.forEach(function(item){
        matchesClassName(item);
      })
    }
  }
  //check if there are children nodes
  //recursive call again
  
  matchesClassName(document.body);
  return elements;

};



