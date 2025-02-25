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

    return (
        <div className="overflow-hidden">
            <Hero id="hero"/>
            <Donation donationCategories={donationCategories} donations={data?.donations} id="donation"/>
            <Program programs={data?.programs} id="program"/>
            <Kajian kajianMenus={kajianMenus} events={data?.events} id="kajian"/>
            <AmazingGroup amazingGroups={data?.partners} id="partner"/>
        </div>
    );
 };

 export default Homepage;