import {
    Container,
    Heading,
    Box,
    Link,
    Flex,
    Grid,
    GridItem
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import {
    BioItemName,
    BioYear,
    BioLocation,
    BioSubKey,
    BioSubValue,
    BioSub,
    PubVenue,
    PubAuthor,
    PubTitle,
    RefName,
    RefTitle,
    RefAff,
    RefAff2
} from '../components/bio'

import { RxExternalLink } from 'react-icons/Rx'

const CV = () => (
    <Layout title="CV">
        <Container>
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <Heading as="h2" variant="section-title">
                        Education
                    </Heading>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>Aug. 2018 - Present</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <BioItemName>Ph.D. in Computer Science</BioItemName>
                    <BioLocation>
                        Arizona State University, Tempe, AZ
                    </BioLocation>
                    <BioSub>
                        <BioSubKey>Advisor:</BioSubKey>
                        <BioSubValue>Ross Maciejewski</BioSubValue>
                    </BioSub>
                    <BioSub>
                        <BioSubKey>Dissertation:</BioSubKey>
                        <BioSubValue>
                            Explaining Vulnerabilities in Machine Learning
                        </BioSubValue>
                    </BioSub>
                    <BioSub>
                        <BioSubKey>Committee:</BioSubKey>
                        <BioSubValue>
                            Ross Maciejewski, Huan Liu, Chris Bryan, and
                            Hanghang Tong
                        </BioSubValue>
                    </BioSub>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>Aug. 2015 - May 2017</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <BioItemName>M.S. in Computer Science</BioItemName>
                    <BioLocation>
                        Stevens Institute of Technology, Hoboken, NJ
                    </BioLocation>
                </GridItem>
                <GridItem colSpan={1}>
                    <BioYear>Aug. 2015 - May 2017</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <BioItemName>B.S. in Computer Science</BioItemName>
                    <BioLocation>
                        Beijing Forestry University, Beijing, China
                    </BioLocation>
                </GridItem>
            </Grid>

            <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={6}>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <Heading as="h3" variant="section-title">
                        Professional Experience
                    </Heading>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>Aug. 2018 - Present</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <BioItemName>Graduate Research Associate</BioItemName>
                    <BioLocation>
                        VADER Lab, Arizona State University, Tempe, AZ
                    </BioLocation>
                    <BioSub>
                        <BioSubKey>Advisor:</BioSubKey>
                        <BioSubValue>Ross Maciejewski</BioSubValue>
                    </BioSub>
                    <BioSub>
                        Work as a research associate for the VADER Lab with the
                        research topics in Explainable AI and Visual Analytics.
                        Current dissertation topic is Explaining the
                        vulnerabilities of machine learning models through
                        visual analytics. Passed dissertation prospectus in Fall
                        2021.
                    </BioSub>
                    <BioSub>
                        <Flex pt={1}>
                            <Box pt={1} mr={1}>
                                <RxExternalLink />
                            </Box>
                            <Link
                                as={NextLink}
                                href="https://vader.lab.asu.edu/"
                            >
                                <span>VADER Lab</span>
                            </Link>{' '}
                        </Flex>
                    </BioSub>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>May 2021 - Aug. 2021</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <BioItemName>Data Scientist, Intern</BioItemName>
                    <BioLocation>
                        Epsilon Data Management, LLC, Chicago, IL
                    </BioLocation>
                    <BioSub>
                        Designed and implemented the algorithm to extract
                        highlights from the aggregated audience data across
                        2500+ companies. Designed, implemented and integrated
                        the Intelligent Audience Profile (IAP) visualization
                        view driven by the designed highlighting algorithm into
                        the DiME visual analytics platform.
                    </BioSub>
                    <BioSub>
                        <Flex pt={1}>
                            <Box pt={1} mr={1}>
                                <RxExternalLink />
                            </Box>
                            <Link
                                as={NextLink}
                                href="https://vader.lab.asu.edu/"
                            >
                                <span>Epsilon & DiME</span>
                            </Link>{' '}
                        </Flex>
                    </BioSub>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>Jul. 2017 - May. 2018</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <BioItemName>Co-founder</BioItemName>
                    <BioLocation>RobotGyms, Inc., San Mateo, CA</BioLocation>
                    <BioSub>
                        Designed, implemented Robotgyms&apos;s infrastructure
                        and curriculum. and maintained the company&apos;s
                        teaching devices, including local network and
                        devices&apos; software and hardware installation and
                        upgrade. Developed policies and training plans for
                        online resource administration and usage. Give lectures
                        for 40+ students and took charge of customer
                        consultation, and conducted SEO and SMO for branding
                        programs as well as the company.
                    </BioSub>
                    <BioSub>
                        <Flex pt={1}>
                            <Box pt={1} mr={1}>
                                <RxExternalLink />
                            </Box>
                            <Link as={NextLink} href="https://robotgyms.com/">
                                <span>RobotGyms</span>
                            </Link>{' '}
                        </Flex>
                    </BioSub>
                </GridItem>
            </Grid>

            <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={6}>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <Heading as="h3" variant="section-title">
                        Publications
                    </Heading>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>Big Data 2022</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <PubTitle>
                        Infofair: Information-theoretic intersectional fairness
                    </PubTitle>
                    <PubAuthor>
                        Jian Kang, Tiankai Xie, Xintao Wu, Ross Maciejewski,
                        Hanghang Tong
                    </PubAuthor>
                    <PubVenue>
                        IEEE International Conference on Big Data
                    </PubVenue>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>VIS 2021</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <PubTitle>
                        FairRankVis: A Visual Analytics Framework for Exploring
                        Algorithmic Fairness in Graph Mining Models
                    </PubTitle>
                    <PubAuthor>
                        Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and
                        Ross Maciejewski
                    </PubAuthor>
                    <PubVenue>
                        IEEE Transactions on Visualization and Computer Graphics
                    </PubVenue>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>VIS 2020</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <PubTitle>
                        Auditing the Sensitivity of Graph-based Ranking with
                        Visual Analytics{' '}
                    </PubTitle>
                    <PubAuthor>
                        Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and
                        Ross Maciejewski
                    </PubAuthor>
                    <PubVenue>
                        IEEE Transactions on Visualization and Computer Graphics
                    </PubVenue>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>VIS 2019</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <PubTitle>
                        Explaining Vulnerabilities to Adversarial Machine
                        Learning through Visual Analytics{' '}
                    </PubTitle>
                    <PubAuthor>
                        Yuxin Ma, Tiankai Xie, Jundong Li, and Ross Maciejewski{' '}
                    </PubAuthor>
                    <PubVenue>
                        IEEE Transactions on Visualization and Computer Graphics
                    </PubVenue>
                </GridItem>
            </Grid>

            <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={6}>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <Heading as="h3" variant="section-title">
                        Invited Talks
                    </Heading>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>Oct. 2021</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <PubTitle>
                        FairRankVis: A Visual Analytics Framework for Exploring
                        Algorithmic Fairness in Graph Mining Models
                    </PubTitle>
                    <PubVenue>
                        IEEE Transactions on Visualization and Computer Graphics
                        2021
                    </PubVenue>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>Oct. 2020</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <PubTitle>
                        Auditing the Sensitivity of Graph-based Ranking with
                        Visual Analytics{' '}
                    </PubTitle>
                    <PubVenue>
                        IEEE Transactions on Visualization and Computer Graphics
                        2020
                    </PubVenue>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>Oct. 2019</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <PubTitle>
                        Explaining Vulnerabilities to Adversarial Machine
                        Learning through Visual Analytics{' '}
                    </PubTitle>
                    <PubVenue>
                        IEEE Transactions on Visualization and Computer Graphics
                        2019
                    </PubVenue>
                </GridItem>
            </Grid>

            <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={6}>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <Heading as="h3" variant="section-title">
                        Professional Services
                    </Heading>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>2020 - 2023</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <PubTitle>
                        Reviewer of IEEE Transactions on Visualization and
                        Computer Graphics
                    </PubTitle>
                </GridItem>

                <GridItem colSpan={1}>
                    <BioYear>2022</BioYear>
                </GridItem>
                <GridItem colSpan={4}>
                    <PubTitle>
                        Reviewer of IEEE Computer Graphics & Applications
                    </PubTitle>
                </GridItem>
            </Grid>

            <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={6} mb={6}>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <Heading as="h3" variant="section-title">
                        References
                    </Heading>
                </GridItem>

                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <RefName>Dr. Ross Maciejewski, </RefName>
                    <RefTitle>Professor</RefTitle>
                    <RefAff>
                        The School of Computing and Augmented Intelligence
                        (SCAI)
                    </RefAff>
                    <RefAff2>Arizona State University</RefAff2>
                    <BioSub>
                        <Flex pt={1}>
                            <Box pt={1} mr={1}>
                                <RxExternalLink />
                            </Box>
                            <Link
                                as={NextLink}
                                href="http://rmaciejewski.faculty.asu.edu"
                            >
                                <span>Homepage</span>
                            </Link>{' '}
                        </Flex>
                    </BioSub>
                </GridItem>

                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <RefName>Dr. Huan Liu, </RefName>
                    <RefTitle>Professor</RefTitle>
                    <RefAff>
                        The School of Computing and Augmented Intelligence
                        (SCAI)
                    </RefAff>
                    <RefAff2>Arizona State University</RefAff2>
                    <BioSub>
                        <Flex pt={1}>
                            <Box pt={1} mr={1}>
                                <RxExternalLink />
                            </Box>
                            <Link
                                as={NextLink}
                                href="https://www.public.asu.edu/~huanliu/"
                            >
                                <span>Homepage</span>
                            </Link>{' '}
                        </Flex>
                    </BioSub>
                </GridItem>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <RefName>Dr. Hanghang Tong, </RefName>
                    <RefTitle>Associate Professor</RefTitle>
                    <RefAff>Department of Computer Science</RefAff>
                    <RefAff2>
                        University of Illinois at Urbana-Champaign
                    </RefAff2>
                    <BioSub>
                        <Flex pt={1}>
                            <Box pt={1} mr={1}>
                                <RxExternalLink />
                            </Box>
                            <Link as={NextLink} href="http://tonghanghang.org">
                                <span>Homepage</span>
                            </Link>{' '}
                        </Flex>
                    </BioSub>
                </GridItem>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <RefName>Dr. Chris Bryan, </RefName>
                    <RefTitle>Assistant Professor</RefTitle>
                    <RefAff>
                        The School of Computing and Augmented Intelligence
                        (SCAI)
                    </RefAff>
                    <RefAff2>Arizona State University</RefAff2>
                    <BioSub>
                        <Flex pt={1}>
                            <Box pt={1} mr={1}>
                                <RxExternalLink />
                            </Box>
                            <Link
                                as={NextLink}
                                href="https://chrisbryan.github.io"
                            >
                                <span>Homepage</span>
                            </Link>{' '}
                        </Flex>
                    </BioSub>
                </GridItem>
                <GridItem colSpan={1}></GridItem>
                <GridItem colSpan={4}>
                    <RefName>Dr. Yuxin Ma, </RefName>
                    <RefTitle>Assistant Professor</RefTitle>
                    <RefAff>
                        Department of Computer Science and Engineering
                    </RefAff>
                    <RefAff2>
                        Southern University of Science and Technology
                    </RefAff2>
                    <BioSub>
                        <Flex pt={1}>
                            <Box pt={1} mr={1}>
                                <RxExternalLink />
                            </Box>
                            <Link as={NextLink} href="https://mayuxin.me">
                                <span>Homepage</span>
                            </Link>{' '}
                        </Flex>
                    </BioSub>
                </GridItem>
            </Grid>
        </Container>
    </Layout>
)

export default CV
export { getServerSideProps } from '../components/chakra'
