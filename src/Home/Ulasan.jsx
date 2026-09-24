import { useRef, useState } from "react";
import WaveGreen from "../Assets/image/Vector-2.svg";

const Ulasan = () => {
    const [activePage, setActivePage] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const startX = useRef(0);
    const currentX = useRef(0);

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

    const totalPages = 3;

    // =====================================================
    // DRAG / SWIPE
    // =====================================================

    const handlePointerDown = (e) => {
        startX.current = e.clientX;
        currentX.current = e.clientX;

        setIsDragging(true);

        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;

        currentX.current = e.clientX;

        const diff = currentX.current - startX.current;

        // Membatasi pergerakan saat drag
        setDragOffset(diff * 0.7);
    };

    const handlePointerUp = (e) => {
        if (!isDragging) return;

        const diff = currentX.current - startX.current;

        // Minimal jarak swipe
        if (Math.abs(diff) > 80) {

            // Swipe ke kiri
            if (diff < 0 && activePage < totalPages - 1) {
                setActivePage((prev) => prev + 1);
            }

            // Swipe ke kanan
            if (diff > 0 && activePage > 0) {
                setActivePage((prev) => prev - 1);
            }
        }

        setDragOffset(0);
        setIsDragging(false);

        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            // Tidak melakukan apa-apa
        }
    };

    const handlePointerCancel = (e) => {
        setDragOffset(0);
        setIsDragging(false);

        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            // Tidak melakukan apa-apa
        }
    };

    // =====================================================
    // RENDER
    // =====================================================

    return (
        <section className="relative -mt-2.5 w-full overflow-hidden bg-white">

            {/* =================================================
                WAVE ATAS
            ================================================= */}
            <div className="absolute top-0 left-0 z-10 w-full overflow-hidden leading-[0]">
                <img
                    src={WaveGreen}
                    alt=""
                    className="block h-auto w-full"
                />
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}
            <div
                className="
                    relative
                    z-20
                    px-5
                    pb-[170px]
                    pt-[210px]
                    sm:px-8
                    sm:pb-[190px]
                    sm:pt-[230px]
                    md:px-12
                    md:pb-[210px]
                    md:pt-[250px]
                "
            >
                <div className="mx-auto max-w-[1100px]">

                    {/* =================================================
                        HEADING
                    ================================================= */}
                    <div className="mb-10 text-left sm:mb-12">

                        <h2
                            className="
                                font-itim
                                text-[38px]
                                leading-none
                                text-[#3f3f3f]
                                sm:text-[44px]
                                md:text-[52px]
                            "
                        >
                            Ulasan Kami
                        </h2>

                        <p
                            className="
                                mt-3
                                font-itim
                                text-[18px]
                                text-black
                                sm:text-[20px]
                                md:text-[22px]
                            "
                        >
                            Kumpulan ulasan jujur dari para pengguna kami
                        </p>

                    </div>

                    {/* =================================================
                        CAROUSEL
                    ================================================= */}
                    <div
                        className={`
                            w-full
                            overflow-hidden
                            py-3
                            select-none
                            touch-pan-y
                            ${
                                isDragging
                                    ? "cursor-grabbing"
                                    : "cursor-grab"
                            }
                        `}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerCancel}
                    >

                        <div
                            className={`
                                flex
                                w-full
                                ${
                                    isDragging
                                        ? ""
                                        : "transition-transform duration-500 ease-in-out"
                                }
                            `}
                            style={{
                                transform: `
                                    translateX(
                                        calc(
                                            -${activePage * 100}%
                                            + ${dragOffset}px
                                        )
                                    )
                                `,
                            }}
                        >

                            {/* =================================================
                                PAGE 1
                            ================================================= */}
                            <div
                                className="
                                    grid
                                    w-full
                                    shrink-0
                                    grid-cols-1
                                    gap-7
                                    md:grid-cols-3
                                "
                            >
                                {ulasan.slice(0, 3).map((item) => (
                                    <TestimonialCard
                                        key={item.name}
                                        item={item}
                                    />
                                ))}
                            </div>

                            {/* =================================================
                                PAGE 2
                            ================================================= */}
                            <div
                                className="
                                    grid
                                    w-full
                                    shrink-0
                                    grid-cols-1
                                    gap-7
                                    md:grid-cols-3
                                "
                            >
                                {ulasan.slice(3, 6).map((item) => (
                                    <TestimonialCard
                                        key={item.name}
                                        item={item}
                                    />
                                ))}
                            </div>

                            {/* =================================================
                                PAGE 3
                            ================================================= */}
                            <div
                                className="
                                    grid
                                    w-full
                                    shrink-0
                                    grid-cols-1
                                    gap-7
                                    md:grid-cols-3
                                "
                            >
                                {ulasan.slice(6, 9).map((item) => (
                                    <TestimonialCard
                                        key={item.name}
                                        item={item}
                                    />
                                ))}
                            </div>

                        </div>

                    </div>

                    {/* =================================================
                        DOTS
                    ================================================= */}
                    <div className="mt-8 flex items-center justify-center gap-5">

                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => {
                                    setActivePage(index);
                                    setDragOffset(0);
                                }}
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

            

        </section>
    );
};


/* =============================================================
   TESTIMONIAL CARD
============================================================= */

const TestimonialCard = ({ item }) => {
    return (
        <div
            className="
                mx-1
                flex
                min-h-[300px]
                w-auto
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

            {/* =================================================
                FOTO
            ================================================= */}
            <img
                src={item.image}
                alt={item.name}
                draggable="false"
                className="
                    h-[70px]
                    w-[70px]
                    shrink-0
                    select-none
                    rounded-full
                    border-[2px]
                    border-[#72C000]
                    object-cover
                "
            />

            {/* =================================================
                NAMA
            ================================================= */}
            <h3
                className="
                    mt-3
                    font-itim
                    text-[21px]
                    text-[#3f3f3f]
                "
            >
                {item.name}
            </h3>

            {/* =================================================
                BINTANG
            ================================================= */}
            <div className="mt-1 flex items-center justify-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className="
                            text-[21px]
                            leading-none
                            text-[#F2D82E]
                        "
                    >
                        ★
                    </span>
                ))}

            </div>

            {/* =================================================
                REVIEW
            ================================================= */}
            <p
                className="
                    mt-4
                    max-w-[280px]
                    font-itim
                    text-[14px]
                    leading-[1.4]
                    text-[#4a4a4a]
                "
            >
                {item.review}
            </p>

        </div>
    );
};

export default Ulasan;