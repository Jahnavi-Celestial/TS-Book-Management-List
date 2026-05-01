import { Box, Button, Stack, Typography } from "@mui/material"

interface Book {
  id: number;          
  bookName: string;
  detail: string;
  authorName: string;
  date: string;
  price: string;       
}

interface DeleteAlertProps{
  data: Book,
  books: Book[],
  setBooks(arg:object):void,
  onClose(): void,
}

const DeleteAlert = ({data, books, setBooks, onClose}: DeleteAlertProps) => {
    function handleDelete(){
        const updatedBooks:Book[] = books.filter(book => book.id !== data.id)
        setBooks(updatedBooks)
        localStorage.setItem("book", JSON.stringify(updatedBooks));
    }

  return (
    <Box sx={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", zIndex: "10000",top: "0px", left: "0px", background: "rgba(0, 0, 0, 0.6)"}}>
        <Stack spacing={2} sx={{width: "60%", height: "150px", padding: "10px", backgroundColor: "white", borderRadius: "10px", textAlign: "center"}}>
            <Typography>You are deleting the following book: </Typography>
            <Typography>{data.bookName}</Typography>
            <Box >
                <Button variant="contained" sx={{margin: "10px"}} onClick={onClose}>Close</Button>
                <Button variant="contained" sx={{margin: "10px"}} onClick={handleDelete}>Delete</Button>
            </Box>
        </Stack>
    </Box>
  )
}

export default DeleteAlert