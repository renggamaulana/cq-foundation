const Homepage = () => { 
    return (
      <div>
        <section className="h-screen overflow-hidden">
            <img src="/assets/background/banner.png" className="absolute -top-1 -z-10" alt="" />
            <div className="bg-[#E8F4FB] h-[375px] p-20 grid grid-cols-2 gap-10 justify-center">
                <div>
                    <h1 className="font-bold text-5xl text-neutral-800 mb-5 leading-14">Dukung Program Dakwah Syiar Qur’an Project.</h1>
                    <p className="text-base font-light mb-5">Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan program-program islami terbaik dan kreatif.</p>
                    <button className="text-white px-4 hover:cursor-pointer py-2 bg-[#389ED9] rounded-full flex gap-3 items-center mb-10">
                        <span className="text-base font-semibold">Donasi Sekarang</span>
                        <img src="/assets/icons/arrow-right.svg" alt="" />
                    </button>
                    <div className="grid grid-cols-3">
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
                <div className="grid grid-cols-2 w-[524px]">
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
        <section className="px-20 py-10 mt-18 text-neutral-800">
            <div className="flex justify-between items-center ">
                <div>
                    <h1 className="text-4xl font-semibold mb-3">Donasi Pilihan</h1>
                    <p className="text-base font-light">Pilih dan salurkan donasi melalui program-program kami yang berarti bagi sahabat Cinta quran.</p>
                </div>
                <div className="flex gap-5">
                    <button className="bg-white border border-[#389ED9] rounded-full p-2 hover:cursor-pointer">
                        <img src="/assets/icons/chevron-left.svg" alt="" />
                    </button>
                    <button className="bg-white border border-[#389ED9] rounded-full p-2 hover:cursor-pointer">
                        <img src="/assets/icons/chevron-right.svg" alt="" />
                    </button>
                </div>
            </div>
        </section>
      </div>
    );
 };

 export default Homepage;