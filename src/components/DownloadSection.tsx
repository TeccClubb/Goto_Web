import Section from "./ui/Section";
import { FaWindows, FaApple, FaAndroid } from "react-icons/fa";


const platforms = [
    {
        name: "Windows",
        description: "Download for PC",
        icon: <FaWindows className="w-8 h-8 text-blue-600" />,
    },
    {
        name: "macOS",
        description: "Download for Mac",
        icon: <FaApple className="w-8 h-8 text-gray-800" />,
    },
    {
        name: "Android",
        description: "Google Play",
        icon: <FaAndroid className="w-8 h-8 text-green-600" />,
    },
    {
        name: "iOS",
        description: "App Store",
        icon: <FaApple className="w-8 h-8 text-gray-800" />,
    },
];
export default function DownloadSection() {
    return (
        <Section heading="Download GotoVPN" paragraph=" Get our app for all your devices and  stay protected  everywhere you go." className="bg-gray-100">
            <div className="grid w-full max-w-4xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center px-4">
                {/* your grid items */}

                {platforms.map((platform, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm p-8  hover:shadow-md transition w-50"
                    >
                        {platform.icon}
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                            {platform.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{platform.description}</p>
                    </div>
                ))}
            </div>


        </Section>

    )
}