'use client';
import {
    Box,
    Container,
    HStack,
    Stack,
    VStack,
    useMediaQuery,
    Text,
    useDisclosure,
    IconButton,
    Button,
    Image,
} from "@chakra-ui/react";
// import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import LiveVideoPlayer from "../components/LiveVideoPlayer/LiveVideoPlayer";

import { IconArrowLeft } from "@tabler/icons-react";
// import Comments from "./Comments";
// import CurrentLive from "./CurrentLive";
// import RelatedLives from "./RelatedLives";
// import Detail from "./Detail";


export default function Live({ data, verifyTicket, endStream, refreshingToken }) {
    const [isMobile] = useMediaQuery("(max-width: 480px)");
    const [isTablet] = useMediaQuery("(max-width: 48em)");
    const [initPlayer, setInitPlayer] = useState(false);
    const [isClient, setIsClient] = useState(false)
    const currentTime = new Date();
    // const liveStartTime = new Date('2024-02-25' + 'T' + '15:35' + '+06:30');
    // const TicketAcceptTime = new Date('2024-02-25' + 'T' + '15:35'+ '+07:00');

    // const liveStartTime = new Date(data.live.start_date + 'T' + data.live.start_time + '+06:30');
    // const TicketAcceptTime = new Date(data.live.start_date + 'T' + data.live.start_time + '+07:00');
    // const [isLiveStarted, setIsLiveStarted] = useState(currentTime >= liveStartTime)
    // const [isTicketAccept, setIsTicketAccept] = useState(currentTime >= TicketAcceptTime)
    const [isLiveEnded, setIsLiveEnded] = useState(false);
    const [isLivePlayed, setIsLivePlayed] = useState(false);
    const router = useRouter();

    // console.log(data[0].uuid)
    // const { isOpen, onOpen, onClose } = useDisclosure();
    // const router = useRouter();
    useEffect(() => {
    	// onOpen()
    	setIsClient(true)
    }, [])
    // useEffect(() => {
    // 	if (!isOpen && isClient) {
    // 		router.back()
    // 	}
    // }, [isOpen])


    return isClient && (
        <>
        <Container
            // backgroundColor= {"#d0c8e3"}
            maxW="100%"
            px={{ base: "5px", md: "auto" }}
            pt={10}
            height={"calc(100vh - 132px)"}
        >
            <VStack w={"100%"} h={{ base: "auto", md: "auto" }} color={"#fff"} gap={5}>
                <HStack justifyContent={"space-between"} width={"100%"} maxW={"1200px"}>
                    {/* <IconButton icon={<IconArrowLeft />} color={"tomato"} rounded={20} background={"#fff"} /> */}
                    <Button size={{base:"sm", md:"lg"}} background={"#fff"} color={"#000"} onClick={() => {router.push('/')}} leftIcon={<IconArrowLeft />}>Back</Button>
                    <Image src="/Rectangle.svg" w={{ base: "130px", md: "200px" }} />
                </HStack>


                <VStack sx={{
                    aspectRatio: "16/9",
                    maxWidth: "1100px",
                    bgcolor: "#fff",
                    width: "100%",
                    height: "100%",
                }}>
                    <LiveVideoPlayer setIsLivePlayed={setIsLivePlayed} setIsLiveEnded={setIsLiveEnded} />
                </VStack>
            </VStack>
        </Container>
         <Box  bottom={0} background={"white"} minHeight={"132px"} width={"100%"} display={"flex"} sx={{ justifyContent: "center", alignItems: "center" }}>
         <Box my={4} maxWidth={"1200px"} className="grid max-sm:gap-5 sm:gap-10 justify-center max-sm:grid-cols-6 sm:grid-cols-6 lg:grid-cols-8 max-sm:mt-4">
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/col/C1.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}}src={'/col/C2.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/col/C3.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/col/C4.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/col/C5.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/col/C6.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/col/C7.jpg'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/col/C8.png'} />
         </Box>
     </Box>
     </>
    );
}
