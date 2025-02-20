export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-white px-20 py-5 shadow-sm">
            <div>
                <img src="/assets/logo-text.png" alt="logo" />
            </div>
            <ul className="flex items-center gap-4 text-md">
                <li>Program</li>
                <li>Kajian</li>
                <li>Donasi</li>
                <li>Kemitraan</li>
                <li>Update</li>
                <li>Kontak</li>
                <li>
                    <img src="/assets/icons/search.svg" alt="alt"/>
                </li>
                <li>
                    <button className="border border-[#389ED9] rounded-full px-4 py-1">Masuk</button>
                </li>
            </ul>
        </nav>
    )
}