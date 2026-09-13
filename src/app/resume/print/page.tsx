import React from "react";

export default function ResumePrintPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @page {
              size: letter;
              margin: 0.35in 0.45in;
            }
            @media print {
              html, body {
                background: #ffffff !important;
                color: #000000 !important;
                -webkit-print-color-adjust: exact;
                margin: 0 !important;
                padding: 0 !important;
              }
              .resume-sheet {
                box-shadow: none !important;
                margin: 0 !important;
                padding: 0 !important;
                max-width: 100% !important;
              }
              .page-break {
                page-break-after: always;
                break-after: page;
                height: 0;
                display: block;
                clear: both;
              }
              .no-print {
                display: none !important;
              }
            }
            .resume-list {
              list-style-type: disc !important;
              margin: 2px 0 0 0 !important;
              padding-left: 1.25rem !important;
            }
            .resume-list li {
              list-style-type: disc !important;
              display: list-item !important;
              margin-top: 2px;
              margin-bottom: 2px;
              font-size: 11px;
              line-height: 1.35;
              color: #111111;
            }
            .resume-list li::marker {
              color: #000000 !important;
              font-size: 0.85em;
            }
          `,
        }}
      />

      <div
        style={{
          background: "#e5e7eb",
          minHeight: "100vh",
          padding: "24px 0",
          fontFamily: '"Times New Roman", Times, Georgia, serif',
          color: "#000000",
        }}
      >
        {/* ==================== PAGE 1 ==================== */}
        <main
          className="resume-sheet"
          style={{
            maxWidth: "800px",
            margin: "0 auto 24px auto",
            background: "#ffffff",
            color: "#000000",
            padding: "36px 44px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            lineHeight: 1.34,
          }}
        >
          {/* HEADER */}
          <header style={{ textAlign: "center", paddingBottom: "1px" }}>
            <h1
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Suyash Yadav
            </h1>
            <div
              style={{
                fontSize: "11.5px",
                color: "#111111",
                marginTop: "2.5px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "3px 6px",
              }}
            >
              <span>+91 9467249110</span>
              <span>|</span>
              <a
                href="mailto:suyashyadav1709@gmail.com"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                suyashyadav1709@gmail.com
              </a>
              <span>|</span>
              <a
                href="https://linkedin.com/in/suyash--yadav"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                linkedin.com/in/suyash--yadav
              </a>
              <span>|</span>
              <a
                href="https://github.com/Sparkyyy45"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                github.com/Sparkyyy45
              </a>
              <span>|</span>
              <a
                href="https://worthfinding.tech"
                style={{ color: "#000000", textDecoration: "none" }}
              >
                worthfinding.tech
              </a>
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#333333",
                marginTop: "1px",
              }}
            >
              Rewari, Haryana / Udaipur, Rajasthan, India
            </div>
          </header>

          {/* EDUCATION */}
          <section style={{ marginTop: "10px" }}>
            <h2
              style={{
                fontSize: "12.2px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1.5px",
                marginBottom: "4px",
              }}
            >
              Education
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                fontSize: "12px",
              }}
            >
              <strong>Sir Padampat Singhania University (SPSU)</strong>
              <span style={{ fontSize: "11px", color: "#222222" }}>
                Udaipur, Rajasthan, India
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                fontSize: "11.3px",
                marginTop: "1px",
              }}
            >
              <em>Bachelor of Technology in Computer Science &amp; Engineering</em>
              <span style={{ fontSize: "11px", color: "#222222" }}>
                2025 – 2028
              </span>
            </div>
            <div
              style={{
                fontSize: "11.2px",
                color: "#111111",
                marginTop: "1px",
              }}
            >
              <strong>Specialization:</strong> Full Stack Web Development
            </div>
            <p
              style={{
                fontSize: "10.6px",
                marginTop: "2px",
                color: "#222222",
                lineHeight: 1.34,
              }}
            >
              <strong>Relevant Coursework:</strong> Data Structures &amp;
              Algorithms, Object-Oriented Programming (C++), Database Management
              Systems (DBMS), Operating Systems, Computer Networks, Full Stack
              Web Architecture, System Design, Cloud Computing.
            </p>
          </section>

          {/* TECHNICAL SKILLS & CORE COMPETENCIES */}
          <section style={{ marginTop: "10px" }}>
            <h2
              style={{
                fontSize: "12.2px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1.5px",
                marginBottom: "4px",
              }}
            >
              Technical Skills &amp; Core Competencies
            </h2>
            <div
              style={{
                fontSize: "11px",
                lineHeight: 1.45,
                color: "#111111",
              }}
            >
              <div style={{ marginBottom: "1.5px" }}>
                <strong>Languages:</strong> TypeScript, JavaScript (ES6+), Python,
                C++, SQL, HTML5, CSS3
              </div>
              <div style={{ marginBottom: "1.5px" }}>
                <strong>Frontend:</strong> React.js, Next.js (App Router, Server
                Components, SSR/SSG), Tailwind CSS, Redux Toolkit, Framer Motion,
                Vite
              </div>
              <div style={{ marginBottom: "1.5px" }}>
                <strong>Backend &amp; APIs:</strong> Node.js, Express.js, FastAPI,
                RESTful APIs, WebSockets, tRPC, Microservices Architecture
              </div>
              <div style={{ marginBottom: "1.5px" }}>
                <strong>Databases &amp; Cloud:</strong> PostgreSQL, MongoDB, Prisma
                ORM, Supabase, Redis, Docker, Vercel, AWS (EC2/S3), Firebase
              </div>
              <div style={{ marginBottom: "1.5px" }}>
                <strong>Architecture &amp; Engineering:</strong> System Design,
                Scalable Web Architecture, Database Indexing &amp; Query
                Optimization, Caching Strategies (Redis), CI/CD Automation,
                Test-Driven Development (TDD)
              </div>
              <div style={{ marginBottom: "1.5px" }}>
                <strong>DevOps &amp; Tooling:</strong> Git, GitHub Actions, Postman,
                Linux CLI, Docker Compose, RAG &amp; Vector Search, OpenAI API
              </div>
              <div>
                <strong>Soft Skills &amp; Professional Competencies:</strong> Agile/Scrum
                Sprint Execution, Cross-Functional Team Collaboration, Technical
                Leadership &amp; Mentorship, Peer Code Reviews, Technical Writing &amp;
                Documentation, Public Speaking, Root-Cause Problem Solving
              </div>
            </div>
          </section>

          {/* WORK EXPERIENCE */}
          <section style={{ marginTop: "10px" }}>
            <h2
              style={{
                fontSize: "12.2px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1.5px",
                marginBottom: "4px",
              }}
            >
              Work Experience
            </h2>

            {/* Worthfinding */}
            <div style={{ marginBottom: "9px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <strong>Worthfinding</strong>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  Udaipur, Rajasthan, India
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "11.3px",
                  marginTop: "1px",
                }}
              >
                <em>Full Stack Engineer</em>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  Jan 2026 – Present
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Architected high-performance digital flagships using Next.js
                  Server Components and Tailwind CSS, achieving sub-second Largest
                  Contentful Paint (LCP) and 98+ Google Lighthouse performance scores.
                </li>
                <li>
                  Engineered dynamic acquisition funnels and custom JSON-LD schemas,
                  driving top-3 Google search rankings and a 40% increase in organic client
                  inquiries for regional hospitality and enterprise brands.
                </li>
                <li>
                  Implemented automated CI/CD deployment pipelines on Vercel with
                  zero-downtime production rollouts, optimizing asset delivery, edge
                  caching, and bundle size.
                </li>
                <li>
                  Spearheaded technical architecture discussions and client roadmap
                  alignment, translating complex business objectives into scalable
                  software solutions.
                </li>
              </ul>
            </div>

            {/* DMV CoreTech */}
            <div style={{ marginBottom: "9px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <strong>DMV CoreTech</strong>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  Remote, India
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "11.3px",
                  marginTop: "1px",
                }}
              >
                <em>Full Stack Developer Intern</em>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  May 2026 – Present
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Developed and scaled full-stack web applications and modular REST
                  APIs using MERN (MongoDB, Express, React, Node.js), reducing API
                  response times by 35%.
                </li>
                <li>
                  Designed role-based access control (RBAC) and JWT authentication
                  mechanisms, securing sensitive enterprise user records across
                  multi-tenant endpoints.
                </li>
                <li>
                  Optimized MongoDB queries with compound indexing and aggregation
                  pipelines, reducing database load during peak traffic by 25%.
                </li>
                <li>
                  Collaborated in cross-functional agile sprints, conducted rigorous
                  peer code reviews, and resolved 25+ critical production bugs ahead of
                  sprint deadlines.
                </li>
              </ul>
            </div>

            {/* GeeksforGeeks SPSU */}
            <div style={{ marginBottom: "9px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <strong>GeeksforGeeks (SPSU Chapter)</strong>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  Udaipur, Rajasthan, India
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "11.3px",
                  marginTop: "1px",
                }}
              >
                <em>Campus Mantri &amp; Student Technical Lead</em>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  June 2026 – Present
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Spearheaded university-wide coding culture, organizing algorithm
                  challenges, DSA cohorts, and technical workshops impacting 200+
                  students.
                </li>
                <li>
                  Mentored 50+ junior engineering peers in Data Structures &amp;
                  Algorithms, competitive programming fundamentals, and technical
                  interview readiness.
                </li>
                <li>
                  Directed collaboration between university administration and
                  national GeeksforGeeks representatives to host high-engagement campus
                  coding events.
                </li>
              </ul>
            </div>

            {/* Open Source Contributor */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <strong>Open Source Contributor</strong>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  Remote, India
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "11.3px",
                  marginTop: "1px",
                }}
              >
                <em>Open Source Projects &amp; Developer Ecosystem</em>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  May 2026 – Present
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Contributed to production-grade open-source developer tools and web
                  platforms across active GitHub repositories.
                </li>
                <li>
                  Authored modular TypeScript components, wrote unit tests, and resolved
                  complex repository issues with 10+ pull requests merged.
                </li>
                <li>
                  Authored technical documentation, bug repros, and PR walkthroughs,
                  collaborating with distributed maintainers across agile workflows.
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* ==================== EXPLICIT PAGE BREAK ==================== */}
        <div className="page-break" />

        {/* ==================== PAGE 2 ==================== */}
        <main
          className="resume-sheet"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "#ffffff",
            color: "#000000",
            padding: "36px 44px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            lineHeight: 1.34,
          }}
        >
          {/* FEATURED PROJECTS */}
          <section>
            <h2
              style={{
                fontSize: "12.2px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1.5px",
                marginTop: 0,
                marginBottom: "4px",
              }}
            >
              Featured Projects
            </h2>

            {/* RepoSage */}
            <div style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <div>
                  <strong>RepoSage</strong> |{" "}
                  <em style={{ fontSize: "11.2px" }}>
                    Next.js, TypeScript, OpenAI API, Vector Search, Tailwind CSS
                  </em>
                </div>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  July 2026
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Built an AI-driven developer onboarding platform that indexes
                  open-source GitHub repositories using vector embeddings and guides
                  new contributors through codebases in under 2 minutes.
                </li>
                <li>
                  Achieved 22+ GitHub forks and active open-source adoption;
                  engineered context-aware PR walkthrough engine with live streaming
                  explanations.
                </li>
                <li>
                  Integrated OpenAI embeddings with vector similarity search to
                  dynamically generate architectural maps and interactive function call
                  graphs.
                </li>
              </ul>
            </div>

            {/* DevPort */}
            <div style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <div>
                  <strong>DevPort</strong> |{" "}
                  <em style={{ fontSize: "11.2px" }}>
                    Next.js, TypeScript, Tailwind CSS, Vercel API
                  </em>
                </div>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  July 2026
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Engineered an automated developer portfolio generator importing
                  GitHub repositories to deploy recruiter-focused bento websites in
                  under 60 seconds with 6 dynamic themes.
                </li>
                <li>
                  Built real-time profile analytics, dynamic Open Graph (OG) image
                  generation, and single-click automated Vercel deployment workflows.
                </li>
              </ul>
            </div>

            {/* PlacementOS */}
            <div style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <div>
                  <strong>PlacementOS</strong> |{" "}
                  <em style={{ fontSize: "11.2px" }}>
                    Next.js, React, TypeScript, Tailwind CSS, PostgreSQL
                  </em>
                </div>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  May 2026
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Architected an enterprise campus placement automation platform
                  streamlining hiring drives, company applications, and candidate
                  verification.
                </li>
                <li>
                  Built real-time ATS resume compatibility scoring engine and
                  personalized skill-gap roadmaps, accelerating campus student
                  placement readiness.
                </li>
              </ul>
            </div>

            {/* openenv */}
            <div style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <div>
                  <strong>openenv</strong> |{" "}
                  <em style={{ fontSize: "11.2px" }}>
                    Node.js, Docker, JavaScript, GitHub Actions, CI/CD
                  </em>
                </div>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  June 2026
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Created an open registry of full-stack production starter kits
                  pre-configured with databases (PostgreSQL/MongoDB), containerized
                  environments (Docker), and automated CI/CD validation.
                </li>
                <li>
                  Automated multi-environment testing via GitHub Actions, reducing
                  developer onboarding and setup time from 45 minutes to a single CLI
                  command.
                </li>
              </ul>
            </div>

            {/* CampusCore */}
            <div style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <div>
                  <strong>CampusCore</strong> |{" "}
                  <em style={{ fontSize: "11.2px" }}>
                    Next.js, TypeScript, Tailwind CSS, Vercel
                  </em>
                </div>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  August 2026
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Developed a centralized academic hub for Sir Padampat Singhania
                  University (SPSU) students to access faculty-verified notes,
                  syllabus roadmaps, and announcements.
                </li>
                <li>
                  Maintained 99.9% uptime and sub-100ms client-side page transitions
                  via Next.js App Router for active student cohorts.
                </li>
              </ul>
            </div>

            {/* InfluencerIQ */}
            <div style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "12px",
                }}
              >
                <div>
                  <strong>InfluencerIQ</strong> |{" "}
                  <em style={{ fontSize: "11.2px" }}>
                    Next.js, TypeScript, Node.js, Tailwind CSS, REST APIs
                  </em>
                </div>
                <span style={{ fontSize: "11px", color: "#222222" }}>
                  June 2026
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "2px",
                  fontSize: "11px",
                  lineHeight: 1.35,
                }}
              >
                <li>
                  Engineered a creator intelligence and campaign matching engine
                  forecasting brand campaign ROI based on audience demographics and
                  engagement credibility.
                </li>
                <li>
                  Implemented high-efficiency data aggregation pipelines evaluating
                  social performance metrics across multi-tiered influencer profiles.
                </li>
              </ul>
            </div>
          </section>

          {/* TECHNICAL WRITING & COMMUNITY INITIATIVES */}
          <section style={{ marginTop: "10px" }}>
            <h2
              style={{
                fontSize: "12.2px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1.5px",
                marginBottom: "4px",
              }}
            >
              Technical Writing &amp; Community Initiatives
            </h2>
            <ul
              className="resume-list"
              style={{
                fontSize: "11px",
                lineHeight: 1.38,
              }}
            >
              <li style={{ marginTop: "2.2px", marginBottom: "2.2px" }}>
                <strong>Technical Blog Author (worthfinding.tech/blog):</strong> Authored
                published technical deep dives on Next.js Server Components, Full-Stack
                System Architecture, and Edge Caching, attracting 1,000+ organic reader
                engagements.
              </li>
              <li style={{ marginTop: "2.2px", marginBottom: "2.2px" }}>
                <strong>Campus Technical Workshops:</strong> Hosted hands-on developer
                workshops on modern Git/GitHub workflows, full-stack CI/CD pipelines,
                and React state management for university engineering students.
              </li>
            </ul>
          </section>

          {/* LEADERSHIP & EXTRACURRICULARS */}
          <section style={{ marginTop: "10px" }}>
            <h2
              style={{
                fontSize: "12.2px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1.5px",
                marginBottom: "4px",
              }}
            >
              Leadership &amp; Extracurriculars
            </h2>
            <ul
              className="resume-list"
              style={{
                fontSize: "11px",
                lineHeight: 1.38,
              }}
            >
              <li style={{ marginTop: "2.2px", marginBottom: "2.2px" }}>
                <strong>Organizer, WORTH IT Innovation Challenge:</strong> Founded a
                2-week national builder sprint under Worthfinding Studio providing 9
                direct engineering, design, and business internships to student
                innovators.
              </li>
              <li style={{ marginTop: "2.2px", marginBottom: "2.2px" }}>
                <strong>National Cadet Corps (NCC) Cadet, SPSU Contingent:</strong>{" "}
                Actively completed rigorous military drill, physical endurance, and
                disaster management training; cultivated command discipline and team
                leadership.
              </li>
              <li style={{ marginTop: "2.2px", marginBottom: "2.2px" }}>
                <strong>
                  2nd Position, Inter-University Debate Competition (2026):
                </strong>{" "}
                Represented Sir Padampat Singhania University (SPSU) in the
                university-level parliamentary debate championship, securing runner-up
                honors.
              </li>
              <li style={{ marginTop: "2.2px", marginBottom: "2.2px" }}>
                <strong>Competitive Debating Champion (Sainik School):</strong>{" "}
                Awarded House Debate Champion (Best Debater) and secured 2nd Place in
                North Zone Inter-School Debate Championship out of 20+ participating
                institutions.
              </li>
            </ul>
          </section>

          {/* ACHIEVEMENTS & CERTIFICATIONS */}
          <section style={{ marginTop: "10px" }}>
            <h2
              style={{
                fontSize: "12.2px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1.5px",
                marginBottom: "4px",
              }}
            >
              Achievements &amp; Certifications
            </h2>
            <ul
              className="resume-list"
              style={{
                fontSize: "11px",
                lineHeight: 1.38,
              }}
            >
              <li style={{ marginTop: "2.2px", marginBottom: "2.2px" }}>
                <strong>NPTEL IIT Kharagpur:</strong> Fundamentals of Digital
                Marketing —{" "}
                <strong>95% Score, Elite + Gold Topper (Top 2% Nationwide)</strong>.
              </li>
              <li style={{ marginTop: "2.2px", marginBottom: "2.2px" }}>
                <strong>freeCodeCamp:</strong> Scientific Computing with Python
                Certification (Verification ID: fcc-339c2573-aad6-4d57-pyv9).
              </li>
              <li style={{ marginTop: "2.2px", marginBottom: "2.2px" }}>
                <strong>Competitive Programming &amp; DSA:</strong> Consistently active
                problem solver across LeetCode and GeeksforGeeks, solving algorithmic
                challenges in C++ and Python.
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
