"use client";
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
	IconMinimize,
	IconMaximize,
	IconPlayerPauseFilled,
	IconPlayerPlayFilled,
	IconVolume,
	IconVolumeOff
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

const LiveVideoPlayer = (props) => {
	const [timeoutId, setTimeoutId] = useState(null);
	const playerContainerRef = useRef(null);
	const intervalRef = useRef(null);
	const videoRef = useRef();
	const playerRef = useRef();
	// const { setIsLiveEnded, setIsLivePlayed} = props;
	const [playerReady, setPlayerReady] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [sliderValue, setSliderValue] = useState(0);
	const [isMobile] = useMediaQuery("(max-width: 414px)");
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showControls, setShowControls] = useState(true);
	const [reloadVideo, setReloadVideo] = useState(false);
	const [volumeValue, setVolumeValue] = useState(100);


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



	const onReady = useCallback(async (player) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on("waiting", () => {
			videojs.log("player is waiting");
		});

		// player.on('error', async function () {
		// 	fetch(`https://api.24framesmozart.com/source/live/index.m3u8/${liveuuid}?auth_token=${authToken}`)
		// 		.then(async response => {
		// 			if (response.status === 401) {
		// 				console.log('Received 401 status');
		// 				// Call refreshingToken and handle its resolved value with .then()
		// 				refreshingToken().then(res => {
		// 					const player = playerRef.current;
		// 					if (!res.error && !isError) { // Assuming isError is a state or a variable you've defined elsewhere
		// 						if (player) {
		// 							setIsError(false)
		// 							player.src({
		// 								src: `https://api.24framesmozart.com/source/live/index.m3u8/${liveuuid}?auth_token=${res.authToken}`,
		// 								type: 'application/x-mpegURL',
		// 							});
		// 							player.play();
		// 						}
		// 					}
		// 				}).catch(error => {
		// 					sessionStorage.setItem('videoError', 500)
		// 					window.location.reload();
		// 				});
		// 			} else if (response.status === 403) {
		// 				sessionStorage.setItem('videoError', 403)
		// 				window.location.reload();
		// 			} else if (response.status == 500) {
		// 				try {
		// 					const data = await response.json()
		// 					if (data.error && (data.error === "you are not allowed to watch this live" || "you have used all your watch time")) {
		// 						sessionStorage.setItem('videoError', 403)
		// 						window.location.reload();
		// 					}
		// 				} catch (error) {
		// 					sessionStorage.setItem('videoError', 500)
		// 					window.location.reload();
		// 				}

		// 			}
		// 			else if (!response.ok) {
		// 				sessionStorage.setItem('videoError', 500)
		// 				window.location.reload();
		// 			}
		// 			else {
		// 				// If the response is successful and not 401, you can proceed to process it
		// 				sessionStorage.setItem('videoError', 200)
		// 				window.location.reload();
		// 			}
		// 		})
		// 		.catch(error => {
		// 			sessionStorage.setItem('videoError', true)
		// 			window.location.reload();
		// 		});
		// });


		player.on("dispose", () => {
			videojs.log("player will dispose");
		});
		// player.on("ended", () => { setIsPlaying(false), setIsLiveEnded(true) });
	}, []); // Add necessary dependencies in the array

	const options = useMemo(() => ({
		autoplay: false,
		muted: false,
		controls: false,
		preload: 'none',
		responsive: true,
		fluid: true,
		liveTracker: true,
		sources: [
			{
				src: `https://video.risrainbow.com/04e6bfac-6169-4fd4-b348-86f6d59a1c6d/playlist.m3u8`,
				// src: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
				type: 'application/x-mpegURL',
			},
		],
	}), []);


	useEffect(() => {
		if (reloadVideo) {
			setReloadVideo(false);
			const player = playerRef.current;
			if (player) {
				player.src(options.sources);
				player.play();
				player.currentTime((sliderValue / 100) * duration);
				setIsPlaying(true);
			}
		}
	}, [isPlaying])

	useEffect(() => {
		// Make sure Video.js p
		// const globalXhrRequestHook = (options) => {
		// 	if (options.uri.includes('.m3u8')) {
		// 		options.beforeSend = (xhr) => {
		// 			xhr.setRequestHeader('Authorization', authToken);
		// 		};
		// 	}
		// 	return options;
		// };
		// videojs.Vhs.xhr.onRequest(globalXhrRequestHook);
		if (!playerRef.current) {
			// The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
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
			// const handleTimeUpdate = () => setCurrentTime(player.currentTime());
			const updateLiveInfo = () => {
				if (liveTracker.isLive()) {
					setCurrentTime(liveTracker.liveCurrentTime())
				}
			};
			const handleDurationChange = () => setDuration(player.duration());
		
			player.on("timeupdate", updateLiveInfo);
			player.on("durationchange", handleDurationChange);

			return () => {
				player.off("timeupdate", updateLiveInfo);
				player.off("durationchange", handleDurationChange);
			};
		}

	}, [playerReady, playerRef]);

	// Dispose the Video.js player when the functional component unmounts
	useEffect(() => {
		const player = playerRef.current;

		return () => {
			if (player && (!player.isDisposed() || player.end())) {
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

	// const playVideo = () => {
	// 	const player = playerRef.current;
	// 	if (player) {
	// 		if (player.paused()) {
	// 			player.play();
	// 			setIsPlaying(true);
	// 		} else {
	// 			player.pause();
	// 			setIsPlaying(false);
	// 		}
	// 	}
	// };

	const playVideo = () => {
		const player = playerRef.current;
		if (player) {
			if (player.paused()) {
				player.play();
				setIsPlaying(true);
				// setIsLivePlayed(true);

				// If the video is played, clear the existing timeout
				if (timeoutId) {
					clearTimeout(timeoutId);
					setTimeoutId(null);
				}
			} else {
				player.pause();
				setIsPlaying(false);

				// If the video is paused, start a timeout that will run a function after 1 minute
				// const id = setTimeout(() => {
				// 	// Put the function you want to run here
				// 	console.log('1 minute has passed since the video was paused');
				// 	setReloadVideo(true);
				// 	// Clear the timeout id after it has executed
				// 	setTimeoutId(null);
				// }, 60000);
				// setTimeoutId(id);
			}
		}
	};

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
			setSliderValue(value);
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
			sx={{ maxWidth: "1100px", aspectRatio: "16/9", width: "100%", height: "100%", position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Box sx={{ width: "100%", justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
				<div ref={videoRef} onClick={playVideo}/>
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
					{isPlaying && (
						<Box pos={"absolute"} right={3}
							// transform={"translateX(-50%)"}
							top={3}
							bgColor={"#F13D3C"}
							p={1}
							borderRadius={5}
						>
							<Text  fontSize={14}>
								{formatTime(currentTime)}
							</Text>
						</Box>
					)}

					<VStack
						pos={"absolute"}
						w={"100%"}
						left={"50%"}
						transform={"translateX(-50%)"}
						bottom={0}
						height={{ base: "40px", md: "50px" }}
						gap={2}
						zIndex={100}
						px={"24px"}
						style={{
							background: "linear-gradient(to bottom, transparent 0%, black 100%)",
							opacity: showControls ? 1 : 0,
							transition: 'opacity 0.2s ease-out', // Add ease-in transition for opacity
							pointerEvents: showControls ? 'auto' : 'none', // Prevent interaction when controls are hidden
						}}
					>
						<HStack position={"relative"} width={"100%"} h={2.8}>
							<PlayerButton onClick={playVideo}>
								{isPlaying ? (
									<IconPlayerPauseFilled size={23} />
								) : (
									<IconPlayerPlayFilled size={23} />
								)}
							</PlayerButton>
							<Slider
								aria-label="slider-ex-4"
								value={100}
								pos={"relative"}
								// onChange={handleSliderChange}
							>
								<SliderTrack bg="red.100">
									<SliderFilledTrack bg="tomato" />
								</SliderTrack>
								<SliderThumb boxSize={2} pos={"relative"}>
									<Box color="tomato" />
									<Text
										fontSize={11}
										pos={"absolute"}
										bottom={4}
										left={0}
										width={100}
									>
										{/* {currentTime} */}
									</Text>
								</SliderThumb>
								{/* <Text fontSize={11} pos={"absolute"} bottom={4} right={0}>
								{formatTime(duration)}
							</Text> */}
							</Slider>
							<HStack gap={0}>
								<IconButton
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
									onChange={handleVolumeChange}
									w={"50px"}
									display={{base:"none", md:"block"}}
								>
									<SliderTrack bg="red.100">
										<SliderFilledTrack bg="#fff" />
									</SliderTrack>
									<SliderThumb boxSize={2}>
										<Box color="tomato" />
									</SliderThumb>
								</Slider>
							</HStack>
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
					</VStack>
				</>
			)}
		</Box >
	);
};

export default LiveVideoPlayer;
