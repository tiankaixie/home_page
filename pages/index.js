import {
    Container,
    Box,
    Button,
    Heading,
    Image,
    Link,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

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
        </Container>
    )
}

export default Page
