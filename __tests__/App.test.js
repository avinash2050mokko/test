// Test for login screen
import React from "react";
import "react-native";
import App from "../App";

import renderer from "react-test-renderer";

test("App page renders correctly", () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});
