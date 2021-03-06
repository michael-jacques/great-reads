import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Map } from "immutable";

import mapDispatchToProps from "../../../components/signUp/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("mapDispatchToProps", () => {
  const props = mapDispatchToProps(store.dispatch);

  describe("onSubmit", () => {
    const { onSubmit } = props;
    const form = {
      email: "test@example.com",
      password: "password",
      password_confirmation: "password",
    };

    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        success: true,
        user: { id: 1, email: "hey", role: "sup" },
      }));
    });

    it("dispatches the correct action", () => {
      const expectedAction = {
        payload: Map({
          email: "hey",
          id: 1,
          role: "sup",
        }),
        type: "SIGN_UP_SUCCESS",
      };

      onSubmit(form)
        .then(() => {
          expect(store.getActions()).toContainEqual(expectedAction);
        });
    });
  });
});
