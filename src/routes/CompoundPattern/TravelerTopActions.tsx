import { jsx } from '@emotion/react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReportIcon from '@mui/icons-material/Report';
import { Box } from '@mui/material';

/* type Props = {
    favorite: boolean;
    report: boolean
} */

const TravelerTopActions = ({ children }: { children: React.ReactNode }) => {

    return (
        <Box className='absolute top-2 right-2 flex items-center gap-1' sx={{
            '& svg': {
                fill: '#FFFF'
            }
        }}>
            {children}
        </Box>
    )
}


export default TravelerTopActions;