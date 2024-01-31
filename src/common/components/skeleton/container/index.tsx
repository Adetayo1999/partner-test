

interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
     return(
        <div className="mx-auto w-[95%] md:w-[85%]">
            {children}
        </div>
     )
}