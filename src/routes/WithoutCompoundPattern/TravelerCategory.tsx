type Props = {
    category: string
    showCategory?: boolean
}

const TravelerCategory = ({ category, showCategory = true }: Props) => {

    if(!showCategory) return null
    return <p className="text-[.7rem] text-[#757575] uppercase mt-2">{category}</p>
}

export default TravelerCategory;