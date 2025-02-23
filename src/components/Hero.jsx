export default function Hero() {
    return (
        <section className="overflow-hidden">
            <img src="/assets/background/banner.png" className="absolute sm:top-72 top-72 lg:top-52 -z-10 w-full h-[375px] lg:h-screen" alt="" />
            <div className="bg-[#E8F4FB] h-[400px] w-full absolute -z-10"></div>
            <div className="p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-15 justify-center">
                <div className="flex-1">
                    <h1 className="font-bold text-4xl lg:text-5xl text-neutral-800 mb-5 lg:leading-14">Dukung Program Dakwah Syiar Qur’an Project.</h1>
                    <p className="text-base font-light mb-5">Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan program-program islami terbaik dan kreatif.</p>
                    <button className="text-white px-4 hover:cursor-pointer py-2 bg-[#389ED9] rounded-full flex gap-3 items-center mb-10">
                        <span className="text-base font-semibold">Donasi Sekarang</span>
                        <img src="/assets/icons/arrow-right.svg" alt="" />
                    </button>
                    <div className="flex flex-wrap gap-10">
                        <div className="flex flex-col gap-1">
                            <img src="/assets/icons/kajian.svg" alt="" className="w-[24px] h-[24px]" />
                            <p className="text-sm">Kajian Perkantoran</p>
                            <p className="text-xl font-semibold text-[#389ED9]">+124</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <img src="/assets/icons/mosque.svg" alt="" className="w-[24px] h-[24px]" />
                            <p className="text-sm">Majelis Cinta Quran</p>
                            <p className="text-xl font-semibold text-[#389ED9]">+43</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <img src="/assets/icons/online.svg" alt="" className="w-[24px] h-[24px]" />
                            <p className="text-sm">Kajian Online</p>
                            <p className="text-xl font-semibold text-[#389ED9]">+192</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-2 lg:w-[524x] lg:h-[548px] place-items-center">
                    <div>
                        <img src="/assets/banner/group1.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/banner/group2.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/banner/group3.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/banner/group4.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}