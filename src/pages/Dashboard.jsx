import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar"; // new import
import Card from "../components/Card";
import Announcement from "../components/Announcement";
import QuickLinks from "../components/QuickLinks";
import Favorites from "../components/Favorites";
import Footer from "../components/Footer";
import StatCard from "../components/StatCard";

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <SearchBar /> {/* 🔹 Now just below the navbar */}

            <div className="max-w-7xl mx-auto p-6 grid grid-cols-3 gap-6">
                {/* Left Side */}
                <div className="col-span-2">
                    <div className="flex gap-6 mb-6">
                            <StatCard label="Major CGPA" value="8.50" showEye={true} />
                            <StatCard label="Major Credits" value="23" showEye={false} />
                    </div>

                    <h3 className="text-lg font-semibold mb-3 inline-block bg-[#6770D2] text-white px-2 py-1 rounded">
  My Courses
</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <Card title="Engineering Mathematics - I" code="MA101" progress={86} />
                        <Card title="Engineering Mechanics" code="WO110" progress={71.5} />
                        <Card title="C Programming" code="CS110" progress={80.5} />
                        <Card title="Product Management" code="SM777" progress={91.25} />
                        <Card title="C Programming Lab" code="CS111" progress={75} />
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    <Announcement />
                    <QuickLinks />
                    <Favorites />
                </div>
            </div>
            <Footer />
        </div>
    );
}
