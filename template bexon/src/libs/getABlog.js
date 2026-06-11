import getBlogs from "./getBlogs";

const getABlog = (currentId) => {
  const blogs = getBlogs();
  const blog = blogs?.find(({ id }) => parseInt(currentId) === id);
  return blog;
};

export default getABlog;
