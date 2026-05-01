import { Box, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BookDetails from "./BookDetails";
import { useState } from "react";

interface Book {
  id: number;          
  bookName: string;
  detail: string;
  authorName: string;
  date: string;
  price: string;       
}

interface BookListProps{
  books: Book[]
}

const BookListContainer = ({books}: BookListProps) => {
  const isListEmpty:boolean = books.length === 0;

  const [isDisplay, setIsDisplay] = useState<number|null>(null)

  function handleDisplayContent(id:number):void{
    setIsDisplay((prev:number|null) => (prev === id ? null : id))
  }

  return (
    <Box
      component="section"
      sx={{
        p: "40px",
        border: "1px solid black",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <Typography variant="h3" sx={{ width: "100%", textAlign: "center", marginBottom: "50px"}}>
        Book List
      </Typography>
      {isListEmpty ? (
        <Typography
          variant="h4"
          sx={{ width: "100%", textAlign: "center", margin: "200px 0" }}
        >
          No Book Available
        </Typography>
      ) : (
        <Stack>
          {
            books.map((item: Book) => {
              return (
                <div key={item.id}> 
                  <Box sx={{border: "1px solid", margin: "10px 0", padding: "10px 0", display: "flex", justifyContent: "flex-start"}} onClick={()=>handleDisplayContent(item.id)}>
                    <ChevronRightIcon/>
                    <Typography sx={{width: "100%", textAlign: "center"}}>
                      {item.bookName} by {item.authorName}
                    </Typography>
                  </Box>
                  {isDisplay === item.id && <BookDetails data={item}/>}
                </div>
              )
            })
          }
      </Stack>
      )}
      {/* <BookDetails/> */}
    </Box>
  );
};

export default BookListContainer;
