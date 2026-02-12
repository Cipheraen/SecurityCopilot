# Azure AI Foundry, Copilot Studio Security & Threat Intelligence Research

> Research compiled for the Security Copilot Knowledge Hub project.
> Sources include Microsoft documentation, OWASP, MITRE ATLAS, and community field reports.

---

## Table of Contents

1. [Azure AI Foundry Overview](#azure-ai-foundry-overview)
2. [Copilot Studio Agent Security](#copilot-studio-agent-security)
3. [Agent Identity Security](#agent-identity-security)
4. [OWASP Top 10 for LLM Applications (2025)](#owasp-top-10-for-llm-applications-2025)
5. [MITRE ATLAS Framework](#mitre-atlas-framework)
6. [Key Takeaways & Cross-Cutting Themes](#key-takeaways--cross-cutting-themes)

---

## Azure AI Foundry Overview

### What is Azure AI Foundry?

Azure AI Foundry is Microsoft's enterprise-grade platform for designing, customizing, and managing AI applications and agents. Launched in late 2024 as the evolution of Azure AI Studio, it serves as an "AI app and agent factory" that unifies models, tools, data connectors, and deployment pipelines.

### Core Components

| Component | Description |
|-----------|-------------|
| **Model Catalog** | Repository of 10,000+ AI models from Microsoft, OpenAI, and open-source providers (Hugging Face). Enables discovery, comparison, evaluation, and fine-tuning. |
| **Agent Services** | Fully managed service for creating autonomous agents handling complex, multi-step business processes. Supports prompt chaining, external API calls, and multi-agent orchestration. |
| **Azure AI Search** | Implements RAG functionality, enabling agents to access enterprise data across documents, wikis, and databases. Provides real-time fact-grounding to reduce hallucinations. |
| **Content Safety** | Advanced filtering and moderation for AI inputs and outputs. Scans for hate speech, profanity, privacy violations, and policy breaches. |
| **Observability** | Mission control hub for monitoring AI applications. Tracks performance metrics, usage trends, cost analysis, custom evaluations, alerts, and compliance auditing. |

### Platform Architecture: Hubs and Projects

- **Hub**: Manages shared resources, users, access control, and connected services at the organizational level.
- **Project**: Organizes individual AI initiatives under a hub, providing structure, visibility, and collaboration tools.

### Access Interfaces

- **Web Portal**: Point-and-click, low-code interface for rapid prototyping.
- **Unified SDK**: Code-based development for advanced customization.
- **REST APIs**: Direct application integration for production workloads.

### Hands-On Lessons Learned

Based on real-world deployment experience:

- **Model Selection Matters**: Multi-agent systems don't always need the largest model for every agent. Use a mix of model sizes to optimize cost -- e.g., GPT-3.5 for data extraction, GPT-4 for synthesis. Using an expensive model for a simple sub-task is wasteful.
- **POC to Production Gap**: Simpler configuration and integration steps enable less specialized team members to contribute, helping more AI projects move from lab experiments to production.
- **Multi-Agent Architecture**: Many real-world processes are too complex for one agent alone. Multi-agent systems distribute work across specialized agents while maintaining coordination.
- **Connector Ecosystem**: Connects to 1,400+ data sources and APIs via pre-built connectors, maintaining conversational state and managing parallel tasks.

### Scale & Adoption

- 70,000+ customers using the platform
- 100 trillion tokens processed per quarter
- 2 billion daily enterprise search queries
- Over 10,000 organizations have used Foundry to automate complex business processes
- Accelerates development cycles by approximately 50% compared to traditional approaches

### Ecosystem Integration

- Works with GitHub and Visual Studio
- Interoperates with Copilot Studio
- Builds on Azure OpenAI Service, Azure Machine Learning, and Cognitive Services
- Model-agnostic design supporting open interoperability

---

## Copilot Studio Agent Security

### Security Framework Overview

Copilot Studio follows the Security Development Lifecycle (SDL) and provides comprehensive security and governance controls including:

- Geographic data residency
- Data loss prevention (DLP)
- Multiple standards certifications
- Regulatory compliance
- Environment routing
- Regional customization

### Authentication Best Practices

- **Default Authentication**: New agents automatically use Microsoft Entra ID authentication without manual setup (Authenticate with Microsoft is enabled by default).
- **Enforce Authentication via DLP**: Configure a data policy that blocks the connector "Chat without Microsoft Entra ID authentication" to prevent agents from being published without authentication.
- **Conditional Access**: Apply Microsoft Entra Conditional Access policies for corporate devices and networks.
- **Authentication Models**: Establish a permitted authentication model for agents (Entra ID vs. manual authentication vs. no authentication).
- **MFA**: Enable multifactor authentication for all Power Platform and Copilot Studio users through Microsoft Entra ID.

### Data Loss Prevention (DLP) Governance

Since early 2025, DLP enforcement is mandatory for all tenants -- exemptions are no longer supported.

**Key DLP Practices:**

- Establish environment-level or tenant-level data policy rules to restrict unused first-party and third-party connectors.
- Classify connectors as "Business" vs. "Non-business" -- connectors in the "Non-business" group are automatically blocked in many organizations.
- Block all connectors that the project doesn't require.
- Apply data policies to environments to block unused channels or settings (e.g., unauthenticated use, skills).
- Persistent label inheritance ensures new content generated by agents inherits sensitivity labels from source content.

### Data Protection

- All data managed by Microsoft Copilot is encrypted both in transit and at rest.
- Data isolation mechanisms prevent cross-tenant data leakage.
- Agents include comprehensive activity logging and auditing capabilities.
- Administrators can detect anomalies, risky AI usage, and ensure compliance.

### Environment & Access Control

- Restrict agent permissions to essential data sources only (principle of least privilege).
- Use a service principal account for production environment deployment and custom connector authentication.
- Manage user access to environments through Microsoft Entra ID groups.
- Only bot authors and just-in-time admins should have access to environments and data stores.

### 2025-2026 Security Enhancements

- **Proactive Governance**: New managed security capabilities focusing on security by default.
- **Network Isolation**: IP Firewall and VNET support for App Insight and HTTP connectors.
- **Sensitive Data Masking**: Runtime masking and audio suppression for sensitive data.
- **Auto-labeling**: Dataverse tables auto-labeled with the Data Map Dataverse Connector.
- **Real-Time Protection**: Near-real-time security controls for AI agents.
- **Admin Visibility**: Agents built with Agent Builder viewable in Microsoft 365 admin center; admins can block sharing of agents.

### Common Security Pitfalls

- Publishing agents without authentication configured.
- Overly permissive connector policies allowing unnecessary data source access.
- Lack of environment-level DLP enforcement.
- Insufficient monitoring and auditing of agent interactions.
- Not restricting unused channels and skills.

---

## Agent Identity Security

### Overview

Based on Derk van der Woude's research (January 2026), agent identity security addresses how AI agents authenticate and authorize themselves within enterprise environments.

### Agent Building Platforms

- **Copilot Studio**: Low-code/no-code agent builder for business apps (M365, Dynamics, Power Platform, connectors, workflows).
- **Classic vs. Modern Agents**: Agents were historically created as Service Principals ("Classic Agents"), but the recommended approach enables modern Agent Identities that integrate with Entra security products.

### Agent Identity Platform Components

The Agent Identity platform consists of 4 core components:

| Component | Purpose |
|-----------|---------|
| **Agent Identity Blueprint** | Parent template for creating Agent Identities (1:N relationship). Container for IT management. |
| **Agent Identity Blueprint Principal** | Security principal associated with the blueprint. |
| **Agent Identity** | Individual identity instance created from a blueprint. |
| **Agent User** (optional) | Optional user-level representation of the agent. |

### Credential Security Hierarchy

Client credentials are configured in the Agent Identity Blueprint (not in individual Agent Identities) and used to request access tokens via the Agent Blueprint ID (Application ID).

**Security ranking (most to least secure):**

1. **Managed Identity (Federated Identity Credential)** -- Most secure, recommended approach
2. **Client Certificate** -- Moderate security
3. **Client Secret** -- Least secure, avoid when possible

### Key Recommendations

- Always prefer Managed Identity over client secrets for agent authentication.
- Configure credentials at the Blueprint level, not per individual agent.
- Use Entra ID security products for agent identity management.
- Transition from Classic Agents (Service Principals) to modern Agent Identities.
- Implement proper lifecycle management for agent identities.

---

## OWASP Top 10 for LLM Applications (2025)

The OWASP Top 10 for LLM Applications 2025 outlines the most critical risks and vulnerabilities for building secure LLM applications.

### LLM01: Prompt Injection

**Risk**: Attackers manipulate LLMs through crafted inputs to gain unauthorized access, steal data, or compromise decision-making. The model cannot distinguish between legitimate instructions and malicious injected commands.

**Types**:
- **Direct Injection**: Malicious content in user input directly causes model failure.
- **Indirect Injection**: Malicious content embedded in external data sources the LLM processes.

**Real-World Examples**: Tricking chatbots into breaking rules to access private information; hidden instructions in web pages causing AI to leak conversations.

**Mitigation**:
- Treat LLMs as untrusted inputs
- Enforce strict role instructions and task adherence
- Validate output formats using deterministic code checks
- Implement guardrails for input validation
- Threat-model agent workflows and test prompts as attack surfaces
- Gate model tools with allow-lists
- Monitor interactions at runtime

### LLM02: Sensitive Information Disclosure

**Risk**: LLMs may inadvertently reveal sensitive information through training data leakage, RAG system exposure, database access, or user input reflection.

**Real-World Examples**: Extracting sensitive info via targeted prompt injection; unintentional credential exposure in training data.

**Mitigation**:
- Mask sensitive content before training
- Enforce strict input validation to detect harmful data
- Implement output validation to prevent leakage
- Offer opt-out options through clear Terms of Use
- Implement system-level restrictions on returnable data types

### LLM03: Supply Chain Vulnerabilities

**Risk**: Dependencies on compromised components, third-party services, or contaminated datasets undermine system integrity across the development pipeline.

**Real-World Examples**: Compromised Python libraries with malware; modified models with hidden malicious parameters bypassing safety checks.

**Mitigation**:
- Use verified sources with integrity checks (signing, file hashes)
- Maintain a signed Software Bill of Materials (SBOM)
- Track and scan all third-party components
- Use only trusted providers for training data, pre-trained models, and fine-tuning

### LLM04: Data and Model Poisoning

**Risk**: Attackers manipulate data during pre-training, fine-tuning, or embedding to introduce biases or backdoors that degrade model reliability.

**Real-World Examples**: Injecting biased examples to propagate misinformation; including toxic data in fine-tuning datasets.

**Mitigation**:
- Use OWASP CycloneDX to verify data legitimacy
- Rigorously validate data providers against trusted sources
- Implement data provenance tracking

### LLM05: Improper Output Handling

**Risk**: LLM outputs not properly validated before being passed to downstream systems, leading to injection vulnerabilities.

**Real-World Examples**: SQL injection through unvalidated Text2SQL outputs; unvalidated outputs triggering unintended admin commands.

**Mitigation**:
- Apply context-aware encoding (HTML, SQL escaping)
- Validate and sanitize responses before backend processing
- Treat LLM output as untrusted input for downstream systems

### LLM06: Excessive Agency

**Risk**: Agentic systems granted excessive functionality, permissions, or autonomy beyond intended use.

**Categories**: Excessive functionality, excessive permissions, excessive autonomy.

**Real-World Examples**: Assistants with send-message permissions exploited to forward sensitive emails; file-writing extensions enabling arbitrary command execution.

**Mitigation**:
- Use narrowly scoped extensions with minimal access
- Implement manual approval for high-impact actions
- Apply rate limiting on actions within specified timeframes
- Continuously monitor LLM extensions and downstream systems

### LLM07: System Prompt Leakage

**Risk**: Exposure of sensitive information embedded in system prompts, including internal rules, credentials, and operational logic.

**Real-World Examples**: Attackers extracting credentials from system prompts; prompt injection overriding system restrictions.

**Mitigation**:
- Keep credentials and keys external to system prompts
- Implement independent guardrails for output validation
- Never embed secrets in system prompts

### LLM08: Vector and Embedding Weaknesses

**Risk**: Vulnerabilities in RAG systems affecting vector generation, storage, or retrieval that can be exploited for data access or manipulation.

**Real-World Examples**: Misconfigured databases allowing unauthorized embedding access; embedding inversion attacks recovering original data.

**Mitigation**:
- Enforce strict access controls and partitioning
- Regularly audit and validate data sources from verified providers
- Implement proper access control at the vector store level

### LLM09: Misinformation

**Risk**: Models generating false but credible-sounding content through hallucinations, biases, or user over-reliance on model output.

**Real-World Examples**: Developers integrating malicious packages hallucinated by coding assistants; medical chatbots providing incorrect diagnostic information.

**Mitigation**:
- Enhance reliability through Retrieval-Augmented Generation (RAG)
- Encourage cross-verification with external sources
- Implement human fact-checking for critical information
- Use grounding techniques to reduce hallucinations

### LLM10: Unbounded Consumption

**Risk**: Uncontrolled resource usage leading to performance degradation, downtime, or unexpected costs (replaces "Model Denial of Service" from v1.1).

**Real-World Examples**: Excessively large inputs consuming memory and CPU; high-volume API requests depleting resources.

**Mitigation**:
- Implement rate limiting and request throttling
- Monitor and dynamically manage resource allocation
- Apply timeouts for resource-intensive operations
- Restrict request rates per user

---

## MITRE ATLAS Framework

### Overview

MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) is a globally accessible knowledge base documenting adversary tactics, techniques, and procedures (TTPs) specifically targeting AI and ML systems.

### Framework Statistics (October 2025)

| Metric | Count |
|--------|-------|
| Tactics | 15 |
| Techniques | 66 |
| Sub-techniques | 46 |
| Mitigations | 26 |
| Real-world case studies | 33 |

### ATLAS vs. Other Frameworks

| Framework | Focus | Type |
|-----------|-------|------|
| **MITRE ATT&CK** | Enterprise cybersecurity threats | Comprehensive TTP matrix |
| **MITRE ATLAS** | Adversarial AI/ML threats | AI-specific TTP matrix |
| **OWASP LLM Top 10** | LLM application vulnerabilities | Prioritized developer checklist |

### Complete Tactics Matrix

| Tactic ID | Tactic Name | Description |
|-----------|-------------|-------------|
| AML.TA0001 | **Reconnaissance** | Gathering information about AI systems -- Discover ML Artifacts, Discover ML Model Ontology, Active Scanning |
| AML.TA0002 | **Resource Development** | Preparing tools and resources for attacks -- Acquire Public ML Artifacts, Develop Adversarial ML Attack Capabilities |
| AML.TA0003 | **Initial Access** | Gaining initial entry to AI systems -- ML Supply Chain Compromise, Prompt Injection (AML.T0051) |
| AML.TA0004 | **ML Model Access** | Accessing ML models directly -- Inference API Access, ML Artifacts Access |
| AML.TA0005 | **Execution** | Running adversarial techniques -- User Execution, LLM Plugin Compromise |
| AML.TA0006 | **Persistence** | Maintaining access to AI systems -- Modify AI Agent Configuration |
| AML.TA0007 | **Privilege Escalation** | Gaining elevated access -- Exploit through ML System |
| AML.TA0008 | **Defense Evasion** | Avoiding detection -- Adversarial Perturbation, LLM Meta Prompt Extraction |
| AML.TA0009 | **Credential Access** | Stealing credentials -- Credentials from AI Agent Configuration |
| AML.TA0010 | **Discovery** | Learning about the AI environment -- Discover AI Agent Configuration |
| AML.TA0011 | **Collection** | Gathering target data -- Data from AI Services, RAG Database Retrieval |
| AML.TA0012 | **ML Attack Staging** | Preparing ML-specific attacks -- Poison Training Data (AML.T0020), Backdoor ML Model |
| AML.TA0013 | **Exfiltration** | Extracting data from AI systems -- Exfiltration via ML Inference API, Exfiltration via AI Agent Tool Invocation |
| AML.TA0014 | **Impact** | Disrupting AI system operations -- Denial of ML Service, Evade ML Model, Spamming ML System |

### Critical Techniques

| Technique ID | Name | Description |
|-------------|------|-------------|
| AML.T0051 | **Prompt Injection** | Manipulating LLM behavior through crafted inputs; subdivides into direct and indirect injection |
| AML.T0020 | **Data Poisoning** | Corrupting training data to manipulate model behavior |
| AML.T0058 | **AI Agent Context Poisoning** | Poisoning the context that AI agents use for decision-making |
| AML.T0059 | **Activation Triggers** | Setting up triggers that activate malicious behavior in AI agents |
| AML.T0060 | **Data from AI Services** | Collecting data from AI service interfaces |
| AML.T0061 | **AI Agent Tools** | Exploiting the tools and functions available to AI agents |
| AML.T0062 | **Exfiltration via AI Agent Tool Invocation** | Using agent tools to exfiltrate data from target systems |

### Agent-Specific Threats (2025 Update)

ATLAS added 14 new techniques in 2025 specifically addressing AI agent risks, covering:

- Prompt injection attacks on agents
- Memory manipulation attacks
- Tool-use manipulation
- Control boundary violations
- Agent-specific behaviors that don't align with traditional IT attack categories

### Practical Applications

Organizations can use ATLAS for:

- **Threat Modeling**: Systematically identify and assess AI-specific threats during development.
- **Detection Development**: Create detection rules mapped to ATLAS techniques for SIEM integration.
- **Red Teaming**: Structure adversarial testing of AI systems against known attack patterns.
- **Incident Response**: Build playbooks mapped to ATLAS tactics for AI security incidents.
- **Regulatory Compliance**: Support GDPR and other regulatory alignment through systematic AI security risk identification.
- **ATLAS Navigator**: Visualization tool to operationalize the framework and map coverage.

---

## Key Takeaways & Cross-Cutting Themes

### 1. Defense in Depth for AI Systems

AI security requires layered defenses spanning the entire lifecycle:
- **Development**: Secure training data, vetted supply chains, SBOM tracking
- **Deployment**: Authentication, DLP, network isolation, content safety
- **Runtime**: Monitoring, rate limiting, anomaly detection, audit logging
- **Governance**: Policies, access controls, compliance auditing

### 2. Identity is the New Perimeter

- Agent identities require the same rigor as human identities (Entra ID, Conditional Access, MFA).
- Prefer Managed Identity over client secrets for agent authentication.
- Transition from legacy Service Principals to modern Agent Identities.
- Implement proper lifecycle management for agent credentials.

### 3. Prompt Injection is the #1 Threat

Both OWASP (LLM01) and MITRE ATLAS (AML.T0051) identify prompt injection as the top threat:
- Direct and indirect variants require different defensive strategies.
- Input validation, output validation, and runtime monitoring are all necessary.
- System prompts should never contain secrets or credentials.

### 4. Least Privilege for Agents

- Agents should have minimal required permissions (OWASP LLM06: Excessive Agency).
- Block unused connectors and channels via DLP policies.
- Implement human-in-the-loop approval for high-impact actions.
- Rate limit agent actions to contain potential damage.

### 5. Supply Chain Security is Critical

- Vet all models, datasets, and third-party components (OWASP LLM03, ATLAS AML.TA0003).
- Maintain signed SBOMs and verify integrity with hashes.
- Monitor for compromised packages and model backdoors.

### 6. Monitoring and Observability are Non-Negotiable

- Comprehensive audit logging of all agent interactions.
- Real-time anomaly detection for unusual agent behavior.
- Performance metrics, cost tracking, and compliance auditing.
- SIEM integration mapped to ATLAS techniques for detection.

### 7. Structured Frameworks Enable Systematic Security

- **OWASP Top 10 for LLMs**: Developer-focused checklist for building secure LLM applications.
- **MITRE ATLAS**: Comprehensive TTP matrix for threat modeling and detection.
- **Microsoft SDL**: Security Development Lifecycle for platform-level assurance.
- Together, they provide complementary perspectives: what to build securely (OWASP), what threats to defend against (ATLAS), and how to govern at scale (Microsoft SDL + DLP).

---

## Sources

- [OWASP Top 10 for LLM Applications 2025](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [OWASP Top 10 LLM 2025 Risks and Mitigation](https://www.confident-ai.com/blog/owasp-top-10-2025-for-llm-applications-risks-and-mitigation-techniques)
- [MITRE ATLAS Framework](https://atlas.mitre.org/)
- [MITRE ATLAS: 15 Tactics and 66 Techniques](https://www.vectra.ai/topics/mitre-atlas)
- [MITRE ATLAS Framework 2026 Guide](https://www.practical-devsecops.com/mitre-atlas-framework-guide-securing-ai-systems/)
- [Azure AI Foundry Overview](https://www.gapvelocity.ai/blog/azure-ai-foundry-what-is-it-and-why-should-you-care)
- [Azure AI Foundry Official Docs](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry)
- [Copilot Studio Security and Governance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance)
- [Copilot Studio DLP Configuration](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention)
- [Copilot Studio Governance Phase 2](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-phase2)
- [Copilot Studio Governance Phase 3](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-phase3)
- [Agent Identity Security Demystified - Derk van der Woude](https://derkvanderwoude.medium.com/agent-identity-security-demystified-2ecb164239bf)
- [Copilot Studio Agent Security Lessons - Derk van der Woude](https://derkvanderwoude.medium.com/copilot-studio-agent-security-lessons-learned-from-the-field-989c8523c191)
- [Building AI Solutions on Azure AI Foundry - Rahul Tiwari](https://medium.com/@rahultiwari065/building-ai-solutions-on-azure-lessons-from-my-hands-on-experience-with-azure-ai-foundry-ce475990f84c)
- [Security and Governance for Agents in M365 Copilot](https://www.microsoft.com/en-us/power-platform/blog/2025/03/04/security-and-governance-for-agents/)
- [Managed Security Enhancements for Copilot Studio](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/announcing-managed-security-enhancements-for-microsoft-copilot-studio/)
