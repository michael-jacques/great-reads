import headerActions from "../../../actions/headerActions";

export default dispatch => {
  const { toggleHeaderDropdown } = headerActions;

  return {
    showDropdown: () => dispatch(toggleHeaderDropdown("browse", true)),
    hideDropdown: () => {
      dispatch(toggleHeaderDropdown("browse", false));
    },
  };
};
