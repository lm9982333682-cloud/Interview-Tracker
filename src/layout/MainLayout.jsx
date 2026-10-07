import { Outlet, useLocation } from "react-router";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    const location = useLocation();

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/":
                return "Dashboard";

            case "/questions":
                return "Question Tracker";

            case "/progress":
                return "Progress Analytics";

            case "/machine-coding":
                return "Machine Coding";

            case "/settings":
                return "Settings";

            default:
                return "Dashboard";
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

            {/* Sidebar */}
            <Sidebar />

            {/* Header */}
            <Header title={getPageTitle()} />

            {/* Main Content */}
            <main
                className="
          min-h-screen
          pt-16
          pb-[80px]
          lg:ml-[240px]
          lg:pb-0
        "
            >
                <div className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </main>

        </div>
    );
};

export default MainLayout;