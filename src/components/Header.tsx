import { Search } from "lucide-react"
import { Button } from "./ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";


export default function Header() {

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return (
        <header className="border-b">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Search className="h-6 w-6 text-blue-600" />
                    <span className="text-xl font-bold">AI Recruiter</span>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link to="#features" onClick={() => handleScrollToSection('features')} className="text-sm font-medium hover:underline underline-offset-4">
                        Features
                    </Link>
                    <Link to="#how-it-works" onClick={() => handleScrollToSection('how-it-works')} className="text-sm font-medium hover:underline underline-offset-4">
                        How It Works
                    </Link>
                    <Link to="#benefits" onClick={() => handleScrollToSection('benefits')} className="text-sm font-medium hover:underline underline-offset-4">
                        Benefits
                    </Link>
                    <Link to="#pricing" onClick={() => handleScrollToSection('pricing')} className="text-sm font-medium hover:underline underline-offset-4">
                        Pricing
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link to="/signin">
                        <Button variant="outline" size="sm" className=" md:flex">
                            Log In
                        </Button>
                    </Link>

                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 hidden md:flex">
                        Request Demo
                    </Button>
                </div>
            </div>
        </header>
    )
}


