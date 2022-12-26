import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon: React.ReactElement;
}

export const IconInput: React.FC<Props> = ({
  icon,
  className,
  ...inputProps
}) => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-2 -translate-y-1/2">{icon}</div>
      <input
        className={`rounded-md h-10 input-primary placeholder-blue-gray 
                    text-main-black pl-8 pr-2 text-base ${className}`}
        {...inputProps}
      />
    </div>
  );
};
