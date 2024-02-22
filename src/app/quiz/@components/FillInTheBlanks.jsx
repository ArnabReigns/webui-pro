"use client";

import {
  Box,
  Button,
  InputBase,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const FillInTheBlanksFillInTheBlanks = ({}) => {
  const [ans, setAns] = useState([]);

  const title = "Murphy's early life";

  const template = [
    {
      type: "text",
      value: `Murphy was born in Gujrat. He`,
    },
    {
      id: 1,
      type: "blank",
      count: 3,
      values: ["a", "b", "c"],
    },
    {
      type: "text",
      value: "raised",
    },
    {
      id: 2,
      type: "blank",
      count: 2,
      values: ["d", "e"],
    },
    {
      type: "text",
      value:
        "Rajasthan. His father, a small-time businessman, had a pet monkey named Murf.",
    },
  ];

  const [popup, setPopup] = useState(false);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    console.log(ans);
  }, [ans]);

  const handleClose = () => {
    setPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAns((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = (e) => {
    const blanks = template.filter((t) => t.type == "blank");

    const check = blanks.every((b) => {
      return b.values.every((v, i) => {
        return (ans[`input-${b.id}-${i}`] || "").trim() == v;
      });
    });
    if (check) setMatch(true);
    else {
      setMatch(false);
    }

    setPopup(true);
  };

  const correctAns = (template) => {
    let string = "";

    template.forEach((e) => {
      if (e.type == "text") string += e.value;
      else if (e.type == "blank") e.values.forEach((s) => (string += ` ${s} `));
    });
    return string;
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
        Type the missing letters to complete the text below
      </Typography>
      <Box
        mt={2}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        gap={1}
        flexWrap={"wrap"}
        width={"50vw"}
        border={"2px solid #9cc0ea"}
        p={2}
        borderRadius={2}
      >
        <Typography fontSize={"1.1rem"} fontWeight={500} color={"#2063b0"}>
          {title}
        </Typography>

        <Box sx={{ lineHeight: 4 }}>
          {template.map((t, i) => {
            if (t.type == "text")
              return (
                <Typography
                  key={i}
                  sx={{
                    display: "inline-block",
                    mr: 1,
                    textWrap: "wrap",
                    whiteSpace: "wrap",
                    width: "fit-content",
                  }}
                >
                  {t.value}
                </Typography>
              );
            else if (t.type == "blank")
              return Array(t.count)
                .fill("a")
                .map((e, j) => (
                  <InputBase
                    key={j}
                    name={`input-${t.id}-${j}`}
                    onChange={handleChange}
                    variant="standard"
                    inputProps={{
                      style: {
                        textAlign: "center",
                      },
                    }}
                    sx={{
                      borderRadius: 2,
                      width: "8rem",
                      mr: 1,
                      display: "inline-block",
                      border: "1px solid #4a9ee2",
                      p: 0.3,
                    }}
                  />
                ));
          })}
        </Box>
      </Box>
      {Object.keys(ans).length > 0 && (
        <Button sx={{ mt: 3 }} variant="contained" onClick={submit}>
          Submit
        </Button>
      )}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={popup}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Box p={2} bgcolor={match ? "green" : "red"} color={"white"}>
          {match ? "correct answer" : "wrong answer"}
          {!match && (
            <Typography width={"25rem"} mt={2}>
              Ans: {correctAns(template)}
            </Typography>
          )}
        </Box>
      </Snackbar>
    </Box>
  );
};

export default FillInTheBlanksFillInTheBlanks;
