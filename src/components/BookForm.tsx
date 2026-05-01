import { Box, Button, TextField, Typography } from "@mui/material";


const BookForm = () => {
  return (
    <Box
      component="form"
      sx={{ p: "40px", border: "1px solid black", marginTop: "40px", textAlign: "center"}}
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
        <Typography sx={{width: "100px", marginRight: "40px" }}>Book Name</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "60%" }}
          required
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
        <Typography sx={{width: "100px", marginRight: "40px" }}>Book Detail</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "60%" }}
          required
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
        <Typography sx={{width: "100px", marginRight: "40px" }}>Author Name</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "60%" }}
          required
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
        <Typography sx={{width: "100px", marginRight: "40px" }}>Publish Date</Typography>
        <TextField type="date" sx={{ width: "60%" }} required />
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
        <Typography sx={{width: "100px", marginRight: "40px" }}>Price</Typography>
        <TextField type="number" sx={{ width: "60%" }} required />
      </Box>
      <Button sx={{backgroundColor: "rgb(177, 171, 171)", color: "black", padding: "20px 30px"}}>Create Book</Button>
    </Box>
  );
};

export default BookForm;
