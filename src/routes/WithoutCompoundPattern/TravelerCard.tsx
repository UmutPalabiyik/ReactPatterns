import TravelerAction from "./TravelerAction";
import TravelerCategory from "./TravelerCategory";
import TravelerFavoriteReportAction from "./TravelerFavoriteReportAction";
import TravelerImage from "./TravelerImage";
import TravelerPrice from "./TravelerPrice";
import TravelerRating from "./TravelerRating";
import TravelerTitle from "./TravelerTitle";

const TravelerCard = (props: any) => {
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
            <TravelerCategory category={category} showCategory={showCategory} />
            <TravelerTitle title={title} showTitle={showTitle} />
            <TravelerRating rating={rating} showRating={showRating}/>
            <TravelerPrice price={price} currency="€" showPrice={showPrice}/>
            <TravelerFavoriteReportAction favorite={favorite} report={report} />
            <TravelerAction />
        </div>
    )
}




export default TravelerCard;