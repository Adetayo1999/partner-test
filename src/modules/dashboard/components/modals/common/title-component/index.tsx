interface TitleComponentProps {
  children: React.ReactNode | string;
  className?: string;
}

export const TitleComponent = ({
  children,
  className,
}: TitleComponentProps) => (
  <p
    className={`"capitalize text-[#C3C0C0]  mb-2 text-xs  font-bold" ${
      className || ""
    }`}
  >
    {children}
  </p>
);
