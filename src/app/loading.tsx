export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-opacity-75"></div>
                <p className="text-black mt-4 text-lg">Loading...</p>
            </div>
        </div>
    )

}