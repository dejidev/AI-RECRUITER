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
    { label: "Settings", to: "/settings", Icon: Settings },
    { label: "Help", to: "/dashboard/previous", Icon: HelpCircle },
    { label: "Logout", to: "/logout", Icon: LogOut },
];




/* ------------------------------------------------------------------ */
/*                            Component                               */
/* ------------------------------------------------------------------ */
export default function DashboardSidebar() {
    const [open, setOpen] = useState(false);           // mobile drawer state

    const Item = ({
        to,
        label,
        Icon,
        small,
    }: {
        to: string;
        label: string;
        Icon: React.ComponentType<{ size?: number }>;
        small?: boolean;
    }) => (
        <NavLink
            to={to}
            end
            onClick={() => setOpen(false)}                  // close drawer on tap
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
    );

    /* -------------------------------------------------------------- */
    /*  Sidebar panel (shared by desktop + mobile)                    */
    /* -------------------------------------------------------------- */
    const panel = (
        <aside
            className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md
          flex flex-col transition-transform duration-300
          md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
            {/* Logo / Close‑button (mobile only) */}
            <div className="p-4 mb-4 flex items-center gap-3">
                <img src={logo} alt="RecruitAI" className="w-8 h-8 object-contain" />
                <h2 className="text-sm font-semibold text-[#1370C8]">RecruitAI</h2>

                <button
                    onClick={() => setOpen(false)}
                    aria-label="Close sidebar"
                    className="md:hidden ml-auto p-1 rounded hover:bg-gray-100"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Scrollable menu */}
            <nav className="flex-1 overflow-y-auto px-4 space-y-2 text-sm">

                {MAIN.map(({ label, to, Icon }) => (
                    <Item key={label} label={label} to={to} Icon={Icon} />
                ))}

            </nav>
             {/* Footer items */}
            <div className="px-4 py-4 space-y-2 text-sm">
                {FOOTER.map(({ label, to, Icon }) => (
                    <Item key={label} label={label} to={to} Icon={Icon} small />
                ))}
            </div>     
 
        </aside>
    );

    /* -------------------------------------------------------------- */
    /*              Backdrop (mobile) + Hamburger button              */
    /* -------------------------------------------------------------- */
    return (
        <>
            {/* Hamburger – hidden on desktop */}
            <button
                onClick={() => setOpen(true)}
                aria-label="Open sidebar"
                className="fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow md:hidden"
            >
                <Menu size={22} />
            </button>

            {panel}

            {/* Backdrop (only when drawer open on mobile) */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-30 bg-black/40 md:hidden"
                />
            )}
        </>
    );
}
