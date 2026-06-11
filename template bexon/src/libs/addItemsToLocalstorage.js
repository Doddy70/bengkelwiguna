const addItemsToLocalstorage = (itemName, items) => {
  const itemsToLocalstorage = JSON.stringify(items);
  localStorage.setItem(itemName, itemsToLocalstorage);
};

export default addItemsToLocalstorage;
