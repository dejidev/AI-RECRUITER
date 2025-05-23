import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Clock, DollarSign, FileText, Mail, Search, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import img1 from "../assets/img1.jpg"


const LandingPage = () => {

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-teal-50">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      AI-Powered Recruitment Platform
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl">
                      Reduce recruitment cycle time by up to 3x and lower hiring costs by up to 50% through automation and
                      AI-driven candidate ranking.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={img1}
                      alt="AI Recruiter Dashboard Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our AI-powered platform streamlines your recruitment process from start to finish.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                <Card>
                  <CardHeader className="pb-2">
                    <FileText className="h-6 w-6 text-teal-600 mb-2" />
                    <CardTitle>Resume Parsing & Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Automatically extract and normalize candidate information using NLP-powered parsers.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Search className="h-6 w-6 text-teal-600 mb-2" />
                    <CardTitle>Job Description Matching</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Match candidate profiles to job descriptions by identifying core competencies and transferable
                      skills.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <BarChart3 className="h-6 w-6 text-teal-600 mb-2" />
                    <CardTitle>Performance-Based Scoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Compute suitability scores based on role-specific criteria and historical hiring data.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Mail className="h-6 w-6 text-teal-600 mb-2" />
                    <CardTitle>Personalized Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Generate and send AI-crafted, personalized feedback emails to each applicant.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <BarChart3 className="h-6 w-6 text-teal-600 mb-2" />
                    <CardTitle>Analytics Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Interactive analytics dashboard with augmented insights and customizable reports.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <Users className="h-6 w-6 text-teal-600 mb-2" />
                    <CardTitle>Bias Mitigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Ensure fairness with built-in bias-mitigation techniques and regular audits.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our platform simplifies your recruitment workflow in four easy steps.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold">Upload Resumes</h3>
                  <p className="mt-2 text-gray-500">
                    Bulk upload resumes or connect to your ATS for seamless integration.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold">AI Analysis</h3>
                  <p className="mt-2 text-gray-500">Our AI analyzes and matches candidates to your job descriptions.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold">Review Rankings</h3>
                  <p className="mt-2 text-gray-500">
                    Get ranked candidate lists with detailed match scores and insights.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-bold">Automated Feedback</h3>
                  <p className="mt-2 text-gray-500">Send personalized feedback to all candidates with one click.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Benefits</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Transform your recruitment process with measurable results.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border">
                  <Clock className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-2xl font-bold">3x Faster</h3>
                  <p className="mt-2 text-gray-500">
                    Reduce your recruitment cycle time by up to threefold through automation.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border">
                  <DollarSign className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-2xl font-bold">50% Cost Reduction</h3>
                  <p className="mt-2 text-gray-500">Lower hiring costs significantly with AI-driven candidate ranking.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border">
                  <Users className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-2xl font-bold">Better Candidates</h3>
                  <p className="mt-2 text-gray-500">
                    Improve candidate quality and reduce mis-hires with data-driven insights.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear from companies that have transformed their recruitment process.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-gray-100 p-1">
                        <img src="/placeholder.svg?height=50&width=50" alt="Avatar" className="rounded-full h-10 w-10" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Sarah Johnson</CardTitle>
                        <CardDescription>HR Director, Tech Solutions Inc.</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      "We've reduced our time-to-hire by 70% and improved our quality of hires significantly. The
                      personalized feedback feature has also greatly enhanced our candidate experience."
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-gray-100 p-1">
                        <img src="/placeholder.svg?height=50&width=50" alt="Avatar" className="rounded-full h-10 w-10" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Michael Chen</CardTitle>
                        <CardDescription>Talent Acquisition Manager, Global Retail</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      "The AI Recruiter platform has transformed how we handle high-volume hiring. We're now able to
                      process thousands of applications efficiently while maintaining a personal touch."
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-gray-100 p-1">
                        <img src="/placeholder.svg?height=50&width=50" alt="Avatar" className="rounded-full h-10 w-10" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Emily Rodriguez</CardTitle>
                        <CardDescription>CEO, StartUp Innovations</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      "As a growing startup, we needed a solution that could scale with us. AI Recruiter has not only
                      saved us time and money but has helped us build a diverse and talented team."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose the plan that fits your recruitment needs.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <div className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-3xl font-bold tracking-tight">$499</span>
                      <span className="ml-1 text-xl text-gray-500">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Up to 100 resumes/month
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Basic analytics
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Email templates
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        1 user
                      </li>
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Get Started</Button>
                  </div>
                </Card>
                <Card className="flex flex-col border-teal-600 shadow-lg">
                  <CardHeader>
                    <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-teal-600 rounded-full w-fit mb-2">
                      Popular
                    </div>
                    <CardTitle>Professional</CardTitle>
                    <div className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-3xl font-bold tracking-tight">$999</span>
                      <span className="ml-1 text-xl text-gray-500">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Up to 500 resumes/month
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Advanced analytics
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Custom email templates
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        5 users
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        ATS integration
                      </li>
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Get Started</Button>
                  </div>
                </Card>
                <Card className="flex flex-col">
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <div className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-3xl font-bold tracking-tight">Custom</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Unlimited resumes
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Enterprise analytics
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Custom integrations
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Unlimited users
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Dedicated support
                      </li>
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Contact Sales</Button>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-teal-600">
          <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Ready to Transform Your Recruitment Process?
                  </h2>
                  <p className="max-w-[900px] text-teal-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join hundreds of companies that have revolutionized their hiring with AI Recruiter.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-teal-600 hover:bg-gray-100">Request Demo</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-teal-700">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* //Footer */}
        <footer className="border-t bg-gray-50">
        <div className="container mx-auto flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <Search className="h-6 w-6 text-teal-600" />
                <span className="text-xl font-bold">AI Recruiter</span>
              </div>
              <nav className="flex gap-4 md:gap-6 flex-wrap">
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
                <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                  Terms of Service
                </Link>
              </nav>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-sm text-gray-500">© 2025 AI Recruiter. All rights reserved.</p>
              <div className="flex gap-4">
                <Link to="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link to="#" className="text-gray-500 hover:text-gray-900">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>




  )
}

export default LandingPage;
