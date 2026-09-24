import { useState } from "react";
import WaveGreen from "../Assets/image/Vector-2.svg";

const Ulasan = () => {
    const [activePage, setActivePage] = useState(0);

    const ulasan = [
        {
            name: "John Doe",
            image: "https://i.pravatar.cc/150?img=12",
            review:
                "Saya sangat terbantu dengan resep-resep di sini. Langkahnya jelas dan hasil masakannya selalu berhasil!",
        },
        {
            name: "Angelica",
            image: "https://i.pravatar.cc/150?img=32",
            review:
                "Website ini memudahkan saya menemukan ide masakan sehari-hari. Banyak resep dari pengguna lain yang kreatif.",
        },
        {
            name: "Bella Swan",
            image: "https://i.pravatar.cc/150?img=47",
            review:
                "Suka banget! Tampilan websitenya simpel, dan fitur favoritnya berguna untuk menyimpan resep yang ingin saya coba.",
        },

        {
            name: "Michael",
            image: "https://i.pravatar.cc/150?img=11",
            review:
                "Resepnya mudah dipahami dan bahan-bahannya juga mudah ditemukan. Sangat membantu untuk pemula.",
        },
        {
            name: "Sarah",
            image: "https://i.pravatar.cc/150?img=44",
            review:
                "Saya sering mencari inspirasi masakan di sini. Tampilannya sederhana dan resepnya juga sangat lengkap.",
        },
        {
            name: "David",
            image: "https://i.pravatar.cc/150?img=53",
            review:
                "Website resep yang praktis. Saya suka karena langkah memasaknya dijelaskan dengan jelas.",
        },

        {
            name: "Olivia",
            image: "https://i.pravatar.cc/150?img=49",
            review:
                "Banyak resep menarik yang sebelumnya belum pernah saya coba. Sekarang jadi lebih sering memasak.",
        },
        {
            name: "James",
            image: "https://i.pravatar.cc/150?img=68",
            review:
                "Desainnya bersih dan resepnya gampang diikuti. Sangat cocok untuk mencari menu sehari-hari.",
        },
        {
            name: "Sophia",
            image: "https://i.pravatar.cc/150?img=45",
            review:
                "Saya menemukan banyak inspirasi makanan baru dari website ini. Resepnya juga sangat membantu.",
        },
    ];

    return (
        <section className="relative -mt-2.5 w-full overflow-hidden bg-white">

            {/* ================= WAVE ATAS ================= */}
            <div className="absolute top-0 left-0 z-10 w-full overflow-hidden leading-[0]">
                <img
                    src={WaveGreen}
                    alt=""
                    className="block h-auto w-full"
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-20 px-5 pb-[170px] pt-[210px] sm:px-8 sm:pb-[190px] sm:pt-[230px] md:px-12 md:pb-[210px] md:pt-[250px]">

                <div className="mx-auto max-w-[1100px]">

                    {/* ================= HEADING ================= */}
                    <div className="mb-10 text-left sm:mb-12">

                        <h2 className="font-itim text-[38px] leading-none text-[#3f3f3f] sm:text-[44px] md:text-[52px]">
                            Ulasan Kami
                        </h2>

                        <p className="mt-3 font-itim text-[18px] text-black sm:text-[20px] md:text-[22px]">
                            Kumpulan ulasan jujur dari para pengguna kami
                        </p>

                    </div>

                    {/* ================= CAROUSEL ================= */}
                    <div className="overflow-hidden">

                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${activePage * 100}%)`,
                            }}
                        >

                            {/* PAGE 1 */}
                            <div className="grid min-w-full grid-cols-1 gap-7 md:grid-cols-3">
                                {ulasan.slice(0, 3).map((item) => (
                                    <TestimonialCard
                                        key={item.name}
                                        item={item}
                                    />
                                ))}
                            </div>

                            {/* PAGE 2 */}
                            <div className="grid min-w-full grid-cols-1 gap-7 md:grid-cols-3">
                                {ulasan.slice(3, 6).map((item) => (
                                    <TestimonialCard
                                        key={item.name}
                                        item={item}
                                    />
                                ))}
                            </div>

                            {/* PAGE 3 */}
                            <div className="grid min-w-full grid-cols-1 gap-7 md:grid-cols-3">
                                {ulasan.slice(6, 9).map((item) => (
                                    <TestimonialCard
                                        key={item.name}
                                        item={item}
                                    />
                                ))}
                            </div>

                        </div>

                    </div>

                    {/* ================= DOTS ================= */}
                    <div className="mt-8 flex items-center justify-center gap-5">

                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setActivePage(index)}
                                aria-label={`Ulasan halaman ${index + 1}`}
                                className={`
                                    h-[16px]
                                    w-[16px]
                                    rounded-full
                                    transition-all
                                    duration-300
                                    ${
                                        activePage === index
                                            ? "scale-110 bg-[#72C000]"
                                            : "bg-[#A8D85B]"
                                    }
                                `}
                            />

                        ))}

                    </div>

                </div>
            </div>

            {/* ================= WAVE BAWAH ================= */}
            <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-[0]">
                <img
                    src={WaveGreen}
                    alt=""
                    className="block w-full scale-y-[-1] -scale-x-100"
                />
            </div>

        </section>
    );
};


/* ================= TESTIMONIAL CARD ================= */

const TestimonialCard = ({ item }) => {
    return (
        <div
            className="
                flex
                min-h-[300px]
                flex-col
                items-center
                justify-start
                bg-white
                px-6
                py-5
                text-center
                shadow-[0_2px_10px_rgba(0,0,0,0.18)]
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_5px_18px_rgba(0,0,0,0.22)]
            "
        >

            {/* FOTO */}
            <img
                src={item.image}
                alt={item.name}
                className="
                    h-[70px]
                    w-[70px]
                    rounded-full
                    border-[2px]
                    border-[#72C000]
                    object-cover
                "
            />

            {/* NAMA */}
            <h3 className="mt-3 font-itim text-[21px] text-[#3f3f3f]">
                {item.name}
            </h3>

            {/* BINTANG */}
            <div className="mt-1 flex items-center justify-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className="text-[21px] leading-none text-[#F2D82E]"
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* REVIEW */}
            <p className="mt-4 max-w-[280px] font-itim text-[14px] leading-[1.4] text-[#4a4a4a]">
                {item.review}
            </p>

        </div>
    );
};

export default Ulasan;