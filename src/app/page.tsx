import About from "@/components/About";
import Hero from "@/components/Hero";
import React from "react";

function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <About/>
        </div>
    );
}

export default Home;
