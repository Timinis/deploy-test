import React from "react";
import renderer from "react-test-renderer";
import Counter from "../src/components/counter/counter.js";

it("changes state on click", () => {
  let app = mount(<Counter />);
  let buttonDown = app.find(".downclicker");
  let buttonUp = app.find(".upclicker");
  expect(app.state("count")).toBe(0);
  buttonDown.simulate("click");
  expect(app.state("count")).toBe(-1);
  buttonUp.simulate("click");
  expect(app.state("count")).toBe(0);
  expect(app.find("span").text()).toContain("0");
});
