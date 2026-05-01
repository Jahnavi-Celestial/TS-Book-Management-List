# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```









import { Box, Button, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import DeleteAlert from "./DeleteAlert";
import { useState } from "react";

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
  setBooks(arg: object): void;
}

const BookDetails = ({ data, books, setBooks }: BookDetailProps) => {
  const [showDeleteALert, setShowDeleteAlert] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handlePopUp() {
    setShowDeleteAlert(!showDeleteALert);
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <Stack sx={{ border: "1px solid", alignItems: "flex-end" }}>
      <Button
        variant="contained"
        sx={{ backgroundColor: "red" }}
        onClick={() => handlePopUp()}
      >
        Delete
      </Button>
      <Stack spacing={3} sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            gap: "80px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ width: "120px", textAlign: "end" }}>
            Book Name
          </Typography>
          {isEditing ? (
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "60%" }}
              required
              value={data.bookName}
              onChange={(e) => {
                data.bookName = (e.target.value);
              }}
            />
          ) : (
            <Typography sx={{ width: "120px", textAlign: "start" }} onClick={()=>{setIsEditing(!isEditing)}}>
              {data.bookName}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "80px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ width: "120px", textAlign: "end" }}>
            Book Details
          </Typography>
          {isEditing ? (
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "60%" }}
              required
              value={data.detail}
              onChange={(e) => {
                setDetail(e.target.value);
              }}
            />
          ) : (
            <Typography sx={{ width: "120px", textAlign: "start" }} onClick={()=>{setIsEditing(!isEditing)}}>
              {data.detail}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "80px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ width: "120px", textAlign: "end" }} onClick={()=>{setIsEditing(!isEditing)}}>
            Author Name
          </Typography>
          {isEditing ? (
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "60%" }}
              required
              value={data.authorName}
              onChange={(e) => {
                setAuthorName(e.target.value);
              }}
            />
          ) : (
            <Typography sx={{ width: "120px", textAlign: "start" }} onClick={()=>{setIsEditing(!isEditing)}}>
              {data.authorName}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "80px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ width: "120px", textAlign: "end" }}>
            Publish Date
          </Typography>
          {isEditing ? (
            <TextField
              type="date"
              sx={{ width: "60%" }}
              required
              value={data.date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              slotProps={{ htmlInput: { max: formattedDate } }}
            />
          ) : (
            <Typography sx={{ width: "120px", textAlign: "start" }} onClick={()=>{setIsEditing(!isEditing)}}>
              {data.date}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "80px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ width: "120px", textAlign: "end" }}>
            Price
          </Typography>
          {isEditing ? (
            <TextField
              type="number"
              sx={{ width: "60%" }}
              required
              value={data.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          ) : (
            <Typography sx={{ width: "120px", textAlign: "start" }} onClick={()=>{setIsEditing(!isEditing)}}>
              {data.price}
            </Typography>
          )}
        </Box>
      </Stack>

      {showDeleteALert && (
        <DeleteAlert
          data={data}
          books={books}
          setBooks={setBooks}
          onClose={handlePopUp}
        />
      )}
    </Stack>
  );
};

export default BookDetails;
