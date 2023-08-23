//components
import TravelerAction from "./TravelerAction";
import TravelerCategory from "./TravelerCategory";
import TravelerTopActions from "./TravelerTopActions";
import TravelerImage from "./TravelerImage";
import TravelerPrice from "./TravelerPrice";
import TravelerRating from "./TravelerRating";
import TravelerTitle from "./TravelerTitle";
import { TravelerCardProps } from "./interfaces";

const TravelerCard = (props: TravelerCardProps) => {
    const { image,
        rating,
        category,
        title,
        price,
        favorite,
        showPrice,
        showTitle,
        showCategory,
        showRating,
        report } = props;
    return (
        <div className="w-60 pb-2 overflow-hidden relative border-[1px] border-solid border-slate-400 rounded">
            <TravelerImage src={image} />
            {showCategory && <TravelerCategory category={category} />}
            {showTitle && <TravelerTitle title={title} />}
            {showRating && <TravelerRating rating={rating} />}
            {showPrice && <TravelerPrice price={price} currency="€" />}
            <TravelerTopActions favorite={favorite} report={report} />
            <TravelerAction />
        </div>
    )
}


export default TravelerCard;

