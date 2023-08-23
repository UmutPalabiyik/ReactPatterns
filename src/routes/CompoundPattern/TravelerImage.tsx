import { useContext } from "react";
import { TravelerCardContext } from "./TravelerCard";

const TravelerImage = () => {
    const { image } = useContext(TravelerCardContext)
    return <img className="h-72 w-full" src={image} alt={image}>

    </img>

}


export default TravelerImage