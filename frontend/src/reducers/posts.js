export default  (posts=[], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
      break;
    case "CREATE_POST":
      return [...action,action.payload];

      break;
    default:
      return posts;
  }
};
