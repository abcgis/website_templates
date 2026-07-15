import Link from "next/link";
import { CheckIcon } from "@/components/icons";

interface PricingPlan {
  title: string;
  amount: string;
  features: string[];
  buttonVariant: "primary" | "outline";
  featured?: boolean;
  badge?: string;
  aosDelay?: number;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Basic",
    amount: "350",
    features: [
      "1 hour session",
      "20 edited photos",
      "Digital gallery",
      "Basic retouching",
      "7-day delivery",
    ],
    buttonVariant: "outline",
  },
  {
    title: "Standard",
    amount: "650",
    features: [
      "2 hour session",
      "50 edited photos",
      "Digital gallery",
      "Advanced retouching",
      "5-day delivery",
      "2 locations",
    ],
    buttonVariant: "primary",
    featured: true,
    badge: "Most Popular",
    aosDelay: 100,
  },
  {
    title: "Premium",
    amount: "1,200",
    features: [
      "4 hour session",
      "100+ edited photos",
      "Digital gallery",
      "Premium retouching",
      "3-day delivery",
      "Unlimited locations",
      "Print package",
    ],
    buttonVariant: "outline",
    aosDelay: 200,
  },
];

/**
 * Pricing plans section with three tiers (Basic, Standard, Premium). The
 * Standard plan is featured with a "Most Popular" badge. All currency is `$`
 * and the period is `/session`, matching the source.
 */
export function PricingPlans() {
  return (
    <section className="pricing-section" data-aos="fade-up">
      <h2 className="section-title">Pricing Plans</h2>
      <p className="section-description">
        Choose the perfect package for your photography needs
      </p>

      <div className="pricing-grid">
        {PRICING_PLANS.map((plan) => {
          const buttonClass =
            plan.buttonVariant === "primary"
              ? "btn btn-primary"
              : "btn btn-outline";
          return (
            <div
              key={plan.title}
              className={`pricing-card${plan.featured ? " featured" : ""}`}
              data-aos="fade-up"
              data-aos-delay={plan.aosDelay}
            >
              {plan.badge ? (
                <div className="pricing-badge">{plan.badge}</div>
              ) : null}
              <div className="pricing-header">
                <h3 className="pricing-title">{plan.title}</h3>
                <div className="pricing-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">{plan.amount}</span>
                  <span className="price-period">/session</span>
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon /> {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact-me" className={buttonClass}>
                Get Started
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
