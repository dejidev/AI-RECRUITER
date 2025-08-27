import { useState } from "react";
import { useAuth } from "../context/useAuth";

const SignOutButton = () => {
    const { signOut } = useAuth();
    const [open, setOpen] = useState(false);

    const handleConfirm = () => {
        signOut(); // clear auth
        setOpen(false);
    };

    return (
        <>
            {/* Trigger */}
            <button
                onClick={() => setOpen(true)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
                Sign Out
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
                        <h2 className="text-lg font-semibold mb-2">Are you sure?</h2>
                        <p className="text-gray-600 mb-4">
                            This will log you out of your account.
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                            >
                                Yes, Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignOutButton;
