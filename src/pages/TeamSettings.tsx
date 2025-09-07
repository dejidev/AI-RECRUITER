import React, { useState } from "react";

const TeamSettings: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"team" | "settings">("team");

    const members = [
        { name: "Sarah Johnson", role: "Recruiter" },
        { name: "David Kim", role: "Hiring Manager" },
        { name: "Abdulhameed Mustapha", role: "Admin" },
    ];

    return (
        <div className="p-6 space-y-6 bg-gray-50">
            <h1 className="text-3xl font-bold">Team & Settings</h1>

            {/* Tabs */}
            <div className="flex gap-4 border-b pb-2">
                <button
                    className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === "team"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                    onClick={() => setActiveTab("team")}
                >
                    Team
                </button>
                <button
                    className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === "settings"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                    onClick={() => setActiveTab("settings")}
                >
                    Settings
                </button>
            </div>

            {/* Content */}
            {activeTab === "team" && (
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-4">Team Members</h2>
                    <ul className="space-y-3">
                        {members.map((m, i) => (
                            <li
                                key={i}
                                className="flex items-center justify-between p-3 rounded-xl bg-gray-50"
                            >
                                <span>{m.name}</span>
                                <span className="text-sm text-gray-600">{m.role}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700">
                        Add New Member
                    </button>
                </div>
            )}

            {activeTab === "settings" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="text-lg font-semibold mb-2">Account</h2>
                        <p className="text-gray-600 mb-4">
                            Manage your personal account details and preferences.
                        </p>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow hover:bg-gray-900">
                            Edit Account
                        </button>
                    </div>
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="text-lg font-semibold mb-2">Preferences</h2>
                        <p className="text-gray-600 mb-4">
                            Configure notifications, themes, and accessibility options.
                        </p>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700">
                            Edit Preferences
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamSettings;
