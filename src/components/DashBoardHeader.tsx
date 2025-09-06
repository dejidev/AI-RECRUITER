// import React from 'react';
import { Link, } from 'react-router-dom';
import { Search, Settings } from "lucide-react";
import { Button } from "../components/ui/button"


export default function DashBoardHeader() {

    // const navigate = useNavigate()

    // const handleSignOut = () => {
    //     // Add your sign out logic here

    //     navigate('/signin')
    // }

    return (
        <div className="flex flex-col">
            <header className="sticky top-0 z-10 border-b bg-white">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <Search className="h-6 w-6 text-blue-600" />
                            <span className="text-xl font-bold">AI Recruiter</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link to="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
                            Dashboard
                        </Link>
                        <Link to="/dashboard/jobs" className="text-sm font-medium hover:underline underline-offset-4">
                            Jobs
                        </Link>
                        <Link to="/dashboard/candidate" className="text-sm font-medium hover:underline underline-offset-4">
                            Candidates
                        </Link>
                        <Link to="/dashboard/analytics" className="text-sm font-medium hover:underline underline-offset-4">
                            Analytics
                        </Link>
                        <Link to="/dashboard/settings" className="text-sm font-medium hover:underline underline-offset-4">
                            Settings
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Button>
                        <div></div>
                        <div className="relative">
                            <img src="/placeholder.svg?height=40&width=40" alt="Avatar" className="rounded-full h-8 w-8" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

