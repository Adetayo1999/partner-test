import Select from "react-select";

interface CustomSelectProps {
  options: { value: string; label: string }[];
  className?: string;
  defaultValue?: { value: string; label: string };
}

export const CustomSelect = ({
  options,
  className,
  defaultValue,
}: CustomSelectProps) => {
  return (
    <Select
      options={options}
      className={className}
      defaultValue={defaultValue}
    />
  );
};
