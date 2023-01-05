import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import classNames from "classnames";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  activeIndex?: number;
  numSteps: number;
  stepLabels: string[];
}

export const Wizard: React.FC<Props> = ({
  activeIndex = 0,
  numSteps,
  stepLabels,
  className,
  ...props
}) => {
  const validStepLabels = stepLabels.length === numSteps;

  if (!validStepLabels) {
    throw new Error("Length of stepLabels must match numSteps");
  }

  const produceChildren = () => {
    const children = [];

    for (let i = 0; i < numSteps; i++) {
      const isActive = i === activeIndex;
      const progress = (
        <Progress
          key={i}
          index={i}
          isActive={isActive}
          stepLabel={stepLabels[i]}
        />
      );
      children.push(progress);
    }

    return children;
  };

  return (
    <div className={classNames("flex gap-3", className)} {...props}>
      {produceChildren()}
    </div>
  );
};

interface IWizardProgressProps {
  isActive?: boolean;
  index: number;
  stepLabel: string;
}

export const Progress: React.FC<IWizardProgressProps> = ({
  isActive = false,
  index,
  stepLabel,
}) => {
  const opacity = isActive ? "opacity-1" : "opacity-[.12]";
  const className = `w-full h-1.5 bg-main-black rounded-full cursor-pointer ${opacity}`;
  const order = index + 1;

  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger className="w-full">
          <div className={className} />
        </Tooltip.Trigger>
        <Tooltip.Content
          className="flex justify-center items-center h-6 px-2 bg-main-black rounded-sm text-light-gray text-sm font-medium"
          side="bottom"
          sideOffset={8}
        >
          <span className="opacity-50">{order}.</span> &nbsp;
          {stepLabel}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
