import { Box, TextField, Typography } from "@mui/material";

interface Book {
  id: number;
  bookName: string;
  detail: string;
  authorName: string;
  date: string;
  price: string;
}

interface EditableFieldProps{ 
    data: Book
    label: string, 
    fieldKey: keyof Book, 
    type?: string ,
    editField: keyof Book | null,
    setEditField:(arg:keyof Book | null)=>void,
    tempValue: string,
    setTempValue:(arg:string)=>void,
    books: Book[];
    setBooks: (arg:Book[])=>void;
}


const EditableField = ({data, label, fieldKey, type = "text", editField, setEditField, tempValue, setTempValue, books, setBooks }: EditableFieldProps) => {
    const isEditing = editField === fieldKey;

    const handleUpdate = (field: keyof Book) => {
    const updatedBooks = books.map((b) =>
      b.id === data.id ? { ...b, [field]: tempValue } : b
    );
    
    setBooks(updatedBooks);
    localStorage.setItem("book", JSON.stringify(updatedBooks));
    setEditField(null);
  };

    return (
      <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, gap: {xs: "5px", md: "80px"}, justifyContent: {xs: "flex-start", md: "center"}, width: "100%" }}>
        <Typography sx={{ width: "120px", textAlign: {xs: "start", md: "end"}, fontWeight: "bold" }}>
          {label}
        </Typography>

        {isEditing ? (
          <TextField
            type={type}
            size="small"
            value={tempValue}
            autoFocus
            sx={{ width: "150px" }}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={() => handleUpdate(fieldKey)}
            onKeyDown={(e) => e.key === "Enter" && handleUpdate(fieldKey)}
          />
        ) : (
          <Typography
            sx={{ 
              width: "150px", 
              textAlign: "start", 
              cursor: "pointer", 
              color: "black" 
            }}
            onClick={() => {
              setEditField(fieldKey);
              setTempValue(data[fieldKey] as string);
            }}
          >
            {data[fieldKey]}
          </Typography>
        )}
      </Box>
    );
  };

  export default EditableField;