import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface BackButtonProps {
  style?: React.CSSProperties,
}
export const BackButton = (props: BackButtonProps) => {

  const {
    style = {},
  } = props;

  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <a
      title={'Go back'}
      href={'#'}
      onClick={onClick}
      style={{...styles.button as React.CSSProperties, ...style}}>
      <i className={'fa fa-arrow-left'} />
    </a>
  );
};
const styles = {
  button: {
    position: 'absolute',
    top: 10,
    left: 15,
    color: '#fff',
    fontSize: 30,
  },
};
