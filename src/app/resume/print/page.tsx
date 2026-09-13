import React from "react";

export default function ResumePrintPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @page {
              size: letter;
              margin: 0.38in 0.48in;
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
              margin: 1.5px 0 0 0 !important;
              padding-left: 1.25rem !important;
            }
            .resume-list li {
              list-style-type: disc !important;
              display: list-item !important;
              margin-top: 1.8px;
              margin-bottom: 1.8px;
              font-size: 10.8px;
              line-height: 1.34;
              color: #111111;
            }
            .resume-list li::marker {
              color: #000000 !important;
              font-size: 0.82em;
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
        {/* PAGE 1 */}
        <main
          className="resume-sheet"
          style={{
            maxWidth: "800px",
            margin: "0 auto 24px auto",
            background: "#ffffff",
            color: "#000000",
            padding: "36px 44px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            lineHeight: 1.32,
          }}
        >
          {/* HEADER */}
          <header style={{ textAlign: "center", paddingBottom: "1px" }}>
            <h1
              style={{
                fontSize: "25px",
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
                fontSize: "11.2px",
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
                fontSize: "10.8px",
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
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1px",
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
                fontSize: "11.8px",
              }}
            >
              <strong>Sir Padampat Singhania University (SPSU)</strong>
              <span style={{ fontSize: "10.8px", color: "#222222" }}>
                Udaipur, Rajasthan, India
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                fontSize: "11.2px",
                marginTop: "1px",
              }}
            >
              <em>Bachelor of Technology in Computer Science &amp; Engineering</em>
              <span style={{ fontSize: "10.8px", color: "#222222" }}>
                2025 – 2028
              </span>
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "#111111",
                marginTop: "1px",
              }}
            >
              <strong>Specialization:</strong> Full Stack Web Development
            </div>
            <p
              style={{
                fontSize: "10.5px",
                marginTop: "1.5px",
                color: "#222222",
                lineHeight: 1.32,
              }}
            >
              <strong>Relevant Coursework:</strong> Data Structures &amp;
              Algorithms, Object-Oriented Programming (C++), Database Management
              Systems (DBMS), Operating Systems, Computer Networks, Full Stack
              Web Architecture, System Design.
            </p>
          </section>

          {/* TECHNICAL SKILLS & COMPETENCIES */}
          <section style={{ marginTop: "10px" }}>
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1px",
                marginBottom: "4px",
              }}
            >
              Technical Skills &amp; Core Competencies
            </h2>
            <div
              style={{
                fontSize: "10.8px",
                lineHeight: 1.42,
                color: "#111111",
              }}
            >
              <div style={{ marginBottom: "1.2px" }}>
                <strong>Languages:</strong> TypeScript, JavaScript (ES6+), Python,
                C++, SQL, HTML5, CSS3
              </div>
              <div style={{ marginBottom: "1.2px" }}>
                <strong>Frontend:</strong> React.js, Next.js (App Router, Server
                Components), Tailwind CSS, Redux Toolkit, Framer Motion
              </div>
              <div style={{ marginBottom: "1.2px" }}>
                <strong>Backend &amp; APIs:</strong> Node.js, Express.js, FastAPI,
                RESTful APIs, WebSockets, tRPC
              </div>
              <div style={{ marginBottom: "1.2px" }}>
                <strong>Databases &amp; Cloud:</strong> PostgreSQL, MongoDB, Prisma
                ORM, Supabase, Redis, Docker, Vercel, AWS (EC2/S3)
              </div>
              <div style={{ marginBottom: "1.2px" }}>
                <strong>Architecture &amp; Concepts:</strong> System Design,
                Scalable Web Architecture, Database Indexing &amp; Query
                Optimization, Caching Strategies (Redis), CI/CD Automation,
                Test-Driven Development (TDD)
              </div>
              <div style={{ marginBottom: "1.2px" }}>
                <strong>Tools &amp; DevOps:</strong> Git, GitHub Actions, Postman,
                Linux, Vite, Agile/Scrum, RAG &amp; Vector Search, OpenAI API
              </div>
              <div>
                <strong>Soft Skills &amp; Competencies:</strong> Agile/Scrum Sprint
                Execution, Cross-Functional Team Collaboration, Technical
                Leadership &amp; Mentorship, Code Reviews &amp; Pair Programming,
                Technical Documentation, Public Speaking, Root-Cause Problem
                Solving
              </div>
            </div>
          </section>

          {/* WORK EXPERIENCE */}
          <section style={{ marginTop: "10px" }}>
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1px",
                marginBottom: "4px",
              }}
            >
              Work Experience
            </h2>

            {/* Worthfinding */}
            <div style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "11.8px",
                }}
              >
                <strong>Worthfinding</strong>
                <span style={{ fontSize: "10.8px", color: "#222222" }}>
                  Udaipur, Rajasthan, India
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "11.2px",
                  marginTop: "1px",
                }}
              >
                <em>Full Stack Engineer</em>
                <span style={{ fontSize: "10.8px", color: "#222222" }}>
                  Jan 2026 – Present
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "1.5px",
                  fontSize: "10.8px",
                  lineHeight: 1.34,
                }}
              >
                <li>
                  Architected high-performance digital flagships using Next.js
                  Server Components and Tailwind CSS, achieving sub-second Largest
                  Contentful Paint (LCP) and 98+ Google Lighthouse performance scores.
                </li>
                <li>
                  Engineered dynamic acquisition funnels and custom JSON-LD schemas,
                  driving top-3 search rankings and a 40% increase in organic client
                  inquiries for regional hospitality and enterprise brands.
                </li>
                <li>
                  Implemented automated CI/CD deployment pipelines on Vercel with
                  zero-downtime production rollouts, optimizing asset delivery and
                  edge caching.
                </li>
              </ul>
            </div>

            {/* DMV CoreTech */}
            <div style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "11.8px",
                }}
              >
                <strong>DMV CoreTech</strong>
                <span style={{ fontSize: "10.8px", color: "#222222" }}>
                  Remote, India
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "11.2px",
                  marginTop: "1px",
                }}
              >
                <em>Full Stack Developer Intern</em>
                <span style={{ fontSize: "10.8px", color: "#222222" }}>
                  May 2026 – Present
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "1.5px",
                  fontSize: "10.8px",
                  lineHeight: 1.34,
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
                  Collaborated in cross-functional agile sprints, conducted peer code
                  reviews, and resolved 25+ critical production bugs ahead of sprint
                  deadlines.
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
                  fontSize: "11.8px",
                }}
              >
                <strong>Open Source Contributor</strong>
                <span style={{ fontSize: "10.8px", color: "#222222" }}>
                  Remote, India
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "11.2px",
                  marginTop: "1px",
                }}
              >
                <em>Open Source Projects &amp; Developer Ecosystem</em>
                <span style={{ fontSize: "10.8px", color: "#222222" }}>
                  May 2026 – Present
                </span>
              </div>
              <ul
                className="resume-list"
                style={{
                  marginTop: "1.5px",
                  fontSize: "10.8px",
                  lineHeight: 1.34,
                }}
              >
                <li>
                  Contributed to production-grade open-source developer tools and
                  web platforms across active GitHub repositories.
                </li>
                <li>
                  Authored modular TypeScript components, wrote unit tests, and
                  resolved complex repository issues with 10+ pull requests merged.
                </li>
                <li>
                  Authored technical documentation and PR walkthroughs, collaborating
                  with distributed maintainers across agile workflows.
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* PRINT PAGE BREAK */}
        <div className="page-break" />

        {/* PAGE 2 */}
        <main
          className="resume-sheet"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "#ffffff",
            color: "#000000",
            padding: "36px 44px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            lineHeight: 1.32,
          }}
        >
          {/* PROJECTS */}
          <section>
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1px",
                marginTop: 0,
                marginBottom: "4px",
              }}
            >
              Projects
            </h2>

            {[
              {
                name: "RepoSage",
                tech: "Next.js, TypeScript, OpenAI API, Vector Search, Tailwind CSS",
                date: "July 2026",
                bullets: [
                  "Built an AI-driven developer onboarding platform that indexes open-source GitHub repositories using vector embeddings and guides new contributors through codebases in under 2 minutes.",
                  "Achieved 22+ GitHub forks and active open-source adoption; engineered context-aware PR walkthrough engine with live streaming explanations.",
                  "Integrated OpenAI embeddings with vector similarity search to dynamically generate architectural maps and interactive function call graphs.",
                ],
              },
              {
                name: "DevPort",
                tech: "Next.js, TypeScript, Tailwind CSS, Vercel API",
                date: "July 2026",
                bullets: [
                  "Engineered an automated developer portfolio generator importing GitHub repositories to deploy recruiter-focused bento websites in under 60 seconds with 6 dynamic themes.",
                  "Built real-time profile analytics, dynamic Open Graph (OG) image generation, and single-click automated Vercel deployment workflows.",
                ],
              },
              {
                name: "openenv",
                tech: "Node.js, Docker, JavaScript, GitHub Actions, CI/CD",
                date: "June 2026",
                bullets: [
                  "Created an open registry of full-stack production starter kits pre-configured with databases (PostgreSQL/MongoDB), containerized environments (Docker), and automated CI/CD validation.",
                  "Automated multi-environment testing via GitHub Actions, reducing developer onboarding and setup time from 45 minutes to a single CLI command.",
                ],
              },
              {
                name: "CampusCore",
                tech: "Next.js, TypeScript, Tailwind CSS, Vercel",
                date: "August 2026",
                bullets: [
                  "Developed a centralized academic hub for Sir Padampat Singhania University (SPSU) students to access faculty-verified notes, syllabus roadmaps, and announcements.",
                  "Maintained 99.9% uptime and sub-100ms client-side page transitions via Next.js App Router for active student cohorts.",
                ],
              },
            ].map((project, idx) => (
              <div
                key={project.name}
                style={{
                  marginBottom: idx === 3 ? "12px" : "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    fontSize: "11.8px",
                  }}
                >
                  <div>
                    <strong>{project.name}</strong>
                    <span
                      style={{
                        marginLeft: "6px",
                        color: "#333333",
                        fontSize: "11px",
                      }}
                    >
                      | <em>{project.tech}</em>
                    </span>
                  </div>
                  <span
                    style={{
                      whiteSpace: "nowrap",
                      color: "#222222",
                      fontSize: "10.8px",
                    }}
                  >
                    {project.date}
                  </span>
                </div>
                <ul
                  className="resume-list"
                  style={{
                    marginTop: "1.5px",
                    fontSize: "10.8px",
                    lineHeight: 1.34,
                  }}
                >
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* LEADERSHIP & EXTRACURRICULARS */}
          <section style={{ marginTop: "14px" }}>
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1px",
                marginBottom: "4px",
              }}
            >
              Leadership &amp; Extracurriculars
            </h2>
            <ul
              className="resume-list"
              style={{
                fontSize: "11px",
                lineHeight: 1.42,
              }}
            >
              <li style={{ marginTop: "3.5px", marginBottom: "3.5px" }}>
                <strong>
                  Campus Mantri (Campus Ambassador), GeeksforGeeks SPSU:
                </strong>{" "}
                Spearheaded university coding culture, organizing coding contests,
                DSA study cohorts, and technical workshops impacting 200+ students.
              </li>
              <li style={{ marginTop: "3.5px", marginBottom: "3.5px" }}>
                <strong>Organizer, WORTH IT Innovation Challenge:</strong> Founded a
                2-week builder sprint under Worthfinding Studio providing 9 direct
                internships across engineering, design, and business tracks.
              </li>
              <li style={{ marginTop: "3.5px", marginBottom: "3.5px" }}>
                <strong>
                  2nd Position, Inter-University Debate Competition (2026):
                </strong>{" "}
                Represented Sir Padampat Singhania University (SPSU) in the
                inter-university parliamentary debate championship, securing runner-up
                honors.
              </li>
              <li style={{ marginTop: "3.5px", marginBottom: "3.5px" }}>
                <strong>Competitive Debating Champion (Sainik School):</strong>{" "}
                Awarded House Debate Champion (Best Debater) and secured 2nd Place
                in North Zone Inter-School Debate Championship out of 20+
                participating institutions.
              </li>
            </ul>
          </section>

          {/* ACHIEVEMENTS & CERTIFICATIONS */}
          <section style={{ marginTop: "14px" }}>
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1px",
                marginBottom: "4px",
              }}
            >
              Achievements &amp; Certifications
            </h2>
            <ul
              className="resume-list"
              style={{
                fontSize: "11px",
                lineHeight: 1.42,
              }}
            >
              <li style={{ marginTop: "3.5px", marginBottom: "3.5px" }}>
                <strong>NPTEL IIT Kharagpur:</strong> Fundamentals of Digital
                Marketing —{" "}
                <strong>95% Score, Elite + Gold Topper (Top 2% Nationwide)</strong>.
              </li>
              <li style={{ marginTop: "3.5px", marginBottom: "3.5px" }}>
                <strong>freeCodeCamp:</strong> Scientific Computing with Python
                Certification (Verification ID: fcc-339c2573-aad6-4d57-pyv9).
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
