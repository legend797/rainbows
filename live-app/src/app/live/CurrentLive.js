'use client'
// import VideoPlayer from "@/app/components/videoPlayer/VideoPlayer";
import LiveVideoPlayer from "../components/liveVideoPlayer/LiveVideoPlayer";
// import StreamVideoPlayer from "@/app/components/streamVideoPlayer/StreamVideoPlayer";
import VideoPlayer from "../components/muxPlayer/VideoPlayer";
import {
	Box,
	Button,
	HStack,
	IconButton,
	Image,
	Text,
	VStack,
	useMediaQuery,
	Center,
	Spinner
} from "@chakra-ui/react";

import { useRef, useState, useEffect, useTransition, useMemo } from "react";

const CurrentLive = ({ }) => {



	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true)
	},[])
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
					<LiveVideoPlayer />
					{/* <VideoPlayer /> */}
				</VStack>
			</VStack>
			{/* <ShareModal isOpen={isShareModalOpen} onClose={onShareModalClose} title={data.name} /> */}
			{/* {isTicketAccept ? ( //isTicketAccept
				<SubmitTicketModal isOpen={isTicketModalOpen} onClose={onTicketModalClose} data={data.live} handleSubmitTicket={handleSubmitTicket} ticketRes={ticketRes} />
			) : (
				<CountdownModal isOpen={isTicketModalOpen} onClose={onTicketModalClose} data={data.live} setIsLiveStarted={setIsLiveStarted} />
			)} */}


		</>
	);
};

export default CurrentLive;
