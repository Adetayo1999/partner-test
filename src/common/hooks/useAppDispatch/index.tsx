import { AppDispatch } from "@common/redux";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
