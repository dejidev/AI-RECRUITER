import { Link } from "react-router-dom"
import { BarChart3, Clock, FileText, Mail, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-6 md:px-6 md:py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-gray-500">Welcome back! Here's an overview of your recruitment activities.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Search className="mr-2 h-4 w-4" />
                New Job
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-gray-500">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Candidates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">342</div>
                <p className="text-xs text-gray-500">+86 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Time-to-Hire (avg)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14 days</div>
                <p className="text-xs text-green-500">-8 days from industry average</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Cost-per-Hire (avg)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2,450</div>
                <p className="text-xs text-green-500">-42% from industry average</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Recruitment Pipeline</CardTitle>
                <CardDescription>Overview of candidates at each stage of the recruitment process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-teal-500" />
                        <span className="text-sm font-medium">Applied</span>
                      </div>
                      <span className="text-sm font-medium">156</span>
                    </div>
                    <Progress value={78} className="h-2 bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-blue-500" />
                        <span className="text-sm font-medium">Screened</span>
                      </div>
                      <span className="text-sm font-medium">98</span>
                    </div>
                    <Progress value={49} className="h-2 bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-purple-500" />
                        <span className="text-sm font-medium">Interview</span>
                      </div>
                      <span className="text-sm font-medium">64</span>
                    </div>
                    <Progress value={32} className="h-2 bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-amber-500" />
                        <span className="text-sm font-medium">Assessment</span>
                      </div>
                      <span className="text-sm font-medium">42</span>
                    </div>
                    <Progress value={21} className="h-2 bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-green-500" />
                        <span className="text-sm font-medium">Offer</span>
                      </div>
                      <span className="text-sm font-medium">24</span>
                    </div>
                    <Progress value={12} className="h-2 bg-gray-100" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Top Job Openings</CardTitle>
                <CardDescription>Jobs with the most applicants this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Senior Software Engineer</p>
                      <p className="text-xs text-gray-500">Engineering • Full-time</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">48</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Product Manager</p>
                      <p className="text-xs text-gray-500">Product • Full-time</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">36</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">UX/UI Designer</p>
                      <p className="text-xs text-gray-500">Design • Full-time</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">29</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Marketing Specialist</p>
                      <p className="text-xs text-gray-500">Marketing • Full-time</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">24</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Data Analyst</p>
                      <p className="text-xs text-gray-500">Analytics • Full-time</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">19</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4">
            <Tabs defaultValue="recent">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="recent">Recent Activities</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming Tasks</TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <TabsContent value="recent" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <div className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Feedback Emails Sent</p>
                          <p className="text-xs text-gray-500">
                            24 personalized feedback emails sent to Software Engineer applicants
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                      <div className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          <Users className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">New Candidates</p>
                          <p className="text-xs text-gray-500">
                            18 new candidates applied for Product Manager position
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">5 hours ago</div>
                      </div>
                      <div className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                          <BarChart3 className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Analytics Updated</p>
                          <p className="text-xs text-gray-500">Monthly recruitment analytics report generated</p>
                        </div>
                        <div className="text-xs text-gray-500">Yesterday</div>
                      </div>
                      <div className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">New Job Posted</p>
                          <p className="text-xs text-gray-500">Senior UX Designer job posted and promoted</p>
                        </div>
                        <div className="text-xs text-gray-500">2 days ago</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="upcoming" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <div className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Interview Schedule</p>
                          <p className="text-xs text-gray-500">
                            5 interviews scheduled for Software Engineer candidates
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">Tomorrow</div>
                      </div>
                      <div className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Feedback Due</p>
                          <p className="text-xs text-gray-500">Feedback for 12 Marketing Specialist candidates due</p>
                        </div>
                        <div className="text-xs text-gray-500">In 2 days</div>
                      </div>
                      <div className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                          <Users className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Candidate Review</p>
                          <p className="text-xs text-gray-500">
                            Review shortlisted candidates for Product Manager role
                          </p>
                        </div>
                        <div className="text-xs text-gray-500">In 3 days</div>
                      </div>
                      <div className="flex items-center gap-4 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                          <BarChart3 className="h-5 w-5" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Monthly Report</p>
                          <p className="text-xs text-gray-500">Generate and review monthly recruitment metrics</p>
                        </div>
                        <div className="text-xs text-gray-500">Next week</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t bg-white">
        <div className="container mx-auto flex flex-col gap-2 py-4 text-center md:flex-row md:justify-between md:py-6 px-4 md:px-6">
          <p className="text-xs text-gray-500">© 2025 AI Recruiter. All rights reserved.</p>
          <p className="text-xs text-gray-500">
            <Link to="#" className="underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="#" className="underline underline-offset-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
