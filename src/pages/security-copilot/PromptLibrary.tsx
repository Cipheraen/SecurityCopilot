import { motion } from 'framer-motion'
import {
  Library,
  ShieldAlert,
  Search,
  Bug,
  UserCheck,
  Radar,
  Code,
  FileText,
  BarChart3,
  Lock,
  Monitor,
  ExternalLink,
  Terminal,
  Puzzle,
} from 'lucide-react'
import { PageShell } from '../../components/PageShell'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

interface Prompt {
  title: string
  prompt: string
  plugins: string[]
  description: string
}

interface PromptCategory {
  name: string
  icon: React.ReactNode
  color: string
  border: string
  sourceUrl: string
  sourceLabel: string
  prompts: Prompt[]
}

const categories: PromptCategory[] = [
  {
    name: 'Incident Response',
    icon: <ShieldAlert className="w-5 h-5" />,
    color: 'text-neon-crimson',
    border: 'border-neon-crimson/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/defender-xdr/security-copilot-in-microsoft-365-defender',
    sourceLabel: 'Security Copilot in Microsoft Defender',
    prompts: [
      {
        title: 'Incident Summary',
        prompt: 'Summarize incident {incident number} in Microsoft Defender XDR into a paragraph that I can submit to my manager and create a list of entities involved.',
        plugins: ['Microsoft Defender XDR'],
        description: 'Generates a leadership-ready summary with impacted entities for stakeholder communication.',
      },
      {
        title: 'Guided Response Actions',
        prompt: 'What are the recommended actions for incident {incident number}? Include remediation steps prioritized by impact.',
        plugins: ['Microsoft Defender XDR'],
        description: 'Provides AI-guided response actions with classification and prioritized remediation steps.',
      },
      {
        title: 'Multi-Incident Correlation',
        prompt: 'Are there other incidents related to incident {incident number}? List any shared indicators, users, or devices.',
        plugins: ['Microsoft Defender XDR', 'Microsoft Sentinel'],
        description: 'Identifies related incidents through shared IOCs, users, and devices for broader attack analysis.',
      },
      {
        title: 'Incident Timeline Analysis',
        prompt: 'Show me the timeline of events for incident {incident number} in chronological order, including all alerts and actions taken.',
        plugins: ['Microsoft Defender XDR'],
        description: 'Reconstructs the attack timeline for root cause analysis and post-incident review.',
      },
    ],
  },
  {
    name: 'Threat Hunting',
    icon: <Search className="w-5 h-5" />,
    color: 'text-neon-purple',
    border: 'border-neon-purple/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-security-copilot',
    sourceLabel: 'Security Copilot in Advanced Hunting',
    prompts: [
      {
        title: 'NL2KQL Threat Hunt',
        prompt: 'Create a KQL query to find all sign-in attempts from outside {country} for privileged accounts in the last 7 days.',
        plugins: ['NL2KQL', 'Microsoft Defender XDR'],
        description: 'Translates natural language into executable KQL for advanced hunting in Defender.',
      },
      {
        title: 'Lateral Movement Detection',
        prompt: 'Hunt for evidence of lateral movement in my environment over the past 48 hours. Look for unusual remote connections and credential usage.',
        plugins: ['Microsoft Defender XDR', 'Microsoft Sentinel'],
        description: 'Detects east-west movement patterns indicating active compromise and credential abuse.',
      },
      {
        title: 'IOC Cross-Correlation',
        prompt: 'Search for any activity associated with the IP address {IP} across all data sources in the last 30 days.',
        plugins: ['Microsoft Defender XDR', 'Microsoft Threat Intelligence'],
        description: 'Hunts across endpoints, identity, and network data for indicator-of-compromise presence.',
      },
      {
        title: 'Sentinel KQL Cross-Tenant',
        prompt: 'Run the following KQL: SecurityAlert | where Entities has "{entity}" and TimeGenerated >= ago(7d) | join kind=inner (SecurityIncident) on SystemAlertId | summarize by IncidentNumber, Title',
        plugins: ['Microsoft Sentinel', 'NL2KQL'],
        description: 'Executes cross-correlated queries hunting across alerts and incidents by entity.',
      },
    ],
  },
  {
    name: 'Vulnerability Management',
    icon: <Bug className="w-5 h-5" />,
    color: 'text-neon-cyan',
    border: 'border-neon-cyan/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/defender/threat-intelligence/security-copilot-and-defender-threat-intelligence',
    sourceLabel: 'Security Copilot in Defender Threat Intelligence',
    prompts: [
      {
        title: 'CVE Impact Assessment',
        prompt: 'Summarize the vulnerability CVE-{number}. What technologies are affected and which threat actors are exploiting it?',
        plugins: ['Microsoft Threat Intelligence', 'Defender Vulnerability Management'],
        description: 'Provides vulnerability context, affected systems, and active exploitation by threat actors.',
      },
      {
        title: 'Latest CVE Trends',
        prompt: 'Show me the latest CVEs with active exploitation. Prioritize by severity and relevance to my environment.',
        plugins: ['Microsoft Threat Intelligence'],
        description: 'Surfaces recent vulnerabilities with exploitation activity for rapid threat assessment.',
      },
      {
        title: 'Device Vulnerability Inventory',
        prompt: 'Summarize device information in Defender incident {incident number}. Highlight any vulnerable software installed.',
        plugins: ['Microsoft Defender XDR', 'Microsoft Intune'],
        description: 'Identifies vulnerable software on devices involved in incidents for targeted remediation.',
      },
      {
        title: 'Intune Device Remediation',
        prompt: 'Summarize an Intune device and highlight vulnerable software that needs patching.',
        plugins: ['Microsoft Intune', 'Defender Vulnerability Management'],
        description: 'Provides device-specific vulnerability context from managed endpoints for patch planning.',
      },
    ],
  },
  {
    name: 'Identity & Access',
    icon: <UserCheck className="w-5 h-5" />,
    color: 'text-neon-crimson',
    border: 'border-neon-crimson/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/entra/security-copilot/security-copilot-in-entra',
    sourceLabel: 'Security Copilot in Microsoft Entra',
    prompts: [
      {
        title: 'User Details & Risk',
        prompt: 'Give me all user details for {user@domain.com}. What is their risk level, state, and risk history?',
        plugins: ['Microsoft Entra ID', 'Entra ID Protection'],
        description: 'Aggregates complete user account info with risk assessment for identity investigation.',
      },
      {
        title: 'Risky Sign-In Analysis',
        prompt: 'List the recent risky sign-ins for {user@domain.com}. Include IP addresses, locations, and risk reasons.',
        plugins: ['Microsoft Entra ID', 'Entra ID Protection'],
        description: 'Identifies anomalous login patterns and risky authentication attempts for compromise detection.',
      },
      {
        title: 'Failed Login Investigation',
        prompt: 'Show me failed sign-ins for {user@domain.com} for the past 7 days and tell me what the IP addresses are.',
        plugins: ['Microsoft Entra ID'],
        description: 'Detects potential brute force attacks and anomalous access patterns by location.',
      },
      {
        title: 'Sign-In Log Timeline',
        prompt: 'Can you give me sign-in logs for {user@domain.com} for the past 48 hours? Put this information in a table format.',
        plugins: ['Microsoft Entra ID'],
        description: 'Provides detailed sign-in timeline with formatted output for pattern analysis.',
      },
    ],
  },
  {
    name: 'Threat Intelligence',
    icon: <Radar className="w-5 h-5" />,
    color: 'text-neon-purple',
    border: 'border-neon-purple/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/defender/threat-intelligence/using-copilot-threat-intelligence-defender-xdr',
    sourceLabel: 'Using Security Copilot for Threat Intelligence',
    prompts: [
      {
        title: 'Threat Actor Profile',
        prompt: 'Can you give me information about {Silk Typhoon} activity, including a list of known indicators of compromise and tools, tactics, and procedures (TTPs)?',
        plugins: ['Microsoft Threat Intelligence'],
        description: 'Generates comprehensive threat actor profiles with IOCs and TTPs for defense planning.',
      },
      {
        title: 'State-Sponsored Threats',
        prompt: 'Share threat actors associated with {country}. Include their known targets and techniques.',
        plugins: ['Microsoft Threat Intelligence'],
        description: 'Lists state-sponsored threat actors and activities for geopolitical threat assessment.',
      },
      {
        title: 'Ransomware Campaign Tracking',
        prompt: 'Get threat articles related to ransomware in the last six months.',
        plugins: ['Microsoft Threat Intelligence'],
        description: 'Provides historical ransomware analysis for pattern and campaign tracking.',
      },
      {
        title: 'Industry-Specific Threats',
        prompt: 'What threat actors are targeting the {industry} industry? Include their TTPs and recent campaigns.',
        plugins: ['Microsoft Threat Intelligence'],
        description: 'Identifies sector-specific threats for industry-tailored defense strategies.',
      },
    ],
  },
  {
    name: 'Script & Code Analysis',
    icon: <Code className="w-5 h-5" />,
    color: 'text-neon-cyan',
    border: 'border-neon-cyan/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-script-analysis',
    sourceLabel: 'Script Analysis with Security Copilot',
    prompts: [
      {
        title: 'Malicious Script Detection',
        prompt: 'Identify the scripts in Defender incident {incident ID}. Are these malicious scripts? Explain what they do.',
        plugins: ['Microsoft Defender XDR'],
        description: 'Analyzes and determines maliciousness of scripts found in incident investigations.',
      },
      {
        title: 'File Malware Assessment',
        prompt: 'Tell me about the files in Defender incident {incident number}. Which files are malicious and why?',
        plugins: ['Microsoft Defender XDR'],
        description: 'Comprehensive file assessment including detection status and malicious indicators.',
      },
      {
        title: 'Indicator Reputation Check',
        prompt: 'What can you tell me about the reputation of the indicators in the script? Are they malicious? If so, why?',
        plugins: ['Microsoft Defender XDR', 'Microsoft Threat Intelligence'],
        description: 'Analyzes script indicators and reputation with MITRE ATT&CK mapping.',
      },
      {
        title: 'Suspicious Script Promptbook',
        prompt: 'Use the Suspicious Script Analysis promptbook with this code snippet.',
        plugins: ['Microsoft Defender XDR'],
        description: 'Leverages automated promptbook for comprehensive behavioral analysis and remediation.',
      },
    ],
  },
  {
    name: 'Compliance & Reporting',
    icon: <FileText className="w-5 h-5" />,
    color: 'text-neon-crimson',
    border: 'border-neon-crimson/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/purview/copilot-in-purview-promptbooks',
    sourceLabel: 'Copilot in Microsoft Purview',
    prompts: [
      {
        title: 'Top DLP Alerts',
        prompt: 'Show me the top five DLP alerts from the past 24 hours. Include severity and affected data.',
        plugins: ['Microsoft Purview DLP'],
        description: 'Surfaces high-priority data loss incidents for immediate compliance response.',
      },
      {
        title: 'DLP Alert Investigation',
        prompt: 'Summarize the DLP alert with ID {12345}. What actions were performed on the file in the alert?',
        plugins: ['Microsoft Purview DLP'],
        description: 'Detailed DLP alert investigation with action timeline for incident documentation.',
      },
      {
        title: 'User Data Risk Profile',
        prompt: 'What\'s the risk profile of the user associated with DLP alert {12345}? What are the data risks related to the alert?',
        plugins: ['Microsoft Purview DLP', 'Purview Insider Risk Management'],
        description: 'Correlates data protection incidents with user risk for insider threat assessment.',
      },
      {
        title: 'Incident Report Generation',
        prompt: 'Create an incident report for Defender incident {incident number} including actions taken and timeline.',
        plugins: ['Microsoft Defender XDR'],
        description: 'Generates formal incident documentation for compliance and post-incident review.',
      },
    ],
  },
  {
    name: 'Posture Management',
    icon: <BarChart3 className="w-5 h-5" />,
    color: 'text-neon-purple',
    border: 'border-neon-purple/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/intune/intune-service/copilot/copilot-devices',
    sourceLabel: 'Copilot in Intune',
    prompts: [
      {
        title: 'Non-Compliant Device Inventory',
        prompt: 'Show me all non-compliant devices. Group by compliance failure reason.',
        plugins: ['Microsoft Intune'],
        description: 'Provides inventory of devices failing compliance policies for remediation prioritization.',
      },
      {
        title: 'Device Security Summary',
        prompt: 'Summarize this device. Include OS status, protection capabilities, and any malware detections.',
        plugins: ['Microsoft Intune', 'Microsoft Defender for Endpoint'],
        description: 'Comprehensive device security posture including protection and threat status.',
      },
      {
        title: 'Device Comparison',
        prompt: 'Compare this device with another device. Highlight configuration and policy differences.',
        plugins: ['Microsoft Intune'],
        description: 'Identifies configuration differences for troubleshooting non-compliant devices.',
      },
      {
        title: 'Policy Assignment Review',
        prompt: 'Show me device configuration policies assigned to a device. Are there any conflicts?',
        plugins: ['Microsoft Intune'],
        description: 'Lists all compliance and configuration policies for effectiveness assessment.',
      },
    ],
  },
  {
    name: 'Data Security',
    icon: <Lock className="w-5 h-5" />,
    color: 'text-neon-cyan',
    border: 'border-neon-cyan/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/purview/copilot-in-purview-promptbooks',
    sourceLabel: 'Copilot in Microsoft Purview',
    prompts: [
      {
        title: 'User Insider Risk Profile',
        prompt: 'Show me the risk associated with user {user@contoso.com}. What are their insider risk indicators?',
        plugins: ['Microsoft Purview Insider Risk Management'],
        description: 'Detailed insider risk scoring and contributing indicators for investigation.',
      },
      {
        title: 'Data Exfiltration Detection',
        prompt: 'Show me the exfiltration activities for this user. Include file types, destinations, and volumes.',
        plugins: ['Microsoft Purview Insider Risk Management'],
        description: 'Identifies data exfiltration patterns and associated assets for data protection response.',
      },
      {
        title: 'Sequential Activity Analysis',
        prompt: 'Show me the sequential activities for this user. Highlight any escalating risk patterns.',
        plugins: ['Microsoft Purview Insider Risk Management'],
        description: 'Correlates user actions chronologically for attack chain and insider threat detection.',
      },
      {
        title: 'Historical Activity Review',
        prompt: 'Show me all the activities that this user performed over the past 30 days.',
        plugins: ['Microsoft Purview Insider Risk Management', 'Microsoft Entra ID'],
        description: 'Comprehensive activity timeline for behavioral baseline and anomaly detection.',
      },
    ],
  },
  {
    name: 'Device Management',
    icon: <Monitor className="w-5 h-5" />,
    color: 'text-neon-crimson',
    border: 'border-neon-crimson/20',
    sourceUrl: 'https://learn.microsoft.com/en-us/intune/intune-service/copilot/copilot-devices',
    sourceLabel: 'Copilot in Intune',
    prompts: [
      {
        title: 'Error Code Analysis',
        prompt: 'Analyze error code {error_code}. What does it mean and how do I resolve it?',
        plugins: ['Microsoft Intune'],
        description: 'Provides error explanation and troubleshooting recommendations for device issues.',
      },
      {
        title: 'High-Risk Unmanaged Devices',
        prompt: 'Give me a list of high-risk unmanaged devices in my network. If they\'re named "test", remove them from the list.',
        plugins: ['Microsoft Intune', 'Microsoft Defender for Endpoint'],
        description: 'Filtered device inventory for high-priority remediation and cleanup.',
      },
      {
        title: 'User Identity Summary',
        prompt: 'Show the Defender summary of this user in the last {time frame}. Include device activity and sign-in patterns.',
        plugins: ['Microsoft Defender XDR', 'Microsoft Entra ID'],
        description: 'User device activity and sign-in patterns for device-user correlation in investigations.',
      },
      {
        title: 'Application Inventory',
        prompt: 'Show apps on this device. Flag any applications that are not approved or have known vulnerabilities.',
        plugins: ['Microsoft Intune'],
        description: 'Software inventory for compliance verification and unauthorized app detection.',
      },
    ],
  },
]

