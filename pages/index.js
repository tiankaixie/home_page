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
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
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
                Hello, This is Tiankai Xie&apos;s homepage.
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Tiankai Xie
                    </Heading>
                    <p>Ph.D. (Interpretable AI, HCI, Visual Analytics)</p>
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
                    well as algorithmic fairness. At Arizona State University, I
                    work with Dr.{' '}
                    <Link as={NextLink} href="">
                        Ross Maciejewski
                    </Link>{' '}
                    as a member of the{' '}
                    <Link as={NextLink} href="">
                        VADER lab
                    </Link>
                    .
                </Paragraph>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1984</BioYear>
                    Born in Osaka (大阪), Japan.
                </BioSection>
                <BioSection>
                    <BioYear>2010</BioYear>
                    Completed the Master&apos;s Program in the Graduate School
                    of Information Science at Nara Institute of Science and
                    Technology
                    (奈良先端科学技術大学院大学情報科学研究科修士課程)
                </BioSection>
                <BioSection>
                    <BioYear>2010</BioYear>
                    Worked at Yahoo! Japan (ヤフー株式会社入社)
                </BioSection>
                <BioSection>
                    <BioYear>2012 to present</BioYear>
                    Working as a freelancer
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link
                            href="https://github.com/craftzdog"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @craftzdog
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://twitter.com/inkdrop_app"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @inkdrop_app (English)
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://twitter.com/craftzdog"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @craftzdog (日本語)
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://instagram.com/craftzdog"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @craftzdog
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
