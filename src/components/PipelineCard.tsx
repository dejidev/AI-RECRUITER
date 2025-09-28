import { ArrowRight } from "lucide-react";
// import { useGetApplicationsQuery } from "../redux/application/applicationApi";

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



export default function PipelineCardsGrid() {

    // const { data: applications, isLoading: applicationsloading } = useGetApplicationsQuery();

    // console.log(lapplication?.data)


    return (
        <div className="">
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
