/* Actionabl AboutSection — Clean Light Aesthetic
   Light background section with company story, mission, and team portraits
   Fonts: Syne (headings), DM Sans (body), JetBrains Mono (labels) */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import chimanImg from "/assets/team/chiman.jpg";
import chetanImg from "/assets/team/chetan.jpg";
import hirenImg from "/assets/team/hiren.jpg";
import rakeshImg from "/assets/team/rakesh.jpg";
import dipenImg from "/assets/team/dipen.jpg";
import sarveshImg from "/assets/team/sarvesh.jpg";
import vipinImg from "/assets/team/vipin.jpg";

const teamMembers = [
  {
    name: "Chiman Jagani",
    role: "Co-Founder",
    bio: "IIT Bombay alumnus with 35+ years of IT experience as a Technology & Innovation Lead. Delivered large-scale enterprise solutions across North America, Europe, and Asia.",
    img: chimanImg,
    linkedin: "https://www.linkedin.com/company/actionabl",
    tags: [
      "Technology Innovation",
      "Enterprise Architecture",
      "Global Delivery",
    ],
  },
  {
    name: "Chetan Panchani",
    role: "Co-Founder & Chief Innovator",
    bio: "McKinsey & Company background with 20+ years in digital transformation, BPM, and process automation. Driven major transformations across North America.",
    img: chetanImg,
    linkedin: "https://www.linkedin.com/company/actionabl",
    tags: ["Digital Transformation", "BPM", "Process Automation"],
  },
  {
    name: "Hiren Panchani",
    role: "Chief Business Officer",
    bio: "Visionary leader with 15+ years in digital transformation. Drives strategic planning, business operations, financial management, and Actionabl's business development & growth.",
    img: hirenImg,
    linkedin: "https://www.linkedin.com/company/actionabl",
    tags: ["Business Strategy", "Operations", "Growth"],
  },
  {
    name: "Rakesh Datta",
    role: "Chief Sales Officer",
    bio: "Sales leader with 20+ years driving business growth. Formerly at Oracle and Jiffi.ai. Leads strategic sales initiatives and revenue growth at Actionabl.",
    img: rakeshImg,
    linkedin: "https://www.linkedin.com/company/actionabl",
    tags: ["Enterprise Sales", "Revenue Growth", "Strategic Initiatives"],
  },
  {
    name: "Dipen Shah",
    role: "Regional VP – Sales",
    bio: "25+ years driving revenue growth and business transformation across global markets. Leads regional expansion and enterprise engagements at Actionabl.",
    img: dipenImg,
    linkedin: "https://www.linkedin.com/company/actionabl",
    tags: ["Regional Sales", "Partner Ecosystems", "Enterprise Accounts"],
  },
  {
    name: "Sarvesh Renghe",
    role: "Chief Customer Success Officer",
    bio: "30+ years in software development. Leads customer success, ensuring clients achieve their goals and realize the full value of Actionabl's solutions.",
    img: sarveshImg,
    linkedin: "https://www.linkedin.com/company/actionabl",
    tags: ["Customer Success", "Implementation", "Partnerships"],
  },
  {
    name: "Vipin Panchamia",
    role: "Financial Head",
    bio: "Seasoned finance and taxation expert with three decades in the field. Oversees strategic planning and financial management, ensuring efficiency and profitability.",
    img: vipinImg,
    linkedin: "https://www.linkedin.com/company/actionabl",
    tags: ["Finance", "Taxation", "Strategic Planning"],
  },
];

