import { Loader } from ".."


export const PageLoader = () => {
    return(
        <div className="h-[80vh] flex justify-center items-center">
            <Loader 
            size={60}
            color= "#0075E2"
            />
        </div>
    )
}