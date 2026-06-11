import getALlServices from "./getALlServices";

const getAService = (currentId) => {
  const services = getALlServices();
  const service = services?.find(({ id }) => parseInt(currentId) === id);
  return service || {};
};

export default getAService;
