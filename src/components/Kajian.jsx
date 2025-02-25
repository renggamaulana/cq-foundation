import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
export default function Kajian({kajianMenus, events}) {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="lg:px-20 mt-[720px] lg:mt-0 lg:-translate-y-48" id="kajian">
            {/* Animasi Fade In Saat Section Masuk */}
            <motion.div 
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="lg:text-center px-8">
                    <h1 className="text-3xl lg:text-5xl font-semibold mb-3">Kajian Inspiratif</h1>
                    <p className="text-md font-light text-neutral-600">
                        Program kajian inspiratif dari kami untuk menemani aktivitas Sahabat Cinta Qur’an.
                    </p>
                </div>
                <div className="flex pl-8 lg:pl-0 gap-3 mt-5 overflow-x-auto scrollbar-hide">
                    {kajianMenus.map((menu) => (
                        <motion.button 
                            key={menu.id} 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex gap-2 border w-full lg:min-w-auto min-w-[180px] px-3 py-2 rounded-full font-light items-center justify-center hover:cursor-pointer hover:bg-[#eef7fc] hover:text-[#389ED9] hover:border-[#389ED9] ${menu.isActive ? 'border-[#389ED9] bg-[#eef7fc] text-[#389ED9]' : 'border-neutral-300'}`}
                        >
                            <img src={menu.icon} alt="" className="w-[24px] h-[24px]" />
                            <p className="text-sm">{menu.title}</p>
                        </motion.button>
                    ))}
                </div>

                {/* Section Events */}
                <div className="max-h-[500px] lg:max-h-full overflow-y-auto scrollbar-hide lg:min-h-screen mt-10 px-8 lg:px-0">
                    <div className="grid w-full grid-cols-1 lg:grid-cols-6 gap-4">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
                                className={`relative overflow-hidden rounded-lg shadow-lg ${
                                    index === 0 ? "lg:col-span-3 lg:row-span-3" : "col-span-1 row-span-1"
                                }`}
                            >
                                <div className="h-full relative">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-fit" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    {index === 0 && (
                                        <div className="flex flex-col justify-between absolute bottom-0 h-full p-3 lg:p-6">
                                            <div className="self-baseline">
                                                <div className="bg-[#FF3C5A] px-8 py-1 rounded-full flex gap-2">
                                                    <img src="/assets/icons/live-white.svg" alt="" />
                                                    <h1 className="text-white font-semibold text-md">Sedang Berlangsung!</h1>
                                                </div>
                                            </div>
                                            <div className="w-full text-white">
                                                <span className="font-light">{event.studio}</span>
                                                <h1 className="text-xl lg:text-2xl text-white font-semibold mb-3">{event.title}</h1>
                                                <p className="text-[#AFCD21]">{event.date}</p>
                                                <p className="mt-1">{event.time}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

Kajian.propTypes = {
    kajianMenus: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            isActive: PropTypes.bool.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            studio: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
            live: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
