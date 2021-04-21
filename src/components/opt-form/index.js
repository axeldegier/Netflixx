import React from 'react';
import { Container, Input, Button, Text, Break } from './styles/opt-form';

export default function OptForm({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps}) {
    return (
        <Button {...restProps}>
            {children} <img src="images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
};

OptForm.Text = function OptFormText({ children, ...restProps}) {
    return <text {...restProps}>{children}</text>;
};

OptForm.Break = function OptFormBreak({ ...restProps}) {
    return <Break {...restProps} />;
};

