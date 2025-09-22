import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <section className="relative h-[90vh] w-full">
            {/* Background Image */}
            <Image
                src="/hero-bg.jpg"
                alt="Library background"
                fill
                priority={true}
                className="object-cover object-center"
            ></Image>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
                    Smart Library Management
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
                    Simplify book tracking, streamline borrowing, and empower
                    readers with a modern digital library system.
                </p>
                {/* CAT Buttons */}
                <div className="mt-6 flex gap-4">
                    <Link href="/signin" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold shadow-lg transition">Get Started</Link>
                    <Link href="/all-books" className="px-6 py-3 bg-blue-600 hover:bg-gray-400 font-semibold rounded-2xl shadow-lg transition">Explore Library</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
