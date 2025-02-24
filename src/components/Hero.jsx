import { motion } from "framer-motion"
export default function Hero() {
    return (
        <section className="relative">
            {/* Background Image & Overlay */}
            <motion.img
                src="/assets/background/banner.png"
                className="absolute sm:top-72 top-72 lg:top-26 -z-10 w-full h-[375px] lg:h-full"
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="bg-[#E8F4FB] h-[400px] w-full absolute -z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>

            <div className="p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-15 justify-center">
                {/* Left Section */}
                <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >
                    <h1 className="font-bold text-4xl lg:text-5xl text-neutral-800 mb-5 lg:leading-14">
                        Dukung Program Dakwah Syiar Qur’an Project.
                    </h1>
                    <p className="text-base font-light mb-5">
                        Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan program-program islami terbaik dan kreatif.
                    </p>

                    {/* Button */}
                    <motion.button
                        className="text-white px-4 hover:cursor-pointer py-2 bg-[#389ED9] rounded-full flex gap-3 items-center mb-10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-base font-semibold">Donasi Sekarang</span>
                        <img src="/assets/icons/arrow-right.svg" alt="" />
                    </motion.button>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-10">
                        {[
                        { icon: "kajian.svg", label: "Kajian Perkantoran", value: "+124" },
                        { icon: "mosque.svg", label: "Majelis Cinta Quran", value: "+43" },
                        { icon: "online.svg", label: "Kajian Online", value: "+192" },
                        ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-1"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={`/assets/icons/${item.icon}`} alt="" className="w-[24px] h-[24px]" />
                            <p className="text-sm">{item.label}</p>
                            <p className="text-xl font-semibold text-[#389ED9]">{item.value}</p>
                        </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Section (Images) */}
                <motion.div
                    className="flex-1 grid grid-cols-2 lg:w-[524px] lg:h-[548px] place-items-center"
                    initial={{ scale: 0.8, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    >
                    {["group1.png", "group2.png", "group3.png", "group4.png"].map((img, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        >
                        <img src={`/assets/banner/${img}`} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}