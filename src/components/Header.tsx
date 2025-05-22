import {Search} from "lucide-react"
import { Button } from "./ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="">
          <header className="border-b">
              <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                  <div className="flex items-center gap-2">
                      <Search className="h-6 w-6 text-teal-600" />
                      <span className="text-xl font-bold">AI Recruiter</span>
                  </div>
                  <nav className="hidden md:flex gap-6">
                      <Link to="#features" className="text-sm font-medium hover:underline underline-offset-4">
                          Features
                      </Link>
                      <Link to="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
                          How It Works
                      </Link>
                      <Link to="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
                          Benefits
                      </Link>
                      <Link to="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
                          Pricing
                      </Link>
                  </nav>
                  <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" className="hidden md:flex">
                          Log In
                      </Button>
                      <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                          Request Demo
                      </Button>
                  </div>
              </div>
          </header>
    </div>
  )
}

export default Header
