const countDataLength = (data, filterKey, filterValue) => {
  const length = data?.filter((dataSingle) => {
    let currentValue = dataSingle[filterKey];

    return currentValue?.toLowerCase() === filterValue?.toLowerCase();
  })?.length;
  return !length ? 0 : length;
};

export default countDataLength;
