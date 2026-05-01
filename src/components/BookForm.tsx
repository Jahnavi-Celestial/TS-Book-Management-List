import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Book {
  id: number;          
  bookName: string;
  detail: string;
  authorName: string;
  date: string;
  price: string;       
}

interface BookFormProps{
  books: Book[],
  setBooks(arg:object):void
  setIsInsertBook(arg:boolean):void
}

const BookForm = ({books,setBooks, setIsInsertBook}: BookFormProps) => {
  const [bookName, setBookName] = useState<string>("")
  const [detail, setDetail] = useState<string>("")
  const [authorName, setAuthorName] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [price, setPrice] = useState<string>("")

  function handleCreateBtn():void{
    if(bookName === "" || detail === "" || authorName === "" || price === "" || date === ""){
            return;
    }

    const obj: Book = {
    id: Date.now(), 
    bookName,
    detail,
    authorName,
    date,
    price,
  };

    const isExist: boolean = books.some(book => book.bookName === obj.bookName && book.authorName === obj.authorName)

    if(!isExist){
      const updatedBooks = [...books, obj];
      setBooks(updatedBooks);
      localStorage.setItem("book", JSON.stringify(updatedBooks));
    }
    else{
      console.log("Please enter requird details")
    }

    setIsInsertBook(false);
  }

  return (
    <Box
      component="form"
      sx={{
        p: "40px",
        border: "1px solid black",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ width: "100px", marginRight: "40px" }}>
          Book Name
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "60%" }}
          required
          value={bookName}
          onChange={(e)=>{setBookName(e.target.value)}}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ width: "100px", marginRight: "40px" }}>
          Book Detail
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "60%" }}
          required
          value={detail}
          onChange={(e)=>{setDetail(e.target.value)}}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ width: "100px", marginRight: "40px" }}>
          Author Name
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "60%" }}
          required
          value={authorName}
          onChange={(e)=>{setAuthorName(e.target.value)}}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ width: "100px", marginRight: "40px" }}>
          Publish Date
        </Typography>
        <TextField type="date" sx={{ width: "60%" }} required value={date} onChange={(e)=>{setDate(e.target.value)}}/>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <Typography sx={{ width: "100px", marginRight: "40px" }}>
          Price
        </Typography>
        <TextField type="number" sx={{ width: "60%" }} required value={price} onChange={(e)=>setPrice(e.target.value)}/>
      </Box>
      <Button
        sx={{
          backgroundColor: "rgb(177, 171, 171)",
          color: "black",
          padding: "20px 30px",
        }}
        onClick={handleCreateBtn}
      >
        Create Book
      </Button>
    </Box>
  );
};

export default BookForm;
