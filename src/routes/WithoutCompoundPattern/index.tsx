import TravelerCard from "./TravelerCard"
import { products } from "./data"
import { TravelerCardProps } from "./interfaces"

const WithoutCompoundPattern = () => {
    return (
        <div className="p-16 flex flex-wrap justify-center gap-4">
            {
                products.map((card: TravelerCardProps) => {
                    return (
                        <TravelerCard
                            image={card.image}
                            rating={card.rating}
                            category={card.category}
                            title={card.title}
                            price={card.price}
                            showPrice
                            showTitle
                            showCategory
                            showRating
                            favorite
                            report
                        />
                    )
                })
            }
        </div>

    )
}

export default WithoutCompoundPattern;