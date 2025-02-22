import PropTypes from 'prop-types';

export default function Program({programs}) {
    return (
        <section className="relative">
            <div className="relative max-h-[932px]">
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
