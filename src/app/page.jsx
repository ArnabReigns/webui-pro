import { Box, Stack, Typography } from "@mui/material"
import Link from "next/link"

const Page = ({ }) => {

    const pages = [
        {
            page: 'quiz',
            nav: '/quiz'
        }
    ]


    return <Box p={1}>
        <Typography>Arnab Chatterjee</Typography>
        <Stack gap={1} mt={2}>
            {pages.map((p, i) => (
                <Box key={i} px={1} py={0.4} borderRadius={1} color={'white'} bgcolor={'primary.light'} width={'fit-content'}>
                    <Link href={p.nav} >{p.page}</Link>
                </Box>
            ))}
        </Stack>
    </Box>
}

export default Page