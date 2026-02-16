import { motion } from 'framer-motion'
import {
  ExternalLink,
  Shield,
  BrainCircuit,
  Radar,
  BookOpen,
  ArrowUpRight,
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

interface LinkItem {
  title: string
  url: string
  description: string
}

interface LinkCategory {
  heading: string
  icon: React.ReactNode
  accent: string
  badgeColor: string
  links: LinkItem[]
}

const linkCategories: LinkCategory[] = [
  {
    heading: 'Security Copilot',
    icon: <Shield className="w-4 h-4" />,
    accent: 'text-neon-crimson',
    badgeColor: 'bg-neon-crimson/10 text-neon-crimson border-neon-crimson/20',
    links: [
      {
        title: 'Security Copilot Documentation',
        url: 'https://learn.microsoft.com/en-us/copilot/security/',
        description: 'Official Microsoft documentation for Security Copilot -- setup, configuration, and usage guides.',
      },
      {
        title: 'Copilot Studio Security & Governance',
        url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance',
        description: 'Comprehensive security and governance documentation for Microsoft Copilot Studio.',
      },
      {
        title: 'Copilot Studio DLP Configuration',
        url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention',
        description: 'Data loss prevention policy configuration guide for Copilot Studio environments.',
      },
      {
        title: 'Governance Phase 2 -- Security Controls',
        url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-phase2',
        description: 'Phase 2 security governance guidance covering advanced controls and monitoring.',
      },
      {
        title: 'Governance Phase 3 -- Advanced Governance',
        url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-phase3',
        description: 'Phase 3 governance patterns for enterprise-scale Copilot Studio deployments.',
      },
      {
        title: 'Security & Governance for Agents in M365 Copilot',
        url: 'https://www.microsoft.com/en-us/power-platform/blog/2025/03/04/security-and-governance-for-agents/',
        description: 'Microsoft blog post on proactive security and governance controls for agents built in Microsoft 365.',
      },
      {
        title: 'Managed Security Enhancements for Copilot Studio',
        url: 'https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/announcing-managed-security-enhancements-for-microsoft-copilot-studio/',
        description: 'Announcement of managed security capabilities including network isolation, data masking, and auto-labeling.',
      },
    ],
  },
  {
    heading: 'Azure AI Foundry / Copilot Studio',
    icon: <BrainCircuit className="w-4 h-4" />,
    accent: 'text-neon-purple',
    badgeColor: 'bg-neon-purple/10 text-neon-purple border-neon-purple/20',
    links: [
      {
        title: 'Azure AI Foundry -- Official Docs',
        url: 'https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry',
        description: 'Official Microsoft documentation on Azure AI Foundry platform architecture and capabilities.',
      },
      {
        title: 'Azure AI Foundry -- What Is It and Why Should You Care?',
        url: 'https://www.gapvelocity.ai/blog/azure-ai-foundry-what-is-it-and-why-should-you-care',
        description: 'Overview article covering Azure AI Foundry components, scale, and ecosystem integration.',
      },
      {
        title: 'Building AI Solutions on Azure AI Foundry',
        url: 'https://medium.com/@rahultiwari065/building-ai-solutions-on-azure-lessons-from-my-hands-on-experience-with-azure-ai-foundry-ce475990f84c',
        description: 'Field report on hands-on experience building AI solutions with Azure AI Foundry, including multi-agent architecture lessons.',
      },
      {
        title: 'Agent Identity Security Demystified',
        url: 'https://derkvanderwoude.medium.com/agent-identity-security-demystified-2ecb164239bf',
        description: 'Deep dive into agent identity platform components, credential hierarchy, and modern vs. classic agent approaches.',
      },
      {
        title: 'Copilot Studio Agent Security -- Lessons from the Field',
        url: 'https://derkvanderwoude.medium.com/copilot-studio-agent-security-lessons-learned-from-the-field-989c8523c191',
        description: 'Field lessons on Copilot Studio agent security covering authentication, DLP, and environment controls.',
      },
    ],
  },
  {
    heading: 'Threat Intelligence Frameworks',
    icon: <Radar className="w-4 h-4" />,
    accent: 'text-neon-cyan',
    badgeColor: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20',
    links: [
      {
        title: 'OWASP Top 10 for LLM Applications 2025',
        url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
        description: 'The definitive list of the 10 most critical risks for LLM applications, updated for 2025.',
      },
      {
        title: 'OWASP Top 10 LLM 2025 -- Risks and Mitigation',
        url: 'https://www.confident-ai.com/blog/owasp-top-10-2025-for-llm-applications-risks-and-mitigation-techniques',
        description: 'Detailed analysis of OWASP LLM Top 10 risks with practical mitigation techniques.',
      },
      {
        title: 'MITRE ATLAS Framework',
        url: 'https://atlas.mitre.org/',
        description: 'Official MITRE ATLAS knowledge base -- adversary tactics, techniques, and procedures targeting AI/ML systems.',
      },
      {
        title: 'MITRE ATLAS: 15 Tactics and 66 Techniques',
        url: 'https://www.vectra.ai/topics/mitre-atlas',
        description: 'Comprehensive overview of the ATLAS tactics matrix with technique breakdowns.',
      },
      {
        title: 'MITRE ATLAS Framework Guide -- Securing AI Systems',
        url: 'https://www.practical-devsecops.com/mitre-atlas-framework-guide-securing-ai-systems/',
        description: 'Practical guide to operationalizing ATLAS for AI security, including detection development and red teaming.',
      },
    ],
  },
  {
    heading: 'Product Integration Docs',
    icon: <BookOpen className="w-4 h-4" />,
    accent: 'text-neon-text-muted',
    badgeColor: 'bg-neon-elevated text-neon-text-muted border-neon-border',
    links: [
      {
        title: 'Security Copilot in Defender XDR',
        url: 'https://learn.microsoft.com/en-us/defender-xdr/security-copilot-in-microsoft-365-defender',
        description: 'Incident summarization, guided response, script analysis, and advanced hunting integration.',
      },
      {
        title: 'Security Copilot in Microsoft Sentinel',
        url: 'https://learn.microsoft.com/en-us/azure/sentinel/sentinel-security-copilot',
        description: 'NL2KQL threat hunting, incident correlation, and cloud-native SIEM integration.',
      },
      {
        title: 'Security Copilot in Microsoft Entra',
        url: 'https://learn.microsoft.com/en-us/entra/security-copilot/security-copilot-in-entra',
        description: 'Identity risk investigation, sign-in analysis, and conditional access optimization.',
      },
      {
        title: 'Copilot in Microsoft Purview',
        url: 'https://learn.microsoft.com/en-us/purview/copilot-in-purview-promptbooks',
        description: 'DLP alert triage, insider risk investigation, and data security prompts and promptbooks.',
      },
      {
        title: 'Copilot in Microsoft Intune',
        url: 'https://learn.microsoft.com/en-us/intune/intune-service/copilot/copilot-devices',
        description: 'Device compliance, vulnerability remediation, troubleshooting, and endpoint security.',
      },
    ],
  },
  {
    heading: 'Training & Learning',
    icon: <BookOpen className="w-4 h-4" />,
    accent: 'text-neon-text-muted',
    badgeColor: 'bg-neon-elevated text-neon-text-muted border-neon-border',
    links: [
      {
        title: 'Microsoft Learn -- Security Copilot Training Path',
        url: 'https://learn.microsoft.com/en-us/training/paths/security-copilot-and-ai/',
        description: 'Official "Get started with Microsoft Security Copilot" learning path on Microsoft Learn.',
      },
      {
        title: 'Security Copilot Ninja Training',
        url: 'https://techcommunity.microsoft.com/blog/securitycopilotblog/how-to-become-a-microsoft-security-copilot-ninja-the-complete-level-400-training/4106928',
        description: 'Complete Level 400 training program via Microsoft Tech Community for advanced practitioners.',
      },
      {
        title: 'Security Copilot Technical Workshops',
        url: 'https://techcommunity.microsoft.com/blog/microsoft-security-blog/accelerate-your-security-copilot-readiness-with-our-global-technical-workshop-se/4483805',
        description: 'Free virtual hands-on workshops with scenario-based instruction, live demos, and expert Q&A.',
      },
      {
        title: 'Security Copilot Video Hub',
        url: 'https://adoption.microsoft.com/en-us/security-copilot/video-hub/',
        description: 'Bite-sized insights and deep dives -- quick overviews, use cases, and customer spotlights.',
      },
      {
        title: 'Azure Security Copilot GitHub Repository',
        url: 'https://github.com/Azure/Security-Copilot',
        description: 'Official Microsoft repository with sample plugins, promptbooks, and customization resources.',
      },
    ],
  },
  {
    heading: 'Additional Resources',
    icon: <BookOpen className="w-4 h-4" />,
    accent: 'text-neon-text-muted',
    badgeColor: 'bg-neon-elevated text-neon-text-muted border-neon-border',
    links: [
      {
        title: 'Security Copilot Prompting Guide',
        url: 'https://learn.microsoft.com/en-us/copilot/security/prompting-tips',
        description: 'Official best practices for creating effective prompts in Security Copilot.',
      },
      {
        title: 'Security Copilot Plugins Overview',
        url: 'https://learn.microsoft.com/en-us/copilot/security/plugin-overview',
        description: 'Plugin architecture, available plugins, and custom plugin development documentation.',
      },
      {
        title: 'Security Copilot SCU Management',
        url: 'https://learn.microsoft.com/en-us/copilot/security/manage-usage',
        description: 'Security Compute Unit (SCU) provisioning, monitoring, and usage management.',
      },
      {
        title: 'OWASP CycloneDX -- SBOM Standard',
        url: 'https://cyclonedx.org/',
        description: 'Standard for Software Bill of Materials (SBOM) -- recommended for verifying AI supply chain integrity.',
      },
      {
        title: 'Microsoft Entra ID Documentation',
        url: 'https://learn.microsoft.com/en-us/entra/identity/',
        description: 'Identity and access management documentation for securing agent authentication and conditional access.',
      },
      {
        title: 'Microsoft Power Platform DLP Policies',
        url: 'https://learn.microsoft.com/en-us/power-platform/admin/wp-data-loss-prevention',
        description: 'Data loss prevention policy management for Power Platform environments including Copilot Studio.',
      },
    ],
  },
]

export function Links() {
  return (
    <PageShell
      title="Links & Resources"
      description="Curated collection of official documentation, community resources, research papers, and useful references for Security Copilot, Azure AI, and AI threat intelligence."
      icon={ExternalLink}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {linkCategories.map((category) => (
          <motion.section key={category.heading} variants={fadeInUp} transition={{ duration: 0.4 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className={category.accent}>{category.icon}</span>
              <h2 className={`text-lg font-heading font-bold ${category.accent}`}>{category.heading}</h2>
              <span className={`text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ml-auto ${category.badgeColor}`}>
                {category.links.length} links
              </span>
            </div>

            <div className="grid gap-3">
              {category.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-neon-surface border border-neon-border rounded-xl p-4 flex items-start gap-3 hover:border-neon-purple/40 hover:bg-neon-elevated/50 transition-all duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-heading font-bold text-neon-text group-hover:text-neon-cyan transition-colors">
                        {link.title}
                      </h3>
                    </div>
                    <p className="text-xs text-neon-text-muted leading-relaxed">{link.description}</p>
                    <span className="inline-block mt-2 text-[10px] text-neon-text-muted/60 truncate max-w-full">
                      {link.url}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neon-text-muted group-hover:text-neon-cyan transition-colors flex-shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </PageShell>
  )
}
