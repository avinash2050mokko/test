import "react-native";
import React from "react";
import Child from "../src/Child";

import renderer from "react-test-renderer";

let findElement = function(child, element) {
  let result = undefined;

  child.children.map((data, index) => {
    if ((data.props.testID = element)) {
      result = true;
    }
  });
  return result;
};

it("find Element", () => {
  let child = renderer.create(<Child />).toJSON();

  expect(findElement(child, "username")).toBeDefined();
});
