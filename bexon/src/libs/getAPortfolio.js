import getPortfolio from "./getPortfolio";

const getAPortfolio = (currentId) => {
  const portfolios = getPortfolio();
  const portfolio = portfolios?.find(({ id }) => parseInt(currentId) === id);

  return portfolio || {};
};

export default getAPortfolio;
