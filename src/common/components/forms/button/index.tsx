import { ButtonHTMLAttributes } from 'react';
import { ClipLoader } from 'react-spinners';

interface BaseProps extends ButtonHTMLAttributes<any> {
	clickHandler?: () => void;
	loading?: boolean;
	size?: "sm" | "md" | "xl"
	variant?: "primary" | "danger" | "secondary"
}

type ButtonProps = BaseProps & ({ text: string; children?: never } | { children: React.ReactNode; text?: never }) 



export const Button = ({
	text,
	clickHandler,
	className,
	children,
	loading,
	disabled,
	size = "md",
	variant = "primary",
	...rest
}: ButtonProps) => {

	const getBackgroundColor = (variant: "primary" | "danger" | "secondary") => {
		switch(variant) {


			case "danger":
				return "bg-danger";
			
			case "secondary":
				return "bg-secondary"	

			default:
			return  "bg-primary";


		}
	}

	const getSizeStyles = (size: "sm" | "md" | "xl") => {

		switch(size) {

			case "sm":
			return "px-[0.875rem] py-[0.438rem] min-w-[5rem] text-xs"

			default:
				return "w-full md:max-w-[10.938rem] p-[1.5rem] text-sm h-[3rem]"
		}

	}


	return (
		<button
			onClick={clickHandler}
			className={`${className || ''}  text-white disabled:cursor-not-allowed disabled:bg-opacity-70  rounded-lg py-3  font-semibold inline-flex items-center justify-center  ${getSizeStyles(size)} ${getBackgroundColor(variant)}`}
			{...rest}
			disabled={loading || disabled}
		>
			{loading ? <ClipLoader color="white" size={15} /> : text || children}
		</button>
	);
};
