import { ArrowRight, Users } from "lucide-react";
import { useGetApplicationsQuery } from "../redux/application/applicationApi";

/* ------------------------------------------------------------------
   Dynamic data – add / remove / modify cards here
------------------------------------------------------------------- */
const pipelineCards = [
    {
        stage: "Applied",
        flagged: 4,
        avgTime: "1.3 secs/resume",
        selected: 42,
        borderColor: "border-t-4 border-indigo-500",
        avatars: [
            "https://i.pravatar.cc/64?img=1",
            "https://i.pravatar.cc/64?img=2",
            "https://i.pravatar.cc/64?img=3",
            "https://i.pravatar.cc/64?img=4",
            "https://i.pravatar.cc/64?img=5",
        ],
    },
    {
        stage: "Screened",
        flagged: 2,
        avgTime: "0.9 secs/resume",
        selected: 18,
        borderColor: "border-t-4 border-fuchsia-500",
        avatars: [
            "https://i.pravatar.cc/64?img=6",
            "https://i.pravatar.cc/64?img=7",
            "https://i.pravatar.cc/64?img=8",
        ],
    },
    {
        stage: "Interview",
        flagged: 0,
        avgTime: "5 mins/candidate",
        selected: 5,
        borderColor: "border-t-4 border-emerald-500",
        avatars: [
            "https://i.pravatar.cc/64?img=9",
            "https://i.pravatar.cc/64?img=10",
        ],
    },
    {
        stage: "Offered",
        flagged: 0,
        avgTime: "—",
        selected: 2,
        borderColor: "border-t-4 border-amber-400",
        avatars: ["https://i.pravatar.cc/64?img=11"],
    },
];

/* ------------------------------------------------------------------
   Inline component – drop it anywhere in your page
------------------------------------------------------------------- */










