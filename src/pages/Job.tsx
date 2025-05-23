// import React from 'react';
import { Link } from "react-router-dom"
import { ArrowLeft, FileText, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

export default function Job() {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 bg-gray-50">
          <div className="container mx-auto px-4 py-6 md:px-6 md:py-8">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/dashboard" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Dashboard
              </Link>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Job Description</CardTitle>
                    <CardDescription>Enter or upload the job description to match candidates against</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Job Title</Label>
                        <Input id="job-title" placeholder="e.g. Senior Software Engineer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="job-description">Job Description</Label>
                        <Textarea
                          id="job-description"
                          placeholder="Enter the full job description here..."
                          className="min-h-[200px]"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Button variant="outline" className="flex items-center gap-2">
                          <Upload className="h-4 w-4" />
                          Upload JD File
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">Save Job Description</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Candidate Resumes</CardTitle>
                    <CardDescription>Upload candidate resumes to match against the job description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border-2 border-dashed border-gray-200 p-6 text-center">
                        <div className="mx-auto flex max-w-[180px] flex-col items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <FileText className="h-8 w-8" />
                          </div>
                          <h3 className="mt-4 text-lg font-semibold">Upload Resumes</h3>
                          <p className="mt-2 text-sm text-gray-500">Drag and drop resume files or click to browse</p>
                          <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Select Files</Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">Uploaded Resumes (3)</span>
                          <Button variant="ghost" size="sm" className="h-auto p-0 text-blue-600">
                            Clear All
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between rounded-md border bg-white p-2 text-sm">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-gray-500" />
                              <span>john_smith_resume.pdf</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              &times;
                            </Button>
                          </div>
                          <div className="flex items-center justify-between rounded-md border bg-white p-2 text-sm">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-gray-500" />
                              <span>sarah_johnson_cv.pdf</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              &times;
                            </Button>
                          </div>
                          <div className="flex items-center justify-between rounded-md border bg-white p-2 text-sm">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-gray-500" />
                              <span>michael_chen_resume.docx</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              &times;
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Match Candidates</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Match Results</CardTitle>
                  <CardDescription>
                    AI-powered matching results based on skills, experience, and qualifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <span className="text-sm font-bold">JS</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">John Smith</h4>
                            <p className="text-xs text-gray-500">Senior Developer with 8 years experience</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-blue-600">92% Match</div>
                          <p className="text-xs text-gray-500">Top candidate</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Match Score</span>
                          <span>92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div>
                            <h5 className="text-xs font-medium">Key Strengths</h5>
                            <ul className="mt-1 text-xs text-gray-500">
                              <li>• 8+ years React.js experience</li>
                              <li>• Strong system architecture skills</li>
                              <li>• Team leadership experience</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-medium">Areas for Consideration</h5>
                            <ul className="mt-1 text-xs text-gray-500">
                              <li>• Limited cloud infrastructure experience</li>
                              <li>• No mention of CI/CD pipelines</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <span className="text-sm font-bold">SJ</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Sarah Johnson</h4>
                            <p className="text-xs text-gray-500">Full Stack Engineer with cloud expertise</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-blue-600">87% Match</div>
                          <p className="text-xs text-gray-500">Strong candidate</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Match Score</span>
                          <span>87%</span>
                        </div>
                        <Progress value={87} className="h-2" />
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div>
                            <h5 className="text-xs font-medium">Key Strengths</h5>
                            <ul className="mt-1 text-xs text-gray-500">
                              <li>• Strong AWS cloud experience</li>
                              <li>• Full stack development skills</li>
                              <li>• CI/CD pipeline expertise</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-medium">Areas for Consideration</h5>
                            <ul className="mt-1 text-xs text-gray-500">
                              <li>• 5 years experience (less than required)</li>
                              <li>• Limited team leadership experience</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <span className="text-sm font-bold">MC</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Michael Chen</h4>
                            <p className="text-xs text-gray-500">Backend Developer with microservices focus</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-blue-600">74% Match</div>
                          <p className="text-xs text-gray-500">Potential candidate</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Match Score</span>
                          <span>74%</span>
                        </div>
                        <Progress value={74} className="h-2" />
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div>
                            <h5 className="text-xs font-medium">Key Strengths</h5>
                            <ul className="mt-1 text-xs text-gray-500">
                              <li>• Strong backend architecture skills</li>
                              <li>• Microservices expertise</li>
                              <li>• Database optimization experience</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-medium">Areas for Consideration</h5>
                            <ul className="mt-1 text-xs text-gray-500">
                              <li>• Limited frontend experience</li>
                              <li>• No React.js experience mentioned</li>
                              <li>• Different industry background</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline">Export Results</Button>
                      <Button className="bg-blue-600 hover:bg-blue-700">Send Feedback Emails</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
    </div>
  )
}

