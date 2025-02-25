import AmazingGroup from "../components/AmazingGroup";
import Donation from "../components/Donation";
import Hero from "../components/Hero";
import Kajian from "../components/Kajian";
import Program from "../components/Program";
import { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
        const response = await axios.get("http://localhost:8000/api/homepage");
        setData(response.data);
        } catch (err) {
        setError(err.message || "Error fetching data");
        console.error("Error fetching data:", err);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        console.log(data)
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const donationCategories = [
        {
            id: 1,
            title: "Semua Kategori",
            isActive: true,
            icon: "/assets/icons/overview.svg"
        },
        {
            id: 2,
            title: "Kemanusiaan",
            isActive: false,
            icon: "/assets/icons/donasi.svg"
        },
        {
            id: 3,
            title: "IBBQ",
            isActive: false,
            icon: "/assets/icons/mosque.svg"
        },
        {
            id: 4,
            title: "Wakaf",
            isActive: false,
            icon: "/assets/icons/wakaf.svg"
        },
        {
            id: 5,
            title: "Lainnya",
            isActive: false,
            icon: "/assets/icons/more.svg"
        },
    ];

    const donations = [
        {
            id: 1,
            title: "Sedekah Beras untuk seluruh para keluarga di afrika selatan",
            image: "/assets/donation-card/1.png",
            progress: 10,
            collected_fund: 200,
            deadline: '2 Hari Lagi'
            
        },
        {
            id: 2,
            title: "Bantu Bencana Gempa dengan Kebutuhan Pokok",
            image: "/assets/donation-card/2.png",
            progress: 50,
            collected_fund: 200,
            deadline: '2 Hari Lagi'
            
        },
        {
            id: 3,
            title: "Penyaluran Bantuan untuk Anak Yatim dan Dhuafa",
            image: "/assets/donation-card/3.png",
            progress: 70,
            collected_fund: 200,
            deadline: '2 Hari Lagi'
            
        },
        
    ];

    const programs = [
        {
            id: 1,
            title: 'Indonesia Bisa Baca Quran',
            description: 'Sebuah Fakta mengejutkan menyatakan bahwa 53,57% (BPS 2018). kaum muslimin di Indonesia tidak bisa membaca Al-Quran. ',
            image: '/assets/program-pilihan/1.png'
        },
        {   
            id: 2,
            title: 'CintaQuran Call',
            description: 'Cinta Quran Call merupakan layanan pendampingan.',
            image: '/assets/program-pilihan/2.png'
        },
        {
            id: 3,
            title: 'Kajian Perkantoran',
            description: '',
            image: '/assets/program-pilihan/3.png'
        },
        {
            id: 4,
            title: 'Majelis Cinta Quran',
            description: '',
            image: '/assets/program-pilihan/4.png'
        },
        {
            id: 5,
            title: 'Cinta Quran TV',
            description: '',
            image: '/assets/program-pilihan/5.png'
        },
    ];

    const kajianMenus = [
        {
            id: 1,
            title: "Semua Kategori",
            isActive: true,
            icon: "/assets/icons/overview.svg"
        },
        {
            id: 2,
            title: "Berlangsung",
            isActive: false,
            icon: "/assets/icons/live.svg"
        },
        {
            id: 3,
            title: "Akan Datang",
            isActive: false,
            icon: "/assets/icons/calendar.svg"
        },
        {
            id: 4,
            title: "Perkantoran",
            isActive: false,
            icon: "/assets/icons/office.svg"
        },
        {
            id: 5,
            title: "Online",
            isActive: false,
            icon: "/assets/icons/online.svg"
        },
        {
            id: 6,
            title: "Lainnya",
            isActive: false,
            icon: "/assets/icons/more.svg"
        },
    ];

    const events = [
        {
            id: 1,
            image: "/assets/kajian/main.png",
            title: "Menyempurnakan Taqwa",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 2,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 3,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 4,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 5,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 6,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 7,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 8,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 9,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 10,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 11,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 12,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 13,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 14,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 15,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
        {
            id: 16,
            image: "/assets/kajian/events.png",
            title: "Mengatasi Godaan Selingkuh",
            studio: 'Cinta Quran Creative Studio',
            date: "Kamis, 30 September 2021",
            time: "09:00 - 10:00",
            live: true,
        },
    ];


    const amazingGroups = [
        {
            id: 1,
            name: 'Cinta Quran Creative Studio',
            image: "/assets/partner/partner1.png",
        },
        {
            id: 2,
            name: 'Cinta Quran Creative Studio',
            image: "/assets/partner/partner2.png",
        },
        {
            id: 3,
            name: 'Cinta Quran Creative Studio',
            image: "/assets/partner/partner3.png",
        }
    ];

    return (
        <div className="overflow-hidden">
            <Hero id="hero"/>
            <Donation donationCategories={donationCategories} donations={data?.donations} id="donation"/>
            <Program programs={programs} id="program"/>
            <Kajian kajianMenus={kajianMenus} events={events} id="kajian"/>
            <AmazingGroup amazingGroups={data?.partners} id="partner"/>
        </div>
    );
 };

 export default Homepage;