import FavoriteIcon from '@mui/icons-material/Favorite';
import ReportIcon from '@mui/icons-material/Report';

type Props = {
    favorite: boolean;
    report: boolean
}

const TravelerFavoriteReportAction = ({ favorite, report }: Props) => {

    return (
        <div className='absolute top-2 right-2 flex items-center gap-1'>
            {favorite && <FavoriteIcon className="cursor-pointer" style={{ fill: '#FFFF' }}/>}
            {report && <ReportIcon className="cursor-pointer"  style={{ fill: '#FFFF' }}/>}
        </div>
    )
}


export default TravelerFavoriteReportAction;