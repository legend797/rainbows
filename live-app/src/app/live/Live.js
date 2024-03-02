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
import { database } from "@/firebase/firebase";
import { onValue, ref} from 'firebase/database';

export default function Live({ token, id, removeCookie }) {
	const [isMobile] = useMediaQuery("(max-width: 480px)");
	const [isTablet] = useMediaQuery("(max-width: 48em)");
	const [initPlayer, setInitPlayer] = useState(false);
	const [isClient, setIsClient] = useState(false)
	const currentTime = new Date();
	const [realtimeData, setRealtimeData] = useState(null)
	const [isLiveEnded, setIsLiveEnded] = useState(false);
	const [isError, setIsError] = useState("")
	const [streamTime, setStreamTime] = useState("00:00")
	const [StreamStartTime, setStreamStartTime] = useState(new Date('2024-03-02' + 'T' + streamTime + '+06:30'));
	const [isStreamStarted, setIsStreamStarted] = useState(currentTime >= StreamStartTime)
	const [isFetched, setIsFetched] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();

	useEffect(() => {
		setStreamStartTime(new Date('2024-03-02' + 'T' + streamTime + '+06:30'));
		setIsStreamStarted((new Date('2024-03-02' + 'T' + streamTime + '+06:30') <= currentTime))
	}, [streamTime])
	console.log(isStreamStarted)

	useEffect(() => {
		const dataRef = ref(database, 'err');
		const unsubscribe = onValue(dataRef, async (snapshot) => {
			const data = await snapshot.val();
			setStreamTime(data?.countdown ? data.countdown : "24:00")
			setIsError(data?.error ? data.error : "")
			setIsLiveEnded(data?.live ? data.live : false);
			setIsFetched(true);
		});

		return () => {
			unsubscribe(); // unsubscribe when the component is unmounted
		};
	}, []);


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
				py={"20px"}
				px={"20px"}
				height={"auto"}
			>
				<VStack width={{ base: "100%" }} gap={10} h={"100%"}>
					<HStack justifyContent={"space-between"} width={"100%"} maxW={"1200px"}>
						{/* <IconButton icon={<IconArrowLeft />} color={"tomato"} rounded={20} background={"#fff"} /> */}
						<Button size={{ base: "sm", md: "lg" }} background={"#fff"} color={"#000"} onClick={() => { router.push('/') }} leftIcon={<IconArrowLeft />}>Back</Button>
						<Image src="/assets/Rectangle.svg" w={{ base: "130px", md: "200px" }} />
					</HStack>
					{isFetched && (<CurrentLive removeCookie={removeCookie} token={token} id={id} isError={isError} isStreamStarted={isStreamStarted} setIsStreamStarted={setIsStreamStarted} StreamStartTime={StreamStartTime} isLiveEnded={isLiveEnded} />)}

				</VStack>
			</Container>
			<Box background={"white"} minHeight={"132px"} width={"100%"} display={"flex"} sx={{ justifyContent: "center", alignItems: "center" }}>
				<Box my={4} maxWidth={"1200px"} className="grid max-sm:gap-5 sm:gap-10 justify-center max-sm:grid-cols-6 sm:grid-cols-6 lg:grid-cols-8 max-sm:mt-4">
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C1.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C2.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C3.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C4.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C5.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C6.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C7.jpg'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C8.png'} />
				</Box>
			</Box>
		</>
	);
}
