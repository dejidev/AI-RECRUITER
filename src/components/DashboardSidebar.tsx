import {
    Home,
    Briefcase,
    Users,
    HeartHandshake,
    MessageCircle,
    BarChart2,
    UserCog,
    Settings,
    HelpCircle,
    LogOut,
    Menu,
    X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/RecritAI_logo.png";
import { useAuth } from "../context/useAuth";



/* ------------------------------------------------------------------ */
/*  Nav‑item definitions – feel free to adjust paths / labels later   */
/* ------------------------------------------------------------------ */
const MAIN = [
    { label: "Home", to: "/dashboard", Icon: Home },
    { label: "Jobs", to: "/dashboard/jobs", Icon: Briefcase },
    { label: "Candidates", to: "/dashboard/candidates", Icon: Users },
    { label: "Matches & Scoring", to: "/dashboard/matches", Icon: HeartHandshake },
    { label: "Communications", to: "/dashboard/communications", Icon: MessageCircle },
    { label: "Analytics", to: "/dashboard/analytics", Icon: BarChart2 },
    { label: "Teams & Settings", to: "/dashboard/teams-settings", Icon: UserCog },
];


const FOOTER = [
    { label: "Settings", to: "/dashboard/settings", Icon: Settings },
    { label: "Help", to: "/dashboard/previous", Icon: HelpCircle },
    { label: "Logout", action: "logout", Icon: LogOut }, // 👈 action instead of route
];









export default function DashboardSidebar() {
    const [open, setOpen] = useState(false); // sidebar state
    const [confirmOpen, setConfirmOpen] = useState(false); // modal state
    const { signOut } = useAuth();

    const handleLogout = () => {
        setConfirmOpen(false);
        signOut();
    };

    const Item = ({
        to,
        label,
        Icon,
        small,
        onClick,
    }: {
        to?: string;
        label: string;
        Icon: React.ComponentType<{ size?: number }>;
        small?: boolean;
        onClick?: () => void;
    }) =>
        to ? (
            <NavLink
                to={to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                    [
                        "flex items-center gap-3 p-2 cursor-pointer",
                        "hover:bg-[#E7F1FA] hover:border-r-4 hover:border-[#1370C8]",
                        isActive ? "bg-[#E7F1FA] border-r-4 border-[#1370C8]" : "",
                        small ? "text-[#222222]/90" : "text-[#222222]",
                    ].join(" ")
                }
            >
                <span className="text-[#1370C8]">
                    <Icon size={small ? 18 : 20} />
                </span>
                <span>{label}</span>
            </NavLink>
        ) : (
            <button
                onClick={onClick}
                className="flex items-center gap-3 p-2 w-full text-left cursor-pointer hover:bg-[#E7F1FA] hover:border-r-4 hover:border-[#1370C8] text-[#222222]/90"
            >
                <span className="text-[#1370C8]">
                    <Icon size={small ? 18 : 20} />
                </span>
                <span>{label}</span>
            </button>
        );

    const panel = (
        <aside
            className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md flex flex-col transition-transform duration-300 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            {/* Logo */}
            <div className="p-4 mb-4 flex items-center gap-3">
                <img src={logo} alt="RecruitAI" className="w-8 h-8 object-contain" />
                <h2 className="text-sm font-semibold text-[#1370C8]">RecruitAI</h2>

                <button
                    onClick={() => setOpen(false)}
                    className="md:hidden ml-auto p-1 rounded hover:bg-gray-100"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Main nav */}
            <nav className="flex-1 overflow-y-auto px-4 space-y-2 text-sm">
                {MAIN.map(({ label, to, Icon }) => (
                    <Item key={label} label={label} to={to} Icon={Icon} />
                ))}
            </nav>

            {/* Footer nav */}
            <div className="px-4 py-4 space-y-2 text-sm">
                {FOOTER.map(({ label, to, action, Icon }) =>
                    action === "logout" ? (
                        <Item
                            key={label}
                            label={label}
                            Icon={Icon}
                            small
                            onClick={() => setConfirmOpen(true)}
                        />
                    ) : (
                        <Item key={label} label={label} to={to} Icon={Icon} small />
                    )
                )}
            </div>
        </aside>
    );

    return (
        <>
            {/* Hamburger */}
            <button
                onClick={() => setOpen(true)}
                className="fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow md:hidden"
            >
                <Menu size={22} />
            </button>

            {panel}

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-30 bg-black/40 md:hidden"
                />
            )}

            {/* Confirm Logout Modal */}
            {confirmOpen && (
                <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-2">Are you sure?</h2>
                        <p className="text-gray-600 mb-4">You will be signed out.</p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setConfirmOpen(false)}
                                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                            >
                                Yes, Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}