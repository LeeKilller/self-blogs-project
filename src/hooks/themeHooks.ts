import { useAppDispatch, useAppSelector } from "./storeHooks";
import { switchTheme } from "@/store/modules/customSlice";
import { setIsMenuFlod } from "@/store/modules/adminSlice";


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

const useMenuFlod = () => {
    const dispatch = useAppDispatch();
    const { isMenuFlod } = useAppSelector(state => state.admin);

    return [
        isMenuFlod,
        (x:boolean)=>{
            dispatch(setIsMenuFlod(x));
        }
    ] as [boolean,(x:boolean)=>void]
        
}



export {
    useTheme,
    useMenuFlod
}