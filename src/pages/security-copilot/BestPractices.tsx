import { motion } from 'framer-motion'
import {
  BookOpen,
  Shield,
  Monitor,
  UserCog,
  Database,
  Eye,
  TrendingUp,
  Users,
  DollarSign,
  AlertTriangle,
  Rocket,
  Layers,
  Target,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'
import { PageShell } from '../../components/PageShell'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

const roles = [
  {
    title: 'SOC Analysts',
    icon: Shield,
    color: 'text-neon-crimson',
    border: 'border-neon-crimson/20',
    challenges: 'Complex tooling, overwhelming data volume, talent shortage.',
    benefits: [
      'Detect threats by reasoning over real-time signals',
      'Accelerate threat hunting with NL2KQL',
      'Enable junior staff to perform advanced capabilities',
    ],
    agents: 'Phishing Triage, Dynamic Threat Detection, Threat Hunting, Threat Intelligence Briefing',
  },
  {
    title: 'IT Administrators',
    icon: Monitor,
    color: 'text-neon-purple',
    border: 'border-neon-purple/20',
    challenges: 'Rapidly evolving technology, cybersecurity demands, endpoint diversity.',
    benefits: [
      'Contextual guidance for operational tasks',
      'Streamlined troubleshooting through natural language',
      'Role-aware experiences tailored to permissions',
    ],
    agents: 'Posture assessment, patch management, device investigation, KQL query creation',
  },
  {
    title: 'Identity Administrators',
    icon: UserCog,
    color: 'text-neon-cyan',
    border: 'border-neon-cyan/20',
    challenges: 'Managing billions of identities, complex policies, overwhelming threats.',
    benefits: [
      'Automate repetitive IAM tasks',
      'AI-driven threat detection with real-time insights',
      'Natural language summaries reducing investigation time',
    ],
    agents: 'Risky user investigation, sign-in troubleshooting, elevated risk detection',
  },
  {
    title: 'Data Security Administrators',
    icon: Database,
    color: 'text-neon-crimson',
    border: 'border-neon-crimson/20',
    challenges: 'Vast data volumes, alert fatigue, multi-team coordination, skills shortage.',
    benefits: [
      'Analyze large data volumes for integrated investigations',
      'Accelerate investigations with contextual summaries',
      'Integrate Information Protection, DLP, and Insider Risk',
    ],
    agents: 'Data risk discovery (DSPM), one-click summarization, policy gap analysis',
  },
  {
    title: 'CISOs',
    icon: Eye,
    color: 'text-neon-purple',
    border: 'border-neon-purple/20',
    challenges: 'Executive visibility, cross-team coordination, risk communication.',
    benefits: [
      'Generate stakeholder reports with appropriate tone',
      'Broad environmental visibility across the organization',
      'Posture improvement recommendations and incident summaries',
    ],
    agents: 'Report generation, risk assessment, security posture evaluation',
  },
]

const keyBenefits = [
  {
    title: 'Efficiency Gains',
    icon: Rocket,
    color: 'text-neon-crimson',
    items: [
      'Reduces manual triage time significantly',
      'Automates high-volume, repetitive security tasks',
      'Converts reactive problem-solving to proactive management',
      'Eliminates manual log sifting and data correlation',
    ],
  },
  {
    title: 'Risk Reduction',
    icon: AlertTriangle,
    color: 'text-neon-purple',
    items: [
      'Detects threats missed by traditional rule-based systems',
      'Surfaces hidden patterns through AI correlation',
      'Identifies vulnerabilities proactively',
      'Automates phishing separation from false positives',
    ],
  },
  {
    title: 'Team Capability Elevation',
    icon: Users,
    color: 'text-neon-cyan',
    items: [
      'Enables junior staff to perform advanced investigations',
      'Redirects expert staff to highest-impact challenges',
      'Bridges skill gaps across security teams',
      'Reduces expertise dependency for complex operations',
    ],
  },
  {
    title: 'Cost Optimization',
    icon: DollarSign,
    color: 'text-neon-crimson',
    items: [
      'Minimizes extensive security personnel needs',
      'Reduces operational overhead through automation',
      'Improves resource allocation efficiency',
      'Scales operations without proportional headcount increases',
    ],
  },
]

export function BestPractices() {
  return (
    <PageShell
      title="Best Practices"
      description="Guidelines and recommendations for effectively deploying and using Security Copilot in your organization's security operations."
      icon={BookOpen}
    >
      <div className="space-y-10">
        {/* Getting Started */}
        <motion.section
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-neon-crimson" />
            Getting Started
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6">
            <p className="text-sm text-neon-text-muted mb-4 leading-relaxed">
              Security Copilot is designed as an{' '}
              <span className="text-neon-crimson font-medium">
                enhancement to existing workflows
              </span>
              , not a replacement for current tools or personnel. Follow these steps for a
              successful implementation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { title: 'Provision Capacity', desc: 'Set up SCUs in Azure portal' },
                { title: 'Configure Plugins', desc: 'Enable relevant Microsoft and third-party plugins' },
                { title: 'Set Up Roles', desc: 'Configure role-based access controls' },
                { title: 'Onboard Users', desc: 'Train security team on prompting and promptbooks' },
                { title: 'Start with Pre-built', desc: 'Use existing promptbooks and prompt libraries' },
                { title: 'Iterate & Customize', desc: 'Build custom promptbooks and agents as needs evolve' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-neon-elevated/50 rounded-lg p-4"
                >
                  <p className="text-sm font-heading font-bold text-neon-text mb-1">{item.title}</p>
                  <p className="text-xs text-neon-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Use Cases by Role */}
        <motion.section
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-neon-purple" />
            Use Cases by Role
          </h2>
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className={`bg-neon-surface border ${role.border} rounded-xl p-5`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <role.icon className={`w-5 h-5 ${role.color}`} />
                  <h3 className="text-sm font-heading font-bold text-neon-text">{role.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-heading font-bold text-neon-text-muted uppercase tracking-wider mb-2">
                      Challenges
                    </p>
                    <p className="text-xs text-neon-text-muted leading-relaxed mb-3">
                      {role.challenges}
                    </p>
                    <p className="text-[10px] font-heading font-bold text-neon-text-muted uppercase tracking-wider mb-2">
                      How Copilot Helps
                    </p>
                    <div className="space-y-1.5">
                      {role.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-3 h-3 ${role.color} mt-0.5 shrink-0`} />
                          <p className="text-xs text-neon-text-muted">{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-neon-elevated/50 rounded-lg p-3">
                    <p className="text-[10px] font-heading font-bold text-neon-text-muted uppercase tracking-wider mb-2">
                      Key Scenarios & Agents
                    </p>
                    <p className="text-xs text-neon-text-muted leading-relaxed">{role.agents}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Key Benefits */}
        <motion.section
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-neon-cyan" />
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-neon-surface border border-neon-border rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <benefit.icon className={`w-4 h-4 ${benefit.color}`} />
                  <h3 className="text-sm font-heading font-bold text-neon-text">
                    {benefit.title}
                  </h3>
                </div>
                <div className="space-y-1.5">
                  {benefit.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-neon-purple mt-1.5 shrink-0`} />
                      <p className="text-xs text-neon-text-muted leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Training Resources */}
        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-neon-crimson" />
            Training & Resources
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Security Copilot Technical Training', desc: 'Global technical workshops for hands-on learning', url: 'https://techcommunity.microsoft.com/blog/microsoft-security-blog/accelerate-your-security-copilot-readiness-with-our-global-technical-workshop-se/4483805' },
                { name: 'Microsoft Learn Training Path', desc: '"Get started with Microsoft Security Copilot" learning path', url: 'https://learn.microsoft.com/en-us/training/paths/security-copilot-and-ai/' },
                { name: 'Video Hub', desc: 'Bite-sized insights and deep-dive demos', url: 'https://adoption.microsoft.com/en-us/security-copilot/video-hub/' },
                { name: 'GitHub Repository', desc: 'Sample plugins for customization and extension', url: 'https://github.com/Azure/Security-Copilot' },
                { name: 'Ninja Training', desc: 'In-depth training via Microsoft Tech Community', url: 'https://techcommunity.microsoft.com/blog/securitycopilotblog/how-to-become-a-microsoft-security-copilot-ninja-the-complete-level-400-training/4106928' },
                { name: 'Customer Connection Program', desc: 'Free (NDA required): webinars, previews, roadmap access', url: 'https://aka.ms/JoinCCP' },
              ].map((res) => (
                <a
                  key={res.name}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-neon-elevated/50 rounded-lg p-3 flex items-start gap-2 hover:bg-neon-elevated transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-neon-crimson mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-heading font-bold text-neon-text group-hover:text-neon-cyan transition-colors">{res.name}</p>
                    <p className="text-xs text-neon-text-muted">{res.desc}</p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-neon-text-muted group-hover:text-neon-cyan transition-colors mt-0.5 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </PageShell>
  )
}
