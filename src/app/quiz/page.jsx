'use client';

import { Box, Button, Stack, Step } from "@mui/material"
import MatchPairs from "./@components/MatchPairs"
import RealWords from "./@components/RealWords"
import { useState } from "react"
import FillInTheBlanks from "./@components/FillInTheBlanks";

const Page = ({ }) => {

    const [step, setStep] = useState(1);
    return <Stack minHeight={'100vh'} >
        <Box height={'3px'} bgcolor={'#00f'} width={`${step / 10 * 100}%`} sx={{ transition: '0.3s  ease' }} />
        {step == 1 && <MatchPairs />}
        {step == 2 && <RealWords />}
        {step == 3 && <FillInTheBlanks />}

        <Box display={'flex'} justifyContent={'flex-end'} p={2} gap={1}>
            <Button variant="contained" color="primary" onClick={e => setStep(prev => prev - 1)}>prev</Button>
            <Button variant="contained" color="primary" onClick={e => setStep(prev => prev + 1)}>Next</Button>
        </Box>
    </Stack>
}

export default Page