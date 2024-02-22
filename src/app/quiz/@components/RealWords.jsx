"use client";

import { Box, Button, Snackbar, Typography } from "@mui/material";
import { useState } from "react";

const RealWords = ({}) => {
  const words = [
    "gobbledygook",
    "brilliant",
    "jabberwocky",
    "gorgeous",
    "onomatopoeia",
    "serendipity",
    "vibrant",
    "whimsical",
    "fantastic",
    "delicious",
  ];

  const meaningFull = [
    "serendipity",
    "whimsical",
    "fantastic",
    "gorgeous",
    "delicious",
    "vibrant",
    "brilliant",
  ];

  const [selected, setSelected] = useState([]);

  const toggleSelected = (word) => {
    if (selected.includes(word)) {
      setSelected((prev) => prev.filter((item) => item !== word));
    } else {
      setSelected((prev) => [...prev, word]);
    }
  };

  const [popup, setPopup] = useState(false);
  const [match, setMatch] = useState(false);

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <Box
      p={2}
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent={"center"}
      flex={1}
    >
      <Typography fontSize={"1.3rem"} fontWeight={500} color={"#2063b0"}>
        Select the real english words in the list
      </Typography>
      <Box mt={2} display="flex" gap={1} flexWrap={"wrap"} width={"50vw"}>
        {words.map((e, i) => (
          <Box
            onClick={() => toggleSelected(e)}
            sx={{ cursor: "pointer" }}
            bgcolor={selected.includes(e) ? "#044899" : "#5094e3"}
            color={selected.includes(e) ? "white" : "black"}
            p={0.5}
            px={1}
            gap={1}
            fontWeight={500}
            key={i}
            display={"flex"}
          >
            {e}
          </Box>
        ))}
      </Box>

      {selected.length > 0 && (
        <Button
          sx={{ mt: 3 }}
          variant="contained"
          onClick={() => {
            if (
              selected.every((e) => meaningFull.includes(e)) &&
              selected.length == meaningFull.length
            ) {
              setMatch(true);
            } else {
              setMatch(false);
              setSelected([]);
            }
            setPopup(true);
          }}
        >
          Submit
        </Button>
      )}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={popup}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Box p={2} bgcolor={match ? "green" : "red"} color={"white"}>
          {match ? "correct answer" : "wrong answer"}
        </Box>
      </Snackbar>
    </Box>
  );
};

export default RealWords;
