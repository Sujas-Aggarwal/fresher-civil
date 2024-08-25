function Hero() {
    return (
        <div className="flex justify-center items-center w-full min-h-screen">
            <video
                src="https://video-public.canva.com/VAFKkbUWLwU/v/3484504a00.mp4?bandwidth=2935444&resolution=4000"
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 -z-20 w-full h-full object-cover"
            ></video>
            <div className="flex justify-center items-center flex-col w-full h-full p-6 bg-black/60 rounded-lg">
                <h1 className="text-white text-4xl text-center font-bold animation-text">
                    Fresher Party <br /> <p className="animation-text">2024</p>
                </h1>
            </div>
        </div>
    );
}

export default Hero;
