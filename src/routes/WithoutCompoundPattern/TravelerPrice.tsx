type Props = {
    price: number;
    currency?: string;
    showPrice?: boolean
}

const TravelerPrice = ({ price, currency = "TL", showPrice }: Props) => {
    if (!showPrice) return null
    return <p className="text-[#343232] text-[1.5rem] font-bold font-poppins mt-1">{currency} {price}</p>
}

export default TravelerPrice;