import { useContext } from "react";
import { TravelerCardContext } from "./TravelerCard";

type Props = {
    currency?: string;
}

const TravelerPrice = ({ currency = "TL" }: Props) => {
    const { price } = useContext(TravelerCardContext)

    return <p className="text-[#343232] text-[1.5rem] font-bold font-poppins mt-1">{currency} {price}</p>
}

export default TravelerPrice;