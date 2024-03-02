'use client'
import VideoPlayer from "../components/muxPlayer/VideoPlayer";
import {
	Box,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useRef, useState, useEffect, useTransition, useMemo } from "react";
import StreamVideoPlayer from "../components/streamVideoPlayer/StreamVideoPlayer";


const CurrentLive = ({ token, id, isLiveEnded, isError, isStreamStarted, StreamStartTime, setIsStreamStarted, removeCookie }) => {
	const [isClient, setIsClient] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
	useEffect(() => {
		setIsClient(true)
	}, [])

	const videoEnded = async () => {
		const storedValue = Number(localStorage.getItem('w_t') ? localStorage.getItem('w_t') : 0);
		if(storedValue >= 2) {
			localStorage.removeItem('w_t')
			await removeCookie();
			window.location.reload();
		} else (
			localStorage.setItem('w_t', storedValue + 1)
		)
	}

	useEffect(() => {
		if (!isLiveEnded) return; // Do nothing if the modal is closed

		const interval = setInterval(() => {
			const startDate = StreamStartTime // Convert provided date and time to GMT
			const currentTime = new Date();
			const timeDiff = startDate - currentTime;

			if (timeDiff <= 0) {
				// If start time has passed, close the modal or do any other desired action
				setIsStreamStarted(true)
				clearInterval(interval);
			} else {
				// Calculate remaining time
				const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
				const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
				let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

				// Prepend zero to single-digit seconds
				seconds = seconds < 10 ? '0' + seconds : seconds;
				minutes = minutes < 10 ? '0' + minutes : minutes;
				setTimeRemaining({ days, hours, minutes, seconds });
			}
		}, 1000);

		return () => clearInterval(interval); // Clean up interval on unmount or when modal is closed
	}, [StreamStartTime]);

	return isClient && (
		<>
			<VStack w={"100%"} h={{ base: "auto", md: "auto" }}>
				<VStack sx={{
					aspectRatio: "16/9",
					maxWidth: "1100px",
					bgcolor: "#fff",
					width: "100%",
					height: "100%",
				}}>
					{!isError ?
						isLiveEnded ? //isLiveEnded
							isStreamStarted ? //isStreamStarted
								(<StreamVideoPlayer videoEnded={videoEnded} />)
								: (
									<Box
										p={8}
										width={"100%"}
										height={"100%"}
										display={"flex"}
										justifyContent={"flex-start"}
										alignItems={"flex-end"}
										pos={'relative'}
									>
										<VStack alignItems={"center"} justifyContent={"center"} width={"full"} height={"100%"} gap={2} zIndex={10}>
											<Image src={"https://elements-video-cover-images-0.imgix.net/files/d191219e-0441-451d-85b8-c14e1ddf92de/inline_image_preview.jpg?auto=compress%2Cformat&h=394&w=700&fit=min&s=34b53909d650ea4a76166c0b7c762fb6"} alt="cover image" filter={"brightness(0.5)"} pos={'absolute'} top={0} left={0} width={'100%'} height={'100%'} objectFit={'cover'} />
											<Text zIndex={16} color={"#fff"} fontSize={{ base: "14px", md: "20px" }}>
												Live Replays In
											</Text>
											<Text zIndex={16} color={"#fff"} fontSize={{ base: "14px", md: "20px" }}>
												{timeRemaining.hours > 0 && `${timeRemaining.hours} : `} {timeRemaining.minutes} : {timeRemaining.seconds}
											</Text>

										</VStack>
									</Box>
								)
							: (<VideoPlayer token={token} id={id} />)
						: (
							<Box
								p={8}
								width={"100%"}
								height={"100%"}
								display={"flex"}
								justifyContent={"flex-start"}
								alignItems={"flex-end"}
								pos={'relative'}
							>
								<VStack alignItems={"center"} justifyContent={"center"} width={"full"} height={"100%"} gap={2} zIndex={10}>
									<Image src={"https://elements-video-cover-images-0.imgix.net/files/d191219e-0441-451d-85b8-c14e1ddf92de/inline_image_preview.jpg?auto=compress%2Cformat&h=394&w=700&fit=min&s=34b53909d650ea4a76166c0b7c762fb6"} alt="cover image" filter={"brightness(0.5)"} pos={'absolute'} top={0} left={0} width={'100%'} height={'100%'} objectFit={'cover'} />
									<>
										<Text fontSize={{ base: "18px", md: "24px" }} zIndex={16}>မုန်တိုင်းကြားကသက်တံများ</Text>
										<Text fontSize={{ base: "12px", md: "16px" }} zIndex={16} sx={{ overflowWrap: 'break-word', wordBreak: "break-all" }} maxWidth={"80%"} textAlign={"center"}>{isError}</Text>
										<Text fontSize={{ base: "14px", md: "18px" }} zIndex={16}>အဆင်မပြေမှုများအတွက်တောင်းပန်အပ်ပါသည်။</Text>
									</>
								</VStack>
							</Box>
						)}

				</VStack>
			</VStack>
		</>
	);
};

export default CurrentLive;