const values = [
  {
    label: "01",
    title: "Control before intelligence",
    desc: "We believe AI and automation must operate within structured, auditable boundaries. Intelligence without control creates risk, not value.",
  },
  {
    label: "02",
    title: "Orchestration as infrastructure",
    desc: "Business processes are the operating system of the enterprise. We treat orchestration as foundational infrastructure, not a workflow add-on.",
  },
  {
    label: "03",
    title: "Built for the enterprise",
    desc: "We build for the complexity, compliance requirements, and scale of real enterprise operations — not for demos or prototypes.",
  },
];

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: "white" }}
    >
      {/* Subtle gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 40% at 50% 0%, oklch(0.92 0.04 264 / 0.15) 0%, transparent 60%)`,
        }}
      />

      {/* Part 1: Company Story */}
      <div ref={ref} className="container relative py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Label + Heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-10"
            >
              <div
                className="w-[3px] h-5 rounded-full"
                style={{ background: "#4f63d7" }}
              />
              <span
                className="text-[10px] tracking-[0.14em] uppercase"
                style={{
                  color: "#4f63d7",
                  fontWeight: 500,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                About Actionabl
              </span>
              <div
                className="h-px flex-1 max-w-12"
                style={{ background: "rgba(79,99,215,0.18)" }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-[2.4rem] lg:text-[2.8rem] font-bold text-[oklch(0.12_0.03_260)] leading-[1.12] tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Built by enterprise operators, for enterprise operators
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-[1.05rem] leading-relaxed mb-4"
              style={{
                color: "oklch(0.45 0.015 260)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Actionabl was founded on a simple observation: enterprises have
              invested heavily in automation tools, AI platforms, and point
              solutions — yet their operations remain fragmented, reactive, and
              difficult to govern.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="text-[1.05rem] leading-relaxed mb-4"
              style={{
                color: "oklch(0.45 0.015 260)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              The missing layer isn't more AI. It's orchestration — a structured
              control plane that coordinates people, systems, automations, and
              AI agents within a single, auditable process framework.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="text-[1.05rem] leading-relaxed"
              style={{
                color: "oklch(0.45 0.015 260)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              We built Actionabl to be that layer — the operating system for the
              autonomous enterprise.
            </motion.p>
          </div>

          {/* Right: Mission + Stats */}
          <div className="space-y-6">
            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-7"
              style={{
                background:
                  "linear-gradient(145deg, rgba(248,249,255,1) 0%, rgba(239,243,255,0.98) 58%, rgba(231,237,255,0.94) 100%)",
                border: "1px solid rgba(79, 99, 215, 0.12)",
                boxShadow:
                  "0 10px 28px rgba(79, 99, 215, 0.08), 0 2px 8px rgba(27, 32, 40, 0.04)",
              }}
            >
              <div
                className="text-[10px] tracking-[0.14em] uppercase mb-4"
                style={{
                  color: "rgba(79, 99, 215, 0.72)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Our Mission
              </div>
              <p
                className="text-[1.15rem] font-semibold leading-snug"
                style={{ fontFamily: "'Syne', sans-serif", color: "#1b2028" }}
              >
                "To give enterprises the control layer they need to operate with
                the speed, intelligence, and reliability that modern business
                demands."
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2022", label: "Founded" },
                { value: "10+", label: "Enterprise Customers" },
                { value: "3+", label: "Industries Served" },
                { value: "99.9%", label: "Process Reliability" },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="rounded-xl p-5"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(247,249,255,0.92) 0%, rgba(255,255,255,1) 100%)",
                    border: "1px solid rgba(79, 99, 215, 0.12)",
                  }}
                >
                  <div
                    className="text-[1.8rem] font-bold mb-1"
                    style={{
                      color: "oklch(0.18 0.03 260)",
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[0.78rem]"
                    style={{
                      color: "oklch(0.55 0.015 260)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="mx-auto max-w-6xl px-4"
        style={{ height: "1px", background: "oklch(0.91 0.008 260)" }}
      />

      {/* Part 2: Core Values */}
      <div ref={valuesRef} className="container relative py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-14"
        >
          <div
            className="w-[3px] h-5 rounded-full"
            style={{ background: "#4f63d7" }}
          />
          <span
            className="text-[10px] tracking-[0.14em] uppercase"
            style={{
              color: "#4f63d7",
              fontWeight: 500,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            What We Believe
          </span>
          <div
            className="h-px flex-1 max-w-12"
            style={{ background: "rgba(79,99,215,0.18)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="rounded-2xl p-7 group transition-all duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(247,249,255,0.92) 0%, rgba(255,255,255,1) 100%)",
                border: "1px solid rgba(79, 99, 215, 0.12)",
                boxShadow: "0 1px 4px rgba(79, 99, 215, 0.05)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(79, 99, 215, 0.22)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 20px rgba(79, 99, 215, 0.10)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(79, 99, 215, 0.12)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 1px 4px rgba(79, 99, 215, 0.05)";
                (e.currentTarget as HTMLDivElement).style.transform = "none";
              }}
            >
              <div
                className="text-[10px] tracking-[0.14em] mb-5"
                style={{
                  color: "#4f63d7",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {v.label}
              </div>
              <h3
                className="text-[1.05rem] font-bold text-[oklch(0.18_0.03_260)] mb-3 leading-snug"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {v.title}
              </h3>
              <p
                className="text-[0.88rem] leading-relaxed"
                style={{
                  color: "oklch(0.55 0.015 260)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="mx-auto max-w-6xl px-4"
        style={{ height: "1px", background: "oklch(0.91 0.008 260)" }}
      />

      {/* Part 3: Team */}
      <div ref={teamRef} className="container relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="w-[3px] h-5 rounded-full"
                style={{ background: "#4f63d7" }}
              />
              <span
                className="text-[10px] tracking-[0.14em] uppercase"
                style={{
                  color: "#4f63d7",
                  fontWeight: 500,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Leadership
              </span>
              <div
                className="h-px flex-1 max-w-12"
                style={{ background: "rgba(79,99,215,0.18)" }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-[2rem] lg:text-[2.4rem] font-bold text-[oklch(0.12_0.03_260)] leading-[1.15] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              The team behind the platform
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[1rem] leading-relaxed lg:pt-14"
            style={{
              color: "oklch(0.45 0.015 260)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Our team, based in the USA and India, combines deep expertise in
            Automation, Digital Transformation, Customer Success, and Business
            Growth — with a strong track record of innovation, scaling, and
            delivering solutions that have transformed operations for various
            organizations.
          </motion.p>
        </div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.14 }}
              className="group rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: "white",
                border: "1px solid oklch(0.91 0.008 260)",
                boxShadow: "0 1px 4px oklch(0.18 0.03 260 / 0.04)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(21, 159, 149, 0.10), 0 2px 8px oklch(0.18 0.03 260 / 0.06)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.80 0.08 175 / 0.5)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 1px 4px oklch(0.18 0.03 260 / 0.04)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.91 0.008 260)";
                (e.currentTarget as HTMLDivElement).style.transform = "none";
              }}
            >
              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "1/1",
                  background: "oklch(0.94 0.04 175 / 0.3)",
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    objectPosition: "50% 15%",
                    filter: "grayscale(10%) brightness(0.95) contrast(1.02)",
                  }}
                />
                {/* Subtle gradient overlay at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.96 0.02 264 / 0.4) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className="text-[1rem] font-bold text-[oklch(0.18_0.03_260)] mb-0.5"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {member.name}
                    </h3>
                    <div
                      className="text-[0.78rem]"
                      style={{
                        color: "#4f63d7",
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {member.role}
                    </div>
                  </div>
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                    style={{
                      color: "oklch(0.55 0.015 260)",
                      background: "oklch(0.96 0.005 90)",
                      border: "1px solid oklch(0.91 0.008 260)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#159f95";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "oklch(0.75 0.10 175 / 0.5)";
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "oklch(0.94 0.04 175 / 0.5)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "oklch(0.55 0.015 260)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "oklch(0.91 0.008 260)";
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "oklch(0.96 0.005 90)";
                    }}
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>

                <p
                  className="text-[0.84rem] leading-relaxed mb-4"
                  style={{
                    color: "oklch(0.50 0.015 260)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {member.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-md"
                      style={{
                        color: "oklch(0.48 0.01 260)",
                        border: "1px solid oklch(0.88 0.008 260)",
                        background: "oklch(0.97 0.003 260)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
