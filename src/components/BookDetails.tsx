import { Box, Button, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';

interface Book {
  id: number;          
  bookName: string;
  detail: string;
  authorName: string;
  date: string;
  price: string;       
}

interface BookDetailProps{
  data: Book
}

const BookDetails = ({data}:BookDetailProps) => {
  return (
    <Stack spacing={3} sx={{border: "1px solid", alignItems: "flex-end"}}>
        <Button variant="contained" sx={{backgroundColor: "red"}}>Delete</Button>
        <Stack spacing={3} sx={{width: "100%"}}>
          <Box sx={{display: "flex",gap: "80px", justifyContent: "center", width: "100%"}}>
            <Typography sx={{width: "120px", textAlign: "end"}}>
              Book Name
            </Typography>
            <Typography sx={{width: "120px", textAlign: "start"}}>
              {data.bookName}
            </Typography>
          </Box>

          <Box sx={{display: "flex",gap: "80px", justifyContent: "center", width: "100%"}}>
            <Typography sx={{width: "120px", textAlign: "end"}}>
              Book Details
            </Typography>
            <Typography sx={{width: "120px", textAlign: "start"}}>
              {data.detail}
            </Typography>
          </Box>

          <Box sx={{display: "flex",gap: "80px", justifyContent: "center", width: "100%"}}>
            <Typography sx={{width: "120px", textAlign: "end"}}>
              Author Name
            </Typography>
            <Typography sx={{width: "120px", textAlign: "start"}}>
              {data.authorName}
            </Typography>
          </Box>

          <Box sx={{display: "flex",gap: "80px", justifyContent: "center", width: "100%"}}>
            <Typography sx={{width: "120px", textAlign: "end"}}>
              Publish Date
            </Typography>
            <Typography sx={{width: "120px", textAlign: "start"}}>
              {data.date}
            </Typography>
          </Box>

          <Box sx={{display: "flex",gap: "80px", justifyContent: "center", width: "100%"}}>
            <Typography sx={{width: "120px", textAlign: "end"}}>
              Price
            </Typography>
            <Typography sx={{width: "120px", textAlign: "start"}}>
              {data.price}
            </Typography>
          </Box>
        </Stack>
    </Stack>
  )
}

export default BookDetails