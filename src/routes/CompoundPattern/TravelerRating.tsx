import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useContext } from "react";
import { TravelerCardContext } from "./TravelerCard";


const TravelerRating = () => {
    const { rating } = useContext(TravelerCardContext)
    return (
        <div className='flex items-center justify-center gap-1 mt-1'>
            {
                [1, 2, 3, 4, 5].map((i: number) =>
                    i <= rating ? (
                        <GradeIcon key={i} style={{ fill: '#dbbc57' }} />
                    ) : (
                        <StarBorderIcon key={i} style={{ fill: '#dbbc57' }} />
                    )
                )
            }
        </div>
    )

}

export default TravelerRating;