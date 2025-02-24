import PropTypes from 'prop-types';

export default function Program({programs}) {
    return (
        <section className="w-full lg:mt-20">
            <div className="relative w-full -translate-y-10 lg:-translate-y-2 ">
                <img
                    src="/assets/background/program.png"
                    className="w-full object-cover h-full lg:h-[1200px]"
                    alt=""
                />
                <div className="absolute z-10 top-36 px-8 sm:px-8 lg:px-20 w-full">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-0">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-semibold mb-2 lg:mb-3">
                                Program Pilihan
                            </h1>
                            <p className="text-sm lg:text-base font-light">
                                Program-program terbaik dari Cinta Quran Foundation untuk Sahabat Cinta Quran.
                            </p>
                        </div>
                        <div className="hidden lg:flex gap-5 mt-4 lg:mt-0">
                            <button className="bg-white border border-[#389ED9] rounded-full p-2 hover:cursor-pointer">
                                <img src="/assets/icons/chevron-left.svg" alt="" />
                            </button>
                            <button className="bg-white border border-[#389ED9] rounded-full p-2 hover:cursor-pointer">
                                <img src="/assets/icons/chevron-right.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
                        {programs.map((program, index) => (
                            <div key={program.id} className={`relative ${index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'}`}>
                                <div className="relative w-full">
                                    <img
                                        src={program.image}
                                        alt=""
                                        className="h-[200px] lg:h-full w-full object-cover rounded-3xl"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
                                </div>
                                <div className={`absolute flex flex-col ${ index === 0 ? 'gap-2 sm:gap-3' : 'gap-1 sm:gap-3'} bottom-0 left-0 w-full p-4 sm:p-5 lg:p-10 text-white z-10`}>
                                    <h1 className="text-lg sm:text-xl font-bold">{program.title}</h1>
                                    <p className="hidden lg:block text-sm sm:text-md">
                                        {program.description ?? ''}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Menambahkan validasi prop types
Program.propTypes = {
    programs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};
