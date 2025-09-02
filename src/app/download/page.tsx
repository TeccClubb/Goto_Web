import DownloadVPN from "@/components/download/DownloadVPN";
import HowToInstallVPN from "@/components/download/HowToInstallVPN";
import DownloadSection from "@/components/DownloadSection";
import FAQSection from "@/components/FAQSection";



export default function DownloadPage(){
    
    return <div>
        <DownloadVPN></DownloadVPN>
        <DownloadSection></DownloadSection>
        <HowToInstallVPN></HowToInstallVPN>
        <FAQSection></FAQSection>
    </div>
}