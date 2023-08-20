type Props = {
    price: number;
    currency?: string
}

const TravelerPrice = ({ price, currency = "TL" }: Props) => {
    return <p className="text-[#343232] text-[1.5rem] font-bold font-poppins mt-1">{currency} {price}</p>
}

export default TravelerPrice;