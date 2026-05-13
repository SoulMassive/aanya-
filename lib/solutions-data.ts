import { 
  Route, Video, BarChart2, Award, 
  Users, Target, Network, TrendingUp,
  Scan, Bot, Workflow, Eye,
  ShieldCheck, Zap, FileText, Trophy,
  MessageSquare, AlertCircle, Layers, Brain,
  GitBranch, Sliders, LayoutTemplate, RefreshCw,
  AlertTriangle, Lightbulb, DollarSign,
  FileInput, RefreshCcw, Download, ClipboardList,
  Database, Cpu, PieChart, Compass, Sparkles, HeartPulse, ArrowLeftRight,
  Link, MessageCircle, Activity, Filter, Percent, Scale, ClipboardCheck,
  Map, Search, Server, Plug, Rocket, PenTool, MousePointer, Drama, Accessibility,
  Link2, BarChart, Monitor
} from 'lucide-react'

export const solutionsData: Record<string, any> = {
  'corporate-training': {
    category: 'Enterprise Learning',
    title: 'Corporate Training',
    hero: {
      headline: "Scalable Corporate Training That Drives Real Performance",
      sub: "Aanya's corporate training ecosystem delivers role-specific, outcome-driven programs for teams of 50 to 500,000.",
      badge: "Enterprise Learning",
      metric: { label: "Training Completion", value: "94" }
    },
    overview: {
      text: "Upskill at enterprise scale without compromising quality or consistency.",
      bullets: [
        "Custom curriculum aligned to business goals",
        "Blended learning: live + async + microlearning",
        "Real-time manager dashboards"
      ],
      chartData: [
        { label: 'Sales', value: 91 },
        { label: 'Tech', value: 87 },
        { label: 'HR', value: 78 },
        { label: 'Ops', value: 83 },
        { label: 'Finance', value: 72 }
      ]
    },
    features: [
      { title: "Role-Based Learning Paths", icon: Route, desc: "Tailored content for every function, seniority, and department." },
      { title: "Live + Self-Paced Modules", icon: Video, desc: "Flexible formats that adapt to how your teams actually learn." },
      { title: "Completion Analytics", icon: BarChart2, desc: "Track progress, engagement, and ROI across every learner." },
      { title: "Certification Engine", icon: Award, desc: "Issue branded certificates tied to skill assessments." }
    ],
    steps: [
      { title: "Needs Assessment", desc: "Aanya audits your current skill landscape" },
      { title: "Curriculum Design", desc: "Custom content built by L&D experts + AI" },
      { title: "Deployment", desc: "Launched on your LMS or Aanya's platform" },
      { title: "Analytics & Iteration", desc: "Continuous performance tracking" }
    ],
    metrics: [
      { label: "Faster time-to-competency", value: "3.2x" },
      { label: "Average program completion rate", value: "89%" },
      { label: "Reduction in training costs", value: "60%" },
      { label: "Average deployment timeline", value: "6 weeks" }
    ]
  },
  'leadership-development': {
    category: 'Enterprise Learning',
    title: 'Leadership Development',
    hero: {
      headline: "Build the Leaders Your Organization Needs for Tomorrow",
      sub: "From emerging managers to C-suite executives — Aanya's leadership programs develop strategic thinkers at every level.",
      badge: "Enterprise Learning",
      metric: { label: "Leadership Readiness", value: "82" }
    },
    overview: {
      text: "Leadership is your most leveraged investment. We make it measurable.",
      bullets: [
        "Cohort-based executive programs",
        "360° feedback and coaching integration",
        "Succession planning analytics"
      ],
      radarData: true // Flag to show radar chart
    },
    features: [
      { title: "Executive Coaching Integration", icon: Users, desc: "1:1 coaching sessions embedded within structured learning journeys." },
      { title: "360° Assessment Engine", icon: Target, desc: "Multi-rater feedback from peers, managers, and direct reports." },
      { title: "Cohort Learning Design", icon: Network, desc: "Peer-cohort programs that build connection alongside capability." },
      { title: "Succession Intelligence", icon: TrendingUp, desc: "Identify and develop your next generation of leaders with data." }
    ],
    steps: [
      { title: "Leadership Audit", desc: "Map existing leadership capabilities" },
      { title: "Cohort Formation", desc: "Group leaders by level and function" },
      { title: "Program Delivery", desc: "Blended: workshops + coaching + digital" },
      { title: "Succession Mapping", desc: "Pipeline insights for HR and boards" }
    ],
    metrics: [
      { label: "Leadership pipeline growth", value: "2.4x" },
      { label: "Managers report improved team performance", value: "78%" },
      { label: "Program satisfaction (NPS)", value: "91%" },
      { label: "Average program duration", value: "12 months" }
    ]
  },
  'digital-upskilling': {
    category: 'Enterprise Learning',
    title: 'Digital Upskilling',
    hero: {
      headline: "Future-Proof Your Workforce With AI-Powered Digital Skills",
      sub: "Help employees master the tools, platforms, and mindsets that define modern work.",
      badge: "Enterprise Learning",
      metric: { label: "Digital Proficiency", value: "76" }
    },
    overview: {
      text: "The digital skills gap costs enterprises $1.3T annually. Aanya closes it.",
      bullets: [
        "AI tools literacy and prompt engineering",
        "Data fluency for non-technical roles",
        "Cloud, automation, and security fundamentals"
      ],
      skillHeatMap: true
    },
    features: [
      { title: "Digital Skill Diagnostics", icon: Scan, desc: "Baseline assessments that identify skill gaps before training begins." },
      { title: "AI Tools Literacy", icon: Bot, desc: "Practical training on AI tools: ChatGPT, Copilot, Gemini, and more." },
      { title: "Personalized Learning Paths", icon: Workflow, desc: "Each employee gets a unique journey based on their role and gaps." },
      { title: "Manager Visibility", icon: Eye, desc: "Live dashboards so managers can track team-wide digital progress." }
    ],
    steps: [
      { title: "Skills Diagnostic", desc: "Role-based digital maturity assessment" },
      { title: "Path Generation", desc: "AI assigns personalized learning journeys" },
      { title: "Structured Learning", desc: "Modules delivered in 15-30 min sprints" },
      { title: "Proficiency Validation", desc: "Skill badges and performance tests" }
    ],
    metrics: [
      { label: "Improvement in digital tool adoption", value: "4.1x" },
      { label: "Average time to measurable skill gain", value: "23 days" },
      { label: "Learner engagement rate", value: "94%" },
      { label: "Digital skills covered", value: "50+" }
    ]
  },
  'compliance-training': {
    category: 'Enterprise Learning',
    title: 'Compliance Training',
    hero: {
      headline: "Compliance Training That Employees Actually Complete",
      sub: "Move beyond checkbox compliance — build genuine understanding of regulations, ethics, and risk across your organization.",
      badge: "Enterprise Learning",
      metric: { label: "Compliance Rate", value: "87" }
    },
    overview: {
      text: "Compliance isn't optional. But it doesn't have to be painful.",
      bullets: [
        "Regulatory content across 60+ frameworks",
        "Auto-assigned by role, region, and risk profile",
        "Audit-ready reporting in one click"
      ],
      donutData: [
        { label: 'Completed', value: 87, color: '#38BDF8' },
        { label: 'In Progress', value: 9, color: '#2563EB' },
        { label: 'Overdue', value: 4, color: '#EF4444' }
      ]
    },
    features: [
      { title: "60+ Compliance Frameworks", icon: ShieldCheck, desc: "Pre-built content for GDPR, POSH, ISO 27001, SOC 2, AML, and more." },
      { title: "Auto-Assignment Engine", icon: Zap, desc: "Training auto-assigned based on role, region, and risk classification." },
      { title: "Audit-Ready Reports", icon: FileText, desc: "One-click compliance reports for auditors, boards, and regulators." },
      { title: "Gamified Assessments", icon: Trophy, desc: "Scenario-based learning that builds genuine understanding, not rote recall." }
    ],
    steps: [
      { title: "Regulatory Mapping", desc: "Map regulations to roles and regions" },
      { title: "Content Assignment", desc: "Auto-assign relevant modules per employee" },
      { title: "Training Delivery", desc: "Short, engaging, scenario-based modules" },
      { title: "Audit Reporting", desc: "Real-time dashboards + instant export" }
    ],
    metrics: [
      { label: "Completion rate on mandatory modules", value: "99.1%" },
      { label: "Regulatory penalties reported", value: "Zero" },
      { label: "Audit report generation", value: "1-click" },
      { label: "Supported frameworks", value: "60+" }
    ]
  },
  'intelligent-tutoring': {
    category: 'AI Solutions',
    title: 'Intelligent Tutoring',
    hero: {
      headline: "AI Tutors That Adapt to Every Learner, Every Moment",
      sub: "Aanya's Intelligent Tutoring System (ITS) delivers personalized, real-time guidance that scales expert teaching to thousands simultaneously.",
      badge: "AI Solutions",
      chatPreview: true
    },
    overview: {
      text: "One great teacher can only reach so many people. AI tutoring removes that ceiling.",
      bullets: [
        "Real-time hints, explanations, and corrections",
        "Adapts difficulty dynamically based on responses",
        "Supports text, voice, and multimodal interaction"
      ],
      learningCurve: true
    },
    features: [
      { title: "Adaptive Dialogue Engine", icon: MessageSquare, desc: "Socratic-style conversations that probe understanding, not just recall." },
      { title: "Real-Time Error Detection", icon: AlertCircle, desc: "Catches misconceptions instantly and redirects with targeted explanations." },
      { title: "Multimodal Interaction", icon: Layers, desc: "Supports text, voice, image input, and worked examples." },
      { title: "Learning State Modeling", icon: Brain, desc: "Tracks knowledge state per learner per concept, continuously updating." }
    ],
    steps: [
      { title: "Knowledge Modeling", desc: "Map concept dependencies for each course" },
      { title: "Baseline Assessment", desc: "ITS establishes learner's current state" },
      { title: "Adaptive Dialogue", desc: "AI tutor engages, hints, explains, tests" },
      { title: "Mastery Signaling", desc: "ITS confirms competency before progressing" }
    ],
    metrics: [
      { label: "Faster knowledge acquisition", value: "2.8x" },
      { label: "Learner satisfaction", value: "91%" },
      { label: "Reduction in instructor tickets", value: "40%" },
      { label: "Tutoring interactions processed", value: "10M+" }
    ]
  },
  'adaptive-learning': {
    category: 'AI Solutions',
    title: 'Adaptive Learning',
    hero: {
      headline: "Learning That Reshapes Itself Around Every Individual",
      sub: "Aanya's adaptive engine continuously adjusts content sequence, difficulty, and format — so every learner takes the most efficient path to mastery.",
      badge: "AI Solutions"
    },
    overview: {
      text: "No two learners are alike. Generic curricula waste time and erode engagement.",
      bullets: [
        "Dynamic content sequencing powered by ML",
        "50+ learning signals tracked per session",
        "Format adaptation: video, text, quiz, simulation"
      ],
      branchingPaths: true
    },
    features: [
      { title: "ML-Powered Sequencing", icon: GitBranch, desc: "Content order dynamically optimized based on prior performance signals." },
      { title: "Difficulty Calibration", icon: Sliders, desc: "Assessments and challenges auto-scale to maintain optimal challenge level." },
      { title: "Format Preference Engine", icon: LayoutTemplate, desc: "Learns whether each person absorbs best through video, text, or interactive." },
      { title: "Spaced Repetition Integration", icon: RefreshCw, desc: "Automatically resurfaces weak concepts at optimal retention intervals." }
    ],
    steps: [
      { title: "Signal Collection", desc: "Track 50+ behavioral and performance signals" },
      { title: "Model Inference", desc: "ML models predict optimal next learning action" },
      { title: "Content Delivery", desc: "Serve the right format and difficulty dynamically" },
      { title: "Continuous Loop", desc: "Every interaction retrains the personal model" }
    ],
    metrics: [
      { label: "Average reduction in time-to-mastery", value: "35%" },
      { label: "Learning signals processed", value: "50+" },
      { label: "Improvement in 30-day retention", value: "88%" },
      { label: "Average learner experience rating", value: "4.6/5" }
    ]
  },
  'predictive-analytics': {
    category: 'AI Solutions',
    title: 'Predictive Analytics',
    hero: {
      headline: "See Learning Outcomes Before They Happen",
      sub: "Aanya's predictive models surface at-risk learners, forecast completion, and recommend interventions before small gaps become costly failures.",
      badge: "AI Solutions"
    },
    overview: {
      text: "Reactive L&D is expensive. Predictive L&D is a competitive advantage.",
      bullets: [
        "At-risk learner identification with 85% accuracy",
        "Completion forecasting at cohort level",
        "Prescriptive intervention recommendations"
      ],
      atRiskTable: [
        { name: 'Alex M.', risk: 'High', predicted: '45%', color: '#EF4444' },
        { name: 'Sarah K.', risk: 'Low', predicted: '98%', color: '#10B981' },
        { name: 'John D.', risk: 'Medium', predicted: '72%', color: '#F59E0B' },
        { name: 'Emily L.', risk: 'Low', predicted: '94%', color: '#10B981' },
        { name: 'Mark R.', risk: 'High', predicted: '38%', color: '#EF4444' }
      ]
    },
    features: [
      { title: "At-Risk Identification", icon: AlertTriangle, desc: "Flag learners likely to drop out 2 weeks before disengagement occurs." },
      { title: "Completion Forecasting", icon: TrendingUp, desc: "Predict program completion rates for cohorts and individuals." },
      { title: "Prescriptive Interventions", icon: Lightbulb, desc: "Receive specific recommended actions: nudge, resource, or human touch." },
      { title: "L&D ROI Modeling", icon: DollarSign, desc: "Project the financial return of training investments before committing." }
    ],
    steps: [
      { title: "Historical Modeling", desc: "Train on your organization's past learning data" },
      { title: "Signal Monitoring", desc: "Real-time tracking of 80+ behavioral indicators" },
      { title: "Prediction Generation", desc: "Models surface at-risk learners and cohorts" },
      { title: "Action Triggering", desc: "Automated nudges + human escalation workflows" }
    ],
    metrics: [
      { label: "At-risk learner prediction accuracy", value: "85%" },
      { label: "Average early warning lead time", value: "3 weeks" },
      { label: "Improvement in intervention success", value: "62%" },
      { label: "ROI on predictive investments", value: "4.2x" }
    ]
  },
  'content-automation': {
    category: 'AI Solutions',
    title: 'Content Automation',
    hero: {
      headline: "Create Enterprise Learning Content in Hours, Not Months",
      sub: "Aanya's AI content engine generates, curates, and refreshes training materials at scale — dramatically reducing L&D production costs.",
      badge: "AI Solutions"
    },
    overview: {
      text: "Content creation is the #1 bottleneck in enterprise L&D. AI removes it.",
      bullets: [
        "Generate full course modules from source documents",
        "Auto-update content when policies change",
        "Multi-format output: SCORM, video, simulations"
      ],
      contentGenPreview: true
    },
    features: [
      { title: "Document-to-Course AI", icon: FileInput, desc: "Upload any PDF, policy doc, or PPT — AI generates a full learning module." },
      { title: "Auto-Refresh Engine", icon: RefreshCcw, desc: "Content auto-updates when source documents are revised." },
      { title: "Assessment Generator", icon: ClipboardList, desc: "AI creates scenario-based questions, not just MCQs." },
      { title: "Multi-Format Export", icon: Download, desc: "Output as SCORM, HTML5, video script, PDF job aid, or simulation." }
    ],
    steps: [
      { title: "Source Ingestion", desc: "Upload documents, videos, or existing content" },
      { title: "AI Structuring", desc: "Extracts key concepts, builds architecture" },
      { title: "Content Generation", desc: "Drafts modules, assessments, and summaries" },
      { title: "Review & Publish", desc: "Human review interface → one-click LMS publish" }
    ],
    metrics: [
      { label: "Faster content creation", value: "10x" },
      { label: "Reduction in L&D production costs", value: "70%" },
      { label: "Average time to deployed module", value: "48 hours" },
      { label: "Supported content formats", value: "100+" }
    ]
  },
  'skill-mapping': {
    category: 'Workforce Development',
    title: 'Skill Mapping',
    hero: {
      headline: "Know Exactly What Skills Your Organization Has — and Needs",
      sub: "Aanya's Skill Mapping platform creates a living, dynamic picture of your workforce's capabilities, gaps, and growth potential.",
      badge: "Workforce Development",
      nodeGraph: true
    },
    overview: {
      text: "You can't develop what you can't measure. Skill Mapping makes skills visible.",
      bullets: [
        "10,000+ skill taxonomy across all industries",
        "AI-inferred skills from work history",
        "Real-time gap analysis against benchmarks"
      ],
      skillMatrix: true
    },
    features: [
      { title: "10,000+ Skill Ontology", icon: Database, desc: "Comprehensive, industry-standard skill taxonomy maintained by Aanya's experts." },
      { title: "AI Skill Inference", icon: Cpu, desc: "AI infers skills from CVs, performance reviews, project data, and assessments." },
      { title: "Role Benchmark Matching", icon: Target, desc: "Compare individual profiles against role benchmarks or market standards." },
      { title: "Gap Visualization", icon: PieChart, desc: "Instantly visualize skill gaps at individual, team, and org-level." }
    ],
    steps: [
      { title: "Data Integration", desc: "Connect HR systems, CVs, and assessment data" },
      { title: "AI Inference", desc: "Aanya AI maps skills from multiple data sources" },
      { title: "Taxonomy Alignment", desc: "Skills normalized to Aanya's ontology" },
      { title: "Gap Analysis", desc: "Benchmark against roles, goals, or market data" }
    ],
    metrics: [
      { label: "Skills in Aanya's taxonomy", value: "10,000+" },
      { label: "Org-wide skill map timeline", value: "4 weeks" },
      { label: "Accuracy of AI skill inference", value: "92%" },
      { label: "Faster talent decision-making", value: "3x" }
    ]
  },
  'talent-mobility': {
    category: 'Workforce Development',
    title: 'Talent Mobility',
    hero: {
      headline: "Move Your Best People to Where They'll Have Most Impact",
      sub: "Aanya's Talent Mobility platform uses AI to match employees with internal opportunities — projects, roles, mentors, and gigs — before they look outside.",
      badge: "Workforce Development"
    },
    overview: {
      text: "The talent you need is often already in your organization. Aanya finds it.",
      bullets: [
        "Internal opportunity marketplace",
        "AI-powered person-to-opportunity matching",
        "Retention impact analytics"
      ],
      opportunityCards: [
        { title: 'AI Strategy Lead', type: 'Project', match: '94%' },
        { title: 'Senior PM APAC', type: 'Role', match: '87%' },
        { title: 'CFO Office', type: 'Mentor', match: '91%' }
      ]
    },
    features: [
      { title: "Internal Opportunity Marketplace", icon: Compass, desc: "A searchable marketplace for roles, projects, stretch assignments, and mentors." },
      { title: "AI Matching Engine", icon: Sparkles, desc: "Matches employees to opportunities based on skills, aspirations, and availability." },
      { title: "Retention Risk Detection", icon: HeartPulse, desc: "Identify flight-risk employees and offer internal paths before they leave." },
      { title: "Mobility Analytics", icon: ArrowLeftRight, desc: "Track mobility rates, time-to-fill, and talent utilization across the org." }
    ],
    steps: [
      { title: "Profile Enrichment", desc: "Skills, aspirations, and availability mapped" },
      { title: "Opportunity Ingestion", desc: "Roles, projects, and gigs listed by managers" },
      { title: "AI Matching", desc: "Ranked recommendations served to employees and HRBPs" },
      { title: "Mobility Tracking", desc: "Measure moves, retention impact, and career velocity" }
    ],
    metrics: [
      { label: "Reduction in external hiring costs", value: "45%" },
      { label: "Internal mobility rate improvement", value: "2.1x" },
      { label: "Decrease in voluntary attrition", value: "38%" },
      { label: "Time to fill internal opportunities", value: "6 days" }
    ]
  },
  'performance-insights': {
    category: 'Workforce Development',
    title: 'Performance Insights',
    hero: {
      headline: "Turn People Data Into Performance Decisions",
      sub: "Aanya's Performance Insights layer connects learning activity, skill development, and business outcomes — so you can see what's working.",
      badge: "Workforce Development"
    },
    overview: {
      text: "Most performance systems measure the past. Aanya helps you shape the future.",
      bullets: [
        "Connect L&D inputs to performance outputs",
        "Manager-level dashboards with coaching recommendations",
        "Continuous performance signals"
      ],
      performanceTrends: [
        { label: 'Productivity', value: '+12%', trend: 'up' },
        { label: 'Skill Velocity', value: '+24%', trend: 'up' },
        { label: 'Engagement', value: '+8%', trend: 'up' }
      ]
    },
    features: [
      { title: "Outcome Attribution", icon: Link, desc: "Connect training investments directly to revenue, productivity, and quality KPIs." },
      { title: "Manager Intelligence", icon: Users, desc: "Coaching dashboards tell managers exactly where each person needs support." },
      { title: "Continuous Feedback", icon: MessageCircle, desc: "Pulse surveys, check-ins, and micro-feedback replace annual review anxiety." },
      { title: "Predictive Performance Scoring", icon: Activity, desc: "AI predicts next-quarter performance based on current learning and behavior signals." }
    ],
    steps: [
      { title: "Signal Integration", desc: "Connect HRIS, LMS, project tools, and surveys" },
      { title: "Model Calibration", desc: "Baseline performance signals per role and level" },
      { title: "Dashboard Activation", desc: "Live dashboards for HR, managers, and execs" },
      { title: "Insight-to-Action", desc: "Recommendations trigger learning or coaching actions" }
    ],
    metrics: [
      { label: "Improvement in manager conversations", value: "28%" },
      { label: "Leader reports of better decisions", value: "91%" },
      { label: "Performance signal refresh rate", value: "Real-time" },
      { label: "Avg integrations per client", value: "5" }
    ]
  },
  'recruitment-ai': {
    category: 'Workforce Development',
    title: 'Recruitment AI',
    hero: {
      headline: "Hire for Potential, Not Just Pedigree",
      sub: "Aanya's Recruitment AI uses skill-based matching, predictive fit scoring, and bias-reduced screening to find your best candidates faster.",
      badge: "Workforce Development"
    },
    overview: {
      text: "Traditional hiring filters on credentials. Aanya filters on capability.",
      bullets: [
        "Skill-based scoring against benchmarks",
        "Predictive tenure and performance modeling",
        "AI-generated interview guides"
      ],
      candidatePipeline: [
        { match: '94%', tenure: '3.2 yrs', fit: 'High' },
        { match: '88%', tenure: '2.8 yrs', fit: 'High' },
        { match: '82%', tenure: '4.1 yrs', fit: 'Medium' }
      ]
    },
    features: [
      { title: "Skill-Based Screening", icon: Filter, desc: "Rank candidates on verified skills, not just keywords or degrees." },
      { title: "Predictive Fit Scoring", icon: Percent, desc: "AI predicts role performance and retention probability per candidate." },
      { title: "Bias Reduction Engine", icon: Scale, desc: "Structured, criteria-based scoring to reduce unconscious bias in selection." },
      { title: "AI Interview Builder", icon: ClipboardCheck, desc: "Generate structured interview guides with behavioral and technical questions." }
    ],
    steps: [
      { title: "Role Profiling", desc: "Define skill benchmarks and success indicators" },
      { title: "Candidate Ingestion", desc: "Applications screened against skill benchmarks" },
      { title: "Predictive Scoring", desc: "AI ranks candidates by fit, potential, and retention" },
      { title: "Structured Selection", desc: "Interview guides + debrief scorecards generated" }
    ],
    metrics: [
      { label: "Reduction in time-to-hire", value: "55%" },
      { label: "Improvement in quality-of-hire", value: "3.1x" },
      { label: "Decrease in early attrition", value: "40%" },
      { label: "Manual screening hours saved", value: "Zero" }
    ]
  },
  'digital-transformation': {
    category: 'EdTech Strategy',
    title: 'Digital Transformation',
    hero: {
      headline: "Transform Your Learning Infrastructure for the Digital Era",
      sub: "Aanya's Digital Transformation consulting service helps universities, enterprises, and government bodies reimagine their L&D ecosystem end-to-end.",
      badge: "EdTech Strategy"
    },
    overview: {
      text: "Digital transformation in learning isn't a technology problem. It's a strategy problem.",
      bullets: [
        "Current-state assessment of L&D maturity",
        "18-month digital transformation roadmap",
        "Change management and adoption support"
      ],
      maturityModel: { current: 3 }
    },
    features: [
      { title: "L&D Maturity Assessment", icon: ClipboardList, desc: "Benchmark your current learning infrastructure against global best practice." },
      { title: "Technology Roadmap", icon: Map, desc: "18-month prioritized plan: what to build, buy, and retire." },
      { title: "Vendor Selection Support", icon: Search, desc: "Independent guidance on LMS, content, and AI tool procurement." },
      { title: "Change Management", icon: Users, desc: "Stakeholder alignment, communication plans, and adoption playbooks." }
    ],
    steps: [
      { title: "Current State Audit", desc: "Assess platforms, processes, and people" },
      { title: "Vision Design", desc: "Co-create target state with your leadership team" },
      { title: "Roadmap Build", desc: "Phased plan with prioritized initiatives and ROI model" },
      { title: "Implementation Support", desc: "Aanya consultants embedded during execution" }
    ],
    metrics: [
      { label: "Avg transformation roadmap timeline", value: "18 months" },
      { label: "System utilization increase", value: "4x" },
      { label: "Engagements completed", value: "60+" },
      { label: "Avg cost savings identified", value: "£2.4M" }
    ]
  },
  'lms-implementation': {
    category: 'EdTech Strategy',
    title: 'LMS Implementation',
    hero: {
      headline: "Enterprise LMS Deployed. On Time. On Budget. Fully Adopted.",
      sub: "Aanya manages end-to-end LMS implementation — from platform selection and configuration to data migration, integrations, and launch.",
      badge: "EdTech Strategy"
    },
    overview: {
      text: "Most LMS implementations fail not on technology — but on adoption. Aanya solves both.",
      bullets: [
        "Platform-agnostic: Workday, SAP, Docebo, Moodle",
        "Data migration from legacy systems",
        "Custom integrations: HRIS, SSO, Content"
      ],
      timeline: ['Discovery', 'Config', 'Migration', 'Testing', 'Launch', 'Adoption']
    },
    features: [
      { title: "Platform-Agnostic Expertise", icon: Server, desc: "Certified in Cornerstone, Workday Learning, SAP SuccessFactors, Docebo, Moodle." },
      { title: "Data Migration Service", icon: Database, desc: "Clean, validated migration of learner records, completions, and certificates." },
      { title: "HRIS & SSO Integration", icon: Plug, desc: "Connect your LMS to Workday, SAP, BambooHR, Azure AD, and Okta." },
      { title: "Adoption Accelerator", icon: Rocket, desc: "Change management, admin training, and learner communication playbooks." }
    ],
    steps: [
      { title: "Discovery", desc: "Scope, requirements, and stakeholder mapping" },
      { title: "Configuration", desc: "Platform setup, branding, and content structure" },
      { title: "Migration & Integration", desc: "Data migration and HRIS/SSO connections" },
      { title: "UAT & Launch", desc: "Testing, soft launch, go-live, and hypercare" }
    ],
    metrics: [
      { label: "Avg enterprise go-live timeline", value: "12 weeks" },
      { label: "On-time delivery rate", value: "100%" },
      { label: "LMS platforms supported", value: "30+" },
      { label: "Admin satisfaction score", value: "98%" }
    ]
  },
  'experience-design': {
    category: 'EdTech Strategy',
    title: 'Experience Design',
    hero: {
      headline: "Learning Experiences So Good, People Actually Want to Come Back",
      sub: "Aanya's instructional designers and UX specialists create learning experiences that engage, challenge, and inspire — not just inform.",
      badge: "EdTech Strategy"
    },
    overview: {
      text: "Bad UX kills great content. Beautiful design alone isn't enough. You need both.",
      bullets: [
        "Instructional design + UX research combined",
        "Scenario-based, story-driven architecture",
        "WCAG 2.1 AA compliant, SCORM/xAPI ready"
      ],
      experiencePreview: true
    },
    features: [
      { title: "Instructional Design", icon: PenTool, desc: "Evidence-based learning design using Bloom's Taxonomy and cognitive load principles." },
      { title: "UX Research & Testing", icon: MousePointer, desc: "Learner research, prototype testing, and iterative design sprints." },
      { title: "Scenario-Based Learning", icon: Drama, desc: "Branching narratives and realistic work simulations that build judgment." },
      { title: "Accessibility & Compliance", icon: Accessibility, desc: "WCAG 2.1 AA, Section 508, SCORM 1.2, SCORM 2004, xAPI compliant output." }
    ],
    steps: [
      { title: "Learner Research", desc: "Interviews, surveys, and job task analysis" },
      { title: "Content Architecture", desc: "Learning objectives, storyboarding, script" },
      { title: "Design & Build", desc: "Visual design, development, and interactions" },
      { title: "Test & Iterate", desc: "Usability testing, accessibility audit, revisions" }
    ],
    metrics: [
      { label: "Average learner experience rating", value: "4.8/5" },
      { label: "Accessibility standard compliance", value: "WCAG 2.1 AA" },
      { label: "Improvement in engagement", value: "67%" },
      { label: "Module design-to-delivery", value: "3 weeks" }
    ]
  },
  'roi-analytics': {
    category: 'EdTech Strategy',
    title: 'ROI Analytics',
    hero: {
      headline: "Prove the Business Value of Every Learning Investment",
      sub: "Aanya's ROI Analytics framework connects L&D spend to business outcomes — giving CFOs and CHROs the data they need to invest with confidence.",
      badge: "EdTech Strategy"
    },
    overview: {
      text: "L&D has always been asked to prove its value. Now you can — precisely.",
      bullets: [
        "Kirkpatrick + Phillips measurement framework",
        "Connect learning to revenue and attrition data",
        "Board-ready ROI dashboards"
      ],
      roiSummary: { investment: '£420K', return: '£1.76M', roi: '318%' }
    },
    features: [
      { title: "Level 1-5 Measurement", icon: Layers, desc: "Kirkpatrick + Phillips methodology adapted for modern enterprise L&D." },
      { title: "Business Outcome Mapping", icon: Link2, desc: "Connect learning metrics directly to revenue, NPS, quality, and attrition data." },
      { title: "Board-Ready Dashboards", icon: Monitor, desc: "Executive dashboards that communicate L&D impact in business language." },
      { title: "Benchmark Comparisons", icon: BarChart, desc: "Compare your L&D ROI against industry benchmarks and client averages." }
    ],
    steps: [
      { title: "Baseline Measurement", desc: "Document current L&D costs and outputs" },
      { title: "KPI Mapping", desc: "Link training interventions to business metrics" },
      { title: "Data Collection", desc: "Integrate LMS, HRIS, sales, and quality systems" },
      { title: "ROI Reporting", desc: "Quarterly board reports with trend analysis" }
    ],
    metrics: [
      { label: "Average ROI reported", value: "318%" },
      { label: "Max measurement level achieved", value: "Level 5" },
      { label: "Avg data sources connected", value: "8" },
      { label: "Reporting cadence", value: "Quarterly" }
    ]
  }
}
