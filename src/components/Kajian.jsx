import PropTypes from 'prop-types';

export default function Kajian({kajianMenus, events}) {
    return (
        <section className="px-20 w-full">
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

            <div className="min-h-screen mt-10">
                <div className="grid grid-cols-6 gap-4">
                    {events.map((event, index) => (
                    <div
                        key={event.id}
                        className={`relative overflow-hidden rounded-lg shadow-lg ${
                        index === 0 ? "col-span-3 row-span-3" : "col-span-1 row-span-1"
                        }`}
                    >
                        <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    ))}
                </div>
            </div>
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
