"use client";
import { play, poppins } from "@/app/fonts";
import {
	Box,
	HStack,
	IconButton,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Text,
	VStack,
	useMediaQuery,
} from "@chakra-ui/react";
import {
	IconBadgeCc,
	IconDeviceSpeaker,
	IconHeart,
	IconMaximize,
	IconMinimize,
	IconRewindBackward10,
	IconRewindForward10,
	IconPlayerPauseFilled,
	IconPlayerPlayFilled,
	IconVolume,
	IconVolumeOff,
	IconArrowBackUp
} from "@tabler/icons-react";
import { Fascinate } from "next/font/google";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./videojs.style.css";

const PlayerButton = ({ children, ...props }) => {
	return (
		<IconButton
			size={{ base: "xs", md: "sm" }}
			sx={{
				paddingInlineEnd: "2px !important",
				paddingInlineStart: "2px !important",
			}}
			_hover={{ background: "none" }}
			icon={children}
			{...props}
			bgColor={"transparent"}
		/>
	);
};

const formatTime = (seconds) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = Math.floor(seconds % 60);

	let timeString = `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

	if (hours > 0) {
		timeString = `${hours.toString().padStart(2, "0")}:${timeString}`;
	}

	return timeString;
};

const StreamVideoPlayer = (props) => {
	const playerContainerRef = useRef(null);
	const intervalRef = useRef(null);
	const videoRef = useRef();
	const playerRef = useRef();
	const [playerReady, setPlayerReady] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [sliderValue, setSliderValue] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showControls, setShowControls] = useState(true);
	const [volumeValue, setVolumeValue] = useState(100);


	const playVideo = () => {
		const player = playerRef.current;
		if (player) {
			if (player.paused()) {
				setIsPlaying(true);
				player.play();
			} else {
				player.pause();
				setIsPlaying(false);
			}
		}
	};




	const handleInteraction = useCallback(() => {
		setShowControls(true); // Show controls on interaction
		clearTimeout(intervalRef.current); // Clear existing timeout to reset the timer

		// Set a timeout to hide controls after 8 seconds of inactivity
		intervalRef.current = setTimeout(() => {
			setShowControls(false);
		}, 4000); // 8 seconds
	}, []);

	useEffect(() => {
		return () => {
			clearTimeout(intervalRef.current); // Clear timeout on unmount
		};
	}, []);

	useEffect(() => {
		const playerContainer = playerContainerRef.current;
		if (playerContainer) {
			playerContainer.addEventListener('mousemove', handleInteraction);
			playerContainer.addEventListener('touchstart', handleInteraction, { passive: true });

			return () => {
				playerContainer.removeEventListener('mousemove', handleInteraction);
				playerContainer.removeEventListener('touchstart', handleInteraction);
			};
		}
	}, [handleInteraction]);

	const options = useMemo(() => ({
		autoplay: false,
		muted: false,
		controls: false,
		preload: 'none',
		responsive: true,
		fluid: true,
		liveTracker: true,
		// poster: poster,
		// userActions: {
		// 	click: playClickVideo
		// },
		sources: [
			{
				src: `https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8`,
				type: 'application/x-mpegURL',
			},
		],
	}), []);



	const onReady = useCallback(async (player) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on("waiting", () => {
			videojs.log("player is waiting");
		});


		player.on("dispose", () => {
			videojs.log("player will dispose");
		});

		// player.on("ended", () => {});
	}, []); // Add necessary dependencies in the array



	useEffect(() => {

		if (!playerRef.current) {
			const videoElement = document.createElement("video-js");

			videoElement.classList.add("vjs-big-play-centered");
			videoRef.current.appendChild(videoElement);

			const player = (playerRef.current = videojs(videoElement, options, () => {
				videojs.log("player is ready");
				onReady && onReady(player);
			}));

			setPlayerReady(true);
		} else if (playerRef.current) {
			const player = playerRef.current;
			player.autoplay(options.autoplay);
			player.src(options.sources);
		}
	}, [options, videoRef]);

	useEffect(() => {
		const player = playerRef.current;
		if (playerReady && player) {
			const liveTracker = player.liveTracker;
			const handleTimeUpdate = () => setCurrentTime(player.currentTime());
			const handleDurationChange = () => setDuration(player.duration());

			player.on("timeupdate", handleTimeUpdate);
			player.on("durationchange", handleDurationChange);

			return () => {
				player.off("timeupdate", handleTimeUpdate);
				player.off("durationchange", handleDurationChange);
			};
		}

	}, [playerReady, playerRef]);

	// Dispose the Video.js player when the functional component unmounts
	useEffect(() => {
		const player = playerRef.current;

		return () => {
			if (player && (!player.isDisposed())) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);

	useEffect(() => {
		if (duration > 0) {
			setSliderValue((currentTime / duration) * 100);
		}
	}, [currentTime, duration]);


	// Volume control
	const toggleVolume = () => {
		const player = playerRef.current;
		if (player) {
			// player.volume(player.volume() > 0 ? 0 : 1);
			player.muted(!player.muted());
			setIsMuted(player.muted());
		}
	};

	const toggleFullscreen = () => {
		const playerContainer = playerContainerRef.current;
		if (!document.fullscreenElement && playerContainer) {
			if (playerContainer.requestFullscreen) {
				playerContainer.requestFullscreen();
			} else if (playerContainer.webkitRequestFullscreen) { // Safari
				playerContainer.webkitRequestFullscreen();
			} else if (playerContainer.mozRequestFullScreen) { // Firefox
				playerContainer.mozRequestFullScreen();
			} else if (playerContainer.msRequestFullscreen) { // IE and Edge
				playerContainer.msRequestFullscreen();
			}
			setIsFullscreen(true);
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) { // Safari
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) { // Firefox
				document.mozCancelFullScreen();
			} else if (document.msExitFullscreen) { // IE and Edge
				document.msExitFullscreen();
			}
			setIsFullscreen(false);
		}
	};

	const handleSliderChange = (value) => {
		const player = playerRef.current;
		if (player) {
			player.currentTime((value / 100) * duration);

			// if (sliderValue > value) {
			// 	if ((((sliderValue - value) / 100) * duration) >= 540) {
			// 		setReloadVideo(true)
			// 	}
			// }
			setSliderValue(value);

		}
	};

	const seekForward = () => {
		const player = playerRef.current;
		if (player) {
			player.currentTime(player.currentTime() + 10); // 10 seconds forward
		}
	};

	const seekBackward = () => {
		const player = playerRef.current;
		if (player) {
			player.currentTime(player.currentTime() - 10); // 10 seconds backward
		}
	};

	const handleVolumeChange = (value) => {
		const player = playerRef.current;
		if (player) {
			player.volume(value / 100);
			setVolumeValue(value);
		}
	};

	return (
		<Box
			className="data-vjs-player video"
			ref={playerContainerRef}
			background={"#000"}
			sx={{ maxWidth: "1100px", aspectRatio: "16/9", width: "100%", height: "100%", position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Box background={"#000"} sx={{ width: "100%", justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
				<div ref={videoRef} onClick={playVideo} />
			</Box>

			{playerReady && (
				<>
					{
						!isPlaying && (
							<IconButton
								w={'98px'}
								h={'40px'}
								borderRadius={"26px"}
								pos={"absolute"}
								bgColor={"#F13D3C"}
								left={"50%"}
								top={"50%"}
								transform={"translate(-50%,-50%)"}
								icon={
									<IconPlayerPlayFilled
										style={{
											color: "#FFF",
										}}
										width={20}
									/>
								}
								_hover={{
									opacity: 0.8
								}}
								onClick={() => playVideo()}
							>
							</IconButton>
						)
					}

					<VStack
						pos={"absolute"}
						w={{ base: "100%", md: "100%" }}
						left={"50%"}
						transform={"translateX(-50%)"}
						bottom={0}
						gap={2}
						zIndex={100}
						height={{ base: "40px", md: "50px" }}
						justifyContent={"center"}
						// mb={{ base: 6, md: 6 }}
						px={{ base: "25px" }}
						style={{
							background: "linear-gradient(to bottom, transparent 0%, black 100%)",
							opacity: showControls ? 1 : 0,
							transition: 'opacity 0.2s ease-out', // Add ease-in transition for opacity
							pointerEvents: showControls ? 'auto' : 'none', // Prevent interaction when controls are hidden
						}}
					>
						<HStack position={"relative"} width={"100%"} h={2.8}>

							<Slider
								aria-label="slider-ex-4"
								value={sliderValue}
								pos={"relative"}
								onChange={handleSliderChange}
							>
								<Text
									fontSize={11}
									pos={"absolute"}
									bottom={4}
									left={0}
									width={100}
								>
									{formatTime(currentTime)}
								</Text>
								<SliderTrack bg="red.100">
									<SliderFilledTrack bg="tomato" />
								</SliderTrack>
								<SliderThumb boxSize={2} pos={"relative"}>
									<Box color="tomato" />

								</SliderThumb>
								<Text fontSize={11} pos={"absolute"} bottom={4} right={0}>
									{isFinite(duration) && formatTime(duration)}
								</Text>
							</Slider>

						</HStack>
						<HStack width={"100%"} justifyContent={"space-between"}>
							<HStack>
								<PlayerButton onClick={playVideo}>
									{isPlaying ? (
										<IconPlayerPauseFilled size={23} />
									) : (
										<IconPlayerPlayFilled size={23} />
									)}
								</PlayerButton>
								<PlayerButton onClick={seekBackward}>
									<IconRewindBackward10 size={23} />
								</PlayerButton>
								<PlayerButton onClick={seekForward}>
									<IconRewindForward10 size={23} />
								</PlayerButton>
								<HStack gap={0}>
									<IconButton
										_hover={{ background: "none" }}
										sx={{
											paddingInlineEnd: "2px !important"
										}}
										size={{ base: "xs", md: "sm" }}
										bgColor={"transparent"}
										onClick={toggleVolume}>
										{isMuted ? (
											<IconVolumeOff size={23} />
										) : (
											<IconVolume size={23} />
										)}
									</IconButton>
									<Slider
										aria-label="Volume control"
										value={volumeValue}
										display={'block'}
										onChange={handleVolumeChange}
										w={"50px"}
									>
										<SliderTrack bg="red.100">
											<SliderFilledTrack bg="#fff" />
										</SliderTrack>
										<SliderThumb boxSize={2}>
											<Box color="tomato" />
										</SliderThumb>
									</Slider>
								</HStack>
							</HStack>
							<HStack>
								<PlayerButton onClick={toggleFullscreen}>
									{
										isFullscreen ? (
											<IconMinimize size={23} />
										) : (
											<IconMaximize size={23} />
										)
									}
								</PlayerButton>

							</HStack>

						</HStack>
					</VStack>
				</>
			)}
		</Box >
	);
};

export default StreamVideoPlayer;
