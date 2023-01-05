import classNames from "classnames";
import React from "react";
import { Wizard } from "../components/Wizard";
import { useStateStore } from "../hooks/state-store";
import shallow from "zustand/shallow";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const WizardCard: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  const [currentStep, numSteps] = useStateStore(
    (state) => [state.currentStep, state.numSteps],
    shallow
  );

  const activeIndex = currentStep - 1;

  return (
    <div className={classNames("flex flex-col gap-7", className)} {...props}>
      <Wizard
        className="w-full"
        activeIndex={activeIndex}
        numSteps={numSteps}
        stepLabels={["asdf", "qwer", "xcv", "ghjk"]}
      />

      {children}
    </div>
  );
};
