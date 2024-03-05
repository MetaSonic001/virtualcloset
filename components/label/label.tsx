import React, { ReactNode } from 'react';

interface LabelProps {
  htmlFor?: string;
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
}

export default Label;
