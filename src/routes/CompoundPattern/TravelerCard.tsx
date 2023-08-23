//components
import TravelerAction from "./TravelerAction";
import TravelerCategory from "./TravelerCategory";
import TravelerTopActions from "./TravelerTopActions";
import TravelerTopAction from "./TravelerTopAction";
import TravelerImage from "./TravelerImage";
import TravelerPrice from "./TravelerPrice";
import TravelerRating from "./TravelerRating";
import TravelerTitle from "./TravelerTitle";
import { createContext } from "react";




export const TravelerCardContext = createContext(null)

const TravelerCard = ({ product, children }: { product: any, children: any }) => {

    return (
        <TravelerCardContext.Provider value={product}>
            <div className="w-60 pb-2 overflow-hidden relative border-[1px] border-solid border-slate-400 rounded">
                {children}
            </div>
        </TravelerCardContext.Provider>

    )
}



TravelerCard.TravelerCategory = TravelerCategory;
TravelerCard.TravelerImage = TravelerImage;
TravelerCard.TravelerPrice = TravelerPrice;
TravelerCard.TravelerRating = TravelerRating;
TravelerCard.TravelerAction = TravelerAction;
TravelerCard.TravelerTitle = TravelerTitle;
TravelerCard.TravelerTopActions = TravelerTopActions;
TravelerCard.TravelerTopAction = TravelerTopAction
export default TravelerCard;

