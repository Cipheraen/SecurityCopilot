import { motion } from 'framer-motion'
import {
  Bot,
  ShieldAlert,
  Radar,
  Search,
  Newspaper,
  UserCheck,
  SlidersHorizontal,
  Bug,
  FileWarning,
  AlertTriangle,
  Wrench,
  Zap,
  Code,
  MessageCircle,
  Settings,
  Store,
  Puzzle,
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

const builtInAgents = [
  {
    name: 'Phishing Triage Agent',
    desc: 'Scales security team response for triaging and classifying user-submitted phishing incidents.',
    icon: ShieldAlert,
    color: 'text-neon-crimson',
  },
  {
    name: 'Dynamic Threat Detection Agent',
    desc: 'Continuous telemetry correlation for real-time threat detection across your environment.',
    icon: Radar,
    color: 'text-neon-purple',
  },
  {
    name: 'Threat Hunting Agent',
    desc: 'Translates natural language into executable threat hunts across your data.',
    icon: Search,
    color: 'text-neon-cyan',
  },
  {
    name: 'Threat Intelligence Briefing Agent',
    desc: 'Automatically curates relevant threat intel based on your organization\'s attributes.',
    icon: Newspaper,
    color: 'text-neon-crimson',
  },
  {
    name: 'Access Review Agent',
    desc: 'Delivers insights and recommendations for access decisions, integrated with Teams.',
    icon: UserCheck,
    color: 'text-neon-purple',
  },
  {
    name: 'Conditional Access Optimization Agent',
    desc: 'Monitors policy gaps, identifies required updates, and recommends fixes.',
    icon: SlidersHorizontal,
    color: 'text-neon-cyan',
  },
  {
    name: 'Vulnerability Remediation Agent',
    desc: 'Identifies top vulnerabilities and provides step-by-step remediation guidance.',
    icon: Bug,
    color: 'text-neon-crimson',
  },
  {
    name: 'Purview DLP Triage Agent',
    desc: 'Automates Data Loss Prevention alert triage to reduce analyst workload.',
    icon: FileWarning,
    color: 'text-neon-purple',
  },
  {
    name: 'Purview Insider Risk Agent',
    desc: 'Automates Insider Risk Management alert triage for faster investigation.',
    icon: AlertTriangle,
    color: 'text-neon-cyan',
  },
]

const agentComponents = [
  {
    name: 'Tools (Skills)',
    desc: 'Functions or actions the agent can perform -- APIs, queries, and integrations.',
    icon: Wrench,
  },
  {
    name: 'Triggers',
    desc: 'Conditions or events that initiate the agent -- time-based, event-driven, or manual.',
    icon: Zap,
  },
  {
    name: 'Orchestrators',
    desc: 'Logic that determines how tasks are executed -- sequencing and decision-making.',
    icon: Settings,
  },
  {
    name: 'Instructions',
    desc: 'System-level directives the agent must follow -- behavioral rules and guardrails.',
    icon: Code,
  },
  {
    name: 'Feedback',
    desc: 'Stored responses in memory to guide subsequent runs -- continuous learning loop.',
    icon: MessageCircle,
  },
]

export function Agents() {
  return (
    <PageShell
      title="Agents"
      description="Security Copilot agents are AI-powered systems designed to act on behalf of an individual, team, or operational domain to execute and orchestrate security-related tasks."
      icon={Bot}
    >
      <div className="space-y-10">
        {/* Built-in Agents */}
        <motion.section
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Bot className="w-5 h-5 text-neon-crimson" />
            Microsoft Built-in Agents
          </h2>
          <p className="text-sm text-neon-text-muted mb-4 leading-relaxed">
            Nine pre-built agents covering Security Operations, Compliance, IT Administration,
            and Identity Governance. No special training or additional licensing required.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {builtInAgents.map((agent) => (
              <div
                key={agent.name}
                className="bg-neon-surface border border-neon-border rounded-xl p-5 hover:border-neon-crimson/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <agent.icon className={`w-4 h-4 ${agent.color}`} />
                  <h3 className="text-sm font-heading font-bold text-neon-text">{agent.name}</h3>
                </div>
                <p className="text-xs text-neon-text-muted leading-relaxed">{agent.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Custom Agent Architecture */}
        <motion.section
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Puzzle className="w-5 h-5 text-neon-purple" />
            Custom Agent Architecture
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6">
            <p className="text-sm text-neon-text-muted mb-5 leading-relaxed">
              Organizations can build agents tailored to specific security and operational needs.
              Custom agents combine five key components and can be created via{' '}
              <span className="text-neon-purple font-medium">natural language</span>,{' '}
              <span className="text-neon-purple font-medium">form-based agent builder</span>,{' '}
              <span className="text-neon-purple font-medium">YAML manifest</span>, or{' '}
              <span className="text-neon-purple font-medium">MCP</span>. All converge into a
              YAML manifest file for deployment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {agentComponents.map((comp) => (
                <div
                  key={comp.name}
                  className="bg-neon-elevated/50 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <comp.icon className="w-4 h-4 text-neon-purple" />
                    <h3 className="text-sm font-heading font-bold text-neon-text">{comp.name}</h3>
                  </div>
                  <p className="text-xs text-neon-text-muted leading-relaxed">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Partner Agents */}
        <motion.section
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Store className="w-5 h-5 text-neon-cyan" />
            Partner Agents
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6">
            <p className="text-sm text-neon-text-muted leading-relaxed mb-4">
              A growing ecosystem of partner-built agents is available through the{' '}
              <span className="text-neon-cyan font-medium">Security Store</span>. Partner agents
              extend Security Copilot into specialized domains beyond Microsoft's built-in
              capabilities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Privacy Breach Response', desc: 'Automated response workflows for data breach events' },
                { label: 'Network Supervision', desc: 'AI-powered monitoring and analysis of network traffic' },
                { label: 'Alert Triage', desc: 'Third-party alert enrichment and classification' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-neon-elevated/50 border border-neon-cyan/10 rounded-lg p-4"
                >
                  <p className="text-xs font-heading font-bold text-neon-text mb-1">{item.label}</p>
                  <p className="text-xs text-neon-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Agent Capabilities Summary */}
        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-neon-crimson" />
            Key Agent Capabilities
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Automate repetitive, high-volume security tasks',
                'Reduce manual workloads across security operations',
                'Learn and improve from user feedback over time',
                'Integrate with Microsoft Security solutions and partners',
                'Utilize SCUs (Security Compute Units) for operations',
                'No special training or additional licensing required',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-crimson mt-1.5 shrink-0" />
                  <p className="text-xs text-neon-text-muted leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </PageShell>
  )
}
