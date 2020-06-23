import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Hello from './index';

describe("Hello component", () => {
    it("render button", () => {
        const { getByTestId } = render(<Hello>Hello User</Hello>);   
        expect(getByTestId("shd-hello")).toHaveTextContent("Hello User");
    });

    it("matches snapshot", () => {
        const tree = renderer.create(<Hello>Clique aqui</Hello>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})