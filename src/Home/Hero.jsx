import HeroBackground from "../Assets/image/hero-bg.png";
import WaveGreen from "../Assets/image/Vector.svg";

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">

            {/* ================= BACKGROUND ================= */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${HeroBackground})`,
                }}
            />

            {/* ================= DARK OVERLAY ================= */}
            <div className="absolute inset-0 bg-black/45" />

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-20">
                <div className="w-full max-w-[700px] text-center text-white">

                    {/* Subtitle */}
                    <p className="font-itim text-[14px] sm:text-[16px]">
                        Temukan Resep Lezat untuk Setiap Hari
                    </p>

                    {/* Title */}
                    <h1 className="mt-2 font-itim text-[45px] leading-none sm:text-[55px] md:text-[65px]">
                        Food Recipe
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-[650px] font-itim text-[14px] leading-[1.6] sm:text-[16px]">
                        Website resep makanan yang menghadirkan berbagai kreasi
                        masakan lezat, mudah diikuti, dan cocok untuk semua kalangan.
                        Temukan inspirasi memasak setiap hari dengan panduan lengkap
                        dan langkah yang jelas.
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