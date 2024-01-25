import React from 'react';

export const Container = (props: {children?: any, className?: string, style?: React.CSSProperties}) => {

  const { children, className, style = {} } = props;

  return (
    <div className={className} style={{...styles.container as React.CSSProperties, ...style}}>
      {children}
    </div>
  );
};
const styles = {
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
};
