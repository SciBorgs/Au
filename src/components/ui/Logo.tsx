import React from "react";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Logo: React.FC<DivProps> = ({ ...rest }) => {
  return (
    <div {...rest}>
      <span className="text-yellow-400">A</span>
      <span className="text-yellow-600">u</span>
    </div>
  );
};
