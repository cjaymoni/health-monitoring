import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm, resetForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: 'contained',
    color: otherProps.color,
    fullWidth: true,
    onClick: otherProps.type === 'submit' ? handleSubmit : resetForm,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
