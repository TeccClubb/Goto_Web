 
import PricingCard from "@/components/ui/PricingCard";
import Section from "@/components/ui/Section";
import PricingFeatures from "@/components/pricingPageSections/features";
import FAQSection from "@/components/Landingpage/FAQSection";
import { fetchPlans } from "@/lib/fetchPlans";

export default async function Pricing() {
    const { plans } = await fetchPlans()
    return <div>
        <Section heading="Choose Your Plan" paragraph="All plans include the  same  premium  features with military-grade encryption, unlimited bandwidth,and access to all server locations worldwide" className="bg-gray-50">
            <div className="flex justify-center gap-5 mb-8">
                <div>
                    <button className="px-5 py-3  bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-600 rounded-full border-gray-200 text-white hover:from-violet-600 font-semibold hover:via-indigo-700 hover:to-blue-800 text-sm md:inline-block hidden transition">
                        Get Started Free
                    </button>
                </div>
                <button className="px-5 py-2 border border-purple-600 text-black rounded-full hover:bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-600 hover:text-white font-semibold transition">
                    Download Now
                </button>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan, idx) => (
                    <PricingCard key={idx} plan={plan} />
                ))}
            </div>
        </Section>
        <PricingFeatures></PricingFeatures>
        <FAQSection></FAQSection>
    </div>
}