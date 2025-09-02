import React, { useState, useEffect } from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    useDroppable,
} from "@dnd-kit/core";
import type { DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import {
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
    useUpdateApplicationMutation,
    useGetApplicationsQuery,
} from "../redux/application/applicationApi";
import { EllipsisVertical } from "lucide-react";



// ---- Types ----
import type { Application } from "../redux/application/type-application";



// ---- Columns (must exactly match DB enum values) ----
const stages: Application["status"][] = [
    "applied",
    "interview",
    "hired",
    "rejected",
];



// ---- Modal ----
function Modal({
    app,
    onClose,
}: {
    app: Application | null;
    onClose: () => void;
}) {
    if (!app) return null;
    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
            {/* Modal container */}
            <div className="bg-[#E7F1FA] rounded-3xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center gap-3 p-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold bg-[#39D4DF] text-gray-700">
                        {app?.candidate?.name?.charAt(0).toUpperCase() || " "}
                    </div>
                    <div>
                        <p className="font-semibold">
                            {app?.candidate?.name || " "}
                        </p>
                        <p className="text-sm text-[#767676]">
                            {app?.candidate?.contactInfo?.email || " "}
                        </p>
                        <p className="text-xs text-[#767676]">
                            {app?.candidate?.contactInfo?.phone || " "}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between px-6">
                    <div>
                        <p className="text-sm text-[#767676]">Applied</p>
                        <p>{app?.appliedAt ? app.appliedAt.split("T")[0] : " "}</p>
                    </div>

                    <div>
                        <p className="text-sm text-[#767676]">Job Role</p>
                        <p>{app?.candidate?.workExperience?.[0]?.title || " "}</p>
                    </div>

                    <button
                        className="px-4 py-2 rounded-lg bg-[#1370C8] text-[#FFFFFF]"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

                {/* Status Tabs */}
                <div className="flex justify-between px-6 py-3 text-sm font-medium text-gray-600">
                    {["Applied", "Interview", "Rejected", "Hired"].map((tab, i) => (
                        <div
                            key={i}
                            className={`flex-1 text-center py-1 capitalize ${app?.status?.toLowerCase() === tab.toLowerCase()
                                    ? "bg-[#39D4DF] text-black"
                                    : "text-[#8F8F8F] bg-[#BBBBBB]/30"
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-3 gap-6 p-6">
                    {/* Left column */}
                    <div className="col-span-2 space-y-4 bg-white p-3 rounded-lg">
                        <div>
                            <div className="flex items-center w-fit px-2 py-2 gap-2 rounded-lg bg-[#E2E8F0] font-semibold text-sm">
                                <p className="px-2 py-2 gap-2 rounded-lg bg-[#1370C8] text-[#FFFFFF] z-10">
                                    Original Resume
                                </p>
                                <p>Parsed Resume</p>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">{app?.candidate?.name || " "}</p>
                            <p className="text-sm">
                                {app?.candidate?.workExperience?.[0]?.title || " "}
                            </p>
                            <p className="text-sm">{app?.candidate?.location || " "}</p>
                            <p className="text-sm text-[#1370C8]">
                                {app?.candidate?.contactInfo?.email || " "}
                            </p>
                            <p className="text-sm">{app?.candidate?.contactInfo?.phone || " "}</p>
                            <p className="text-sm">{app?.candidate?.contactInfo?.linkedIn || " "}</p>
                            <p className="text-sm">{app?.candidate?.contactInfo?.portfolio || " "}</p>
                        </div>

                        {/* Summary */}
                        {app?.candidate?.summary ? (
                            <div>
                                <h3 className="font-semibold mb-2">Professional Summary</h3>
                                <p className="text-sm text-gray-600 whitespace-pre-line">
                                    {app.candidate.summary}
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500"> </p>
                        )}

                        {/* Work Experience */}
                        {app?.candidate?.workExperience?.length > 0 ? (
                            <div>
                                <h3 className="font-semibold mb-2">Work Experience</h3>
                                {app.candidate.workExperience.map((exp: any, idx: number) => (
                                    <div key={idx} className="mb-3">
                                        <p className="text-sm font-medium">
                                            {exp.title || " "} – {exp.company || " "}
                                        </p>
                                        <p className="text-xs text-gray-500">{exp.duration || " "}</p>
                                        <p className="text-sm text-gray-600 whitespace-pre-line">
                                            {exp.description || " "}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500"> </p>
                        )}

                        {/* Education */}
                        {app?.candidate?.education?.length > 0 ? (
                            <div>
                                <h3 className="font-semibold mb-2">Education</h3>
                                {app.candidate.education.map((edu: any, idx: number) => (
                                    <p key={idx} className="text-sm text-gray-600">
                                        {edu.degree || " "} in {edu.fieldOfStudy || " "} –{" "}
                                        {edu.institution || " "} ({edu.graduationYear || " "})
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500"> </p>
                        )}
                    </div>

                    {/* Right column */}
                    <div className="space-y-4">
                        {/* Attachments */}
                        <div className="p-4 border rounded-lg bg-white">
                            <h3 className="font-semibold mb-2">Attachments</h3>
                            <ul className="text-sm text-blue-600 space-y-1">
                                <li>📄 Resume</li>
                            </ul>
                        </div>

                        {/* Skills */}
                        {app?.candidate?.skills?.length > 0 ? (
                            <div className="p-4 border rounded-lg bg-white">
                                <h3 className="font-semibold mb-2">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {app.candidate.skills.map((skill: string, idx: number) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                                        >
                                            {skill || " "}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500"> </p>
                        )}

                        {/* Notes */}
                        <div className="p-4 border rounded-lg bg-white">
                            <h3 className="font-semibold mb-2">Notes</h3>
                            <textarea
                                defaultValue={app?.notes || " "}
                                placeholder="Add notes"
                                className="w-full border rounded-md p-2 text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t bg-gray-50 flex justify-between">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
                        Send personalized mail
                    </button>
                    <button
                        className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>

    );
}




// ---- Column (Droppable) ----
function DroppableColumn({
    stage,
    count,
    children,
}: {
    stage: string;
    count: number;
    children: React.ReactNode;
}) {
    const { setNodeRef, isOver } = useDroppable({ id: stage });

    // 🎨 Assign different border colors per stage
    const stageColors: Record<string, string> = {
        applied: "border-blue-500",
        interview: "border-yellow-500",
        hired: "border-green-500",
        rejected: "border-red-500",
    };

    const borderColor = stageColors[stage] || "border-gray-500";

    return (
        <div
            ref={setNodeRef}
            className={`p-4 rounded shadow min-h-[200px] transition-colors border-t-8 rounded-2xl ${borderColor} ${isOver ? "bg-gray-100" : "bg-white"
                }`}
        >
            <div className="flex items-center justify-between">
                <h2 className="font-medium mb-2 capitalize flex  items-center gap-4">
                    {stage}
                    <span className="text-sm  ">
                        {count}
                    </span>
                </h2>
                <EllipsisVertical />
            </div>

            {children}
        </div>
    );
}


// ---- Card (Sortable + Clickable) ----
function ApplicationCard({
    app,
    onClick,
}: {
    app: Application;
    onClick: (app: Application) => void;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: app.id.toString() });

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.6 : 1,
    };

    // console.log(app?.job.applicants[0].name)

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="p-3 bg-white rounded shadow mb-2 cursor-default select-none"
            onClick={() => onClick(app)} // open modal on click
        >
            <div className="flex items-start justify-between">
                {/* <p className="font-semibold">ID: {app.id}</p> */}



                <div className="flex  flex-col items-center ">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-700">
                            {app.candidate.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p className="text-sm">{app.candidate.name}</p>
                            <p className="text-[#2E5C87] text-xs">View Profile</p>

                        </div>
                    </div>



                </div>

                {/* DRAG HANDLE ONLY — listeners/attributes go HERE, not on the whole card */}
                <button
                    className="px-2 py-1 rounded border text-xs cursor-grab active:cursor-grabbing"
                    {...listeners}
                    {...attributes}
                    onClick={(e) => e.stopPropagation()} // don't open modal when grabbing
                >
                    ⇅
                </button>
            </div>
            {/* <p className="text-sm">Status: {app.status}</p> */}
        </div>
    );
}

// ---- Main Board ----
export default function ApplicationsBoard() {
    const { data: applicationsData, isLoading } = useGetApplicationsQuery();
    const [applications, setApplications] = useState<Application[]>([]);
    const [updateApplication, { isLoading: isSaving }] =
        useUpdateApplicationMutation();

    const [selectedApp, setSelectedApp] = useState<Application | null>(null);

    // Load from API
    useEffect(() => {
        if (applicationsData) {
            setApplications(applicationsData as Application[]);
        }
    }, [applicationsData]);

    // Activation constraint prevents small clicks from starting a drag
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 8 }, // start dragging after 8px movement
        })
    );

    // Helper: get target stage even if dropping on top of another card
    const getStageFromOver = (
        overId: UniqueIdentifier
    ): Application["status"] | null => {
        const idStr = String(overId);

        if (stages.includes(idStr as Application["status"])) {
            return idStr as Application["status"];
        }

        const overCardId = Number(idStr);
        const overCard = applications.find((a) => a.id === overCardId);
        return overCard?.status ?? null;
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;

        const draggedId = Number(active.id);
        const newStage = getStageFromOver(over.id);

        if (!newStage) return;

        const draggedApp = applications.find((a) => a.id === draggedId);
        if (!draggedApp || draggedApp.status === newStage) return;

        // Optimistic update
        setApplications((prev) =>
            prev.map((app) =>
                app.id === draggedId ? { ...app, status: newStage } : app
            )
        );

        try {
            await updateApplication({ id: draggedId, status: newStage }).unwrap();
        } catch (err) {
            console.error("Update failed", err);
            // Rollback on failure
            setApplications((prev) =>
                prev.map((app) =>
                    app.id === draggedId ? { ...app, status: draggedApp.status } : app
                )
            );
        }
    };

    return (
        <>
            {/* saving badge */}
            {isSaving && (
                <div className="fixed top-4 right-4 z-50 px-3 py-1 rounded bg-yellow-100 text-yellow-800 text-sm shadow">
                    Saving…
                </div>
            )}

            {isLoading ? (
                <p>Loading applications…</p>
            ) : (
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <div className="grid grid-cols-4 gap-4">
                        {stages.map((stage) => {
                            const stageApps = applications.filter(
                                (app) => app.status === stage
                            );
                            return (
                                <DroppableColumn
                                    key={stage}
                                    stage={stage}
                                    count={stageApps.length} // ✅ fixed count
                                >
                                    <SortableContext
                                        items={stageApps.map((a) =>
                                            a.id.toString()
                                        )}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {stageApps.map((app) => (
                                            <ApplicationCard
                                                key={app.id}
                                                app={app}
                                                onClick={setSelectedApp}
                                            />
                                        ))}
                                    </SortableContext>
                                </DroppableColumn>
                            );
                        })}
                    </div>
                </DndContext>
            )}

            {/* Modal */}
            <Modal app={selectedApp} onClose={() => setSelectedApp(null)} />
        </>
    );
}
