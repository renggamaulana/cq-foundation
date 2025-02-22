import PropTypes from 'prop-types';

export default function Donation({donationCategories, donations}) {
    return (
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
    )
}


// Menambahkan validasi prop types
Donation.propTypes = {
    donationCategories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            isActive: PropTypes.bool.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
    donations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            progress: PropTypes.number.isRequired
        })
    ).isRequired
};