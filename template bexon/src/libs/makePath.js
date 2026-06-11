const makePath = (text) => {
  const pathMakeAbleText = text
    ? text.toLowerCase()?.split("/").join(" ").split("&").join(" ")
    : "";
  const path = pathMakeAbleText ? pathMakeAbleText?.split(" ")?.join("_") : "#";
  return path;
};

export default makePath;
