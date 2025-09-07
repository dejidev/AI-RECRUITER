import React from "react";

const Communication: React.FC = () => {
    return (
        <div className="p-6 space-y-6 bg-gray-50">
            <h1 className="text-3xl font-bold">Communication</h1>

            {/* Overview cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-2">Messages</h2>
                    <p className="text-gray-600 mb-4">
                        Manage your conversations with applicants and team members.
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700">
                        Open Inbox
                    </button>
                </div>
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-2">Notifications</h2>
                    <p className="text-gray-600 mb-4">
                        View updates and alerts related to your hiring activities.
                    </p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700">
                        View Notifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Communication;
