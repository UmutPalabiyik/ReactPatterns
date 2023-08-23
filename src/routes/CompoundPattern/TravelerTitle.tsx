import { useContext } from "react";
import { TravelerCardContext } from "./TravelerCard";


const TravelerTitle = () => {
    const { title } = useContext(TravelerCardContext)
    return <p className="text-[#343232] text-[1rem] font-poppins mt-2">{title}</p>
}

export default TravelerTitle;