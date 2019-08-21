'use strict';
/* global cuid */
// eslint-disable-next-line no-unused-vars


const Item = (function(){
  const foo = 'bar';
    
  function validateName(name) {
    if (!name) {
      throw new TypeError('Thats not a name!!!');
    } 
  }
  
  function create (name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  }


  return {
    validateName,
    create
  }

}() );



