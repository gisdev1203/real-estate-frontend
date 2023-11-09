function SubmitListingReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
export default SubmitListingReducer;
