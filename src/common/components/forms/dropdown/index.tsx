import React, { SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends SelectHTMLAttributes<any> {
	labelText?: string | React.ReactNode;
	error?: FieldError;
    options: { value: string; label: string }[]
}

export const Dropdown: React.FC<InputProps> = 
	(
		{
			labelText,
			className,
			error,
            options,
			...rest
		},
	) => {


		const renderInputLabel = () => {
			if (typeof labelText === 'string')
				return (
					<label className={`text-xs font-semibold ${error && 'text-red-500'}`}>{labelText}</label>
				);
			return labelText;
		};

		return (
			<div>
				<div className="flex flex-col gap-y-2 mb-1">
					{labelText && renderInputLabel()}
					<div className="relative">
                        <select name="" id=""
                        className={`${className} md:text-sm h-[3rem] outline-none bg-[#F8FAFC]  transition-all duration-200 text-xs border  rounded-xl px-4 py-2 border-opacity-40 w-full ${
                            error
                                ? 'border-red-500'
                                : 'border-[#CBD5E1]  focus:ring-2 focus:ring-primary focus:ring-opacity-40'
                        } `}
                        {...rest}
                        >
                            {
                             options.map((item) => <option value={item.value} key={item.value} >{item.label}</option> )
                            }
                        </select>
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
