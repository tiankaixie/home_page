import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoSchoolSharp,
    IoLogoLinkedin
} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={4}
                align="center"
            >
                Hi there, welcome to my homepage!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Tiankai Xie
                    </Heading>
                    <p>
                        Ph.D. Candidate (Interpretable AI / HCI / Visual
                        Analytics)
                    </p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/tiankai.jpg"
                            alt="Profile image"
                            borderRadius="full"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <Paragraph>
                    I am currently a Ph.D. candidate in computer science at
                    Arizona State University. My research is to increase the
                    transparency and interpretability of machine learning models
                    by designing and developing interactive visual analytics
                    systems that can facilitate users to explore and discover
                    potential vulnerabilities of those models in terms of
                    adversarial machine learning, graph mining sensitivity, as
                    well as algorithmic fairness.
                </Paragraph>
                <Paragraph>
                    At Arizona State University, I work with Dr.{' '}
                    <Link
                        as={NextLink}
                        href="http://rmaciejewski.faculty.asu.edu"
                    >
                        Ross Maciejewski
                    </Link>{' '}
                    as a member of the{' '}
                    <Link as={NextLink} href="https://vader.lab.asu.edu/">
                        VADER lab
                    </Link>
                    . My research is supported by the U.S. Department of
                    Homeland Security and the{' '}
                    <Link
                        as={NextLink}
                        href="https://new.nsf.gov/funding/opportunities/nsf-program-fairness-artificial-intelligence"
                    >
                        National Science Foundation Program on Fairness in AI in
                        collaboration with Amazon.
                    </Link>
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Links
                </Heading>
                <List>
                    <ListItem>
                        <Link
                            href="https://scholar.google.com/citations?user=iGRSrJUAAAAJ&hl=en&inst=1960582506653781529&oi=ao"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoSchoolSharp />}
                            >
                                Google Scholar
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link
                            href="https://www.linkedin.com/in/tiankaixie/"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoLinkedin />}
                            >
                                @tiankaixie
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://github.com/tiankaixie"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @tiankaixie
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://twitter.com/tiankaixie"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @tiankaixie
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://instagram.com/tiankaixie"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @tiankaixie
                            </Button>
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>

                <Heading as="h3" variant="section-title">
                    Newsletter
                </Heading>
                <p>
                    Join me on a behind-the-scenes coding journey. Weekly
                    updates on projects, tutorials, and videos
                </p>

                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="https://www.devas.life/"
                        scroll={false}
                        leftIcon={<EmailIcon />}
                        colorScheme="teal"
                    >
                        Sign up my newsletter here
                    </Button>
                </Box>
            </Section>
        </Container>
    )
}

export default Page
