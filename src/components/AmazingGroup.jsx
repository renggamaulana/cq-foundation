import PropTypes from 'prop-types';

export default function AmazingGroup({amazingGroups}) {
    return (
        <section>
            <div className="relative mt-30">
                <div className="max-h-[900px]">
                    <img src="/assets/background/partner.png" className="-translate-y-96 w-full" alt="alt"/>
                    <div className="absolute top-7 w-full px-8 lg:px-20">
                        <h1 className="lg:text-center text-4xl lg:text-5xl font-semibold">Amazing Group</h1>
                        <div className="w-full">
                            <div className="overflow-hidden w-full mt-10 whitespace-nowrap">
                                <div className="flex items-center gap-8 animate-marquee">
                                    {amazingGroups.map((group, index) => (
                                        <div
                                        key={`marquee-1-${index}`}
                                        className="w-40 h-20 flex justify-center items-center bg-white shadow-lg rounded-xl"
                                        >
                                        <img src={group.image} alt="Logo" className="w-24 h-auto" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="overflow-hidden w-full whitespace-nowrap mt-4">
                                <div className="flex items-center gap-8 animate-marquee-reverse">
                                {amazingGroups.map((group, index) => (
                                    <div
                                    key={`marquee-2-${index}`}
                                    className="w-40 h-20 flex justify-center items-center bg-white shadow-lg rounded-xl"
                                    >
                                    <img src={group.image} alt="Logo" className="w-24 h-auto" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-36 left-0 px-20 rounded-xl">
                    <div className="relative">
                        <img src="/assets/cta/bg.png" className="rounded-xl" alt="alt"/>
                        <img src="/assets/cta/overlay.png" className="absolute top-0 rounded-xl w-full" alt="" />
                        <div className="absolute top-0 left-0 w-full p-10 text-white">
                            <h1 className="text-3xl font-semibold w-[650px]">Mari bergabung menjadi keluarga Cinta Quran Foundation agar bisa berbagi dengan sesama</h1>
                            <button className="flex gap-4 items-center bg-white rounded-full px-15 py-2 mt-5">
                                <span className="text-sm font-semibold text-[#389ED9]">Daftar Sekarang</span>
                                <img src="/assets/icons/arrow-right-blue.svg" alt="" />
                            </button>   
                        </div>
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
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};
