const getItemsFromLocalstorage = (itemName) => {
  let itemsFromLocastorage = localStorage.getItem(itemName);

  if (itemsFromLocastorage) {
    itemsFromLocastorage = JSON.parse(itemsFromLocastorage);
  } else {
    itemsFromLocastorage = null;
  }
  return itemsFromLocastorage;
};

export default getItemsFromLocalstorage;
