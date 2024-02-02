import { MoonLoader  } from "react-spinners";


interface LoaderProps {
    size: number;
    color: string;
}

export const Loader = (props: LoaderProps) => {
    return(
            <MoonLoader {...props} />
    )
}