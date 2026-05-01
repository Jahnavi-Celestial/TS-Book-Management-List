import Box from '@mui/material/Box';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button, Typography } from '@mui/material';
import BookForm from './BookForm';

const BookContainer = () => {
  return (
    <Box component="section" sx={{ p: "40px", border: '1px solid black', margin: "50px 50px 0"}}>
      <Button variant="contained" sx={{width: "100%", display: 'flex', justifyContent: "flex-start"}}>
        <ArrowRightIcon sx={{fontSize: "50px"}}/>
        <Typography variant="h5" component="p" sx={{width: "100%"}}>Insert Book Details</Typography>
      </Button>

      <BookForm/>
    </Box>
  )
}

export default BookContainer