const lapplication = {
    "status_code": 200,
    "status": "success",
    "data": [
        {
            "id": 2,
            "job": {
                "createdAt": "2025-08-24T16:08:47.136Z",
                "id": 12,
                "identifier": "947f786c-dbc8-4580-b197-36ebd791d568",
                "isActive": true,
                "isDeleted": false,
                "updatedAt": "2025-08-25T07:19:56.483Z",
                "jobTitle": "Frontend Developer",
                "jobDescription": "We are looking for a skilled Frontend Developer to build responsive web applications using React and TypeScript.",
                "category": "Software Development",
                "location": "Remote",
                "employmentType": "Full-time",
                "experienceLevel": "Mid-level",
                "deadline": "2025-09-30",
                "responsibilities": "Develop user interfaces, collaborate with backend team, ensure responsive design.",
                "requirements": "3+ years experience with React, TypeScript, HTML, CSS. Experience with REST APIs and Git.",
                "benefits": "Flexible working hours, Health insurance, Paid time off",
                "salaryMin": null,
                "salaryMax": null,
                "currency": "USD",
                "applicationLink": "http://localhost:8080/Interface/job/apply/65631eba-78b6-42e5-8c10-3c9fab209427",
                "applicants": [
                    {
                        "CandidateId": "20",
                        "applicationDate": "2025-08-25T08:20:09.577Z",
                        "experience": "",
                        "parsedText": "",
                        "name": "Arjay McCandless",
                        "title": "Software Engineer",
                        "workExperience": [
                            {
                                "title": "Software Engineer I, Software Engineer II",
                                "company": "Amazon",
                                "duration": "August 2023 - Present",
                                "startDate": "2023-08-01",
                                "current": true,
                                "description": "Designed and delivered a DynamoDB-based optimization for customer data access patterns, achieving a 100x reduction in read capacity usage and 65% latency reduction per query. Designed and implemented a RESTful API using AWS API Gateway and Lambda to support AWS Step Functions based workflows, enabling single-line infrastructure upgrades with 100% test coverage. Led a cross-team initiative to address critical data integrity issues in a network device management system, improving API schemas, purging invalid data, and migrating historical data to cold storage for long-term preservation. Created automated metrics dashboards using AWS CDK for multiple microservices, enabling rapid identification of usage patterns and API consumption trends. Implemented CloudWatch monitoring and alerting systems across multiple AWS Lambda services, reducing time-to-detection for production issues by 80%. Mentored 5 new team members and interns, accelerating their onboarding and helping them deliver successful projects ahead of schedule."
                            },
                            {
                                "title": "Software Development Intern",
                                "company": "Amazon",
                                "duration": "May 2022 - Aug 2022",
                                "startDate": "2022-05-01",
                                "endDate": "2022-08-01",
                                "description": "Designed, developed, and tested a microservice for modeling network devices leveraging API Gateway, AWS Neptune for graph data storage, and AWS Lambda for business logic, seamlessly integrating into a larger microservice architecture. Reduced latency of queries to view connected devices by 95% as compared to DynamoDB, while keeping costs of operation low by using serverless architecture with infinite scaling. Designed and implemented a scalable RESTful API backend in Kotlin, deploying infrastructure using AWS CDK to automate provisioning and ensure seamless integration with AWS services. Collaborated with network engineers to gather requirements and incorporate feedback throughout the design and development lifecycle, ensuring the final product aligned with customer needs and expectations."
                            },
                            {
                                "title": "Flight Software Engineering Intern",
                                "company": "Lockheed Martin",
                                "duration": "May 2021 - Aug 2021",
                                "startDate": "2021-05-01",
                                "endDate": "2021-08-01",
                                "description": "Developed tools to streamline the software development processes, including automated deployment and testing utilities for Linux environments written in bash, improving developer productivity and reducing manual overhead. Designed and enhanced GitLab CI/CD pipelines to automatically trigger test suites on code pushes and merges, significantly reducing manual testing time and accelerating release cycles. Created reusable python scripts and automation processes to handle common developer tasks such as Docker image creation and system data pruning, leveraging Jenkins and GitLab CI/CD Contributed to an agile development team using Jira, completing development stories on par with full-time engineers while participating in sprint planning, stand-ups, and retrospectives. Delivered an intern case study presentation to a panel of directors, advancing to the semifinals and demonstrating strong communication and presentation skills."
                            }
                        ],
                        "education": {
                            "degree": "B.S.",
                            "institution": "University of Wisconsin-Madison",
                            "graduationYear": 2023,
                            "fieldOfStudy": "Computer Sciences & Economics"
                        },
                        "contactInfo": {
                            "email": "arjaymccandless@gmail.com",
                            "phone": "(408) 355-8921",
                            "address": {
                                "city": "Austin",
                                "state": "TX",
                                "country": "USA"
                            }
                        },
                        "skills": [
                            "Kotlin",
                            "Python",
                            "Bash",
                            "AWS DynamoDB",
                            "Lambda",
                            "API Gateway",
                            "Step Functions",
                            "CloudWatch",
                            "Neptune",
                            "S3",
                            "AWS CDK",
                            "GitLab CI/CD",
                            "Jenkins",
                            "Git",
                            "Docker"
                        ],
                        "yearsOfExperience": 1.5,
                        "languages": [],
                        "certifications": [],
                        "matchScore": 25,
                        "keyStrengths": [
                            "Backend Development",
                            "Cloud Architecture",
                            "System Design",
                            "API Development"
                        ],
                        "areasForConsideration": [
                            "Limited Frontend Experience",
                            "Lack of React/TypeScript experience"
                        ],
                        "summary": "Arjay is a skilled backend engineer with expertise in cloud architecture and system design. However, he lacks the required frontend experience with React and TypeScript for this Frontend Developer position.",
                        "candidateId": "20"
                    },
                    {
                        "CandidateId": "21",
                        "applicationDate": "2025-08-25T08:20:09.577Z",
                        "experience": "",
                        "parsedText": "",
                        "name": "Abdulhameed Mustapha",
                        "title": null,
                        "workExperience": [],
                        "education": {
                            "degree": "B.Sc",
                            "institution": "University of Ilorin",
                            "graduationYear": 2025,
                            "fieldOfStudy": "Computer Science"
                        },
                        "contactInfo": {
                            "email": "devabdultech@gmail.com",
                            "phone": "+234812-870-0930",
                            "portfolio": "abdultech.me",
                            "github": "devabdultech"
                        },
                        "skills": [
                            "Python",
                            "Javascript",
                            "Typescript",
                            "Java",
                            "ReactJS",
                            "NextJS",
                            "Svelte",
                            "SvelteKit",
                            "TailwindCSS",
                            "Node.js",
                            "Express.js",
                            "FastAPI",
                            "Flask",
                            "MongoDB",
                            "Firebase",
                            "Supabase",
                            "SQL",
                            "PostgreSQL",
                            "Redis",
                            "Git",
                            "GitHub",
                            "Vite",
                            "Bun",
                            "Docker",
                            "Kubernetes",
                            "Turborepo",
                            "ReactNative"
                        ],
                        "yearsOfExperience": 0,
                        "languages": [],
                        "certifications": [],
                        "matchScore": 70,
                        "keyStrengths": [
                            "Frontend Development (React, Next.js, Svelte)",
                            "TypeScript Proficiency",
                            "Full-Stack Capabilities",
                            "Modern Framework Experience (TailwindCSS)"
                        ],
                        "areasForConsideration": [
                            "Limited professional experience (still in school)",
                            "Experience level with React and TypeScript needs validation"
                        ],
                        "summary": "Abdulhameed demonstrates solid skills in frontend development, particularly with React, TypeScript, and related technologies. His project portfolio showcases his abilities. His lack of formal work experience needs consideration.",
                        "candidateId": "21"
                    },
                    {
                        "CandidateId": "22",
                        "applicationDate": "2025-08-25T08:20:09.577Z",
                        "experience": "",
                        "parsedText": "",
                        "name": "Abdulmateen Alabi",
                        "title": null,
                        "workExperience": [],
                        "education": {
                            "degree": "B.SC",
                            "institution": "University of Ilorin",
                            "fieldOfStudy": "COMPUTER SCIENCE"
                        },
                        "contactInfo": {
                            "email": "alabiabdulmateen94@gmail.com",
                            "phone": "+234816-992-5128",
                            "github": "AbdulmateenAl"
                        },
                        "skills": [
                            "Python",
                            "JavaScript",
                            "Java",
                            "C",
                            "Astro",
                            "ReactJS",
                            "NextJS",
                            "Tailwind CSS",
                            "Fast API",
                            "Flask",
                            "Django",
                            "Nodejs",
                            "Firebase",
                            "Supabase",
                            "MySQL",
                            "PostgreSQL",
                            "Mongodb",
                            "Prisma",
                            "Git",
                            "GitHub",
                            "Vite"
                        ],
                        "yearsOfExperience": 0,
                        "languages": [],
                        "certifications": [],
                        "matchScore": 65,
                        "keyStrengths": [
                            "Frontend Development (React, Next.js)",
                            "Tailwind CSS Experience",
                            "Full-Stack Project Experience"
                        ],
                        "areasForConsideration": [
                            "No mention of TypeScript",
                            "Lack of professional experience",
                            "Experience level may need validation"
                        ],
                        "summary": "Abdulmateen possesses a good foundation in frontend technologies, including React and Next.js, and has built full-stack projects. The lack of TypeScript experience and the absence of professional experience are points to consider.",
                        "candidateId": "22"
                    }
                ]
            },
            "status": "interview",
            "notes": null,
            "appliedAt": "2025-08-24T18:01:06.217Z",
            "updatedAt": "2025-08-24T22:43:51.830Z"
        }


    ]
}


