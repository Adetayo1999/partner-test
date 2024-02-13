import { NavLink } from "react-router-dom";

export interface TabsProps  {
      tabs: { id: number; title: string; path: string }[]
}


export const Tabs = ({ tabs }: TabsProps) => {
    return(
        <div className="text-sm font-medium text-center  border-b border-[#C0C0C0] ">
         <ul className="flex flex-wrap -mb-px">
         {
              tabs.map((item) => (
                <li key={item.id} className="mr-2 min-w-[9.813rem]">
                    <NavLink  to={item.path} 
                    className={({ isActive }) => `w-full inline-block p-3  border-b-2  rounded-t-lg text-sm font-bold ${isActive  ? 'text-[#000] border-[#000]' : 'text-[#797D8C] border-transparent'} `} >
                    {item.title}
                </NavLink>
                </li>
              ))
         }
         </ul>
        </div>
    )
}