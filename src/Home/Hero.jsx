import HeroBackground from "../Assets/image/hero-bg.png";
import WaveGreen from "../Assets/image/Vector.svg";

const Hero = () => {
    return (
        <section id="beranda" className="relative min-h-screen w-full overflow-hidden">

            {/* ================= BACKGROUND ================= */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${HeroBackground})`,
                }}
            />

            {/* ================= OVERLAY ================= */}
            <div className="absolute inset-0 bg-black/68" />

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-20 sm:px-8 sm:pb-24">
                <div className="w-full max-w-[1300px] text-center text-white">

                    {/* ================= SUBTITLE ================= */}
                    <p
                        className="
                            font-itim
                            text-[20px]
                            leading-tight
                            sm:text-[25px]
                            md:text-[32px]
                        "
                    >
                        Temukan Resep Lezat untuk Setiap Hari
                    </p>

                    {/* ================= TITLE ================= */}
                    <h1
                        className="
                            mt-4
                            font-itim
                            text-[64px]
                            leading-[0.95]
                            sm:mt-5
                            sm:text-[90px]
                            md:text-[130px]
                        "
                    >
                        Food Recipe
                    </h1>

                    {/* ================= DESCRIPTION ================= */}
                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-[350px]
                            font-itim
                            text-[18px]
                            leading-[1.55]
                            sm:mt-7
                            sm:max-w-[750px]
                            sm:text-[22px]
                            md:mt-8
                            md:max-w-[1100px]
                            md:text-[29px]
                            md:leading-[1.55]
                        "
                    >
                        Website resep makanan yang menghadirkan berbagai kreasi
                        masakan lezat, mudah diikuti, dan cocok untuk semua
                        kalangan. Temukan inspirasi memasak setiap hari dengan
                        panduan lengkap dan langkah yang pasti.
                    </p>

                </div>
            </div>

            {/* ================= WAVE ================= */}
            <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-[0]">
                <img
                    src={WaveGreen}
                    alt=""
                    className="block h-auto min-h-[100px] w-full"
                />
            </div>

        </section>
    );
};

export default Hero;