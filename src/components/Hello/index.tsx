import React from 'react';

export const Hello = (props : any) => (
    <h1 data-testid="shd-hello" className="hello-world">
        {props.children}
    </h1>
)

export default Hello;
