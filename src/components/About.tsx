export default function About() {
    let aboutPosts = [
        {
            image: "https://plus.unsplash.com/premium_photo-1686730540277-c7e3a5571553?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Food",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate reprehenderit tempora aperiam! Aliquam numquam officiis in deleniti quod ea veniam a iusto placeat atque officia unde, molestias, nobis vitae earum!",
        },
        {
            image: "https://images.unsplash.com/photo-1616840845685-362ddf65fb58?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Food",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate reprehenderit tempora aperiam! Aliquam numquam officiis in deleniti quod ea veniam a iusto placeat atque officia unde, molestias, nobis vitae earum!",
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1673448758901-dfd18fd2dd52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Food",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate reprehenderit tempora aperiam! Aliquam numquam officiis in deleniti quod ea veniam a iusto placeat atque officia unde, molestias, nobis vitae earum!",
        },
    ];
    return (
        <div className="p-4">
            {aboutPosts.map((item, index) => {
                return (
                    <Card key={index} {...item} direction={index % 2 == 0} />
                );
            })}
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
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="max-w-[60ch] text-pretty">{desc}</p>
            </div>
        </div>
    );
}
