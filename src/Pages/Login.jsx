import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

import HeroBackground from "../Assets/image/hero-bg.png";
import Logo from "../Assets/image/Logo.png";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">

            {/* ================= BACKGROUND ================= */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${HeroBackground})`,
                }}
            />

            {/* ================= OVERLAY ================= */}
            <div className="absolute inset-0 bg-black/65" />

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">

                {/* ================= LOGIN CARD ================= */}
                <div className="w-full max-w-[450px]">

                    <div
                        className="
                            rounded-2xl
                            bg-white
                            px-7
                            py-8
                            shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                            sm:px-10
                            sm:py-10
                        "
                    >

                        {/* ================= BACK ================= */}
                        <a
                            href="/"
                            className="
                                mb-6
                                inline-flex
                                items-center
                                gap-2
                                font-itim
                                text-[16px]
                                text-[#555]
                                transition
                                hover:text-[#72C000]
                            "
                        >
                            <ArrowLeft size={18} />
                            Kembali
                        </a>


                        {/* ================= LOGO ================= */}
                        <div className="flex justify-center">

                            <img
                                src={Logo}
                                alt="Food Recipe"
                                className="
                                    h-auto
                                    w-[180px]
                                    object-contain
                                    sm:w-[200px]
                                "
                            />

                        </div>


                        {/* ================= TITLE ================= */}
                        <div className="mt-7 text-center">

                            <h1
                                className="
                                    font-itim
                                    text-[36px]
                                    leading-none
                                    text-[#3f3f3f]
                                    sm:text-[42px]
                                "
                            >
                                Selamat Datang!
                            </h1>

                            <p
                                className="
                                    mt-3
                                    font-itim
                                    text-[17px]
                                    text-[#666]
                                "
                            >
                                Masuk untuk melanjutkan ke Food Recipe
                            </p>

                        </div>


                        {/* ================= FORM ================= */}
                        <form className="mt-8">

                            {/* EMAIL */}
                            <div>

                                <label
                                    htmlFor="email"
                                    className="
                                        mb-2
                                        block
                                        font-itim
                                        text-[17px]
                                        text-[#333]
                                    "
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Masukkan email kamu"
                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        border-gray-300
                                        bg-white
                                        px-4
                                        py-3
                                        font-itim
                                        text-[16px]
                                        text-[#333]
                                        outline-none
                                        transition
                                        placeholder:text-gray-400
                                        focus:border-[#72C000]
                                        focus:ring-2
                                        focus:ring-[#72C000]/20
                                    "
                                />

                            </div>


                            {/* PASSWORD */}
                            <div className="mt-5">

                                <label
                                    htmlFor="password"
                                    className="
                                        mb-2
                                        block
                                        font-itim
                                        text-[17px]
                                        text-[#333]
                                    "
                                >
                                    Password
                                </label>

                                <div className="relative">

                                    <input
                                        id="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Masukkan password"
                                        className="
                                            w-full
                                            rounded-lg
                                            border
                                            border-gray-300
                                            bg-white
                                            px-4
                                            py-3
                                            pr-12
                                            font-itim
                                            text-[16px]
                                            text-[#333]
                                            outline-none
                                            transition
                                            placeholder:text-gray-400
                                            focus:border-[#72C000]
                                            focus:ring-2
                                            focus:ring-[#72C000]/20
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="
                                            absolute
                                            right-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                            transition
                                            hover:text-[#72C000]
                                        "
                                        aria-label={
                                            showPassword
                                                ? "Sembunyikan password"
                                                : "Tampilkan password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={21} />
                                        ) : (
                                            <Eye size={21} />
                                        )}
                                    </button>

                                </div>

                            </div>


                            {/* REMEMBER + FORGOT */}
                            <div
                                className="
                                    mt-4
                                    flex
                                    items-center
                                    justify-between
                                    gap-3
                                "
                            >

                                <label
                                    className="
                                        flex
                                        cursor-pointer
                                        items-center
                                        gap-2
                                        font-itim
                                        text-[15px]
                                        text-[#555]
                                    "
                                >

                                    <input
                                        type="checkbox"
                                        className="
                                            h-4
                                            w-4
                                            accent-[#72C000]
                                        "
                                    />

                                    Ingat saya

                                </label>

                                <a
                                    href="#"
                                    className="
                                        font-itim
                                        text-[15px]
                                        text-[#72C000]
                                        transition
                                        hover:underline
                                    "
                                >
                                    Lupa password?
                                </a>

                            </div>


                            {/* ================= LOGIN BUTTON ================= */}
                            <button
                                type="submit"
                                className="
                                    mt-7
                                    w-full
                                    rounded-lg
                                    bg-[#72C000]
                                    px-5
                                    py-3
                                    font-itim
                                    text-[19px]
                                    text-white
                                    shadow-md
                                    transition
                                    duration-200
                                    hover:bg-[#63aa00]
                                    hover:shadow-lg
                                    active:scale-[0.98]
                                "
                            >
                                Login
                            </button>

                        </form>


                        {/* ================= REGISTER ================= */}
                        <div
                            className="
                                mt-7
                                text-center
                                font-itim
                                text-[16px]
                                text-[#555]
                            "
                        >
                            Belum punya akun?

                            <a
                                href="/register"
                                className="
                                    ml-1
                                    text-[#72C000]
                                    transition
                                    hover:underline
                                "
                            >
                                Daftar sekarang
                            </a>

                        </div>

                    </div>

                </div>

            </div>


            {/* ================= DECORATIVE GREEN ================= */}
            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    h-[8px]
                    w-full
                    bg-[#72C000]
                "
            />

        </div>
    );
};

export default Login;