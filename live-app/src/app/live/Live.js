"use client";
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
	Image
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import CurrentLive from "./CurrentLive";



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

	const [isLivePlayed, setIsLivePlayed] = useState(false);

	// console.log(data[0].uuid)
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();
	useEffect(() => {
		onOpen()
		setIsClient(true)
	}, [router])
	useEffect(() => {
		if (!isOpen && isClient) {
			router.back()
		}
	}, [isOpen])


	return isClient && (
		<>
		<Container
			maxW={{ base: "100%" }}
			pt={"20px"}
			px={"20px"}
			height={"calc(100vh - 132px)"}
		>
			<VStack width={{ base: "100%" }} gap={10} h={"100%"}>
			<HStack justifyContent={"space-between"} width={"100%"} maxW={"1200px"}>
                    {/* <IconButton icon={<IconArrowLeft />} color={"tomato"} rounded={20} background={"#fff"} /> */}
                    <Button size={{base:"sm", md:"lg"}} background={"#fff"} color={"#000"} onClick={() => {router.push('/')}} leftIcon={<IconArrowLeft />}>Back</Button>
                    <Image src="/assets/Rectangle.svg" w={{ base: "130px", md: "200px" }} />
                </HStack>
				<CurrentLive />
			</VStack>
		</Container>
		<Box  bottom={0} background={"white"} minHeight={"132px"} width={"100%"} display={"flex"} sx={{ justifyContent: "center", alignItems: "center" }}>
         <Box my={4} maxWidth={"1200px"} className="grid max-sm:gap-5 sm:gap-10 justify-center max-sm:grid-cols-6 sm:grid-cols-6 lg:grid-cols-8 max-sm:mt-4">
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/assets/C1.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}}src={'/assets/C2.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/assets/C3.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/assets/C4.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/assets/C5.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/assets/C6.png'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/assets/C7.jpg'} />
             <Image height={{base:"30px", sm:"50px", md:"100px"}} width={{base:"30px", sm:"50px",md:"100px"}} src={'/assets/C8.png'} />
         </Box>
     </Box>
		</>
	);
}
