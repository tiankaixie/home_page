import { Container, Box } from '@chakra-ui/react'
import Navbar from '../navbar'
import Head from 'next/head'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pt={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Tiankai Xie - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
