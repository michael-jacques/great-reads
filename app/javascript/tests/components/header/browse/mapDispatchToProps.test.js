import { Map } from "immutable";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import mapDispatchToProps from "../../../../components/header/browse/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("mapDispatchToProps", () => {
  const props = mapDispatchToProps(store.dispatch);

  describe("showDropdown", () => {
    const { showDropdown } = props;

    it("returns the expected action", () => {
      const expectedAction = {
        type: "TOGGLE_HEADER_DROPDOWN",
        payload: Map({
          navItem: "browse",
          value: true,
        }),
      };
      showDropdown();

      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });

  describe("hideDropdown", () => {
    const { hideDropdown } = props;

    it("returns the expected action", () => {
      const expectedAction = {
        type: "TOGGLE_HEADER_DROPDOWN",
        payload: Map({
          navItem: "browse",
          value: false,
        }),
      };
      hideDropdown();

      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });
});
