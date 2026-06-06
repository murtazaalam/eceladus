"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./renewable.module.css";

// MUI Icons
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BoltIcon from "@mui/icons-material/Bolt";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SavingsIcon from "@mui/icons-material/Savings";
import Co2Icon from "@mui/icons-material/Co2";
import SpeedIcon from "@mui/icons-material/Speed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import RouterIcon from "@mui/icons-material/Router";

/* ─────────────────── DATA ─────────────────── */

const stats = [
  { icon: <SolarPowerIcon />, value: "1000+", label: "Installations Done" },
  { icon: <ElectricBoltIcon />, value: "4 MW+", label: "Capacity Deployed" },
  { icon: <VerifiedIcon />, value: "2 yr", label: "Performance Warranty" },
  { icon: <AccountBalanceIcon />, value: "100%", label: "Subsidy Assistance" },
];

const products = [
  {
    badge: "Most Popular",
    badgeColor: "green",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    title: "Poly-crystalline Panel",
    segment: "Residential",
    segmentIcon: <HomeIcon sx={{ fontSize: 14 }} />,
    specs: [
      { label: "Wattage", value: "300W – 400W" },
      { label: "Efficiency", value: "16–18%" },
      { label: "Warranty", value: "25 Years" },
      { label: "Price/Panel", value: "₹8,500 – ₹12,000" },
    ],
    features: [
      "Low cost, high value solution",
      "Performs well in indirect sunlight",
      "Ideal for budget-conscious homes",
      "Easy & fast installation",
    ],
  },
  {
    badge: "Best Efficiency",
    badgeColor: "indigo",
    img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800&auto=format&fit=crop",
    title: "Mono-PERC Panel",
    segment: "Commercial",
    segmentIcon: <BusinessIcon sx={{ fontSize: 14 }} />,
    specs: [
      { label: "Wattage", value: "400W – 550W" },
      { label: "Efficiency", value: "20–22%" },
      { label: "Warranty", value: "25 Years" },
      { label: "Price/Panel", value: "₹14,000 – ₹22,000" },
    ],
    features: [
      "Higher power in smaller area",
      "Better low-light performance",
      "Ideal for commercial rooftops",
      "Tier-1 grade certified panels",
    ],
  },
  {
    badge: "Premium Grade",
    badgeColor: "amber",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
    title: "Bifacial Solar Module",
    segment: "Industrial",
    segmentIcon: <FactoryIcon sx={{ fontSize: 14 }} />,
    specs: [
      { label: "Wattage", value: "500W – 700W" },
      { label: "Efficiency", value: "22–24%" },
      { label: "Warranty", value: "30 Years" },
      { label: "Price/Panel", value: "₹25,000 – ₹42,000" },
    ],
    features: [
      "Captures light from both sides",
      "Maximum power generation",
      "Ideal for ground-mounted plants",
      "Industrial standard grade",
    ],
  },
];

const inverters = [
  {
    title: "String Inverter",
    brand: "Havells / Solis",
    rating: "3kW – 10kW",
    price: "₹12,000 – ₹45,000",
    icon: <BoltIcon />,
  },
  {
    title: "Micro Inverter",
    brand: "Enphase / ABB",
    rating: "250W – 1500W",
    price: "₹3,500 – ₹18,000",
    icon: <RouterIcon />,
  },
  {
    title: "Hybrid Inverter",
    brand: "Luminous / Goodwe",
    rating: "5kW – 20kW",
    price: "₹35,000 – ₹1,20,000",
    icon: <SpeedIcon />,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Site Survey",
    desc: "Certified engineers visit your site, assess shadow zones, roof structure, and energy consumption to design the optimal system.",
    icon: <LocationOnIcon />,
  },
  {
    step: "02",
    title: "Custom System Design",
    desc: "Tailored solar layout with 3D CAD models specifying panel count, inverter type, wiring, and mounting structure.",
    icon: <SolarPowerIcon />,
  },
  {
    step: "03",
    title: "Govt. Approvals",
    desc: "We handle all DISCOMS applications, net-metering registrations, and PM Surya Ghar subsidy paperwork end-to-end.",
    icon: <AccountBalanceIcon />,
  },
  {
    step: "04",
    title: "Professional Install",
    desc: "MNRE-certified technicians install your system with precision. Typical residential installation is completed in 1–2 days.",
    icon: <VerifiedIcon />,
  },
  {
    step: "05",
    title: "Net Meter Setup",
    desc: "We connect your system to the grid with a net meter so you earn credits for excess electricity exported back.",
    icon: <ElectricBoltIcon />,
  },
  {
    step: "06",
    title: "Remote Monitoring",
    desc: "Our mobile app lets you track real-time power generation, consumption, savings, and CO₂ offset from anywhere.",
    icon: <RouterIcon />,
  },
];

