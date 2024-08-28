export default function Contact() {
    return (
        <div className="h-screen overflow-hidden relative flex flex-col justify-end py-10">
            <img
                src="https://images.unsplash.com/photo-1713450606206-e32aa674ad3d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="-z-10 brightness-50 w-full h-full object-cover absolute top-0 left-0"
            />
            <div className=" w-full flex justify-center items-center flex-wrap gap-6 p-2">
                <p>
                    This Party is strictly only for Civil Freshers UG at IIT
                    Delhi. So if you don't have the contact of the team, it only
                    means that you are someone who does not fall in this
                    category. So, Don't Bother.
                </p>
            </div>
        </div>
    );
}
