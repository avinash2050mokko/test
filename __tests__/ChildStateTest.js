import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import Child from "../src/Child";

it("Check function and state test cases", () => {
  let ChildData = renderer.create(<Child />).getInstance();

  console.log(ChildData)
  expect(ChildData.change(2)).toEqual(20)
});
