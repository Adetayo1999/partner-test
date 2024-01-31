import Select from "react-select"


interface CustomSelectProps  {
    options: { value: string; label: string }[]
    className?: string
}

export const CustomSelect = ({ options, className }: CustomSelectProps) => {
    return(
      <Select options={options} className={className}  />
    )
}

