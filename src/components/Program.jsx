import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
export default function Program({programs}) {

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:mt-20"
            id="program"
        >
            <div className="relative w-full -translate-y-10 lg:-translate-y-2">
                <img
                    src="/assets/background/program.png"
                    className="w-full object-cover h-full lg:h-[1200px]"
                    alt=""
                />
                <div className="absolute z-10 top-36 px-8 sm:px-8 lg:px-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-0"
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 lg:max-h-[640px] max-h-[400px] scrollbar-hide overflow-scroll">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                                className={`relative ${index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-full"
                                >
                                    <img
                                        src={program.image_url}
                                        alt=""
                                        className={`h-[120px] lg:h-[200px] w-full object-cover rounded-3xl 
                                            ${index === 0 ? 'lg:h-[400px]' : index === 1 ? 'lg:h-[400px]' : ''}`}
                                    />
                                    <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
                                </motion.div>
                                <div className={`absolute flex flex-col ${index === 0 ? 'gap-2 sm:gap-3' : 'gap-1 sm:gap-3'} bottom-0 left-0 w-full p-4 sm:p-5 lg:p-10 text-white z-10`}>
                                    <h1 className="text-lg sm:text-xl font-bold">{program.title}</h1>
                                    <p className="hidden lg:block text-sm sm:text-md">
                                        {program.description ?? ''}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

// Menambahkan validasi prop types
Program.propTypes = {
    programs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image_url: PropTypes.string.isRequired,
        })
    ).isRequired,
};
