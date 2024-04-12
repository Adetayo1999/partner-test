import Select, { ActionMeta, SingleValue } from "react-select";

interface CustomSelectProps<P> {
  options: { value: P; label: string }[];
  value?: { value: P; label: string };
  className?: string;
  defaultValue?: { value: P; label: string };
  onChange?: (
    newValue: SingleValue<{ value: P; label: string }>,
    actionMeta: ActionMeta<{ value: P; label: string }>
  ) => void;
}

export function CustomSelect<P = string>({
  options,
  className,
  defaultValue,
  onChange,
  value,
}: CustomSelectProps<P>) {
  return (
    <Select
      options={options}
      className={className}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
}
