import PropTypes from 'prop-types';
import { motion } from "framer-motion"
export default function Donation({donationCategories, donations}) {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const calculateDeadline = (deadline) => {
        const today = new Date();
        const targetDate = new Date(deadline);
        const difference = targetDate - today;
        return Math.ceil(difference / (1000 * 60 * 60 * 24)); // Konversi ke hari
    };
    const formattedFund = (amount) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0, // Menghilangkan desimal jika tidak diperlukan
        }).format(amount);
    };

    return (
        <motion.section
            className="lg:mt-30 text-neutral-800 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            id="donation"
        >
            <div className="flex px-8 lg:px-20 justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col w-full lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-0"
                >
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-semibold mb-2 lg:mb-3">
                            Program Pilihan
                        </h1>
                        <p className="text-sm lg:text-base font-light">
                            Program-program terbaik dari Cinta Quran Foundation untuk Sahabat Cinta Quran.
                        </p>
                    </div>
                    <div className="hidden lg:flex gap-5 mt-4 lg:mt-0">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white border border-[#389ED9] rounded-full p-2 hover:cursor-pointer"
                        >
                            <img src="/assets/icons/chevron-left.svg" alt="" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white border border-[#389ED9] rounded-full p-2 hover:cursor-pointer"
                        >
                            <img src="/assets/icons/chevron-right.svg" alt="" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
            
            {/* Donation Categories */}
            <motion.div 
                className="flex pl-8 lg:py-2 lg:px-20 gap-3 mt-5 overflow-x-auto scrollbar-hide"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                {donationCategories.map((donationCategory) => (
                <motion.button
                    key={donationCategory.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex gap-2 border px-3 py-2 w-full min-w-[180px] rounded-full font-light items-center justify-center hover:cursor-pointer hover:bg-[#eef7fc] hover:text-[#389ED9] hover:border-[#389ED9] ${donationCategory.isActive ? 'border-[#389ED9] bg-[#eef7fc] text-[#389ED9]' : 'border-neutral-300'}`}
                >
                    <img src={donationCategory.icon} alt="" className="w-[24px] h-[24px]" />
                    <p className="text-sm">{donationCategory.title}</p>
                </motion.button>
                ))}
            </motion.div>
            
            {/* Donation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-8 lg:px-20">
                {donations.map((donation, index) => (
                <motion.div
                    key={donation.id}
                    className="bg-white shadow-xl flex flex-row lg:flex-col"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <img src={donation.image_url} alt="" className="w-1/4 md:w-1/3 lg:w-[370px] lg:h-[370px] rounded-l-md lg:rounded-l-none lg:rounded-t-md object-cover" />
                    <div className="flex-1 p-4">
                        <h1 className="text-base font-semibold">{donation.title}</h1>
                        <p className="text-sm text-neutral-600">{donation.description}</p>
                        <div className="flex justify-between mt-4 flex-col lg:flex-row">
                            <div className="mt-4">
                            <p className="text-sm text-neutral-600">Dana Terkumpul</p>
                            <p className="text-md lg:text-lg font-semibold text-[#389ED9]">{formattedFund(donation.collected_fund).toLocaleString()}</p>
                            </div>
                            <div className="mt-4">
                            <p className="text-sm text-neutral-600">Sisa Waktu</p>
                            <p className="text-md lg:text-lg font-semibold text-[#389ED9]">{calculateDeadline(donation.deadline)} hari lagi</p>
                            </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="relative w-full h-1 bg-gray-200 rounded-full mt-2">
                            <div className="h-full bg-[#AFCD21] rounded-full" style={{ width: `${donation.progress}%` }}></div>
                            <div className="absolute w-2 h-2 bg-[#AFCD21] rounded-full" style={{ left: `calc(${donation.progress}% - 6px)`, top: "-2px" }}></div>
                        </div>
                    </div>
                </motion.div>
                ))}
            </div>
            {/* Indicator */}
            <div className="hidden lg:flex space-x-2 justify-center p-4 mt-5 mb-10">
                <div className="h-1 w-8 rounded-full bg-blue-500"></div>
                <div className="h-1 w-4 rounded-full bg-gray-300"></div>
                <div className="h-1 w-4 rounded-full bg-gray-300"></div>
                <div className="h-1 w-4 rounded-full bg-gray-300"></div>
            </div>
            <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5,}} className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 mt-10 lg:mt-0 px-8 lg:px-20">
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
            </motion.div>
        </motion.section>
    )
}

//  Validasi prop types
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
            image_url: PropTypes.string.isRequired,
            collected_fund: PropTypes.number.isRequired,
            deadline: PropTypes.string.isRequired,
            progress: PropTypes.number.isRequired
        })
    ).isRequired
};