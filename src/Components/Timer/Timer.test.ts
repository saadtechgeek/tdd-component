import React from "react"
import { shallow } from "enzyme"
import App from "../App/App"



describe('Timer', () => {
	it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
});
});