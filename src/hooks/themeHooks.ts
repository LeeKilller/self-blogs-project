import { useAppDispatch, useAppSelector } from "./storeHooks";
import { switchTheme } from "@/store/modules/customSlice";


const useTheme = () => {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.custom)
    // console.log('useTheme',theme);
    

    return {
        curTheme: theme,
        switchCurTheme: () => {
            dispatch(switchTheme());
        }
    }
}



export {
    useTheme
}