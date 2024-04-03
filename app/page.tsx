"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { FloatingNav } from "@/components/ui/floating-navbar";
import React, { useEffect, useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import localFont from "next/font/local";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { useOnClickOutside, useIntersectionObserver } from 'usehooks-ts'
const montserrat = Montserrat({ subsets: ["latin"] });
const helvetica = localFont({ src: "../public/fonts/helveticaneue.woff2" });
export default function Home() {

	const navItems = [
		{
			name: "Home",
			link: "#home",
		},
		{
			name: "About",
			link: "#about",
		},
		{
			name: "Guidelines",
			link: "#guidelines",
		},
		{
			name: "Events",
			link: "#events",
		},
		{
			name: "Team",
			link: "#team",
		},
	];
	const teamMembers = [
		{
			name: "Reyansh Adlakha",
			role: "President",
			image: "/team/reyansh.jpg",
		},
		{
			name: "Atharva Chauhan",
			role: "Vice President",
			image: "/team/atharv.png",
		},
		{
			name: "Arnav Kashyap",
			role: "Creative Head",
			image: "/team/arnav.png",
		},
		{
			name: "Tanveer",
			role: "Creative Head",
			image: "/team/tanveer.jpeg",
		},
		{
			name: "Harshit",
			role: "Photography Head",
			image: "/team/harshit.jpeg",
		},
		{
			name: "Lavnika",
			role: "Photography Head",
			image: "/team/lavnika.jpg",
		},
		{
			name: "Aneira",
			role: "Designing Head",
			image: "/team/aneira.jpg",
		},
		{
			name: "Akshat",
			role: "Web Development Head",
			image: "/team/aks.jpg",
		},
		{
			name: "Parth",
			role: "Designing Head",
			image: "/team/Parth.png",
		},
		{
			name: "Sashreek",
			role: "Gaming Head",
			image: "/team/sashreek.jpg",
		},
		{
			name: "AR Nadal",
			role: "Programmer",
			image: "/team/AR Nadal Verma.jpg",
		},
	];
	const Skeleton = () => {
		return (
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover overflow-hidden">
				<video
					src="/webdandavidfinal.mp4"
					onMouseOver={(event: any) => {
						event.target.play();
					}}
					onMouseOut={(event: any) => {
						event.target.pause();
						event.target.currentTime = 0;
					}}
					muted
					loop
					className="max-w-max"
				></video>
			</div>
		);
	};
	const items = [
		{
			title: "@Kuriovation",
			description:
				"A presentation competition for participants with great technological ideas that could bring changes to the world.",
			header: <Skeleton />,
			url: "/",
			thumbnail: "/events/kuriovation.png",
		},
		{
			title: "@MechaMarvel",
			description:
				"An event where sumo robots fight to win the title of the best.",
			header: <Skeleton />,
			url: "/",
			thumbnail: "/events/sumo.png",
		},
		{
			title: "@Synapse",
			description: "An AI based pitching event where participants present their business ideas to address the given prompt ",
			header: <Skeleton />,
			url: "/",
			thumbnail: "/events/synapse.png",
		},
		{
			title: "@Arcadia",
			description:
				"Competitors battle for glory in Valorant, showcasing skills and teamwork on the digital battlefield",
			header: <Skeleton />,
			url: "/",
			thumbnail: "/events/arcadia.png",
		},
		{
			title: "@CypherNexus",
			description: "Programmers engage in a riveting coding competition, demonstrating their algorithmic expertise and problem-solving skills",
			header: <Skeleton />,
			url: "/",
			thumbnail: "/events/cyphernexus.png",
		},
		{
			title: "@QuantaLens",
			description: "Photographers must capture the essence of the moment where creativity meets technique to produce stunning images that write a story through the lens.",
			header: <Skeleton />,
			url: "/",
			thumbnail: "/events/quantalens.png",
		},
		{
			title: "@RoboRush",
			description: "Participants pit their bots against each other in a thrilling race of speed and agility, showcasing cutting-edge robotics technology.",
			header: <Skeleton />,
			url: "/",
			thumbnail: "/events/roborush.png",
		},
		{
			title: "@AquaDash",
			description: "Participants race innovative water bots, pushing robotics boundaries for aquatic supremacy.",
			header: <Skeleton />,
			url: "/",
			thumbnail: "/events/aquadash.png",
		},
		{
			title: "@TechTales",
			description: "Participants must weave tales and bring their characters to life in a competition of creativity and imagination through the medium of comic strips",
			header: <Skeleton />,
			url: "/",
			thumbnail: "/events/TechTales.png",
		},
	];

	const eventsData: {
		[index: string]: React.ReactNode;
	} = {
		"@Kuriovation": (
			<div className="space-y-4">
				<p className="text" id="description-popup">
					A presentation competition for participants with great technological
					ideas that could bring changes to the world.
				</p>
					<p><b>Theme: Innovation for Persons with Disabilities</b></p>
				<div className="eventcontent">
					<h2 className="text information" id="elig">
						Eligibilty: 6th to 12th
					</h2>
					<h2 className="text information" id="participant">
						Number of Participants: 2
					</h2>
					<h2 className="text information" id="participant">
						No of teams allowed per school: 1
					</h2>
					<h2 className="text information" id="mode">
						Mode: Prelims- Submission based;
						<br /> Finals- 9 May 2024 (Offline)
					</h2>
				</div>
				<ol className="list-disc">
					<li className="item" id="point">
						Students will have to submit their ideas for prelims. The idea must
						make use of robotics/IOT for developing prompt appropriate gadgets.
					</li>

					<li className="item" id="point">
						They must submit a word document containing the synopsis of their
						idea containing a description and the problem statement
					</li>

					<li className="item" id="point">
						They must also submit a video of 2-3 minutes showcasing the video of
						the model
					</li>

					<li className="item" id="point">
						The result of prelims will be shared on Wednesday 01 May 2024.
					</li>

					<li className="item" id="point">
						A total of 25 teams will be selected for the final round which will
						be held offline in the school premises.
					</li>

					<li className="item" id="point">
						Participants have to present their project/idea and are required to
						use a working model for the same .
					</li>

					<li className="item" id="point">
						Participants will be given 5 minutes to present their ideas on the
						final day.
					</li>

					<li className="item" id="point">
						The theme must be applied in reference to SDG Goals
					</li>

					<li className="item" id="point">
						<b>
							The results for the prelims will be announced on Saturday 01 May
							2024.
						</b>
					</li>
				</ol>

				<h2 className="text" id="subtext">
					Judgment criteria:
				</h2>

				<ol className="list-disc">
					<li className="item" id="point">
						Objective of the Project 
					</li>

					<li className="item" id="point">
						Originality/ Creativity
					</li>

					<li className="item" id="point">
						Project Design and Construction Compatibility 
					</li>
					<li className="item" id="point">
						Problem solving and solution
					</li>

					<li className="item" id="point">
						Implementation and feasibility in the market
					</li>
				</ol>
			</div>
		),
		"@MechaMarvel": (
			<div className="space-y-4">
				<p className="text" id="description-popup">
					Sumo robotics is a competitive sport where teams create robots to push
					or flip opponents out of a ring. Two autonomous robots face off,
					aiming to stay in the arena while forcing the other out. The winner is
					determined by the robot with the most points at the end of the
					matches.
				</p>

				<div className="eventcontent">
					<h2 className="text information" id="elig">
						Eligibilty: 9th to 12th
					</h2>

					<h2 className="text information" id="participant">
						Number of Participants: 2
					</h2>

					<h2 className="text information" id="participant">
						No of teams allowed per school: 1
					</h2>

					<h2 className="text information" id="mode">
						Mode:  9 May 2024 (Offline)
					</h2>
				</div>

				<ol className="list-disc">
					<li className="item" id="point">
						<b>The first 16 teams to register will be allowed to participate</b>
					</li>

					
				</ol>
				<a href="/events/mecha.pdf" className="shade">
					Click To Know More
				</a>

				
			</div>
		),
		"@Synapse": (
			<div className="space-y-4">
				<p className="text" id="description-popup">
					Develop a business idea/product/service that leverages Artificial
					Intelligence to address a prompt which will be released on
					<b> Saturday 20 April 2024.</b>
				</p>

				<div className="eventcontent">
					<h2 className="text information" id="elig">
						Eligibilty: 9th to 12th
					</h2>

					<h2 className="text information" id="participant">
						Number of Participants: 4
					</h2>

					<h2 className="text information" id="participant">
						No of teams allowed per school: 1
					</h2>

					<h2 className="text information" id="mode">
						Mode: Prelims- Submission based;
						<br /> Finals- 9 May 2024 (Offline)
					</h2>
				</div>

	
				<h2 className="text" id="subtext">
					<b>Prelims:</b>

				</h2>
				
				<ol className="list-disc"> 
					

					<li className="item" id="point">
						Develop a business idea/product/service that leverages Artificial Intelligence to address a prompt which will be released on Saturday 20 April 2024. 
					</li>

					<li className="item" id="point">
						The submission link will be shared with the prompt.

					</li>

					<li className="item" id="point">
						Submission to be done by Wednesday, 01 May 2024

					</li>

				</ol>

				<h2 className="text" id="subtext">
					<b>Submission Requirements:</b>
				</h2>

				<ol className="list-disc">
					

					<li className="item" id="point">
						3-D model/UI design
					</li>

					<li className="item" id="point">
						Posters
					</li>

					<li className="item" id="point">
						Logo
					</li>

					<li className="item" id="point">
						Trailer/Advertisement/Commercial (any music can be used, but
						additional points for self-made audio; use of templates is strictly
						prohibited)
					</li>

					<li className="item" id="point">
						Website/App (choose 1)
					</li>
				</ol>

				<h2 className="text" id="subtext">
					Additional Guidelines:
				</h2>

				<ol className="list-disc">
					<li className="item" id="point">
						While a working model of the Artificial Intelligent
						idea/product/service is not mandatory, you must provide a prototype
						in the early stages of development, explaining the algorithms and
						methodologies used in your project. The prototype may include
						explanations of algorithms and methodologies, accompanied by an
						edited video demonstrating the working of the model.
					</li>
				</ol>

				<h2 className="text" id="subtext">
					<b>Judgment criteria:</b>
				</h2>

				<ol className="list-disc">
					<li className="item" id="point">
						Integration of AI into business
					</li>

					<li className="item" id="point">
						Quality of deliverables
					</li>

					<li className="item" id="point">
						Business Idea
					</li>

					<li className="item" id="point">
						Originality/ Creativity
					</li>
				</ol>

				<h2 className="text" id="subtext">
					{" "}
					The results for the prelims will be announced on{" "}
					<b>Saturday 04 May 2024</b>
				</h2>

				<h2 className="text" id="subtext">
					<b>Finals:</b>
				</h2>

				<ol className="list-disc">
					<li className="item" id="point">
						Top 10 teams will qualify for the finals
					</li>

					<li className="item" id="point">
						The teams are required to make a presentation of 10-12 slides
						including typography and suitable color scheme, with the following
						points included:
						<br />
						Implementation of AI
						<br />
						Target market customer analysis competitors operations
						<br />
						Marketing and Financial
						<br />
						SWOT analysis
					</li>

					<li className="item" id="point">
						The presentation has to be given in the school in front of a panel
						of judges, but the draft for the same has to be submitted by 8:00pm,
						Tuesday, 7 May 2024. Each team will get 5 minutes to present their
						idea followed by Q & A for 2-3 minutes.
					</li>

					<li className="item" id="point">
						Please ensure that the team completes their presentation within the
						allocated time limit to avoid any deductions in points.
					</li>
				</ol>
			</div>
		),
		"@Arcadia": (
			<div className="space-y-4">
				<p className="text" id="description-popup">
					The game to be played is ‘VALORANT’ in a 5v5 mode. All teams will be
					put into brackets and all the matches in the tournament will be
					knockouts except the semi finals and finals which will be a best of 3.
				</p>

				<div className="eventcontent">
					<h2 className="text information" id="elig">
						Eligibilty: 9th to 12th
					</h2>

					<h2 className="text information" id="participant">
						Number of Participants: 5
					</h2>

					<h2 className="text information" id="participant">
						No of teams allowed per school: 1
					</h2>

					<h2 className="text information" id="mode">
						Mode: Online
					</h2>
				</div>

				<h2 className="text" id="subtext">
					Software minimum requirements:
				</h2>

				<ol className="list-disc">
					<li className="item" id="point">
						Windows 7/8/10 64-bit
					</li>

					<li className="item" id="point">
						Ram 4GB
					</li>

					<li className="item" id="point">
						VRAM 1GB
					</li>

					<li className="item" id="point">
						Recommended Specs: CPU: Intel i3-4150 | GPU: Geforce GT 730
					</li>
				</ol>

				<ol className="list-disc">
					<li className="item" id="point">
						The event will start at 9:30 am onwards on Saturday 4 May 2024 and
						Sunday 5 May 2024. The Discord Server link has been given in the
						General Guidelines. Only the registered participants would get the
						access to the gaming channel after verification. Participants are
						requested to join the server at least two days prior to the event
						with their real names.
					</li>

					<li className="item" id="point">
						The schedule will be laid out in advance on the Discord Server
						itself. Timings will be fixed, no change in schedule will be
						entertained afterwards.
					</li>

					<li className="item" id="point">
						During verification, participants are also requested to post their
						in-game ID’s below their real name and only registered accounts will
						be allowed to join the tournament custom. If any unregistered
						account joins the custom lobby, they will be removed instantly.
					</li>

					<li className="item" id="point">
						The use of any kind of hack and/or aimbot is strictly prohibited.
					</li>
				</ol>
			</div>
		),
		
		"@QuantaLens": (
			<div className="space-y-4">
				<p className="text" id="description-popup">
					A prompt will be released on Saturday 20 April 2024 and participants
					are required to submit a picture which correlates to the given prompt.
				</p>

				<div className="eventcontent">
					<h2 className="text information" id="elig">
						Eligibilty: 9th to 12th
					</h2>

					<h2 className="text information" id="participant">
						Number of Participants: 2
					</h2>

					<h2 className="text information" id="participant">
						No of teams allowed per school: 1
					</h2>

					<h2 className="text information" id="mode">
						Mode: Prelims- Submission based ; Finals :09 May 2024(Offline)
					</h2>
				</div>

				<h2 className="text" id="subtext">
					Prelims:
				</h2>

				<ol className="list-disc">


					<li className="item" id="point">
						Submit JPEG photographs with metadata and a related caption/story.
						Photos must have been clicked after 01 January 2024.
					</li>
					<li className="item" id="point">
						Submission to be done by Wednesday, 01 May 2024

					</li>

					<li className="item" id="point">
						Requirements:
						<ol className="list-disc">
							<li className="item" id="point">
								Submit both raw and edited versions.
							</li>

							<li className="item" id="point">
								File name should be NAME OF
								PARTICIPANT_SCHOOL_IMAGINE(edited/raw).
							</li>

							<li className="item" id="point">
								Basic enhancements are allowed, but the raw photo must be
								included.
							</li>

							<li className="item" id="point">
								Originality is mandatory and any sort of plagiarism will result
								in immediate disqualification.
							</li>

							<li className="item" id="point">
								Include a title and the metadata with your submission
							</li>
						</ol>
					</li>
				</ol>

				<h2 className="text" id="subtext">
					<b>
						The results for the prelims will be announced on Saturday 04 May
						2024
					</b>
				</h2>

				<h2 className="text" id="subtext">
					Finals:{" "}
				</h2>

				<ol className="list-disc">
					<li className="item" id="point">
						Topics will be released two days prior to the offline event through
						the official communication channels.
					</li>

					<li className="item" id="point">
						Each team consists of a model and a photographer. Models can bring
						props, clothing changes, etc. in order to help capture the prompt in
						the most appropriate and best possible way.
					</li>

					<li className="item" id="point">
						Participants will get 1 hour to click pictures and an additional 30
						minutes for photo manipulation, for which the participants need to
						get their own laptops.
					</li>

					<li className="item" id="point">
						Editing will be permitted without any limitations; however,
						participants will undergo supervision, and participants must submit
						both the original and edited images for review.
					</li>

					<li className="item" id="point">
						The participants will have to bring their own DSLR to click pictures (phone photography is not permitted).
					</li>

					<li className="item" id="point">
						The images will be submitted in jpg format.
					</li>

					<li className="item" id="point">
						The team will also be required to present their photos in front of
						the judges. The presentation may be up to 1 minute long.
					</li>
				</ol>

				<h2 className="text" id="subtext">
					Judgement Criteria:{" "}
				</h2>

				<ol className="list-disc">
					<li className="item" id="point">
						Originality
					</li>

					<li className="item" id="point">
						Creativity
					</li>

					<li className="item" id="point">
						Ideas/concept/topic adherence
					</li>

					<li className="item" id="point">
						Composition and technical use
					</li>
				</ol>
			</div>
		),
		"@RoboRush": (
			<div>
				<p className="text" id="description-popup">
					Participants pit their autonomous creations against each other in a
					thrilling race of speed and agility, showcasing cutting-edge robotics
					technology competing for the podium.
				</p>

				<div className="eventcontent">
					<h2 className="text information" id="elig">
						Eligibilty: 9th to 12th
					</h2>

					<h2 className="text information" id="participant">
						Number of Participants: 2
					</h2>

					<h2 className="text information" id="participant">
						No of teams allowed per school: 1
					</h2>

					<h2 className="text information" id="mode">
						Mode: Offline
					</h2>
				</div>

				<h2 className="text" id="subtext">
					<b>The first 16 teams to register will be allowed to participate.</b>
				</h2>

				<a href="/events/robo.pdf" className="shade">
					Click To Know More
				</a>
			</div>
		),
		"@AquaDash": (
			<div>
				<p className="text" id="description-popup">
					Participants navigate the waves of innovation as their bots compete in
					a thrilling race, pushing the boundaries of autonomous technology on
					water in a quest for aquatic supremacy.
				</p>

				<div className="eventcontent">
					<h2 className="text information" id="elig">
						Eligibilty: 6th to 8th
					</h2>

					<h2 className="text information" id="participant">
						Number of Participants: 2
					</h2>

					<h2 className="text information" id="participant">
						No of teams allowed per school: 1
					</h2>

					<h2 className="text information" id="mode">
						Mode: Offline
					</h2>
				</div>

				<ol className="list-disc">
					<li className="item" id="point">
						<b>
							The first 16 teams to register will be allowed to participate.
						</b>
					</li>

					<li className="item" id="point">
						To design and build a manually controlled boat that has to sail
						through the obstacles in the arena and complete the race task before
						the other boat. The boat should compulsorily be wireless and powered
						by batteries. Wired boats are NOT allowed.
					</li>

					<li className="item" id="point">
						Teams will have to compete in the given arena, starting from two
						opposite ends. The boat which reaches the other end first will win.
					</li>
				</ol>

				<a href="/events/aquadash.pdf" className="shade">
					Click To Know More
				</a>
			</div>
		),
		"@CypherNexus": (
<div>
				
				
			<h2 className="text information" id="lang"><b>Prelims</b></h2>
				<ol className="list-disc">
					<li className="item" id="point">
						<b>Duration: 1 Hour 15 Minutes</b>
					</li>
					<li className="item" id="point">
						<b>Date and time: Tuesday, 30 April 2024, 5:00 pm
</b>
					</li>
					<li className="item" id="point">
						<b>Platform:  Hackerrank
</b>
					</li>
					<li className="item" id="point">
						Participants will have to join a Google Meet link for the duration of the contest. The link will be released on Discord 30 minutes before the event commences.
					</li>
					<li className="item" id="point">
						Participants found to have simply copied the code, would be immediately disqualified. Participants may be asked to explain their code after the online round has finished. Use of ChatGPT is strictly prohibited.

					</li>
					<li className="item" id="point">
						Each problem will have a predetermined score and the participants’ score will depend on the number of successful test cases. The difficulty and the score of each problem increases as participants progress through the contest.

					</li>
					<li className="item" id="point">
						Participants will be ranked by their scores. If two or more participants achieve the same score, then the tie will be broken by the total time taken to submit the last solution.

					</li>
				</ol>
				<h2 className="text information" id="lang"><b>The results of the prelims will be announced on Saturday, 04 May 2024 with the list of participants for the finals
</b></h2>

				<h2 className="text information" id="lang"><b>Judgement Criteria:</b></h2>
				<ol className="list-disc">
					<li className="item" id="point">
						Completion of Programs

					</li>
					<li className="item" id="point">
						Correct Execution/ Clarity


					</li>
					<li className="item" id="point">
						Correct Output - Test Cases Passed


					</li>
						<li className="item" id="point">
						Time Taken



					</li>
					
				</ol>
					<a href="/events/cyber.pdf" className="shade">
					Click To Know More
				</a>
			</div>
		),
		"@TechTales": (
		
			<div className="space-y-4">
				<p className="text" id="description-popup">
					Participants navigate the waves of innovation as their bots compete in
					a thrilling race, pushing the boundaries of autonomous technology on
					water in a quest for aquatic supremacy.
				</p>

				<div className="eventcontent">
					<h2 className="text information" id="elig">
						Eligibilty: 4th to 5th
					</h2>

					<h2 className="text information" id="participant">
						Number of Participants: 2
					</h2>

					<h2 className="text information" id="participant">
						No of teams allowed per school: 1
					</h2>

					<h2 className="text information" id="mode">
						Mode: Offline
					</h2>
				</div>

				

				<h2 className="text information" id="lang"><b>Judgement Criteria:</b></h2>
				<ol className="list-disc">
					<li className="item" id="point">
						Originality
					</li>
					<li className="item" id="point">
						Creativity


					</li>
					<li className="item" id="point">
						Software Utilization



					</li>
						<li className="item" id="point">
						Overall Presentation 




					</li>
					
				</ol>
				<a href="/events/tech.pdf" className="shade">
					Click To Know More
				</a>
			</div>
		),
	};
	const closeModal = () => {
		setShowPopup([false, ""]);
	}
	const [hoveredLeft, setHoveredLeft] = React.useState(false);
	const [hoveredRight, setHoveredRight] = React.useState(false);
	const [showPopup, setShowPopup] = React.useState([false, ""]);
	const popUpRef = React.useRef(null);


	const { isIntersecting: isOrdinIntersecting, ref: ordinRef} = useIntersectionObserver({
		threshold: 0.5
	});

	const { isIntersecting: isPyrotechIntersecting, ref: pyrotechRef } = useIntersectionObserver(
		{
			threshold: 0.5,
		}
	);
	useOnClickOutside(popUpRef, closeModal);
	useEffect(()=>{
		if(showPopup[0]){
			document.body.style.overflow = "hidden";
		}
		else{
			document.body.style.overflow = "scroll";
		}
	},[showPopup])
	return (
		<body className="dark">
			<main
				id="home"
				className="min-[300px]:h-[35rem] dark h-screen grid grid-rows-3 place-items-center overflow-hidden bg-[conic-gradient(var(--tw-gradient-stops))] from-[#0084B0] to-[#000608]"
			>
				<FloatingNav navItems={navItems} showPopup={showPopup}className="min-[300px]:hidden "/>
				<div
					className={
						"min-[300px]:ml-[5rem] tracking-[0.4vw] text-[30px] self-end" + helvetica.className
					}
				>
					<span className="text-cyan-400">PYROTECH CLUB</span> &{" "}
					<span className="text-yellow-500">KURIOUS</span> PRESENT
				</div>
				<img
					src="/ordinlogo.png"
					className="w-[80%] max-w-screen-2xl justify-self-center"
					alt="ordin"
				/>
			</main>
			<div className="guidelinesGradient">
				<main
					id="about"
					className={
						"dark h-screen grid grid-cols-2 place-items-center overflow-hidden pb-[4rem]" +
						montserrat.className
					}
				>
				
					<div
						onMouseEnter={() => setHoveredLeft(true)}
						onMouseLeave={() => setHoveredLeft(false)}
						className="h-full flex flex-col overflow-hidden items-center justify-evenly bg-black w-full gap-4 mx-auto px-8 relative"
						ref={ordinRef}
					>
					

						<div className="h-2/5 object-cover z-20 grid place-items-center"><img src="ordinlogo.png"/></div>
						<p className="md:text-2xl text-xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto mb-20">
							Twenty years ago, a dream took root, giving rise to Ordin@trix—a
							celebration of creativity, talent, and skill. From its humble
							beginnings at the state level, it has blossomed into an
							international gathering, drawing participants from China, Muscat,
							Japan. Esteemed personalities like Mr. Amol Gupte and Miss Manju
							Singh, alongside experts from various fields, have graced our
							event. The films showcased here have gained recognition at
							renowned festivals hosted by PVR Cinemas and CHINH India Festival.
							At its core, Ordin@trix thrives on innovation, fostering an
							environment where fresh ideas flourish, and participants are
							encouraged to think outside the box.
						</p>
						<AnimatePresence>
							{isOrdinIntersecting && <motion.div
								initial={{ opacity: 1 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="h-full w-full absolute inset-0"
							>
								<CanvasRevealEffect
									animationSpeed={7}
									containerClassName="bg-transparent"
									colors={[
										[252, 186, 3],
										[66, 161, 168],
									]}
									opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
									dotSize={2}
									showGradient={false}
								/>
							</motion.div>}
						</AnimatePresence>
						{/* Radial gradient for the cute fade */}
						<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_50%_75%,white,transparent)] bg-black/50 dark:bg-black/90" />
					</div>
					<div
						onMouseEnter={() => setHoveredRight(true)}
						onMouseLeave={() => setHoveredRight(false)}
						className="h-full flex flex-col overflow-hidden items-center justify-evenly bg-black w-full gap-4 mx-auto px-8 relative"
						ref={pyrotechRef}
					>
						<div className="h-2/5 object-cover z-20 grid place-items-center"><img src="pyrologo.png" className="w-1/2"/></div>
						<p className="md:text-2xl text-xl font-medium text-center text-white relative z-20 max-w-2xl mx-auto">
							Pyrotech, a group of student computer enthusiasts, excels in
							competitions ranging from web design to robotics, showcasing their
							diverse skills. Their achievements in events like image editing
							and filmmaking underscore their dedication to technology. Since
							its conception, Ordin@Trix has evolved alongside Pyrotech, serving
							as its nucleus. Through Pyrotech&apos;s endeavors, the event
							continually pushes the boundaries of technology exploration and
							novelty.
						</p>
						<AnimatePresence>
							{isPyrotechIntersecting && <motion.div
								initial={{ opacity: 1 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="h-full w-full absolute inset-0"
							>
								<CanvasRevealEffect
									animationSpeed={7}
									containerClassName="bg-transparent"
									colors={[
										[59, 130, 246],
										[139, 92, 246],
									]}
									opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
									dotSize={2}
									showGradient={false}
								/>
							</motion.div>}
						</AnimatePresence>
						{/* Radial gradient for the cute fade */}
						<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_50%_80%,white,transparent)] bg-black/50 dark:bg-black/90" />
					</div>
				</main>
				<main
					id="guidelines"
					className="min-[300px]:h-[150rem] dark h-screen flex flex-col items-center overflow-hidden justify-evenly pt-7 pb-[50.75rem]"
				>
					<div
						className={
							"min-[300px]:text-[5vh] guidelines text-[15vh] leading-none z-0 mt-[3rem] " +
							montserrat.className
						}
					>
						GUIDELINES
					</div>
					<div className="min-[300px]:flex-col w-4/5 max-w-5xl flex gap-[7rem] mt-[2rem] ">
						<ul className="w-1/2 space-y-12 list-disc">
							<li>
								ONLINE registrations will be done on a first come first served
								basis. No registration will be taken on the day of the event.
								Registrations will close on Thursday, 18 April 2024 by 12 noon.
							</li>
							<li>
								The theme for this year is “TechVolve: Innovating for Impact.”
							</li>
							<li>
								For all submission-based events, kindly submit the entries only
								through the submission links shared along with the prompt.
							</li>
							<li>
								Participants must report to the school for the event between
								8:00 and 8:30 am. Please ensure that each team is accompanied by
								a teacher.
							</li>
							<li>
								The schools are requested to register ONLY one team per event
								and a participant can take part in ONLY one offline event.
							</li>
							<li>
								All future correspondence will be done through Discord and Mail.
							</li>
						</ul>
						<ul className="w-1/2 space-y-12 list-disc">
							<li>
								The result of preliminary rounds will be posted on the event
								website and on Discord.
							</li>
							<li>
								Please note that the decisions of the organisers & jury members
								regarding any issue related to Ordin@triXkuriobots will be FINAL
								and BINDING for all schools and participants.
							</li>
							<li>
								Submissions must not: violate any third party rights, including,
								but not limited to, copyrights, trademark rights, or rights of
								privacy and publicity; contain defamatory statements; include
								threats to any person, place, business, or group; or be obscene
								or indecent.
							</li>
							<li>Kindly join our discord using the following link.</li>
							<li>
								An overall trophy will be awarded to the team which secures the
								maximum points in the competition. For any further queries
								kindly contact us at Pyrotech Club
							</li>
						</ul>
					</div>
				</main>
				<main id="trailer"
					className="dark min-h-screen flex justify-center item-center overflow-hidden relative"
					>
					<div className="min-[300px]:hidden trail text-[5vw] mb-4 mt-[12rem]">TRAILER</div>
					
					<video src="/trailer.mp4" className="w-[60rem] rounded h-[30rem]" autoPlay/>
					</main>
				{showPopup[0] && (
					<div className="fixed inset-0 bg-black/50 dark:bg-black/90 flex justify-center items-center z-20 popupb">
						<div className="bg-neutral-950 w-[80vw] h-[90vh] p-8 rounded-lg flex flex-col overflow-y-scroll popupb" ref={popUpRef}>
							<div className="flex flex-row justify-between items-center">
								<div
									className={
										"text-[6vw] font-bold eventName eventTitle mb-12 " +
										helvetica.className
									}
								>
									{typeof showPopup[1] === "string"
										? showPopup[1].toUpperCase()
										: ""}
								</div>
								<button
									onClick={() => setShowPopup([false, ""])}
									className="px-4 py-4 row-start-1 closeCross mb-4 text-white"
								></button>
							</div>

							<div className="flex-grow flex justify-between gap-4">
								<div className="w-5/6">
									{
										eventsData[
											typeof showPopup[1] === "string" ? showPopup[1] : ""
										]
									}
								</div>
								<div className="w-1/6">	
									<video src="/webd.mp4" className="w-full" autoPlay muted/>
								</div>
							</div>
						</div>
					</div>
				)}
				<main
					id="events"
					className="dark min-h-screen flex justify-center items-center overflow-hidden relative"
				>
					<div
						className={
							"rotate text-[25vh] leading-none z-0 " + montserrat.className
						}
					>
						EVENTS
					</div>
					<BentoGrid className="w-4/5 max-w-5xl">
						{items.map((item, i) => (
							<BentoGridItem
								key={i}
								title={item.title}
								description={item.description}
								className={""}
								url={item.url}
								thumbnail={item.thumbnail}
								setShowPopup={setShowPopup}
							/>
						))}
					</BentoGrid>
				</main>
				<main
					id="team"
					className="dark h-screen flex flex-col justify-evenly items-center overflow-hidden bg-transparent p-8"
				>
					<div className="team text-[5vw] mb-16">MEET THE TEAM</div>
					<Carousel
						infiniteLoop
						className="flex items-center justify-center flex-col max-w-5xl h-3/5"
						showThumbs={false}
						showStatus={false}
						centerMode
						centerSlidePercentage={50}
					>
						{teamMembers.map((member, i) => (
							<div key={i} className="px-8 h-[60vh]">
								<div className="relative object-cover h-5/6">
									<div className="absolute inset-0 bg-gradient-to-t from-black/100 to-white/0 rounded"></div>
									<img
										src={member.image}
										className="h-full object-cover rounded"
									/>
									<div className="text-white absolute left-4 bottom-[25px] block text-left">
										{member.name}
										<br />
										{member.role}
									</div>
								</div>
							</div>
						))}
					</Carousel>
				</main>
				<main className="min-[300px]:hidden h-[40vh] bg-[#00070b] " id="contact">
					<div className="dark flex justify-around items-center h-full">
						<div>
							<h1 className="text-2xl mb-3">HAVE ANY QUERIES?</h1>
							<h2 className="text-lg">Contact us</h2>
							<p className="mb-5">pyrotech@tagoreint.com</p>
							<h2 className="text-lg">Teacher incharges</h2>
							<p>Ms. Shilpreet Kaur:- 9910309773</p>
							<p>Ms. Meenakshi Tickoo:- 9891494471</p>
						</div>
						<div>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0135413209523!2d77.15921487604406!3d28.56935608694573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1da64b31037f%3A0x9fe8114b5940d45c!2sTagore%20International%20School!5e0!3m2!1sen!2sin!4v1711744324636!5m2!1sen!2sin"
								width="300"
								height="200"
							></iframe>
						</div>

						<div>
							<h1 className="text-2xl mb-3">SAY HI!</h1>
							<p>Team Pyrotech</p>
							<p className="mb-4">
								Tagore International School, <br /> Vasant Vihar
							</p>
							<p>Made by the pyrotech club</p>
						</div>
					</div>
				</main>
			</div>
		</body>
	);
}
