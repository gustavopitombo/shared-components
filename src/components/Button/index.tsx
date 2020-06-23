import React, { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode,
    onClick?: () => void,
}

export const Button = ({ children, onClick }: ButtonProps) => (
    <button data-testid="shd-button" className="shd-button" onClick={onClick}>
        {children}
    </button>
)

export default Button;
