import Box from '@mui/material/Box';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Typography } from '@mui/material';
import BookForm from './BookForm';
import BookListContainer from "./BookListContainer"
import { useState } from 'react';


interface Book {
  id: number;          
  bookName: string;
  detail: string;
  authorName: string;
  date: string;
  price: string;       
}


const BookContainer = () => {
  const [isInsertBook, setIsInsertBook] = useState<boolean>(false)

  const [books, setBooks] = useState<Book[]>(() => {
        const savedBooks = localStorage.getItem("book");
        return savedBooks ? JSON.parse(savedBooks) : [];
  });

  function handleClick():void{
    setIsInsertBook((prev:boolean) => !prev)
  }

  return (
    <Box component="section" sx={{ p: "40px", border: '1px solid black', margin: "50px 120px 0"}}>
      <Button variant="contained" sx={{width: "100%", display: 'flex', justifyContent: "flex-start"}} onClick={handleClick}>
        {isInsertBook ? <ArrowDropDownIcon sx={{fontSize: "50px"}}/> : <ArrowRightIcon sx={{fontSize: "50px"}}/>}
        <Typography variant="h5" component="p" sx={{width: "100%"}}>Insert Book Details</Typography>
      </Button>

      {
        isInsertBook && <BookForm books={books} setBooks={setBooks} setIsInsertBook={setIsInsertBook}/>
      }
      <BookListContainer books={books} setBooks={setBooks}/>
    </Box>
  )
}

export default BookContainer