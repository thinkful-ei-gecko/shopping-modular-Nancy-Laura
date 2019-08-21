'use strict';

const store = (function () {
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id){
    return store.items.find(item => item.id === id);
  }

  function addItem(name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error) {
      console.log(`Cannot add item ${error.message}`);
    }   
  }

  function findAndToggleChecked(id){
    let fetchedItem = this.findById(id);
    fetchedItem.checked = !fetchedItem.checked;
  }

  function findAndUpdateName(id, newName){
      try {
        Item.validateName(newName);
        let item = this.findById(id);
        item.name = newName;
      }
      catch {
        console.log(`Cannot update name: {error.message}`);
      }
  }

  function findAndDelete(id){
    let indexItemToDelete = this.items.findIndex(item => id === item.id);
    items.splice(indexItemToDelete, 1);
    console.log(items);
  }
    
  function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }
  
  function setSearchTerm(term) {
    this.searchTerm = term;
  }


  return {
    items : items,
    hideCheckedItems : hideCheckedItems,
    searchTerm : searchTerm,
    findById : findById,
    addItem : addItem,
    findAndToggleChecked : findAndToggleChecked,
    findAndUpdateName : findAndUpdateName,
    findAndDelete : findAndDelete,
    toggleCheckedFilter: toggleCheckedFilter,
    setSearchTerm: setSearchTerm


  };
}() );