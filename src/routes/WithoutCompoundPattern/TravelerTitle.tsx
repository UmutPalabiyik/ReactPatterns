type Props = {
    title: string
}

const TravelerTitle = ({ title }: Props) => {
    return <p className="text-[#343232] text-[1rem] font-poppins mt-2">{title}</p>
}

export default TravelerTitle;