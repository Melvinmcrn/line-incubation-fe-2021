import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

import SendMelodyPage from "../SendMelodyPage";

configure({ adapter: new Adapter() });

describe("SendMelodyPage", () => {
  it("should renders correctly", () => {
    shallow(<SendMelodyPage />);
  });

  it("should includes two content columns", () => {
    const wrapper = shallow(<SendMelodyPage />);
    expect(wrapper.find(".content-column").length).toEqual(2);
  });
});
