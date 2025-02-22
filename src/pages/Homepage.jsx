const Homepage = () => {

    const donationCategories = [
        {
            id: 1,
            title: "Semua Kategori",
            isActive: true,
            icon: "/assets/icons/overview.svg"
        },
        {
            id: 2,
            title: "Kemanusiaan",
            isActive: false,
            icon: "/assets/icons/donasi.svg"
        },
        {
            id: 3,
            title: "IBBQ",
            isActive: false,
            icon: "/assets/icons/mosque.svg"
        },
        {
            id: 4,
            title: "Wakaf",
            isActive: false,
            icon: "/assets/icons/wakaf.svg"
        },
        {
            id: 5,
            title: "Lainnya",
            isActive: false,
            icon: "/assets/icons/more.svg"
        },
    ];

    const kajianMenus = [
        {
            id: 1,
            title: "Semua Kategori",
            isActive: true,
            icon: "/assets/icons/overview.svg"
        },
        {
            id: 2,
            title: "Berlangsung",
            isActive: false,
            icon: "/assets/icons/live.svg"
        },
        {
            id: 3,
            title: "Akan Datang",
            isActive: false,
            icon: "/assets/icons/calendar.svg"
        },
        {
            id: 4,
            title: "Perkantoran",
            isActive: false,
            icon: "/assets/icons/office.svg"
        },
        {
            id: 5,
            title: "Online",
            isActive: false,
            icon: "/assets/icons/online.svg"
        },
        {
            id: 6,
            title: "Lainnya",
            isActive: false,
            icon: "/assets/icons/more.svg"
        },
    ];

    const donations = [
        {
            id: 1,
            title: "Sedekah Beras untuk seluruh para keluarga di afrika selatan",
            image: "/assets/donation-card/1.png",
            progress: 10
        },
        {
            id: 2,
            title: "Bantu Bencana Gempa dengan Kebutuhan Pokok",
            image: "/assets/donation-card/2.png",
            progress: 50
        },
        {
            id: 3,
            title: "Penyaluran Bantuan untuk Anak Yatim dan Dhuafa",
            image: "/assets/donation-card/3.png",
            progress: 70
        },
    ];

    const programs = [
        {
            id: 1,
            title: 'Indonesia Bisa Baca Quran',
            description: 'Sebuah Fakta mengejutkan menyatakan bahwa 53,57% (BPS 2018). kaum muslimin di Indonesia tidak bisa membaca Al-Quran. ',
            image: '/assets/program-pilihan/1.png'
        },
        {
            id: 2,
            title: 'CintaQuran Call',
            description: 'Cinta Quran Call merupakan layanan pendampingan.',
            image: '/assets/program-pilihan/2.png'
        },
        {
            id: 3,
            title: 'Kajian Perkantoran',
            description: '',
            image: '/assets/program-pilihan/3.png'
        },
        {
            id: 4,
            title: 'Majelis Cinta Quran',
            description: '',
            image: '/assets/program-pilihan/4.png'
        },
        {
            id: 5,
            title: 'Cinta Quran TV',
            description: '',
            image: '/assets/program-pilihan/5.png'
        },
    ];

    return (
      <div>
        <section className="h-screen overflow-hidden">
            <img src="/assets/background/banner.png" className="absolute -top-1 -z-10" alt="" />
            <div className="bg-[#E8F4FB] h-[375px] p-20 grid grid-cols-2 gap-15 justify-center">
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
                    <h1 className="text-5xl font-semibold mb-3">Donasi Pilihan</h1>
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
            {/* Donation Categories */}
            <div className="flex gap-5 mt-10">
                {donationCategories.map((donationCategory) => (
                    <button key={donationCategory.id} className={`flex gap-2 border  w-full px-3 py-2 rounded-full font-light items-center justify-center hover:cursor-pointer hover:bg-[#eef7fc] hover:text-[#389ED9] hover:border-[#389ED9] ${donationCategory.isActive ? 'border-[#389ED9] bg-[#eef7fc] text-[#389ED9]' : 'border-neutral-300'}`}>
                        <img src={donationCategory.icon} alt="" className="w-[24px] h-[24px]" />
                        <p className="text-sm">{donationCategory.title}</p>
                    </button>
                ))}
            </div>
            {/* Donation Cards */}
            <div className="grid grid-cols-3 gap-5 mt-10">
                {donations.map((donation) => (
                    <div key={donation.id} className="bg-white rounded-lg shadow-xl">
                        <img src={donation.image} alt="" className="w-full rounded-t-md" />
                        <div className="p-4">
                            <div className=" bg-white rounded-md">
                                <h1 className="text-base font-semibold">{donation.title}</h1>
                                <p className="text-base font-light">{donation.description}</p>
                            </div>
                            <div className="flex justify-between items-center mt-8">
                                <div className="">
                                    <p className="text-sm font-light text-neutral-600">Dana Terkumpul</p>
                                    <p className="text-md font-semibold text-[#389ED9]">Rp 0</p>

                                </div>
                                <div className="">
                                    <p className="text-sm font-light text-neutral-600">Sisa Waktu</p>
                                    <p className="text-md font-semibold text-[#389ED9]">2 Hari Lagi</p>
                                </div>
                            </div>
                            <div className="relative w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-lime-500 transition-all"
                                style={{ width: `${donation.progress}%` }}
                            ></div>
                              <div
                                className="absolute w-3 h-3 bg-lime-600 rounded-full"
                                style={{ left: `calc(${donation.progress}% - 6px)`, top: "-2px" }}
                            ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Indicator */}
            <div className="flex space-x-2 justify-center p-4 mt-5 mb-10">
                <div className="h-1 w-8 rounded-full bg-blue-500"></div>
                <div className="h-1 w-4 rounded-full bg-gray-300"></div>
                <div className="h-1 w-4 rounded-full bg-gray-300"></div>
                <div className="h-1 w-4 rounded-full bg-gray-300"></div>
            </div>
            
            <div className="grid grid-cols-3 w-full gap-10">
                <div className="flex w-[354px] gap-3">
                    <img src="/assets/icons/money.svg" className="w-[117px] h-[108px]" alt="" />
                    <div className="flex flex-col w-[221px] gap-3">
                        <h1 className="text-xl font-semibold">Zakat 100%</h1>
                        <p className="text-md font-light text-neutral-600">Tunaikan Zakat Anda melalui Program Zakat 100% Amanah.</p>
                        <a href="" className="text-blue-400">Selengkapnya</a>
                    </div>
                </div>
                <div className="flex w-[354px] gap-3">
                    <img src="/assets/icons/box.svg" className="w-[117px] h-[108px]" alt="" />
                    <div className="flex flex-col w-[221px] gap-3">
                        <h1 className="text-xl font-semibold">Barang Berkah </h1>
                        <p className="text-md font-light text-neutral-600">Yuk berikan barang bekas yang masih layak pakai untuk sahabat kita.</p>
                        <a href="" className="text-blue-400">Selengkapnya</a>
                    </div>
                </div>
                <div className="flex w-[354px] gap-3">
                    <img src="/assets/icons/box2.svg" className="w-[117px] h-[108px]" alt="" />
                    <div className="flex flex-col w-[221px] gap-3">
                        <h1 className="text-xl font-semibold">Amazing Box</h1>
                        <p className="text-md font-light text-neutral-600">Isi penuh Amazing Box selama 1 bulan, kembalikan kepada kami.</p>
                        <a href="" className="text-blue-400">Selengkapnya</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Program Pilihan */}
        <section className="max-h-[932px]">
            <div className="relative">
                <img src="/assets/background/program.png" className="-translate-y-80 w-full " alt="" />
                <div className=" absolute z-10 top-20 px-20 w-full">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-5xl font-semibold mb-3">Program Pilihan</h1>
                            <p className="text-base font-light">Program-program terbaik dari Cinta Quraa Foundation untuk Sahabat Cinta Quran.</p>
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
                    <div className="grid grid-cols-3 gap-4 mt-10 w-full">
                        {programs.map((program, index) => (
                            <div
                                key={program.id}
                                className={`relative ${
                                    index === 0 ? 'col-span-2' : index === 1 ? 'col-span-1' : 'col-span-1'
                                }`}
                            >
                                <div className="relative">
                                    <img
                                        src={program.image}
                                        alt=""
                                        className="w-full h-full object-cover rounded-3xl "
                                    />
                                    <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
                                </div>
                                <div className={`absolute flex flex-col ${
                                    index === 0 ? 'gap-3' : index === 1 ? 'gap-3' : 'gap-0'
                                } bottom-0 left-0 w-full p-10 text-white z-10`}>
                                    <h1 className="text-xl font-bold">{program.title}</h1>
                                    <p className="text-md">{program.description ?? ''}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="px-20 w-full relative">
            <div className="text-center">
                <h1 className="text-5xl font-semibold mb-3">Kajian Inspiratif</h1>
                <p className="text-md font-light text-neutral-600">Program kajian inspiratif dari kami untuk menemani aktivitas Sahabat Cinta Qur’an.</p>
            </div>
            <div className="flex gap-3 mt-5">
                {kajianMenus.map((menu) => (
                    <button key={menu.id} className={`flex gap-2 border w-full px-3 py-2 rounded-full font-light items-center justify-center hover:cursor-pointer hover:bg-[#eef7fc] hover:text-[#389ED9] hover:border-[#389ED9] ${menu.isActive ? 'border-[#389ED9] bg-[#eef7fc] text-[#389ED9]' : 'border-neutral-300'}`}>
                        <img src={menu.icon} alt="" className="w-[24px] h-[24px]" />
                        <p className="text-sm">{menu.title}</p>
                    </button>
                ))}
            </div>
        </section>
      </div>
    );
 };

 export default Homepage;