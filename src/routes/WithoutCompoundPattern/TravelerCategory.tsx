type Props = {
    category: string
}

const TravelerCategory = ({ category }: Props) => {

    return <p className="text-[.7rem] text-[#757575] uppercase mt-2">{category}</p>
}

export default TravelerCategory;