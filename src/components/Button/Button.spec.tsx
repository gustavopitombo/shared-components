import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Button from './index';

describe("Button component", () => {
    it("render button", () => {
        const { getByTestId } = render(<Button>Clique aqui</Button>);   
        expect(getByTestId("shd-button")).toHaveTextContent("Clique aqui");
    });

    it("matches snapshot", () => {
        const tree = renderer.create(<Button>Clique aqui</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})