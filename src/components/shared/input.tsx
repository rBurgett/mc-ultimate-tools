import React from 'react';

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
}
export const Input = (props: InputProps) => {

  const {
    label,
    type = 'text',
  } = props;

  return (
    <div className={'mb-2'}>
      <label className={'form-label'}><strong>{label}</strong></label>
      <input className={'form-control'} type={type} {...props} />
    </div>
  );
};