export default function PipelineCardsGrid() {

    const { data: applications, isLoading: applicationsloading } = useGetApplicationsQuery();

    // console.log(lapplication?.data)


    return (
        <div className="w-1/2">
            <div className="flex justify-between mb-8 font-semibold">
                <p>Candidate Pipeline</p>
                <div className="flex gap-2 items-center text-xs">
                    <p>View All</p>
                    <ArrowRight />
                </div>
            </div>

            <div>
                <div className="">
                    {pipelineCards.map(
                        ({ stage, flagged, avgTime, selected, borderColor, avatars }) => (
                            <div
                                key={stage}
                                className={`bg-white shadow rounded-lg p-6 flex flex-col gap-4 mb-3 ${borderColor}`}
                            >
                                {/* Top row --------------------------------------------------- */}
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-1">
                                        <span className="font-medium text-gray-700">{stage}</span>
                                        {flagged > 0 && (
                                            <span className="text-xs text-red-600 font-semibold">
                                                ({flagged} flagged)
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm">⏱ {avgTime}</p>
                                </div>

                                {/* Selected count ------------------------------------------- */}
                                <div className="flex items-center text-xl font-bold text-gray-700">
                                    {selected} selected
                                </div>

                                {/* Avatars + button ----------------------------------------- */}
                                <div className="flex items-center justify-between">
                                    <div className="flex -space-x-3">
                                        {avatars.slice(0, 5).map((src, i) => (
                                            <img
                                                key={i}
                                                src={src}
                                                alt=""
                                                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                            />
                                        ))}
                                        {avatars.length > 5 && (
                                            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 border-2 border-white">
                                                +{avatars.length - 5}
                                            </span>
                                        )}
                                    </div>

                                    <button className="px-3 py-1.5 text-xs text-[#1370C8] hover:text-[#0f5ca7]">
                                        View Candidates
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>        </div>
        </div>

    );
}
