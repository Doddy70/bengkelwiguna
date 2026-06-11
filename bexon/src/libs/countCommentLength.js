const countCommentLength = (comments) => {
  const commentLength = comments?.length;
  const totalComments = commentLength ? commentLength : 0;
  const totalReplies = comments?.reduce(
    (a, cc) => a + (cc?.replies ? cc?.replies?.length : 0),
    0
  );

  return totalComments + (totalReplies ? totalReplies : 0);
};

export default countCommentLength;
