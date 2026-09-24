import FooterBackground from "../Assets/image/footer-bg.png";
import Hamburger from "../Assets/image/hamburger.png";
import Logo from "../Assets/image/Logo.png";

const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden">

            {/* BACKGROUND */}
            <div
                className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                "
                style={{
                    backgroundImage: `url(${FooterBackground})`,
                }}
            />

            {/* GREEN OVERLAY */}
            <div className="absolute inset-0 bg-[#72C000]/85" />

            {/* CONTENT */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    min-h-[330px]
                    max-w-[1200px]
                    px-6
                    py-12
                    sm:min-h-[350px]
                    sm:px-10
                    md:min-h-[380px]
                    md:px-12
                    md:py-14
                "
            >

                {/* TEXT */}
                <div className="max-w-[750px] text-white">

                    <h2
                        className="
                            font-itim
                            text-[32px]
                            leading-tight
                            sm:text-[40px]
                            md:text-[48px]
                        "
                    >
                        Let's Make Something Delicious!
                    </h2>

                    <p
                        className="
                            mt-2
                            font-itim
                            text-[18px]
                            sm:text-[21px]
                            md:text-[23px]
                        "
                    >
                        Setiap hidangan dimulai dari satu langkah sederhana.
                    </p>

                </div>


                {/* LOGO */}
                <div
                    className="
                        absolute
                        bottom-8
                        left-6
                        sm:bottom-10
                        sm:left-10
                        md:bottom-12
                        md:left-12
                    "
                >
                    <img
                        src={Logo}
                        alt="Food Recipe"
                        className="
                            h-auto
                            w-[180px]
                            sm:w-[200px]
                            md:w-[220px]
                        "
                    />
                </div>


                <img
    src={Hamburger}
    alt="Hamburger"
    className="
        absolute
        bottom-[-10px]
        right-[-10px]
        z-20
        w-[260px]
        object-contain

        sm:bottom-[-15px]
        sm:right-[10px]
        sm:w-[320px]

        md:bottom-[-20px]
        md:right-[-10px]
        md:w-[400px]
    "
/>

            </div>

        </footer>
    );
};
export default Footer;