export interface UpdatePost {
    id: string;
    title: string;
    headline: string;
    category: "Product Launch" | "Campus Leadership" | "Internship & Career" | "Academic & Awards" | "Studio & Hackathon";
    date: string;
    exactDateLabel: string;
    readTime: string;
    excerpt: string;
    content: string[];
    keyHighlights?: string[];
    tags: string[];
    metrics: {
        likes: number;
        comments: number;
        impressions?: string;
        reposts?: number;
    };
    projectLink?: {
        label: string;
        href: string;
    };
    postUrl: string;
    linkedinUrl: string;
}

export const updatesData: UpdatePost[] = [
    {
        id: "worthfinding-worth-it-challenge",
        title: "WORTH IT: The Real-World Innovation Challenge by Worthfinding Studio",
        headline: "Launching the Worth IT Challenge: A 2-week build sprint for student builders to fix real friction.",
        category: "Studio & Hackathon",
        date: "September 2026",
        exactDateLabel: "Recent update",
        readTime: "2 min read",
        excerpt: "Most hackathons start with a problem statement. Worth IT starts with a real problem. We’re launching a 2-week build sprint by Worthfinding Studio with 9 direct internship opportunities.",
        content: [
            "WORTH IT: The Real-World Innovation Challenge",
            "Most hackathons start with a problem statement. Worth IT starts with a real problem.",
            "We’re launching the Worth IT: The Real-World Innovation Challenge, a 2-week build sprint by Worthfinding Studio for people who want to turn ideas into something that actually matters.",
            "Find friction in cafés, stores, local businesses, communities, or everyday systems. Understand the problem. Build something that genuinely fixes it. Then put it in front of people who can help take it further.",
            "Pick your track:",
            "💻 BUILD — Software, AI/ML, apps, automation & discovery tools",
            "📈 BUSINESS — Case studies, market positioning & growth strategy",
            "🎨 DESIGN — UI/UX, branding, landing pages & visual systems",
            "And this isn’t just another certificate hunt:",
            "• 9 direct internship opportunities (3 Developers • 3 Designers • 3 Business roles)",
            "• Certificate of Excellence + direct founder network access",
            "• Verified participation certificates + founder toolkits for everyone who submits",
            "No resumes. No interviews. First round: just build.",
            "If you've been waiting for a shot to actually build something worth noticing, this is it. Ideas → People → Real Impact."
        ],
        keyHighlights: [
            "2-week build sprint solving real everyday friction for businesses and communities.",
            "9 direct internship roles across engineering, design, and business.",
            "First round evaluates purely on what you build—no resumes, no interviews."
        ],
        tags: ["#WorthIT", "#WorthFinding", "#Hackathon", "#Innovation", "#BuildInPublic", "#Startups", "#AI", "#Design", "#Internships"],
        metrics: {
            likes: 5,
            comments: 0,
            reposts: 2,
        },
        projectLink: {
            label: "Registration & Sprint Portal",
            href: "https://lnkd.in/di4tDF5A",
        },
        postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7503442172252426240/",
        linkedinUrl: "https://www.linkedin.com/in/suyash--yadav/",
    },
    {
        id: "devport-ai-portfolio-builder-launch",
        title: "Meet DevPort: AI-powered developer portfolio builder from zero to deployed in 60 seconds",
        headline: "Every developer has skills, but portfolios take days to build. I built DevPort to fix that.",
        category: "Product Launch",
        date: "July 2026",
        exactDateLabel: "2 months ago",
        readTime: "2 min read",
        excerpt: "Every developer I know has good skills, but building a portfolio from scratch takes days. Meet DevPort: goes from zero to live, recruiter-ready deployment in under 60 seconds.",
        content: [
            "Every developer I know has good skills. But their portfolio? Either outdated, ugly, or doesn't exist.",
            "Building one from scratch takes days: setting up a repo, writing HTML/CSS, deploying, maintaining it... just to show recruiters what you've built.",
            "So I fixed that. Meet DevPort, an AI-powered developer portfolio builder that goes from zero to deployed in 60 seconds.",
            "🔗 the-devport.vercel.app",
            "Here's what DevPort does:",
            "→ Upload your resume → AI extracts & formats everything",
            "→ Enter your GitHub username → auto-fetches your repos, stars & languages",
            "→ Get a live, recruiter-ready portfolio at dev/yourname",
            "→ All in under 60 seconds. Zero cost. Forever.",
            "What I built under the hood:",
            "• Next.js + Vercel Edge Caching (18ms response time worldwide)",
            "• Supabase + PostgreSQL Row-Level Security",
            "• Client-side PDF parsing with pdfjs-dist (no file ever hits a server)",
            "• Google Gemini Flash for AI resume normalization",
            "• Built-in recruiter inbox for every portfolio",
            "100% free. No credit card. No setup. Just your link."
        ],
        keyHighlights: [
            "Edge-rendered Next.js with 18ms response times globally.",
            "Privacy-first: Client-side PDF parsing using pdfjs-dist without server upload.",
            "AI normalization powered by Google Gemini Flash and Supabase PostgreSQL RLS."
        ],
        tags: ["#DevPort", "#NextJS", "#Supabase", "#Gemini", "#OpenSource", "#BuildInPublic", "#SaaS", "#DeveloperTools", "#SPSU"],
        metrics: {
            likes: 15,
            comments: 0,
            impressions: "548 impressions",
        },
        projectLink: {
            label: "Try DevPort Live",
            href: "https://the-devport.vercel.app/",
        },
        postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7477383146976464896/",
        linkedinUrl: "https://www.linkedin.com/in/suyash--yadav/",
    },
    {
        id: "gfg-campus-mantri-appointment",
        title: "Appointed as the Official GeeksforGeeks Campus Mantri at SPSU Udaipur",
        headline: "Bridging GeeksforGeeks and Sir Padampat Singhania University to empower the student tech community.",
        category: "Campus Leadership",
        date: "July 2026",
        exactDateLabel: "2 months ago",
        readTime: "2 min read",
        excerpt: "Thrilled to share that I've officially been appointed as the Campus Mantri at Sir Padampat Singhania University (SPSU), Udaipur, bringing tech events, coding challenges, and DSA resources to campus.",
        content: [
            "Thrilled to share some exciting news!",
            "I've officially been appointed as the Campus Mantri, the Official Representative of GeeksforGeeks at Sir Padampat Singhania University SPSU, Udaipur!",
            "This means I'll be the bridge between GeeksforGeeks and the student community at SPSU bringing more learning opportunities, tech events, coding challenges, and resources right to our campus.",
            "To every student at Sir Padampat Singhania University SPSU, this is YOUR opportunity too. Let's build something amazing together. Whether you want to explore DSA, crack interviews, or just level up your coding game, I'm here to make that happen.",
            "Can't wait to make our campus a hub of tech and innovation. The journey starts now."
        ],
        keyHighlights: [
            "Official campus representative for GeeksforGeeks at SPSU Udaipur.",
            "Organizing campus coding contests, workshops, and interview preparation sessions.",
            "Connecting students directly to high-quality DSA and tech placement resources."
        ],
        tags: ["#CampusMantri", "#GeeksforGeeks", "#GFG", "#SPSU", "#Udaipur", "#DSA", "#TechCommunity", "#Coding"],
        metrics: {
            likes: 35,
            comments: 2,
            impressions: "1,189 impressions",
        },
        postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7475894226547855360/",
        linkedinUrl: "https://www.linkedin.com/in/suyash--yadav/",
    },
    {
        id: "influencer-iq-msme-launch",
        title: "InfluencerIQ: Hinglish voice matching & automated escrow for Indian MSMEs",
        headline: "Building an influencer matching platform that understands how Indian business owners actually hire creators.",
        category: "Product Launch",
        date: "July 2026",
        exactDateLabel: "2 months ago",
        readTime: "3 min read",
        excerpt: "A sweet shop owner in Jaipur wants to run an influencer campaign, but tools are built for agencies thinking in CPMs. InfluencerIQ lets them speak in Hinglish to match creators with escrow payouts.",
        content: [
            "Spent the last few weeks building something I couldn't stop thinking about: an influencer matching platform that actually understands how Indian MSMEs hire creators.",
            "Here's the problem I kept seeing: a sweet shop owner in Jaipur wants to run an influencer campaign, but every tool out there is built for agencies who think in CPMs and engagement funnels.",
            "So I built InfluencerIQ to meet them where they are: speak into the mic in Hinglish (\"Jaipur me sweet shop ke liye food bloggers chahiye, budget 10k\"), and it auto-fills category, location, budget, demographics. No forms, no jargon.",
            "But I didn't want to stop at 'easy mode.' So there's also an advanced mode with full algorithmic weight overrides for agencies who want to tune the match model themselves.",
            "Under the hood, every creator gets scored 0-100 across five weighted dimensions: audience fit, engagement quality, category fit, authenticity, historical performance—and when you shortlist multiple creators, it discounts for audience overlap so you're not paying for reach you don't actually have.",
            "The part I'm most proud of, though, is the financial layer: GST and TDS (Section 194C) calculated automatically, Razorpay UPI checkout, and payouts sit in escrow until content actually goes live. Creator contact details stay masked until the deal is real, DPDP Act compliant.",
            "GitHub repository: https://lnkd.in/gMWJ3TsF"
        ],
        keyHighlights: [
            "Voice-first interface with Hinglish NLP parameter extraction for local business owners.",
            "Algorithmic scoring across 5 weighted dimensions with audience overlap deduplication.",
            "Automated GST & Section 194C TDS calculation with Razorpay UPI escrow."
        ],
        tags: ["#InfluencerIQ", "#MSME", "#VoiceAI", "#Fintech", "#Nextjs", "#TypeScript", "#Razorpay", "#BuildInPublic"],
        metrics: {
            likes: 13,
            comments: 0,
            impressions: "657 impressions",
        },
        projectLink: {
            label: "View InfluencerIQ on GitHub",
            href: "https://github.com/Sparkyyy45",
        },
        postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7473420732295761920/",
        linkedinUrl: "https://www.linkedin.com/in/suyash--yadav/",
    },
    {
        id: "ncc-leadership-reflections-spsu",
        title: "What does NCC actually teach you? Reflections from Sir Padampat Singhania University",
        headline: "Leadership isn't always about being in charge. Sometimes, it's simply about stepping forward.",
        category: "Campus Leadership",
        date: "August 2026",
        exactDateLabel: "2 weeks ago",
        readTime: "2 min read",
        excerpt: "For me, NCC has been much more than wearing the uniform. Over the past few months at SPSU, NCC gave me opportunities to step up, contribute, and learn by doing across state and campus events.",
        content: [
            "What does NCC actually teach you? For me, it has been much more than wearing the uniform.",
            "Over the past few months at Sir Padampat Singhania University SPSU, NCC gave me opportunities to step up, contribute, and learn by doing:",
            "🌱 Tree Plantation Drive — Helped coordinate cadets, volunteers, and guests during the drive.",
            "🎯 TSC Shooting Selection — Got selected for the TSC shooting selection process and experienced the discipline and pressure of competitive shooting firsthand.",
            "🛣️ Road Safety — Presented a Road Safety & Awareness session, turning a topic we often overlook into a conversation that matters.",
            "🇮🇳 Independence Day — Stepped onto the stage as an anchor for the Independence Day celebration, pushing myself further in public speaking and confidence.",
            "And behind these experiences was the constant guidance of our Prof. (Lt.) (Dr.) D S Chouhan Sir, whose mentorship and encouragement pushed us to participate, take responsibility, and keep improving.",
            "Different activities. Different challenges. But one common lesson: Leadership isn't always about being in charge. Sometimes, it's simply about stepping forward when something needs to be done. Jai Hind! 🇮🇳"
        ],
        keyHighlights: [
            "Selected for the TSC competitive shooting selection process under intense discipline.",
            "Anchored the university-wide Independence Day celebration at SPSU.",
            "Coordinated tree plantation and led interactive road safety awareness sessions."
        ],
        tags: ["#NCC", "#Leadership", "#StudentLeadership", "#SPSU", "#PublicSpeaking", "#Teamwork", "#PersonalGrowth"],
        metrics: {
            likes: 36,
            comments: 1,
            impressions: "1,067 impressions",
        },
        postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7496418362147778561/",
        linkedinUrl: "https://www.linkedin.com/in/suyash--yadav/",
    },
    {
        id: "dmv-coretech-internship-offer",
        title: "Got my first internship offer! Joining DMV CoreTech as a MERN Stack Intern",
        headline: "Stepping into industry engineering: 'Let's see what they can't teach you in college.'",
        category: "Internship & Career",
        date: "May 2026",
        exactDateLabel: "3 months ago",
        readTime: "1 min read",
        excerpt: "Got my first internship offer! Joining DMV CoreTech as a MERN Stack Intern. Took it easy, things fell into place. Let's see what they can't teach you in college.",
        content: [
            "Got my first internship offer! 🎉",
            "Joining DMV CoreTech as a MERN Stack Intern from May 22.",
            "Took it easy, things fell into place. That's usually how it goes.",
            "Let's see what they can't teach you in college. Looking forward to shipping code in production environments, managing complex database schemas, and working with experienced developers!"
        ],
        keyHighlights: [
            "Joined DMV CoreTech as Full Stack / MERN Stack Intern.",
            "Hands-on production software engineering and API development.",
            "First industry milestone applying academic computer science to real systems."
        ],
        tags: ["#MERNStack", "#Internship", "#WebDevelopment", "#SoftwareEngineer", "#CareerMilestone"],
        metrics: {
            likes: 34,
            comments: 0,
            impressions: "1,422 impressions",
        },
        postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7463111261497569280/",
        linkedinUrl: "https://www.linkedin.com/in/suyash--yadav/",
    },
    {
        id: "nptel-iit-kharagpur-topper",
        title: "95% Score & Top 2% Topper: Fundamentals of Digital Marketing (IIT Kharagpur)",
        headline: "Wrapped up NPTEL's IIT Kharagpur course among 5,175 competitors with an Elite Topper stamp.",
        category: "Academic & Awards",
        date: "May 2026",
        exactDateLabel: "3 months ago",
        readTime: "1 min read",
        excerpt: "95% 🎯 Top 2% 🏅 5,175 competitors 👀. Just wrapped up NPTEL's Fundamentals of Digital Marketing from IIT Kharagpur with an Elite Topper stamp.",
        content: [
            "95% 🎯 Top 2% 🏅 5,175 competitors 👀",
            "Just wrapped up NPTEL's Fundamentals of Digital Marketing (IIT Kharagpur) and didn't expect to come out with a Topper stamp, but here we are lol.",
            "Grateful for the push this course gave me. If anyone's looking to actually understand digital marketing beyond the surface level, highly recommend."
        ],
        keyHighlights: [
            "Scored 95% in IIT Kharagpur NPTEL national certification examination.",
            "Ranked in the Top 2% nationwide out of 5,175 candidates.",
            "Awarded Elite + Gold Topper certification."
        ],
        tags: ["#NPTEL", "#Topper", "#DigitalMarketing", "#IITKharagpur", "#Elite", "#ContinuousLearning"],
        metrics: {
            likes: 49,
            comments: 2,
            impressions: "1,400 impressions",
        },
        postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7461459127278542849/",
        linkedinUrl: "https://www.linkedin.com/in/suyash--yadav/",
    },
    {
        id: "first-year-wrapup-hackathon-awards",
        title: "Year One, Done: 4 Podiums, Debate Championships & Hackathons at SPSU",
        headline: "Reflections on Year 1: Tech Decoded Hackathon, Pacific University Debate, and Game Dev Winner.",
        category: "Academic & Awards",
        date: "April 2026",
        exactDateLabel: "4 months ago",
        readTime: "2 min read",
        excerpt: "Year one, done. 🥈 2nd place @ Tech Decoded Hackathon, 🥈 2nd place @ English Debate (Pacific University), 🥇 1st place @ Game Dev, and Top Performer from L&T Edutech.",
        content: [
            "Year one, done. 🎓",
            "Honestly didn't expect my first year to hit this hard:",
            "🥈 2nd place @ Tech Decoded Hackathon (shoutout to my own club for running a legit competition)",
            "🥈 2nd place @ English Debate, Pacific University",
            "🥇 1st place @ Game Development Competition",
            "🥇 Top Performer appreciation from L&T Edutech",
            "Not bad for a first lap, ngl.",
            "Still figuring things out, still learning, still very much a work in progress—but this year showed me what I'm actually capable of when I stop overthinking and just go for it.",
            "Here's to year two being even messier and more fun."
        ],
        keyHighlights: [
            "🥈 2nd Place: Tech Decoded University Hackathon.",
            "🥈 2nd Place: English Debate Championship at Pacific University.",
            "🥇 1st Place: Game Development Competition.",
            "🥇 Top Performer Appreciation from L&T Edutech."
        ],
        tags: ["#SPSU", "#HackathonWinner", "#DebateChampion", "#GameDev", "#FirstYear", "#StudentLife"],
        metrics: {
            likes: 58,
            comments: 0,
            impressions: "1,485 impressions",
        },
        postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7457394269209776128/",
        linkedinUrl: "https://www.linkedin.com/in/suyash--yadav/",
    },
];