export function PromptLibrary() {
  return (
    <PageShell
      title="Prompt Library"
      description="Extensive collection of Security Copilot prompts organized by security domain. Each prompt includes required plugins and links to official Microsoft documentation."
      icon={Library}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* Quick Reference */}
        <motion.section variants={fadeInUp} transition={{ duration: 0.4 }}>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-5">
            <h2 className="text-sm font-heading font-bold text-neon-text mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-neon-crimson" />
              Prompting Framework
            </h2>
            <p className="text-xs text-neon-text-muted mb-3 leading-relaxed">
              Every effective Security Copilot prompt combines four elements. Replace{' '}
              <span className="text-neon-purple font-medium">{'{placeholders}'}</span>{' '}
              in the prompts below with your actual values.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Goal', desc: 'What you need', color: 'text-neon-crimson border-neon-crimson/20' },
                { label: 'Context', desc: 'Why you need it', color: 'text-neon-purple border-neon-purple/20' },
                { label: 'Expectations', desc: 'Output format', color: 'text-neon-cyan border-neon-cyan/20' },
                { label: 'Source', desc: 'Data sources', color: 'text-neon-crimson border-neon-crimson/20' },
              ].map((el) => (
                <div key={el.label} className={`border rounded-lg p-2.5 ${el.color}`}>
                  <p className="text-xs font-heading font-bold">{el.label}</p>
                  <p className="text-[10px] text-neon-text-muted">{el.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-neon-border">
              <a
                href="https://learn.microsoft.com/en-us/copilot/security/prompting-tips"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] text-neon-cyan hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                Official Prompting Guide -- Microsoft Learn
              </a>
            </div>
          </div>
        </motion.section>

        {/* Category Stats */}
        <motion.section variants={fadeInUp} transition={{ duration: 0.4 }}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { value: String(categories.length), label: 'Categories' },
              { value: String(categories.reduce((acc, c) => acc + c.prompts.length, 0)), label: 'Prompts' },
              { value: '12', label: 'Plugins' },
              { value: '10', label: 'Source Refs' },
              { value: '7', label: 'MS Products' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-neon-surface border border-neon-border rounded-xl p-3 text-center"
              >
                <div className="text-lg font-heading font-bold neon-gradient-text">{stat.value}</div>
                <div className="text-[10px] text-neon-text-muted uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Prompt Categories */}
        {categories.map((category) => (
          <motion.section
            key={category.name}
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={category.color}>{category.icon}</span>
              <h2 className={`text-lg font-heading font-bold ${category.color}`}>
                {category.name}
              </h2>
              <span className="text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-neon-border bg-neon-elevated text-neon-text-muted ml-auto">
                {category.prompts.length} prompts
              </span>
            </div>

            <div className="space-y-3">
              {category.prompts.map((p) => (
                <div
                  key={p.title}
                  className={`bg-neon-surface border ${category.border} rounded-xl p-5`}
                >
                  <h3 className="text-sm font-heading font-bold text-neon-text mb-2">
                    {p.title}
                  </h3>
                  <div className="bg-neon-bg border border-neon-border rounded-lg p-3 mb-3 font-body">
                    <p className="text-xs text-neon-text leading-relaxed">{p.prompt}</p>
                  </div>
                  <p className="text-xs text-neon-text-muted leading-relaxed mb-3">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Puzzle className="w-3 h-3 text-neon-text-muted" />
                    {p.plugins.map((plugin) => (
                      <span
                        key={plugin}
                        className="inline-block text-[10px] text-neon-text-muted bg-neon-elevated px-2 py-0.5 rounded-md border border-neon-border"
                      >
                        {plugin}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Source Link */}
            <div className="mt-3 flex items-center gap-1.5">
              <a
                href={category.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] text-neon-text-muted hover:text-neon-cyan transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Source: {category.sourceLabel}
              </a>
            </div>
          </motion.section>
        ))}

        {/* Additional Sources */}
        <motion.section variants={fadeInUp} transition={{ duration: 0.4 }}>
          <h2 className="text-sm font-heading font-bold text-neon-text mb-3">
            Source References
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-5">
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: 'Prompting in Security Copilot', url: 'https://learn.microsoft.com/en-us/copilot/security/prompting-security-copilot' },
                { label: 'Create Effective Prompts', url: 'https://learn.microsoft.com/en-us/copilot/security/prompting-tips' },
                { label: 'Use Promptbooks', url: 'https://learn.microsoft.com/en-us/copilot/security/using-promptbooks' },
                { label: 'Security Copilot in Defender XDR', url: 'https://learn.microsoft.com/en-us/defender-xdr/security-copilot-in-microsoft-365-defender' },
                { label: 'Security Copilot in Entra', url: 'https://learn.microsoft.com/en-us/entra/security-copilot/security-copilot-in-entra' },
                { label: 'Defender Threat Intelligence', url: 'https://learn.microsoft.com/en-us/defender/threat-intelligence/security-copilot-and-defender-threat-intelligence' },
                { label: 'Copilot in Purview', url: 'https://learn.microsoft.com/en-us/purview/copilot-in-purview-promptbooks' },
                { label: 'Copilot in Intune', url: 'https://learn.microsoft.com/en-us/intune/intune-service/copilot/copilot-devices' },
                { label: 'Script Analysis in Defender', url: 'https://learn.microsoft.com/en-us/defender-xdr/security-copilot-m365d-script-analysis' },
                { label: 'Advanced Hunting with Copilot', url: 'https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-security-copilot' },
              ].map((ref) => (
                <a
                  key={ref.url}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-xs text-neon-text-muted hover:text-neon-cyan transition-colors"
                >
                  <ExternalLink className="w-3 h-3 shrink-0" />
                  <span className="truncate">{ref.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </PageShell>
  )
}
