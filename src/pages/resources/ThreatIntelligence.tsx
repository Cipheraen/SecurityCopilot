import { motion } from 'framer-motion'
import {
  Radar,
  ShieldAlert,
  Eye,
  Package,
  Database,
  FileOutput,
  Bot,
  Lock,
  Layers,
  AlertTriangle,
  Cpu,
  Target,
  Search,
  Hammer,
  DoorOpen,
  Key,
  Compass,
  FolderSearch,
  FlaskConical,
  Download,
  Zap,
  Crosshair,
  Fingerprint,
  Swords,
  Webhook,
  FileWarning,
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

const owaspItems = [
  {
    id: 'LLM01',
    title: 'Prompt Injection',
    icon: <ShieldAlert className="w-4 h-4" />,
    risk: 'Attackers manipulate LLMs through crafted inputs to gain unauthorized access, steal data, or compromise decision-making.',
    types: 'Direct Injection (malicious user input) and Indirect Injection (malicious content in external data sources).',
    example: 'Tricking chatbots into breaking rules to access private information; hidden instructions in web pages causing AI to leak conversations.',
    mitigations: [
      'Treat LLMs as untrusted inputs',
      'Enforce strict role instructions and task adherence',
      'Validate output formats using deterministic code checks',
      'Gate model tools with allow-lists',
    ],
  },
  {
    id: 'LLM02',
    title: 'Sensitive Information Disclosure',
    icon: <Eye className="w-4 h-4" />,
    risk: 'LLMs may inadvertently reveal sensitive information through training data leakage, RAG system exposure, database access, or user input reflection.',
    example: 'Extracting sensitive info via targeted prompt injection; unintentional credential exposure in training data.',
    mitigations: [
      'Mask sensitive content before training',
      'Enforce strict input validation to detect harmful data',
      'Implement output validation to prevent leakage',
      'System-level restrictions on returnable data types',
    ],
  },
  {
    id: 'LLM03',
    title: 'Supply Chain Vulnerabilities',
    icon: <Package className="w-4 h-4" />,
    risk: 'Dependencies on compromised components, third-party services, or contaminated datasets undermine system integrity.',
    example: 'Compromised Python libraries with malware; modified models with hidden malicious parameters bypassing safety checks.',
    mitigations: [
      'Use verified sources with integrity checks (signing, file hashes)',
      'Maintain a signed Software Bill of Materials (SBOM)',
      'Track and scan all third-party components',
      'Use only trusted providers for training data and models',
    ],
  },
  {
    id: 'LLM04',
    title: 'Data and Model Poisoning',
    icon: <Database className="w-4 h-4" />,
    risk: 'Attackers manipulate data during pre-training, fine-tuning, or embedding to introduce biases or backdoors.',
    example: 'Injecting biased examples to propagate misinformation; including toxic data in fine-tuning datasets.',
    mitigations: [
      'Use OWASP CycloneDX to verify data legitimacy',
      'Rigorously validate data providers against trusted sources',
      'Implement data provenance tracking',
    ],
  },
  {
    id: 'LLM05',
    title: 'Improper Output Handling',
    icon: <FileOutput className="w-4 h-4" />,
    risk: 'LLM outputs not properly validated before being passed to downstream systems, leading to injection vulnerabilities.',
    example: 'SQL injection through unvalidated Text2SQL outputs; unvalidated outputs triggering unintended admin commands.',
    mitigations: [
      'Apply context-aware encoding (HTML, SQL escaping)',
      'Validate and sanitize responses before backend processing',
      'Treat LLM output as untrusted input for downstream systems',
    ],
  },
  {
    id: 'LLM06',
    title: 'Excessive Agency',
    icon: <Bot className="w-4 h-4" />,
    risk: 'Agentic systems granted excessive functionality, permissions, or autonomy beyond intended use.',
    example: 'Assistants with send-message permissions exploited to forward sensitive emails; file-writing extensions enabling arbitrary command execution.',
    mitigations: [
      'Use narrowly scoped extensions with minimal access',
      'Implement manual approval for high-impact actions',
      'Apply rate limiting on actions within specified timeframes',
      'Continuously monitor LLM extensions and downstream systems',
    ],
  },
  {
    id: 'LLM07',
    title: 'System Prompt Leakage',
    icon: <Lock className="w-4 h-4" />,
    risk: 'Exposure of sensitive information embedded in system prompts, including internal rules, credentials, and operational logic.',
    example: 'Attackers extracting credentials from system prompts; prompt injection overriding system restrictions.',
    mitigations: [
      'Keep credentials and keys external to system prompts',
      'Implement independent guardrails for output validation',
      'Never embed secrets in system prompts',
    ],
  },
  {
    id: 'LLM08',
    title: 'Vector and Embedding Weaknesses',
    icon: <Layers className="w-4 h-4" />,
    risk: 'Vulnerabilities in RAG systems affecting vector generation, storage, or retrieval exploited for data access or manipulation.',
    example: 'Misconfigured databases allowing unauthorized embedding access; embedding inversion attacks recovering original data.',
    mitigations: [
      'Enforce strict access controls and partitioning',
      'Regularly audit and validate data sources',
      'Implement proper access control at the vector store level',
    ],
  },
  {
    id: 'LLM09',
    title: 'Misinformation',
    icon: <AlertTriangle className="w-4 h-4" />,
    risk: 'Models generating false but credible-sounding content through hallucinations, biases, or user over-reliance.',
    example: 'Developers integrating malicious packages hallucinated by coding assistants; medical chatbots providing incorrect diagnostic information.',
    mitigations: [
      'Enhance reliability through Retrieval-Augmented Generation (RAG)',
      'Encourage cross-verification with external sources',
      'Implement human fact-checking for critical information',
    ],
  },
  {
    id: 'LLM10',
    title: 'Unbounded Consumption',
    icon: <Cpu className="w-4 h-4" />,
    risk: 'Uncontrolled resource usage leading to performance degradation, downtime, or unexpected costs.',
    example: 'Excessively large inputs consuming memory and CPU; high-volume API requests depleting resources.',
    mitigations: [
      'Implement rate limiting and request throttling',
      'Monitor and dynamically manage resource allocation',
      'Apply timeouts for resource-intensive operations',
      'Restrict request rates per user',
    ],
  },
]

const atlasTactics = [
  { id: 'AML.TA0001', name: 'Reconnaissance', icon: <Search className="w-3.5 h-3.5" />, desc: 'Gathering information about AI systems -- Discover ML Artifacts, ML Model Ontology, Active Scanning.' },
  { id: 'AML.TA0002', name: 'Resource Development', icon: <Hammer className="w-3.5 h-3.5" />, desc: 'Preparing tools and resources for attacks -- Acquire Public ML Artifacts, Develop Adversarial ML Attack Capabilities.' },
  { id: 'AML.TA0003', name: 'Initial Access', icon: <DoorOpen className="w-3.5 h-3.5" />, desc: 'Gaining initial entry to AI systems -- ML Supply Chain Compromise, Prompt Injection.' },
  { id: 'AML.TA0004', name: 'ML Model Access', icon: <Key className="w-3.5 h-3.5" />, desc: 'Accessing ML models directly -- Inference API Access, ML Artifacts Access.' },
  { id: 'AML.TA0005', name: 'Execution', icon: <Zap className="w-3.5 h-3.5" />, desc: 'Running adversarial techniques -- User Execution, LLM Plugin Compromise.' },
  { id: 'AML.TA0006', name: 'Persistence', icon: <Fingerprint className="w-3.5 h-3.5" />, desc: 'Maintaining access to AI systems -- Modify AI Agent Configuration.' },
  { id: 'AML.TA0007', name: 'Privilege Escalation', icon: <Swords className="w-3.5 h-3.5" />, desc: 'Gaining elevated access -- Exploit through ML System.' },
  { id: 'AML.TA0008', name: 'Defense Evasion', icon: <Eye className="w-3.5 h-3.5" />, desc: 'Avoiding detection -- Adversarial Perturbation, LLM Meta Prompt Extraction.' },
  { id: 'AML.TA0009', name: 'Credential Access', icon: <Lock className="w-3.5 h-3.5" />, desc: 'Stealing credentials -- Credentials from AI Agent Configuration.' },
  { id: 'AML.TA0010', name: 'Discovery', icon: <Compass className="w-3.5 h-3.5" />, desc: 'Learning about the AI environment -- Discover AI Agent Configuration.' },
  { id: 'AML.TA0011', name: 'Collection', icon: <FolderSearch className="w-3.5 h-3.5" />, desc: 'Gathering target data -- Data from AI Services, RAG Database Retrieval.' },
  { id: 'AML.TA0012', name: 'ML Attack Staging', icon: <FlaskConical className="w-3.5 h-3.5" />, desc: 'Preparing ML-specific attacks -- Poison Training Data, Backdoor ML Model.' },
  { id: 'AML.TA0013', name: 'Exfiltration', icon: <Download className="w-3.5 h-3.5" />, desc: 'Extracting data from AI systems -- Exfiltration via ML Inference API, via AI Agent Tool Invocation.' },
  { id: 'AML.TA0014', name: 'Impact', icon: <Target className="w-3.5 h-3.5" />, desc: 'Disrupting AI system operations -- Denial of ML Service, Evade ML Model, Spamming ML System.' },
]

const criticalTechniques = [
  { id: 'AML.T0051', name: 'Prompt Injection', desc: 'Manipulating LLM behavior through crafted inputs; subdivides into direct and indirect injection.' },
  { id: 'AML.T0020', name: 'Data Poisoning', desc: 'Corrupting training data to manipulate model behavior.' },
  { id: 'AML.T0058', name: 'AI Agent Context Poisoning', desc: 'Poisoning the context that AI agents use for decision-making.' },
  { id: 'AML.T0059', name: 'Activation Triggers', desc: 'Setting up triggers that activate malicious behavior in AI agents.' },
  { id: 'AML.T0060', name: 'Data from AI Services', desc: 'Collecting data from AI service interfaces.' },
  { id: 'AML.T0061', name: 'AI Agent Tools', desc: 'Exploiting the tools and functions available to AI agents.' },
  { id: 'AML.T0062', name: 'Exfiltration via AI Agent Tool Invocation', desc: 'Using agent tools to exfiltrate data from target systems.' },
]

export function ThreatIntelligence() {
  return (
    <PageShell
      title="Threat Intelligence"
      description="Key frameworks for understanding and defending against AI-specific threats: OWASP Top 10 for LLM Applications 2025 and the MITRE ATLAS adversarial AI framework."
      icon={Radar}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* OWASP Top 10 */}
        <motion.section variants={fadeInUp} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="w-5 h-5 text-neon-crimson" />
            <h2 className="text-xl font-heading font-bold text-neon-text">OWASP Top 10 for LLM Applications</h2>
          </div>
          <p className="text-sm text-neon-text-muted mb-6 leading-relaxed">
            The 2025 edition outlines the most critical risks and vulnerabilities for building secure LLM applications. Each category includes real-world examples and actionable mitigations.
          </p>

          <div className="space-y-4">
            {owaspItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-neon-surface border border-neon-border rounded-xl p-5 hover:border-neon-crimson/30 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neon-crimson/10 text-neon-crimson flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-sm font-heading font-bold text-neon-text">
                        {item.id}: {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-neon-text-muted leading-relaxed mb-3">{item.risk}</p>

                    {'types' in item && item.types && (
                      <div className="mb-2">
                        <span className="text-[10px] font-heading font-bold text-neon-purple uppercase tracking-wider">Attack Types: </span>
                        <span className="text-xs text-neon-text-muted">{item.types}</span>
                      </div>
                    )}

                    <div className="mb-3">
                      <span className="text-[10px] font-heading font-bold text-neon-purple uppercase tracking-wider">Example: </span>
                      <span className="text-xs text-neon-text-muted">{item.example}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-heading font-bold text-neon-cyan uppercase tracking-wider block mb-1.5">Mitigations</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.mitigations.map((m, mi) => (
                          <span
                            key={mi}
                            className="inline-block text-[10px] text-neon-text-muted bg-neon-elevated px-2 py-1 rounded-md border border-neon-border"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* MITRE ATLAS */}
        <motion.section variants={fadeInUp} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-2 mb-2">
            <Crosshair className="w-5 h-5 text-neon-purple" />
            <h2 className="text-xl font-heading font-bold text-neon-text">MITRE ATLAS Framework</h2>
          </div>
          <p className="text-sm text-neon-text-muted mb-6 leading-relaxed">
            MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) is a globally accessible knowledge base documenting adversary tactics, techniques, and procedures (TTPs) specifically targeting AI and ML systems.
          </p>

          {/* Framework Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
            {[
              { value: '15', label: 'Tactics' },
              { value: '66', label: 'Techniques' },
              { value: '46', label: 'Sub-techniques' },
              { value: '26', label: 'Mitigations' },
              { value: '33', label: 'Case Studies' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-neon-surface border border-neon-border rounded-xl p-3 text-center"
              >
                <div className="text-lg font-heading font-bold text-neon-purple">{stat.value}</div>
                <div className="text-[10px] text-neon-text-muted uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ATLAS vs Others */}
          <div className="mb-6">
            <h3 className="text-sm font-heading font-bold text-neon-purple mb-3">Framework Comparison</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { name: 'MITRE ATT&CK', focus: 'Enterprise cybersecurity threats', type: 'Comprehensive TTP matrix', color: 'border-neon-crimson/30' },
                { name: 'MITRE ATLAS', focus: 'Adversarial AI/ML threats', type: 'AI-specific TTP matrix', color: 'border-neon-purple/30 neon-glow-purple' },
                { name: 'OWASP LLM Top 10', focus: 'LLM application vulnerabilities', type: 'Prioritized developer checklist', color: 'border-neon-cyan/30' },
              ].map((fw) => (
                <div
                  key={fw.name}
                  className={`bg-neon-surface border rounded-xl p-4 ${fw.color}`}
                >
                  <h4 className="text-xs font-heading font-bold text-neon-text mb-1">{fw.name}</h4>
                  <p className="text-[11px] text-neon-text-muted mb-1">{fw.focus}</p>
                  <span className="text-[10px] text-neon-purple">{fw.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tactics Matrix */}
          <div className="mb-6">
            <h3 className="text-sm font-heading font-bold text-neon-purple mb-3">Complete Tactics Matrix</h3>
            <div className="grid gap-2">
              {atlasTactics.map((tactic) => (
                <div
                  key={tactic.id}
                  className="bg-neon-surface border border-neon-border rounded-lg p-3 flex items-start gap-3 hover:border-neon-purple/30 transition-colors"
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-neon-purple/10 text-neon-purple flex-shrink-0">
                    {tactic.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-neon-purple">{tactic.icon}</span>
                      <span className="text-xs font-heading font-bold text-neon-text">{tactic.name}</span>
                      <span className="text-[10px] text-neon-text-muted ml-auto hidden sm:inline">{tactic.id}</span>
                    </div>
                    <p className="text-[11px] text-neon-text-muted leading-relaxed">{tactic.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Techniques */}
          <div className="mb-6">
            <h3 className="text-sm font-heading font-bold text-neon-purple mb-3">Critical Techniques</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {criticalTechniques.map((tech) => (
                <div
                  key={tech.id}
                  className="bg-neon-surface border border-neon-border rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-heading font-bold text-neon-crimson bg-neon-crimson/10 px-1.5 py-0.5 rounded">
                      {tech.id}
                    </span>
                    <h4 className="text-xs font-heading font-bold text-neon-text">{tech.name}</h4>
                  </div>
                  <p className="text-[11px] text-neon-text-muted leading-relaxed">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Agent-Specific Threats */}
          <div className="mb-6">
            <h3 className="text-sm font-heading font-bold text-neon-purple mb-3 flex items-center gap-2">
              <Webhook className="w-4 h-4" />
              Agent-Specific Threats (2025 Update)
            </h3>
            <div className="bg-neon-surface border border-neon-purple/20 rounded-xl p-5 neon-glow-purple">
              <p className="text-xs text-neon-text-muted mb-3 leading-relaxed">
                ATLAS added <span className="text-neon-purple font-bold">14 new techniques</span> in 2025 specifically addressing AI agent risks:
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  'Prompt injection attacks on agents',
                  'Memory manipulation attacks',
                  'Tool-use manipulation',
                  'Control boundary violations',
                  'Agent-specific behaviors outside traditional IT categories',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <FileWarning className="w-3.5 h-3.5 mt-0.5 text-neon-purple flex-shrink-0" />
                    <span className="text-xs text-neon-text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Practical Applications */}
          <div>
            <h3 className="text-sm font-heading font-bold text-neon-cyan mb-3">Practical Applications</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: 'Threat Modeling', desc: 'Systematically identify and assess AI-specific threats during development.' },
                { title: 'Detection Development', desc: 'Create detection rules mapped to ATLAS techniques for SIEM integration.' },
                { title: 'Red Teaming', desc: 'Structure adversarial testing of AI systems against known attack patterns.' },
                { title: 'Incident Response', desc: 'Build playbooks mapped to ATLAS tactics for AI security incidents.' },
                { title: 'Regulatory Compliance', desc: 'Support GDPR and other regulatory alignment through systematic AI security risk identification.' },
                { title: 'ATLAS Navigator', desc: 'Visualization tool to operationalize the framework and map coverage.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-neon-surface border border-neon-border rounded-xl p-4 hover:border-neon-cyan/30 transition-colors"
                >
                  <h4 className="text-xs font-heading font-bold text-neon-text mb-1">{item.title}</h4>
                  <p className="text-[11px] text-neon-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </PageShell>
  )
}
