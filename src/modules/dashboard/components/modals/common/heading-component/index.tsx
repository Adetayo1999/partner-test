interface HeadingComponentProps {
  children: React.ReactNode | string;
  className?: string;
}

export const HeadingComponent = ({
  children,
  className,
}: HeadingComponentProps) => (
  <h3 className={`${className || ""} text-sm font-bold text-[#6F6F6F]  `}>
    {children}
  </h3>
);
