export default function Footer() {
    return (
        <footer className="relative mt-20 lg:mt-0">
            <img src="/assets/background/footer.png" className="absolute w-full bottom-0 h-[200px] lg:h-auto lg:-top-32" alt="" />
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20 px-8 lg:px-20 lg:py-5 w-full bottom-0">
                <div className="flex flex-col gap-5">
                    <img src="/assets/logo-text.png" className="self-baseline" alt="logo" />
                    <p className="text-sm font-light text-neutral-800">Cinta Quran Foundation adalah lembaga independen yang mendakwahkan Alquran sebagai solusi dan inspirasi untuk negeri.</p>
                    <button className="text-white hover:cursor-pointer py-2 pl-2 pr-8 self-baseline bg-[#389ED9] rounded-full flex gap-3 items-center">
                            <img src="/assets/icons/arrow-right.svg" alt="" />
                            <span className="text-sm font-semibold">Lihat Laporan CQ Foundation</span>
                    </button>
                </div>
                <div className="flex flex-row justify-between">
                    <ul className="text-md font-light text-neutral-600 lg:leading-7">
                        <li>
                            <a href="">Program</a>
                        </li>
                        <li>
                            <a href="">Donasi</a>
                        </li>
                        <li>
                            <a href="">Kajian</a>
                        </li>
                        <li>
                            <a href="">Kemitraan</a>
                        </li>
                        <li>
                            <a href="">Update</a>
                        </li>
                        <li>
                            <a href="">Inspirasi</a>
                        </li>
                    </ul>
                    <ul className="text-md font-light text-neutral-600 leading-7">
                    <li>
                            <a href="">Volunteer</a>
                        </li>
                        <li>
                            <a href="">Tentang Kami</a>
                        </li>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                        <li>
                            <a href="">Syarat & Ketentuan</a>
                        </li>
                        <li>
                            <a href="">Kebijakan Privasi</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                        <img src="/assets/icons/location.svg" className="w-6 h-6" alt="" />
                        <p className="text-sm font-light">Jl. Parikesit Raya No.35-37 Bantarjati, Bogor Utara, Kota Bogor 16153, Jawa Barat, Indonesia.</p>
                    </div>
                    <div className="flex gap-4">
                        <img src="/assets/icons/envelope.svg" className="w-[20px] h-[18px]" alt="" />
                        <p className="text-sm font-light">info@cintaquran.or.id</p>
                    </div>
                    <div className="flex gap-4">
                        <img src="/assets/icons/phone.svg" className="w-6 h-6" alt="" />
                        <p className="text-sm font-light">(0251) 85 717 62</p>
                    </div>
                    <div className="relative">
                        <p>Ikuti kami di</p>
                        <ul className="flex gap-2">
                            <li>
                                <a href=""><img src="/assets/icons/facebook.svg" alt="" /></a>
                            </li>
                            <li>
                                <a href=""><img src="/assets/icons/youtube.svg" alt="" /></a>
                            </li>
                            <li>
                                <a href=""><img src="/assets/icons/instagram.svg" alt="" /></a>
                            </li>
                            <li>
                                <a href=""><img src="/assets/icons/linkedin.svg" alt="" /></a>
                            </li>
                        </ul>
                        <button className="absolute rounded-full flex justify-center items-center gap-2 px-4 py-5 bottom-10 right-0 bg-green-500 hover:bg-green-600 transition ease-in-out duration-300 cursor-pointer h-6">
                            <span className="text-white font-semibold text-sm">Hubungi Kami </span>
                            <img src="/assets/icons/wa.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <p className="text-sm w-full px-8 lg:px-20 font-light mt-10">© Copyright CintaQuran® Foundation All Rights Reserved.</p>
        </footer>
    )
}