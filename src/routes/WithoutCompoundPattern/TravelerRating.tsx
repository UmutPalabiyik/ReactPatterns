import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type Props = {
    rating: number
}

const TravelerRating = ({ rating }: Props) => {
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