type Props = {
    title: string
    showTitle: boolean
}

const TravelerTitle = ({ title, showTitle = true }: Props) => {
    if (!showTitle) return null
    return <p className="text-[#343232] text-[1rem] font-poppins mt-2">{title}</p>
}

export default TravelerTitle;