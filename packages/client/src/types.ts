export type IconComponent = React.FC<
  React.ComponentProps<"svg"> & {
    title?: string;
    titleId?: string;
  }
>;
