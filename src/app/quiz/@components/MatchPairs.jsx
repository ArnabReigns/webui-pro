'use client';
import { Box, Dialog, Snackbar, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const MatchPairs = ({ }) => {
    const pairs = [
        { word1: "apple", word2: "red" },
        { word1: "banana", word2: "yellow" },
        { word1: "carrot", word2: "orange" },
        { word1: "grass", word2: "green" },
        { word1: "sky", word2: "blue" },
    ];

    const left = ['grass', 'carrot', 'sky', 'banana', 'apple']
    const right = ['orange', 'blue', 'green', 'red', 'yellow']

    const [leftSelected, setLeftSelected] = useState(null);
    const [rightSelected, setRightSelected] = useState(null);

    const [popup, setPopup] = useState(false);
    const [match, setMatch] = useState(false);

    useEffect(() => {
        console.log(leftSelected, rightSelected)

        if (leftSelected && rightSelected) {
            const pair = pairs.find(e => e.word1 == leftSelected)
            if (pair.word2 == rightSelected) setMatch(true)
            else setMatch(false)
            setPopup(true);

            setLeftSelected(null);
            setRightSelected(null);
        }
    }, [leftSelected, rightSelected])


    const handleClose = () => {
        setPopup(false)
    }


    return (
        <Box display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'} flex={1}>
            <Typography fontSize={'1.3rem'} fontWeight={500} color={'#2063b0'}>Select Matching Pairs</Typography>
            <Box mt={2} display={"flex"} gap={1}>
                <SelectBox list={left} selected={leftSelected} setSelected={setLeftSelected} />
                <SelectBox list={right} selected={rightSelected} setSelected={setRightSelected} />
            </Box>


            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={popup}
                autoHideDuration={1000}
                onClose={handleClose}
            >
                <Box p={2} bgcolor={match ? 'green' : 'red'} color={'white'}>{match ? "correct answer" : 'wrong answer'}</Box>
            </Snackbar>
        </Box>
    );
};



const SelectBox = ({ list, setSelected, selected }) => {

    return (
        <Stack gap={1} width={"10rem"}>
            {list.map((e, i) => (
                <Box
                    onClick={() => { setSelected(e) }}
                    sx={{ cursor: "pointer" }}
                    bgcolor={selected == e ? "#4996ee" : "#9EBEE2"}
                    border={selected == e ? "2px solid green" : "2px solid #006EEF"}
                    p={0.5}
                    gap={1}
                    fontWeight={600}
                    px={1}
                    key={i}
                    display={"flex"}
                >
                    <Box
                        bgcolor={"white"}
                        px={1}
                        border={"2px solid #006EEF"}
                        borderRadius={1}
                    >
                        {i + 1}
                    </Box>
                    {e}
                </Box>
            ))}
        </Stack>
    );
};

export default MatchPairs;
