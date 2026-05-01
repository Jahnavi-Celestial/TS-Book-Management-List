import { useState } from 'react';
import { Stack, Button } from '@mui/material';
import DeleteAlert from './DeleteAlert';
import EditableField from './EditableField';

interface Book {
  id: number;
  bookName: string;
  detail: string;
  authorName: string;
  date: string;
  price: string;
}

interface BookDetailProps {
  data: Book;
  books: Book[];
  setBooks: (arg: Book[]) => void;
}

const BookDetails = ({ data, books, setBooks }: BookDetailProps) => {
  const [editField, setEditField] = useState<keyof Book | null>(null);
  const [tempValue, setTempValue] = useState<string>("");
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);

  return (
    <Stack spacing={3} sx={{ border: "1px solid #ccc", p: 2, mt: 1, alignItems: "flex-end", borderRadius: "8px" }}>
      <Button 
        variant="contained" 
        sx={{ backgroundColor: "red" }} 
        onClick={() => setShowDeletePopup(true)}
      >
        Delete
      </Button>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <EditableField data={data} label="Book Name" fieldKey="bookName" editField={editField} setEditField={setEditField} tempValue={tempValue} setTempValue={setTempValue} books={books} setBooks={setBooks}/>

        <EditableField data={data} label="Book Detail" fieldKey="detail" editField={editField} setEditField={setEditField} tempValue={tempValue} setTempValue={setTempValue} books={books} setBooks={setBooks}/>

        <EditableField data={data} label="Author Name" fieldKey="authorName" editField={editField} setEditField={setEditField} tempValue={tempValue} setTempValue={setTempValue} books={books} setBooks={setBooks}/>

        <EditableField data={data} label="Publish Date" fieldKey="date" type="date" editField={editField} setEditField={setEditField} tempValue={tempValue} setTempValue={setTempValue} books={books} setBooks={setBooks}/>
        
        <EditableField data={data} label="Price" fieldKey="price" type="number" editField={editField} setEditField={setEditField} tempValue={tempValue} setTempValue={setTempValue} books={books} setBooks={setBooks}/>
      </Stack>

      {showDeletePopup && (
        <DeleteAlert 
          data={data} 
          books={books} 
          setBooks={setBooks} 
          onClose={() => setShowDeletePopup(false)} 
        />
      )}
    </Stack>
  );
};

export default BookDetails;