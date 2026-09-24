import {
    FaClock,
    FaHeart,
    FaArrowRight,
} from "react-icons/fa";

import WaveGreen from "../Assets/image/Vector-3.svg";

const SemuaResep = () => {

    const resep = [
        {
            name: "Mie Goreng",
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
            time: "15 min",
        },
        {
            name: "Nasi Goreng",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
            time: "20 min",
        },
        {
            name: "Mie Rebus",
            image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80",
            time: "15 min",
        },
        {
            name: "Mie Goreng",
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
            time: "15 min",
        },
        {
            name: "Nasi Goreng",
            image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
            time: "20 min",
        },
        {
            name: "Mie Rebus",
            image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80",
            time: "15 min",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-white">

            {/* =====================================================
                WAVE ATAS
            ===================================================== */}
            <div className="absolute top-0 left-0 z-10 w-full overflow-hidden leading-[0]">
                <img
                    src={WaveGreen}
                    alt=""
                    className="block h-auto w-full"
                />
            </div>


            {/* =====================================================
                CONTENT
            ===================================================== */}
            <div
                className="
                    relative
                    z-20
                    px-5
                    pb-[150px]
                    pt-[130px]
                    sm:px-8
                    sm:pb-[170px]
                    sm:pt-[150px]
                    md:px-12
                    md:pb-[190px]
                    md:pt-[170px]
                "
            >

                <div className="mx-auto max-w-[1100px]">

                    {/* =================================================
                        TITLE BUTTON
                    ================================================= */}
                    <div className="text-center">

                        <button
                            type="button"
                            className="
                                rounded-[10px]
                                bg-[#9ACD50]
                                px-5
                                py-2.5
                                font-itim
                                text-[18px]
                                text-[#202020]
                                shadow-sm
                                transition
                                duration-300
                                hover:bg-[#8fc43f]
                                hover:-translate-y-0.5
                            "
                        >
                            Semua Resep
                        </button>


                        {/* =================================================
                            DESCRIPTION
                        ================================================= */}
                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-[800px]
                                font-itim
                                text-[16px]
                                leading-[1.5]
                                text-[#202020]
                                sm:text-[18px]
                                md:text-[19px]
                            "
                        >
                            Temukan resep terbaik dari para pengguna
                            dengan ragam kreasi masakan.
                        </p>

                    </div>


                    {/* =================================================
                        RECIPE GRID
                    ================================================= */}
                    <div
                        className="
                            mt-8
                            grid
                            grid-cols-1
                            gap-x-7
                            gap-y-8
                            sm:grid-cols-2
                            md:mt-9
                            md:grid-cols-3
                        "
                    >

                        {resep.map((item, index) => (
                            <RecipeCard
                                key={`${item.name}-${index}`}
                                item={item}
                            />
                        ))}

                    </div>


                    {/* =================================================
                        BUTTON LIHAT RESEP LAINNYA
                    ================================================= */}
                    <div className="mt-10 flex justify-center">

                        <button
                            type="button"
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                rounded-[10px]
                                bg-[#A8D85B]
                                px-4
                                py-2
                                font-itim
                                text-[18px]
                                text-[#303030]
                                transition
                                duration-300
                                hover:bg-[#9ACD50]
                                hover:-translate-y-0.5
                            "
                        >
                            <span>
                                Lihat resep lainnya
                            </span>

                            <FaArrowRight
                                className="
                                    text-[17px]
                                    transition
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />

                        </button>

                    </div>

                </div>

            </div>


            {/* =====================================================
                WAVE BAWAH
            ===================================================== */}
            <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-[0]">

                <img
                    src={WaveGreen}
                    alt=""
                    className="
                        block
                        w-full
                        scale-y-[-1]
                        -scale-x-100
                    "
                />

            </div>

        </section>
    );
};


/* =============================================================
   RECIPE CARD
============================================================= */

const RecipeCard = ({ item }) => {

    return (
        <div
            className="
                group
                overflow-hidden
                rounded-[4px]
                border
                border-[#777]
                bg-[#A8D85B]
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_5px_15px_rgba(0,0,0,0.18)]
            "
        >

            {/* =================================================
                IMAGE
            ================================================= */}
            <div className="relative h-[155px] w-full overflow-hidden">

                <img
                    src={item.image}
                    alt={item.name}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                    "
                />

            </div>


            {/* =================================================
                CARD CONTENT
            ================================================= */}
            <div className="px-2.5 py-2">

                {/* NAME */}
                <h3
                    className="
                        text-center
                        font-itim
                        text-[15px]
                        font-semibold
                        text-black
                    "
                >
                    {item.name}
                </h3>


                {/* =================================================
                    TIME + FAVORITE
                ================================================= */}
                <div className="mt-2 flex items-center justify-between">

                    <div className="flex items-center gap-1.5">

                        <FaClock
                            className="text-[15px] text-black"
                        />

                        <span
                            className="
                                font-itim
                                text-[13px]
                                text-black
                            "
                        >
                            {item.time}
                        </span>

                    </div>


                    <button
                        type="button"
                        aria-label={`Tambahkan ${item.name} ke favorit`}
                        className="
                            transition
                            duration-200
                            hover:scale-110
                        "
                    >
                        <FaHeart
                            className="
                                text-[17px]
                                text-black
                            "
                        />
                    </button>

                </div>


                {/* =================================================
                    DETAIL
                ================================================= */}
                <button
                    type="button"
                    className="
                        mt-2
                        flex
                        items-center
                        gap-1
                        font-itim
                        text-[13px]
                        text-black
                        transition
                        duration-200
                        hover:underline
                    "
                >
                    Lihat Detail

                    <span className="text-[15px]">
                        ›
                    </span>
                </button>

            </div>

        </div>
    );
};

export default SemuaResep;