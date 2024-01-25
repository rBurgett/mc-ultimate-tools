import React from 'react';

export interface DripstoneBlockCardProps {
  children?: any
}
export const DripstoneBlockCard = ({ children }: DripstoneBlockCardProps) => {
  return (
    <div style={dripstoneBlockStyles.card} className={'card dripstone-block-bg p-4'}>
      <div className={'card-body ps-0 pe-0 pt-0 pb-0'}>
        {children}
      </div>
    </div>
  );
};
const dripstoneBlockStyles = {
  card: {
    width: 500,
    maxWidth: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: '#000000',
    borderWidth: 4,
  },
};
