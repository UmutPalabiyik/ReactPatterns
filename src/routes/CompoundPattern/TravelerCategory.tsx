import { useContext } from "react";
import { TravelerCardContext } from "./TravelerCard";

const TravelerCategory = () => {
    const { category } = useContext(TravelerCardContext)
    return <p className="text-[.7rem] text-[#757575] uppercase mt-2">{category}</p>
}

export default TravelerCategory;