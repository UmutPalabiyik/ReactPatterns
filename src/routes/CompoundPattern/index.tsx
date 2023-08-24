import TravelerCard from "./TravelerCard"
import { products } from "./data"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReportIcon from '@mui/icons-material/Report';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { TravelerCardProps } from "./interfaces";

const WithCompoundPattern = () => {
    return (
        <div className="p-16 flex flex-wrap justify-center gap-4">
            {
                products.map((product: TravelerCardProps) => (
                    <TravelerCard product={product}>

                        <TravelerCard.TravelerTopActions>
                            <TravelerCard.TravelerTopAction icon={<FavoriteIcon />} />
                            <TravelerCard.TravelerTopAction icon={<ReportIcon />} />
                            <TravelerCard.TravelerTopAction icon={<ModeCommentIcon />} />
                        </TravelerCard.TravelerTopActions>

                        <TravelerCard.TravelerImage />
                        <TravelerCard.TravelerCategory />
                        <TravelerCard.TravelerTitle />
                        <TravelerCard.TravelerRating />
                        <TravelerCard.TravelerPrice currency="$" />
                        <TravelerCard.TravelerAction />

                    </TravelerCard>
                ))
            }
        </div>

    )
}

export default WithCompoundPattern;