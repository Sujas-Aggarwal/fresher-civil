"use client";
import React from "react";
import images from "./images"

export default function Memories() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Carousel />
        </div>
    );
}

function Carousel() {

    const [currentImg, setCurrentImg] = React.useState<number>(0);
    return (
        <div
            id="carousel-box"
            className="flex flex-col justify-center items-center relative"
        >
            <div
                id="carousel-window"
                className="flex gap-1 md:gap-6 justify-center items-center"
            >
                <button
                    className="p-4  absolute left-0   invert bg-white/10 "
                    onClick={() => {
                        setCurrentImg(currentImg!=0?currentImg - 1:images.length-1);
                    }}
                >
                    <LeftButton />
                </button>
                <div
                    id="carousel"
                    className="w-screen h-screen overflow-hidden object-cover"
                >
                    <div className="absolute bg-[linear-gradient(rgba(0,0,0,0.5),transparent)] w-full h-[70px]">

                    </div>
                    <img
                        src={images[currentImg % images.length]}
                        alt="Image"
                        className="w-full object-contain h-full object-center"
                    />
                    ;
                </div>
                <button
                    className="p-4  absolute right-0  invert bg-white/10 "
                    onClick={() => {
                        setCurrentImg(currentImg + 1);
                    }}
                >
                    <RightButton />
                </button>
            </div>
            <div
                id="carousel-items"
                className="flex w-full md:justify-evenly justify-center items-center flex-wrap md:gap-0 gap-4"
            >
            </div>
        </div>
    );
}
function LeftButton() {
    return (
        <svg
            width="18"
            height="43"
            viewBox="0 0 18 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="0.713297"
                y1="23.5414"
                x2="16.6374"
                y2="0.799526"
                stroke="black"
                strokeWidth="0.7"
            />
            <line
                x1="1.27053"
                y1="23.5201"
                x2="16.9323"
                y2="42.5992"
                stroke="black"
                strokeWidth="0.7"
            />
        </svg>
    );
}
function RightButton() {
    return (
        <svg
            width="18"
            height="43"
            viewBox="0 0 18 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="17.2105"
                y1="19.2794"
                x2="1.28647"
                y2="42.0213"
                stroke="black"
                strokeWidth="0.7"
            />
            <line
                x1="16.6533"
                y1="19.3007"
                x2="0.991486"
                y2="0.221584"
                stroke="black"
                strokeWidth="0.7"
            />
        </svg>
    );
}
