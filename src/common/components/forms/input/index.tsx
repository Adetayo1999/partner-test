import React, { InputHTMLAttributes, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FieldError } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';

interface InputProps extends InputHTMLAttributes<any> {
	labelText?: string | React.ReactNode;
	error?: FieldError;
	hasButton?: boolean;
	buttonText?: string;
	clickHandler?: () => void;
	buttonLoading?: boolean;
}

export const Input: React.FC<InputProps> = React.forwardRef(
	(
		{
			labelText,
			className,
			error,
			hasButton,
			buttonText,
			buttonLoading,
			type,
			name,
			clickHandler,
			...rest
		},
		ref
	) => {
		const [isPasswordVisible, setIsPasswordVisible] = useState(false);

		const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			setIsPasswordVisible((prev) => !prev);
		};

		const renderInputLabel = () => {
			if (typeof labelText === 'string')
				return (
					<label className={`text-xs font-semibold ${error && 'text-red-500'}`}>{labelText}</label>
				);
			return labelText;
		};

		return (
			<div className='w-full'>
				<div className="flex flex-col gap-y-2 mb-1">
					{labelText && renderInputLabel()}
					<div className="relative">
						<input
							className={`${className} md:text-sm h-[3rem] outline-none bg-[#F8FAFC]  transition-all duration-200 text-xs border  rounded-xl px-4 py-2 border-opacity-40 w-full ${
								error
									? 'border-red-500'
									: 'border-[#CBD5E1]  focus:ring-2 focus:ring-primary focus:ring-opacity-40'
							}  ${type === 'password' ? 'pr-8' : ''} `}
							type={isPasswordVisible ? 'text' : type}
							name={name}
							{...rest}
							ref={ref as any}
						/>
						{hasButton && (
							<button
								className="absolute right-3 top-[35%] text-xs font-semibold text-primary"
								onClick={clickHandler}
								disabled={buttonLoading}
							>
								{buttonLoading ? <ClipLoader color="#0047FF" size={18} /> : buttonText}
							</button>
						)}
						{name?.includes('password') && (
							<button className="absolute right-3 top-[33%]" onClick={handlePasswordToggle}>
								{!isPasswordVisible ? (
									<FaEye className="text-sm text-gray-700 hover:text-gray-900" />
								) : (
									<FaEyeSlash className="text-sm text-gray-700 hover:text-gray-900" />
								)}
							</button>
						)}
					</div>
				</div>
				<div className="h-4">
					{error && (
						<span className="text-xs text-red-500 font-medium">
							{error.message || 'field required'}
						</span>
					)}
				</div>
			</div>
		);
	}
);
