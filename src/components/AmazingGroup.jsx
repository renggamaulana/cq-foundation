import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
export default function AmazingGroup({amazingGroups}) {

    return (
        <section className="lg:mb-20" id="partner">
            <div className="relative translate-y-10 lg:-translate-y-20">
                <div className="h-[600px] lg:h-[800px]">
                    <motion.img 
                        src="/assets/background/partner.png" 
                        className="-translate-y-20 lg:max-h-[1500px] max-h-[500px] absolute lg:-translate-y-96 w-full" 
                        alt="alt"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
                <div className="">
                    <div className="absolute top-7 w-full">
                        <motion.h1 
                            className="lg:text-center text-3xl lg:text-5xl font-semibold px-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Amazing Group
                        </motion.h1>
                        <div className="w-full">
                        {/* Marquee ke kanan */}
                        <div className="overflow-hidden w-full mt-10 whitespace-nowrap relative flex space-x-8">
                            {[...Array(2)].map((_, i) => (
                            <motion.div 
                                key={`marquee-right-${i}`}
                                className="flex items-center gap-4 w-max"
                                animate={{ x: ["0%", "-100%"] }}
                                transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
                            >
                                {[...amazingGroups, ...amazingGroups].map((group, index) => (
                                <div
                                    key={`marquee-1-${index}`}
                                    className="w-40 h-20 flex justify-center items-center bg-white shadow-lg rounded-xl"
                                >
                                    <img src={group.image_url} alt="Logo" className="w-24 h-auto" />
                                </div>
                                ))}
                            </motion.div>
                            ))}
                        </div>

                        {/* Marquee ke kiri */}
                        <div className="overflow-hidden w-full whitespace-nowrap mt-4 relative flex space-x-8">
                            {[...Array(2)].map((_, i) => (
                            <motion.div 
                                key={`marquee-left-${i}`}
                                className="flex items-center gap-4 w-max"
                                animate={{ x: ["-100%", "0%"] }}
                                transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
                            >
                                {[...amazingGroups, ...amazingGroups].map((group, index) => (
                                <div
                                    key={`marquee-2-${index}`}
                                    className="w-40 h-20 flex justify-center items-center bg-white shadow-lg rounded-xl"
                                >
                                    <img src={group.image_url} alt="Logo" className="w-24 h-auto" />
                                </div>
                                ))}
                            </motion.div>
                            ))}
                        </div>
                        </div>

                    </div>
                    <div className="absolute bottom-22 lg:bottom-10 w-full left-0 overflow-hidden lg:px-20 lg:rounded-xl">
                        <motion.div 
                            className="relative lg:h-auto h-[150px] "
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <img src="/assets/cta/bg.png" className="lg:rounded-xl h-full w-full object-cover" alt="alt"/>
                            <img src="/assets/cta/overlay.png" className="absolute top-0 h-full lg:rounded-xl w-full" alt="" />
                            <div className="absolute top-0 left-0 w-full p-3 lg:p-10 text-white">
                                <motion.h1 
                                    className="text-md lg:text-3xl font-semibold lg:w-[650px]"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                >
                                    Mari bergabung menjadi keluarga Cinta Quran Foundation agar bisa berbagi dengan sesama
                                </motion.h1>
                                <motion.button 
                                    className="cursor-pointer flex gap-4 items-center bg-white rounded-full px-5 lg:px-15 py-2 mt-5"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <span className="text-sm font-semibold text-[#389ED9]">Daftar Sekarang</span>
                                    <img src="/assets/icons/arrow-right-blue.svg" alt="" />
                                </motion.button>   
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
};


AmazingGroup.propTypes = {
    amazingGroups: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image_url: PropTypes.string.isRequired,
        })
    ).isRequired,
};
