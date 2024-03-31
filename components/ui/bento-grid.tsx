import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRef, useState } from "react";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl ",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	url,
	thumbnail,
	setShowPopup,
}: {
	className?: string;
	title: string;
	description?: string | React.ReactNode;
	url: string;
	thumbnail: string;
	setShowPopup: React.Dispatch<React.SetStateAction<(string | boolean)[]>>;
}) => {
	const video = useRef<HTMLVideoElement>(null!);
	const image = useRef<HTMLImageElement>(null!);
	return (
		<div
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#0f4c5c] dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col ",
				className
			)}
			onMouseOver={(event: any) => {
				video.current.play();
				image.current.style.opacity = "0";
			}}
			onMouseOut={(event: any) => {
				if (video.current.currentTime > 0 && !video.current.paused) {
					video.current.pause();
				}
				video.current.currentTime = 0;
				image.current.style.opacity = "1";
			}}
		>
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover overflow-hidden relative">
				<video
					ref={video}
					src="/webdandavidfinal.mp4"
					muted
					loop
					className="max-w-max"
					preload="auto"
				></video>
				<img
					ref={image}
					src={thumbnail}
					alt="thumbnail"
					className="object-cover inset-0 w-full h-full z-10 absolute"
				/>
			</div>
			<div className="group-hover/bento:translate-x-2 transition duration-200">
				<div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-1 mt-2">
					{title}
				</div>
				<div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-5">
					{description}
				</div>

				<button onClick={() => setShowPopup([true, title])}>Learn more </button>
			</div>
		</div>
	);
};