const subsidySlabs = [
  {
    size: "Up to 2 kW",
    rate: "₹30,000 per kW",
    amount: "₹60,000",
    popular: false,
  },
  {
    size: "2 kW to 3 kW",
    rate: "₹18,000 per kW (extra)",
    amount: "₹80,000 total",
    popular: false,
  },
  {
    size: "Above 3 kW",
    rate: "Fixed upper limit",
    amount: "₹78,000 max",
    popular: true,
  },
];

const banks = [
  {
    name: "State Bank of India",
    scheme: "PM Surya Ghar Loan",
    rate: "6.75% p.a.",
    tenure: "Up to 10 years",
    color: "#1a56db",
  },
  {
    name: "Bank of Baroda",
    scheme: "Solar Power Loan",
    rate: "7.25% p.a.",
    tenure: "Up to 7 years",
    color: "#f97316",
  },
  {
    name: "IREDA / NBFCs",
    scheme: "Green Energy Finance",
    rate: "8–10% p.a.",
    tenure: "Up to 15 years",
    color: "#10b981",
  },
];

const roiYears = [
  { year: "Year 1", annual: "₹18k–₹24k", total: "₹21,000", breakeven: false },
  { year: "Year 2", annual: "₹18k–₹24k", total: "₹42,000", breakeven: false },
  { year: "Year 3", annual: "₹18k–₹24k", total: "₹63,000", breakeven: false },
  { year: "Year 4", annual: "₹18k–₹24k", total: "₹84,000+", breakeven: true },
];

