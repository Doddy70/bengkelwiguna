const modifyNumber = (number) => {
  const numberModifiabe = number ? number : 0;
  return numberModifiabe < 10 ? `0${numberModifiabe}` : numberModifiabe;
};

export default modifyNumber;
