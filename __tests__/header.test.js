import React from "react";
import renderer from "react-test-renderer";
import Header from "../src/components/header/header.js";

describe("<Header/>", () => {
  it("is alive at application start", () => {
    let app = shallow(<Header />);
    expect(app.find("h1").exists()).toBeTruthy();
  });
});