const testimonials = [
  {
    name: "Ramesh Prasad",
    role: "Homeowner, Patna",
    text: "Eceladdus Enllave Group handled everything — from subsidy paperwork to installation. My electricity bill dropped from ₹3,200 to nearly zero in just one month.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    role: "Principal, Govt. School, Gaya",
    text: "The school now runs entirely on solar power. The team was professional, quick, and all government approvals were managed without any hassle from our side.",
    rating: 5,
  },
  {
    name: "Ajay Singh",
    role: "Factory Owner, Hajipur",
    text: "Our 50kW industrial plant was set up in 4 days. The bifacial panels are generating 20% more than promised. Truly impressed with the quality and support.",
    rating: 5,
  },
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function RenewablePowerPage() {
  const [visibleStats, setVisibleStats] = useState(false);
  const [visibleRoi, setVisibleRoi] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const roiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisibleStats(true); }, { threshold: 0.3 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisibleRoi(true); }, { threshold: 0.2 });
    if (statsRef.current) obs1.observe(statsRef.current);
    if (roiRef.current) obs2.observe(roiRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2073&auto=format&fit=crop"
            alt="Solar Installation"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroWrap}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadgeRow}>
              <span className={styles.heroBadge}>
                <VerifiedIcon sx={{ fontSize: 13 }} /> MNRE Empanelled Installer
              </span>
              <span className={styles.heroBadge2}>
                <AccountBalanceIcon sx={{ fontSize: 13 }} /> PM Surya Ghar Authorized Partner
              </span>
            </div>
            <h1 className={styles.heroTitle}>
              Power Your World<br />
              <span className={styles.heroAccent}>with Clean Solar</span><br />
              Energy
            </h1>
            <p className={styles.heroDesc}>
              As Bihar's most trusted solar company, we bring world-class renewable infrastructure to homes,
              offices, and industries — backed by government subsidies up to ₹78,000.
            </p>
            <div className={styles.heroCta}>
              <Link href="/contact" className={styles.btnPrimary}>
                Get Free Assessment <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </Link>
              <Link href="tel:+919231447005" className={styles.btnGhost}>
                <PhoneInTalkIcon sx={{ fontSize: 18 }} /> Call Now
              </Link>
            </div>
          </div>

          <div className={styles.heroStats} ref={statsRef}>
            {stats.map((s, i) => (
              <div
                key={i}
                className={`${styles.heroStatCard} ${visibleStats ? styles.statIn : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.heroStatIcon}>{s.icon}</div>
                <span className={styles.heroStatVal}>{s.value}</span>
                <span className={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroScroll}><span /></div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className={styles.introStrip}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introItem}>
              <WbSunnyIcon sx={{ fontSize: 26, color: "#f59e0b" }} />
              <span>BIS-Certified Tier-1 Panels</span>
            </div>
            <div className={styles.introItem}>
              <VerifiedIcon sx={{ fontSize: 26, color: "#6366f1" }} />
              <span>MNRE-Certified Technicians</span>
            </div>
            <div className={styles.introItem}>
              <AccountBalanceIcon sx={{ fontSize: 26, color: "#10b981" }} />
              <span>100% Subsidy Paperwork Handled</span>
            </div>
            <div className={styles.introItem}>
              <EmojiEventsIcon sx={{ fontSize: 26, color: "#8b5cf6" }} />
              <span>25–30 Year Performance Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Solar Product Catalog</span>
            <h2 className={styles.sectionTitle}>Our Solar Panels</h2>
            <p className={styles.sectionDesc}>
              We supply and install only Tier-1, BIS-certified solar panels and inverters from globally trusted manufacturers.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((p, i) => (
              <div key={i} className={`${styles.productCard} ${styles[`productCard_${p.badgeColor}`]}`}>
                <div className={styles.productImgWrap}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} />
                  <div className={styles.productImgOverlay} />
                  <span className={`${styles.productBadge} ${styles[`badge_${p.badgeColor}`]}`}>{p.badge}</span>
                </div>
                <div className={styles.productBody}>
                  <div className={styles.productHeader}>
                    <h3 className={styles.productTitle}>{p.title}</h3>
                    <span className={styles.productSegment}>
                      {p.segmentIcon} {p.segment}
                    </span>
                  </div>
                  <div className={styles.specsGrid}>
                    {p.specs.map((sp) => (
                      <div key={sp.label} className={styles.specItem}>
                        <span className={styles.specLabel}>{sp.label}</span>
                        <span className={styles.specValue}>{sp.value}</span>
                      </div>
                    ))}
                  </div>
                  <ul className={styles.featureList}>
                    {p.features.map((f) => (
                      <li key={f}><CheckCircleIcon sx={{ fontSize: 15 }} />{f}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className={styles.btnCardCta}>
                    Request Quote <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Inverters */}
          <div className={styles.inverterSection}>
            <h3 className={styles.inverterHeading}>Solar Inverters</h3>
            <div className={styles.inverterGrid}>
              {inverters.map((inv, i) => (
                <div key={i} className={styles.inverterCard}>
                  <div className={styles.inverterIcon}>{inv.icon}</div>
                  <h4 className={styles.inverterTitle}>{inv.title}</h4>
                  <div className={styles.inverterSpecs}>
                    <span><strong>Brand:</strong> {inv.brand}</span>
                    <span><strong>Rating:</strong> {inv.rating}</span>
                    <span><strong>Price:</strong> {inv.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={styles.process}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>How It Works</span>
            <h2 className={styles.sectionTitle}>Our Installation Process</h2>
            <p className={styles.sectionDesc}>
              From first visit to live monitoring — a seamless, hassle-free experience from start to finish.
            </p>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((s, i) => (
              <div key={i} className={styles.processCard}>
                <div className={styles.processTop}>
                  <span className={styles.processNum}>{s.step}</span>
                  <div className={styles.processIcon}>{s.icon}</div>
                </div>
                <h4 className={styles.processTitle}>{s.title}</h4>
                <p className={styles.processDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSIDY ── */}
      <section className={styles.subsidy}>
        <div className={styles.container}>
          <div className={styles.subsidyInner}>
            <div className={styles.subsidyLeft}>
              <span className={styles.eyebrowDark}>Government Scheme</span>
              <h2 className={styles.subsidyTitle}>
                PM Surya Ghar<br />
                <span className={styles.subsidyAccent}>Subsidy Scheme</span>
              </h2>
              <p className={styles.subsidyDesc}>
                Under the PM Surya Ghar: Muft Bijli Yojana, the Government of India offers attractive
                subsidies for rooftop solar at residential properties. As an authorized partner,
                we handle the entire application process for you — completely free.
              </p>
              <ul className={styles.subsidyBenefits}>
                {[
                  "Subsidy credited directly to your bank account",
                  "We handle all documentation & applications",
                  "Approval in 4–6 weeks after installation",
                  "Additional Bihar state government benefits",
                  "Free 300 units/month electricity (post subsidy)",
                ].map((b) => (
                  <li key={b}><CheckCircleIcon sx={{ fontSize: 18 }} />{b}</li>
                ))}
              </ul>
              <div className={styles.subsidyNote}>
                <BoltIcon sx={{ fontSize: 18, color: "#f59e0b" }} />
                <span>Bihar state offers up to <strong>₹15,000 extra</strong> for BPL/rural households.</span>
              </div>
            </div>

            <div className={styles.subsidyRight}>
              <h3 className={styles.slabHeading}>Central Subsidy Slab</h3>
              {subsidySlabs.map((sl, i) => (
                <div key={i} className={`${styles.slabCard} ${sl.popular ? styles.slabPopular : ""}`}>
                  {sl.popular && <span className={styles.slabTag}>Most Popular</span>}
                  <div className={styles.slabRow}>
                    <div>
                      <span className={styles.slabSize}>{sl.size}</span>
                      <span className={styles.slabRate}>{sl.rate}</span>
                    </div>
                    <span className={styles.slabAmount}>{sl.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EMI / BANKS ── */}
      <section className={styles.financing}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Financing Options</span>
            <h2 className={styles.sectionTitle}>Easy EMI & Bank Loans</h2>
            <p className={styles.sectionDesc}>
              Going solar doesn't require a huge upfront cost. Multiple banks offer solar-specific loans with attractive rates.
            </p>
          </div>

          <div className={styles.banksGrid}>
            {banks.map((b, i) => (
              <div key={i} className={styles.bankCard} style={{ "--bank-color": b.color } as React.CSSProperties}>
                <div className={styles.bankAccent} />
                <h4 className={styles.bankName}>{b.name}</h4>
                <span className={styles.bankScheme}>{b.scheme}</span>
                <div className={styles.bankSpecs}>
                  <div className={styles.bankSpec}>
                    <span className={styles.bankSpecLabel}>Interest Rate</span>
                    <span className={styles.bankSpecVal}>{b.rate}</span>
                  </div>
                  <div className={styles.bankSpec}>
                    <span className={styles.bankSpecLabel}>Repayment</span>
                    <span className={styles.bankSpecVal}>{b.tenure}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* EMI Calculator Card */}
          <div className={styles.emiCard}>
            <div className={styles.emiLeft}>
              <SavingsIcon sx={{ fontSize: 40, color: "#6366f1" }} />
              <h3 className={styles.emiTitle}>Example EMI Calculation</h3>
              <p className={styles.emiNote}>Approximate values. Actual EMI may vary based on bank and credit profile.</p>
            </div>
            <div className={styles.emiBreakdown}>
              {[
                { label: "System Cost (3kW)", val: "₹1,20,000", highlight: false },
                { label: "Central Subsidy", val: "– ₹78,000", highlight: false },
                { label: "Net Cost", val: "₹42,000", highlight: false },
                { label: "EMI @ 7% / 5yr", val: "≈ ₹832/mo", highlight: true },
              ].map((row) => (
                <div key={row.label} className={`${styles.emiRow} ${row.highlight ? styles.emiRowHL : ""}`}>
                  <span>{row.label}</span>
                  <span className={styles.emiVal}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className={styles.roi} ref={roiRef}>
        <div className={styles.container}>
          <div className={styles.roiInner}>
            <div className={styles.roiLeft}>
              <span className={styles.eyebrow}>Return on Investment</span>
              <h2 className={styles.sectionTitle}>Break Even in 4 Years</h2>
              <p className={styles.sectionDesc} style={{ textAlign: "left", margin: 0 }}>
                After central subsidy, a typical 3kW residential system costs around ₹55,000–₹75,000 net.
                With annual savings of ₹18,000–₹24,000, most households recover their investment within
                3.5–4 years — then enjoy free electricity for 20+ more years.
              </p>
              <div className={styles.roiMetrics}>
                {[
                  { icon: <TrendingUpIcon />, label: "Monthly Savings", val: "₹1,500–₹2,000" },
                  { icon: <SavingsIcon />, label: "Annual Savings", val: "₹18k–₹24k" },
                  { icon: <Co2Icon />, label: "System Life", val: "25+ years" },
                  { icon: <EmojiEventsIcon />, label: "Net 25-yr Benefit", val: "₹4.5 Lakh+" },
                ].map((m, i) => (
                  <div key={i} className={styles.roiMetric}>
                    <div className={styles.roiMetricIcon}>{m.icon}</div>
                    <div>
                      <span className={styles.roiMetricVal}>{m.val}</span>
                      <span className={styles.roiMetricLabel}>{m.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.roiRight}>
              <h3 className={styles.roiChartTitle}>Cumulative Savings — 3kW System</h3>
              <div className={styles.roiTimeline}>
                {roiYears.map((y, i) => (
                  <div
                    key={i}
                    className={`${styles.roiBar} ${y.breakeven ? styles.roiBarBreak : ""} ${visibleRoi ? styles.roiBarIn : ""}`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className={styles.roiBarFill} style={{ width: `${25 * (i + 1)}%` }} />
                    <div className={styles.roiBarInfo}>
                      <span className={styles.roiBarYear}>{y.year}</span>
                      <span className={styles.roiBarTotal}>{y.total}</span>
                    </div>
                    {y.breakeven && (
                      <span className={styles.roiBreakTag}>
                        <CheckCircleIcon sx={{ fontSize: 14 }} /> Break-Even Point
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p className={styles.roiFootnote}>*Based on avg. electricity rate of ₹6/unit and 4 peak sun hours/day</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Client Stories</span>
            <h2 className={styles.sectionTitle} style={{ color: "#fff" }}>Real People, Real Savings</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <FormatQuoteIcon sx={{ fontSize: 44, color: "var(--primary)", opacity: 0.35 }} />
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <StarIcon key={j} sx={{ fontSize: 16, color: "#f59e0b" }} />
                  ))}
                </div>
                <div className={styles.authorBlock}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <WbSunnyIcon sx={{ fontSize: 52, color: "#fde68a" }} className={styles.ctaSun} />
          <h2 className={styles.ctaTitle}>
            Ready to Go <span className={styles.ctaAccent}>Solar?</span>
          </h2>
          <p className={styles.ctaDesc}>
            Book a free site assessment and get a custom solar proposal with exact savings,
            subsidy, and EMI details — no obligation, no pressure.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.btnCtaPrimary}>
              <CalendarMonthIcon sx={{ fontSize: 18 }} /> Book Free Assessment
            </Link>
            <Link href="tel:+919231447005" className={styles.btnCtaGhost}>
              <PhoneInTalkIcon sx={{ fontSize: 18 }} /> +91 92314 47005
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}