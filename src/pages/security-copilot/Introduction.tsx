import { motion } from 'framer-motion'
import {
  Shield,
  Cpu,
  Globe,
  Layers,
  DollarSign,
  Zap,
  ArrowRight,
  Server,
  Brain,
  Database,
  Monitor,
  Lock,
  Cloud,
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

export function Introduction() {
  return (
    <PageShell
      title="Introduction"
      description="Microsoft Security Copilot is a generative AI-powered security solution that helps increase the efficiency and capabilities of defenders to improve security outcomes at machine speed and scale."
      icon={Shield}
    >
      <div className="space-y-10">
        {/* What is Security Copilot */}
        <motion.section
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-neon-crimson" />
            What is Security Copilot?
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6 space-y-4">
            <p className="text-sm text-neon-text-muted leading-relaxed">
              Microsoft Security Copilot is a generative AI-powered security solution built on
              OpenAI architecture combined with proprietary Microsoft security technologies. It
              provides a natural language, assistive copilot experience designed to enhance the
              efficiency and capabilities of security defenders operating at{' '}
              <span className="text-neon-crimson font-medium">machine speed and scale</span>.
            </p>
            <p className="text-sm text-neon-text-muted leading-relaxed">
              Security Copilot is positioned as an{' '}
              <span className="text-neon-purple font-medium">enhancement, not a replacement</span>{' '}
              -- it augments existing security tools and analyst capabilities through AI-powered
              acceleration, combining global threat intelligence with organization-specific context
              to deliver actionable, relevant results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2">
                <Monitor className="w-4 h-4 text-neon-cyan mt-0.5 shrink-0" />
                <span className="text-xs text-neon-text-muted">
                  <span className="text-neon-text font-medium">Standalone</span> -- Dedicated
                  interface at securitycopilot.microsoft.com
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Layers className="w-4 h-4 text-neon-cyan mt-0.5 shrink-0" />
                <span className="text-xs text-neon-text-muted">
                  <span className="text-neon-text font-medium">Embedded</span> -- Integrated
                  within Defender, Sentinel, Entra, Intune, Purview
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Architecture */}
        <motion.section
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Server className="w-5 h-5 text-neon-purple" />
            Architecture: 4-Stage Pipeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                stage: '01',
                title: 'Input Reception',
                desc: 'User prompts from security products are sent to Security Copilot for processing.',
                color: 'text-neon-crimson',
                borderColor: 'border-neon-crimson/20',
              },
              {
                stage: '02',
                title: 'Preprocessing',
                desc: 'Grounding stage improves prompt specificity, accesses plugins for initial data context.',
                color: 'text-neon-purple',
                borderColor: 'border-neon-purple/20',
              },
              {
                stage: '03',
                title: 'LLM Processing',
                desc: 'Grounded prompt is sent to the language model using security-specific plugins as data sources.',
                color: 'text-neon-cyan',
                borderColor: 'border-neon-cyan/20',
              },
              {
                stage: '04',
                title: 'Post-processing',
                desc: 'Response is enriched with organizational context and plugin data before delivery.',
                color: 'text-neon-crimson',
                borderColor: 'border-neon-crimson/20',
              },
            ].map((item) => (
              <div
                key={item.stage}
                className={`bg-neon-surface border ${item.borderColor} rounded-xl p-5 relative overflow-hidden`}
              >
                <span className={`text-3xl font-heading font-bold ${item.color} opacity-20 absolute top-3 right-4`}>
                  {item.stage}
                </span>
                <h3 className={`text-sm font-heading font-bold ${item.color} mb-2`}>
                  {item.title}
                </h3>
                <p className="text-xs text-neon-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-neon-elevated/50 border border-neon-border rounded-lg p-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-neon-cyan shrink-0" />
            <p className="text-xs text-neon-text-muted">
              Users can view real-time step-by-step actions through a configurable{' '}
              <span className="text-neon-cyan font-medium">process log</span> showing steps
              taken, sources consulted, and processing time.
            </p>
          </div>
        </motion.section>

        {/* Core Capabilities */}
        <motion.section
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-neon-crimson" />
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Investigate & Remediate Threats',
                desc: 'Gain incident context from multiple sources, triage complex alerts into actionable summaries, and receive step-by-step remediation guidance.',
                icon: Shield,
              },
              {
                title: 'Build KQL Queries & Analyze Scripts',
                desc: 'Translate natural language to KQL, reverse engineer malware scripts, and eliminate manual scripting via NL2KQL.',
                icon: Database,
              },
              {
                title: 'Manage Security Posture',
                desc: 'Broad environmental visibility, prioritized risk identification, and posture improvement recommendations.',
                icon: Layers,
              },
              {
                title: 'Troubleshoot IT Issues',
                desc: 'Rapid information synthesis across systems with actionable insights and contextual troubleshooting guidance.',
                icon: Zap,
              },
              {
                title: 'Define Security Policies',
                desc: 'Create new policies with AI guidance, cross-reference for conflicts, and summarize or audit existing policies.',
                icon: Lock,
              },
              {
                title: 'Generate Stakeholder Reports',
                desc: 'Clear, concise summaries for leadership with audience-specific tone, language adaptation, and contextual environment info.',
                icon: ArrowRight,
              },
            ].map((cap) => (
              <div
                key={cap.title}
                className="bg-neon-surface border border-neon-border rounded-xl p-5 hover:border-neon-crimson/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <cap.icon className="w-4 h-4 text-neon-crimson" />
                  <h3 className="text-sm font-heading font-bold text-neon-text">{cap.title}</h3>
                </div>
                <p className="text-xs text-neon-text-muted leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Integrations */}
        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-neon-cyan" />
            Integrations
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6">
            <p className="text-sm text-neon-text-muted mb-4 leading-relaxed">
              Security Copilot is natively embedded across the Microsoft Security ecosystem and
              supports a growing third-party partner network.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Microsoft Defender XDR', focus: 'Threat investigation, incident response, alert triage' },
                { name: 'Microsoft Sentinel', focus: 'Cloud-native SIEM, threat hunting, log analysis' },
                { name: 'Microsoft Entra', focus: 'Identity risk, access management, sign-in troubleshooting' },
                { name: 'Microsoft Intune', focus: 'Device management, endpoint security, compliance' },
                { name: 'Microsoft Purview', focus: 'Data security, DLP, insider risk, compliance' },
                { name: 'Defender for Cloud', focus: 'Cloud security posture management' },
                { name: 'Azure Firewall & WAF', focus: 'Network security analysis' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-2 bg-neon-elevated/50 rounded-lg p-3"
                >
                  <Cloud className="w-4 h-4 text-neon-purple mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-heading font-bold text-neon-text">{item.name}</span>
                    <p className="text-xs text-neon-text-muted">{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-neon-border">
              <p className="text-xs text-neon-text-muted">
                <span className="text-neon-cyan font-medium">Third-party partners</span>: Red
                Canary, Jamf, ServiceNow, and a growing ecosystem through the Security Store.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Pricing */}
        <motion.section
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-neon-purple" />
            Pricing & SCU Model
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6 space-y-4">
            <p className="text-sm text-neon-text-muted leading-relaxed">
              Security Copilot uses a consumption-based pricing model built on{' '}
              <span className="text-neon-purple font-medium">
                Security Compute Units (SCUs)
              </span>
              . Minimum of 1 provisioned SCU is required to get started.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-neon-elevated/50 border border-neon-crimson/20 rounded-lg p-4">
                <p className="text-2xl font-heading font-bold text-neon-crimson">$4</p>
                <p className="text-xs text-neon-text-muted mt-1">per SCU / hour</p>
                <p className="text-xs text-neon-text font-medium mt-2">Provisioned SCUs</p>
                <p className="text-xs text-neon-text-muted">Pre-provisioned capacity, billed hourly</p>
              </div>
              <div className="bg-neon-elevated/50 border border-neon-purple/20 rounded-lg p-4">
                <p className="text-2xl font-heading font-bold text-neon-purple">$6</p>
                <p className="text-xs text-neon-text-muted mt-1">per SCU / hour</p>
                <p className="text-xs text-neon-text font-medium mt-2">Overage SCUs</p>
                <p className="text-xs text-neon-text-muted">Pay-as-you-go when usage exceeds provisioned capacity</p>
              </div>
            </div>
            <div className="bg-neon-elevated/50 border border-neon-cyan/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-neon-cyan" />
                <p className="text-xs font-heading font-bold text-neon-cyan">M365 E5 Inclusion</p>
              </div>
              <p className="text-xs text-neon-text-muted leading-relaxed">
                400 SCUs per month for every 1,000 user licenses (scales proportionally), up to
                10,000 SCUs/month at no additional cost. Option to scale beyond via overage at
                $6/SCU.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </PageShell>
  )
}
