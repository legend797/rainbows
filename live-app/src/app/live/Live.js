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
import { onValue, ref } from 'firebase/database';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Core Swiper
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Live({ token, id, removeCookie }) {
	const [isClient, setIsClient] = useState(false)
	const currentTime = new Date();
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

	useEffect(() => {
		const dataRef = ref(database, 'err');
		const unsubscribe = onValue(dataRef, async (snapshot) => {
			const data = await snapshot.val();
			setStreamTime(data?.countdown ? data.countdown : "24:00")
			setIsError(data?.error ? data.error : "")
			setIsLiveEnded(data?.live ? data.live : false);
			setIsFetched(true);
			console.log(data)
		});

		return () => {
			unsubscribe();
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
				<VStack width={{ base: "100%" }} gap={0} h={"100%"}>
					<HStack justifyContent={"space-between"} width={"100%"} mb={10} maxW={"1200px"}>
						{/* <IconButton icon={<IconArrowLeft />} color={"tomato"} rounded={20} background={"#fff"} /> */}
						<Button size={{ base: "sm", md: "lg" }} background={"#fff"} color={"#000"} onClick={() => { router.push('/') }} leftIcon={<IconArrowLeft />}>Back</Button>
						<Image src="/assets/Rectangle.svg" w={{ base: "130px", md: "200px" }} />
					</HStack>
					{/* <Box width={"100%"} maxW={"1100px"}>
						<Swiper
							spaceBetween={0}
							slidesPerView={1}
							loop={true}
							modules={[Autoplay]}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
						>
							<SwiperSlide>
								<Image height={{ base: "40px", md: "78px" }} width={"100%"} objectFit={"cover"} objectPosition={"top"} src="/assets/sdb.png" />
							</SwiperSlide>
							<SwiperSlide>
								<Image height={{ base: "40px", md: "78px" }} width={"100%"} objectFit={"cover"} src="/assets/nug_pay.svg" />
							</SwiperSlide>
						</Swiper>
					</Box> */}

					{isFetched && (<CurrentLive removeCookie={removeCookie} token={token} id={id} isError={isError} isStreamStarted={isStreamStarted} setIsStreamStarted={setIsStreamStarted} StreamStartTime={StreamStartTime} isLiveEnded={isLiveEnded} />)}

				</VStack>
				<Box display={{base:"flex",md:"none"}} flexWrap={"wrap"} mb={10} justifyContent={"space-around"} gap={5}>
				<Image src="/assets/nugpay.svg" width={"138px"} height={"172px"} objectFit={"cover"} />
				<Image src="/assets/sdbank.svg" width={"138px"} height={"172px"} objectFit={"cover"} />
			</Box>
			</Container>
			
			<HStack background={"none"} minHeight={"132px"} width={"100%"} display={"flex"} sx={{ justifyContent: "space-around", alignItems: "center" }}>
				<Image src="/assets/nugpay.svg" width={"158px"} height={"192px"} objectFit={"cover"} display={{base:"none", md:"block"}} />
				<Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={5}>
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C1.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C2.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C3.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C4.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C5.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C6.png'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C7.jpg'} />
					<Image height={{ base: "30px", sm: "50px", md: "100px" }} width={{ base: "30px", sm: "50px", md: "100px" }} src={'/assets/C8.png'} />
				</Box>
				<Image src="/assets/sdbank.svg" width={"158px"} height={"192px"} objectFit={"cover"} display={{base:"none", md:"block"}}/>
			</HStack>
		</>
	);
}
