import React from "react";

export default function ResumePrintPage() {
  return (
    <main
      style={{
        maxWidth: "850px",
        margin: "0 auto",
        background: "white",
        color: "black",
        padding: "32px 48px",
        fontFamily: '"Times New Roman", Times, Georgia, serif',
        lineHeight: 1.3,
      }}
    >
      {/* HEADER */}
      <header style={{ textAlign: "center", paddingBottom: "4px" }}>
        <h1
          style={{
            fontSize: "28px",
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
            fontSize: "12.5px",
            color: "#111",
            marginTop: "4px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "4px 8px",
          }}
        >
          <span>+91 9467249110</span>
          <span>|</span>
          <a href="mailto:suyashyadav1709@gmail.com" style={{ color: "black" }}>
            suyashyadav1709@gmail.com
          </a>
          <span>|</span>
          <a
            href="https://linkedin.com/in/suyash--yadav"
            style={{ color: "black" }}
          >
            linkedin.com/in/suyash--yadav
          </a>
          <span>|</span>
          <a href="https://github.com/Sparkyyy45" style={{ color: "black" }}>
            github.com/Sparkyyy45
          </a>
          <span>|</span>
          <a href="https://worthfinding.tech" style={{ color: "black" }}>
            worthfinding.tech
          </a>
        </div>
        <div style={{ fontSize: "11.5px", color: "#444", marginTop: "2px" }}>
          Rewari, Haryana / Udaipur, Rajasthan, India
        </div>
      </header>

      {/* EDUCATION */}
      <section style={{ marginTop: "12px" }}>
        <h2
          style={{
            fontSize: "13.5px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderBottom: "1.5px solid black",
            paddingBottom: "2px",
            marginBottom: "6px",
          }}
        >
          Education
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12.5px",
          }}
        >
          <div>
            <strong>Sir Padampat Singhania University (SPSU)</strong>
            <em style={{ marginLeft: "4px" }}>
              — B.Tech in Computer Science &amp; Engineering (Full Stack
              Specialization)
            </em>
          </div>
          <div style={{ whiteSpace: "nowrap", textAlign: "right" }}>
            <span>Udaipur, India</span>
            <span style={{ marginLeft: "8px", color: "#444" }}>
              2025 – 2028
            </span>
          </div>
        </div>
        <p style={{ fontSize: "11.5px", marginTop: "2px", color: "#222" }}>
          <strong>Relevant Coursework:</strong> Data Structures &amp;
          Algorithms, Object-Oriented Programming (C++), Database Management
          Systems (DBMS), Operating Systems, Computer Networks, Full Stack Web
          Architecture, System Design.
        </p>
      </section>

      {/* TECHNICAL SKILLS */}
      <section style={{ marginTop: "12px" }}>
        <h2
          style={{
            fontSize: "13.5px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderBottom: "1.5px solid black",
            paddingBottom: "2px",
            marginBottom: "6px",
          }}
        >
          Technical Skills
        </h2>
        <div
          style={{
            fontSize: "12px",
            lineHeight: 1.5,
            color: "#111",
          }}
        >
          <div>
            <strong>Languages:</strong> TypeScript, JavaScript (ES6+), Python,
            C++, SQL, HTML5, CSS3
          </div>
          <div>
            <strong>Frontend:</strong> React.js, Next.js (App Router, Server
            Components), Tailwind CSS, Redux Toolkit, Framer Motion
          </div>
          <div>
            <strong>Backend &amp; APIs:</strong> Node.js, Express.js, FastAPI,
            RESTful APIs, WebSockets, tRPC
          </div>
          <div>
            <strong>Databases &amp; Cloud:</strong> PostgreSQL, MongoDB, Prisma
            ORM, Supabase, Redis, Docker, Vercel, AWS (EC2/S3)
          </div>
          <div>
            <strong>Tools &amp; Practices:</strong> Git, GitHub Actions (CI/CD),
            Postman, Linux, Agile, RAG &amp; Vector Search, OpenAI API
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section style={{ marginTop: "12px" }}>
        <h2
          style={{
            fontSize: "13.5px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderBottom: "1.5px solid black",
            paddingBottom: "2px",
            marginBottom: "6px",
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
              fontSize: "12.5px",
            }}
          >
            <div>
              <strong>Founder &amp; Full-Stack Lead</strong>
              <em style={{ marginLeft: "4px" }}>— Building Worthfinding</em>
            </div>
            <div style={{ whiteSpace: "nowrap", textAlign: "right" }}>
              <span>Udaipur, India</span>
              <span style={{ marginLeft: "8px", color: "#444" }}>
                Jan 2026 – Present
              </span>
            </div>
          </div>
          <ul
            style={{
              marginLeft: "16px",
              marginTop: "2px",
              fontSize: "11.5px",
              lineHeight: 1.4,
            }}
          >
            <li>
              Architected high-performance digital flagships using Next.js
              Server Components and Tailwind CSS, achieving sub-second Largest
              Contentful Paint (LCP) and 98+ Google Lighthouse scores.
            </li>
            <li>
              Engineered dynamic acquisition funnels and custom JSON-LD schemas,
              driving top-3 search rankings and a 40% increase in organic client
              inquiries for regional hospitality and enterprise brands.
            </li>
            <li>
              Implemented automated CI/CD deployment pipelines on Vercel with
              zero-downtime production rollouts.
            </li>
          </ul>
        </div>

        {/* DMV CoreTech */}
        <div style={{ marginBottom: "8px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12.5px",
            }}
          >
            <div>
              <strong>Full Stack Developer Intern</strong>
              <em style={{ marginLeft: "4px" }}>— DMV CoreTech</em>
            </div>
            <div style={{ whiteSpace: "nowrap", textAlign: "right" }}>
              <span>Remote, India</span>
              <span style={{ marginLeft: "8px", color: "#444" }}>
                May 2026 – Present
              </span>
            </div>
          </div>
          <ul
            style={{
              marginLeft: "16px",
              marginTop: "2px",
              fontSize: "11.5px",
              lineHeight: 1.4,
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
              Resolved 25+ critical production bugs and collaborated in
              cross-functional agile sprints to deliver sprint goals ahead of
              schedule.
            </li>
          </ul>
        </div>

        {/* GSSoC */}
        <div style={{ marginBottom: "4px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12.5px",
            }}
          >
            <div>
              <strong>Open Source Contributor</strong>
              <em style={{ marginLeft: "4px" }}>
                — GirlScript Summer of Code (GSSoC&apos;26)
              </em>
            </div>
            <div style={{ whiteSpace: "nowrap", textAlign: "right" }}>
              <span>Remote, India</span>
              <span style={{ marginLeft: "8px", color: "#444" }}>
                May 2026 – Present
              </span>
            </div>
          </div>
          <ul
            style={{
              marginLeft: "16px",
              marginTop: "2px",
              fontSize: "11.5px",
              lineHeight: 1.4,
            }}
          >
            <li>
              Selected among thousands of applicants to contribute to
              production-grade open-source developer tools and web platforms.
            </li>
            <li>
              Authored modular TypeScript components, wrote unit tests, and
              resolved complex issues with 10+ pull requests merged.
            </li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ marginTop: "12px" }}>
        <h2
          style={{
            fontSize: "13.5px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderBottom: "1.5px solid black",
            paddingBottom: "2px",
            marginBottom: "6px",
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
            ],
          },
          {
            name: "DevPort",
            tech: "Next.js, TypeScript, Tailwind CSS, Vercel API",
            date: "July 2026",
            bullets: [
              "Engineered an automated developer portfolio generator importing GitHub repositories to deploy recruiter-focused bento websites in under 60 seconds with 6 dynamic themes.",
              "Built real-time profile analytics, dynamic OG image generation, and single-click automated Vercel deployment.",
            ],
          },
          {
            name: "openenv",
            tech: "Node.js, Docker, JavaScript, GitHub Actions, CI/CD",
            date: "June 2026",
            bullets: [
              "Created an open registry of full-stack production starter kits pre-configured with databases (PostgreSQL/MongoDB), containerized environments (Docker), and automated CI/CD validation.",
              "Automated environment testing via GitHub Actions, reducing developer onboarding and setup time from 45 minutes to a single CLI command.",
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
        ].map((project) => (
          <div key={project.name} style={{ marginBottom: "8px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12.5px",
              }}
            >
              <div>
                <strong>{project.name}</strong>
                <span
                  style={{
                    marginLeft: "6px",
                    color: "#333",
                    fontSize: "11.5px",
                  }}
                >
                  | {project.tech}
                </span>
              </div>
              <span
                style={{
                  whiteSpace: "nowrap",
                  color: "#444",
                  fontSize: "12px",
                }}
              >
                {project.date}
              </span>
            </div>
            <ul
              style={{
                marginLeft: "16px",
                marginTop: "2px",
                fontSize: "11.5px",
                lineHeight: 1.4,
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
      <section style={{ marginTop: "12px" }}>
        <h2
          style={{
            fontSize: "13.5px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderBottom: "1.5px solid black",
            paddingBottom: "2px",
            marginBottom: "6px",
          }}
        >
          Leadership &amp; Extracurriculars
        </h2>
        <ul
          style={{
            marginLeft: "16px",
            fontSize: "11.5px",
            lineHeight: 1.5,
          }}
        >
          <li>
            <strong>
              Campus Mantri (Campus Ambassador), GeeksforGeeks SPSU:
            </strong>{" "}
            Spearheaded university coding culture, organizing coding contests,
            DSA study cohorts, and technical workshops impacting 200+ students.
          </li>
          <li>
            <strong>Organizer, WORTH IT Innovation Challenge:</strong> Founded a
            2-week builder sprint under Worthfinding Studio providing 9 direct
            internships across engineering, design, and business tracks.
          </li>
          <li>
            <strong>Competitive Debating Champion (Sainik School):</strong>{" "}
            Awarded House Debate Champion (Best Debater) and secured 2nd Place
            in North Zone Inter-School Debate Championship out of 20+
            participating institutions.
          </li>
        </ul>
      </section>

      {/* ACHIEVEMENTS & CERTIFICATIONS */}
      <section style={{ marginTop: "12px" }}>
        <h2
          style={{
            fontSize: "13.5px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderBottom: "1.5px solid black",
            paddingBottom: "2px",
            marginBottom: "6px",
          }}
        >
          Achievements &amp; Certifications
        </h2>
        <ul
          style={{
            marginLeft: "16px",
            fontSize: "11.5px",
            lineHeight: 1.5,
          }}
        >
          <li>
            <strong>NPTEL IIT Kharagpur:</strong> Fundamentals of Digital
            Marketing —{" "}
            <strong>95% Score, Elite + Gold Topper (Top 2% Nationwide)</strong>.
          </li>
          <li>
            <strong>freeCodeCamp:</strong> Scientific Computing with Python
            Certification (Verification ID: fcc-339c2573-aad6-4d57-pyv9).
          </li>
        </ul>
      </section>
    </main>
  );
}
