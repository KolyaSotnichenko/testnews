import { Box } from '@mui/system'
import Navbar from './Navbar'

const Header = () => {
  return (
    <Box
        component='header'
        sx={{
            mb: '50px',
            display: 'flex',
            justifyContent: 'center'
        }}
    >
        <Navbar />
    </Box>
  )
}

export default Header