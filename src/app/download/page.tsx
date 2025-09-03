import DownloadVPN from "@/components/DownloadPageSections/DownloadVPN";
import HowToInstallVPN from "@/components/DownloadPageSections/HowToInstallVPN";
import DownloadSection from "@/components/Landingpage/DownloadSection";
import FAQSection from "@/components/Landingpage/FAQSection";



export default function DownloadPage(){
    
    return <div>
        <DownloadVPN></DownloadVPN>
        <DownloadSection></DownloadSection>
        <HowToInstallVPN></HowToInstallVPN>
        <FAQSection></FAQSection>
    </div>
}