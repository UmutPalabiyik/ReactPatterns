import { createContext, useContext, useState } from "react"

//mui
import { Box } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const TravelerContext = createContext({});

const Traveler = ({ src, alt, children }: any) => {
    const [toggle, setToggle] = useState(false)


    return (
        <div className="w-80 h-96 overflow-hidden relative">
            <img src={src} alt={alt} className="w-full max-w-full max-h-full rounded-lg" />
            <TravelerContext.Provider value={{ toggle, setToggle }}>
                {children}
            </TravelerContext.Provider>
        </div>

    )
}


const Toggle = () => {
    const { setToggle }: any = useContext(TravelerContext)

    return (<Box
        className="w-8 h-8 flex justify-center items-center cursor-pointer rounded-full absolute right-4 top-4 bg-slate-900"
        onClick={() => setToggle((prev: any) => !prev)}>
        <MoreHorizIcon sx={{
            color: 'white'
        }}/>
    </Box>)
}

const List = ({ children }: any) => {
    const { toggle }: any = useContext(TravelerContext);

    return (
        toggle && <ul className="flex flex-col absolute right-1 top-[52px] bg-slate-900 rounded">
            {children}
        </ul>
    )
}

const Item = ({ children }: any) => (
    <li className="text-white font-poppins text-xs p-3">{children}</li>
)


Traveler.Toggle = Toggle;
Traveler.List = List;
Traveler.Item = Item
export default Traveler