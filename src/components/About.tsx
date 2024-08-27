export default function About() {
    let aboutPosts = [
        {
            image: "https://images.unsplash.com/photo-1647885672356-ece5b759530a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Food",
            desc: "A delightful spread of mouthwatering dishes will be available, catering to every palate. From savory snacks to delicious desserts, the food corner promises a culinary experience that will satisfy all taste buds.",
        },
        {
            image: "https://images.unsplash.com/photo-1679746556827-a4722297a613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Dance",
            desc: "The dance floor will come alive with vibrant energy as the latest tracks set the rhythm. This is the perfect opportunity for everyone to showcase their best moves and enjoy a night of lively dancing.",
        },
        {
            image: "https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Mr. & Ms. Fresher",
            desc: "The Mr. & Ms. Fresher competition is the highlight of the evening, celebrating the charm, confidence, and talent of the new students. Participants will take part in a series of exciting challenges, with the winners earning the prestigious titles of Mr. and Ms. Fresher. It's a night of elegance, excitement, and lasting memories.",
        },
    ];
    
    return (
        <div className="p-4">
            {aboutPosts.map((item, index) => {
                return (
                    <Card key={index} {...item} direction={index % 2 == 0} />
                );
            })}
            <span className="w-full  flex justify-center items-center text-2xl font-bold border-solid p-4 border-white border-[2px] hover:bg-white hover:text-black cursor-pointer">
                Coming Soon
            </span>
        </div>
    );
}

function Card({
    direction,
    title,
    image,
    desc,
}: {
    direction: boolean;
    title: string;
    image: string;
    desc: string;
}) {
    return (
        <div className={`w-full ${direction ? "md:flex-row ":"md:flex-row-reverse "} flex-col  flex flex-wrap justify-evenly items-center py-10 gap-6`}>
            <div className="max-w-lg w-full h-[300px] overflow-hidden rounded-md">
                <img
                    src={image}
                    alt=""
                    className="object-cover object-center w-full h-full"
                />
            </div>
            <div className="max-w-lg">
                <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                <p className="max-w-[60ch] text-pretty text-sm mt-2">{desc}</p>
            </div>
        </div>
    );
}
