import Section from "../ui/Section";
import PricingCard from "../ui/PricingCard";
import { fetchPlans } from "@/lib/fetchPlans";

export default async function PricingPlans() {
  const {plans} = await fetchPlans()
  return (
    <Section heading="Choose Your Plan" paragraph="Start with our 30-day money-back guarantee">

      {/* Pricing Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </Section>
  );
}
