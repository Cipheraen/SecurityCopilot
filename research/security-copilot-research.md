# Microsoft Security Copilot - Comprehensive Research

> Research compiled from official Microsoft documentation and adoption resources.
> Sources: learn.microsoft.com/copilot/security, adoption.microsoft.com/security-copilot

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture & How It Works](#architecture--how-it-works)
3. [Core Capabilities & Use Cases](#core-capabilities--use-cases)
4. [Agents](#agents)
5. [Prompting & Promptbooks](#prompting--promptbooks)
6. [Prompting Best Practices](#prompting-best-practices)
7. [Plugin Ecosystem](#plugin-ecosystem)
8. [Integrations](#integrations)
9. [Pricing & Licensing](#pricing--licensing)
10. [Adoption & Getting Started](#adoption--getting-started)
11. [Use Cases by Role](#use-cases-by-role)
12. [Key Benefits](#key-benefits)

---

## Overview

Microsoft Security Copilot is a **generative AI-powered security solution** that provides a natural language, assistive copilot experience for security operations. It is designed to enhance the efficiency and capabilities of security defenders by operating at **machine speed and scale**.

### Key Facts

- **AI Foundation**: Built on OpenAI architecture combined with proprietary Microsoft security technologies
- **Availability**: Commercial cloud only (not available in US government clouds: GCC, GCC High, DoD, Azure Government)
- **Target Users**: Security analysts, incident responders, threat hunters, IT administrators, CISOs, identity admins, data security admins
- **Deployment Modes**:
  - **Standalone Experience**: Dedicated immersive interface at securitycopilot.microsoft.com
  - **Embedded Experiences**: Integrated directly within Microsoft security products (Defender, Sentinel, Entra, Intune, Purview)

### What Makes It Different

Security Copilot is positioned as an **enhancement, not a replacement** -- it augments existing security tools and analyst capabilities through AI-powered acceleration. It combines global threat intelligence with organization-specific context to deliver actionable, relevant results.

---

## Architecture & How It Works

Security Copilot employs a sophisticated four-stage data processing pipeline:

```
User Input --> Preprocessing (Grounding) --> Language Model Processing --> Post-processing (Context Enrichment) --> Response Output
```

### Processing Stages

1. **Input Reception**: User prompts from security products are sent to Security Copilot
2. **Preprocessing (Grounding)**:
   - Improves specificity of user prompts
   - Accesses plugins for initial data context
   - Modifies the prompt to enhance relevance
3. **Language Model Processing**:
   - Sends the grounded prompt to the language model
   - Uses security-specific plugins as data sources
4. **Post-processing**:
   - Accesses plugins to gain contextualized information
   - Enriches response with organizational context
   - Returns processed response for user review

### Process Log

Users can view real-time step-by-step actions through a configurable **process log** that shows:
- Steps taken during response generation
- Information sources consulted
- Processing time

---

## Core Capabilities & Use Cases

### 1. Investigate and Remediate Security Threats
- Gain incident context from multiple data sources
- Triage complex alerts into actionable summaries
- Receive step-by-step remediation guidance

### 2. Build KQL Queries or Analyze Scripts
- Translate natural language to Kusto Query Language (KQL)
- Reverse engineer malware scripts
- Eliminate manual scripting needs via NL2KQL (Natural Language to KQL)

### 3. Understand and Manage Security Posture
- Broad environmental visibility across your organization
- Prioritized risk identification
- Posture improvement opportunities and recommendations

### 4. Troubleshoot IT Issues
- Rapid information synthesis across systems
- Actionable insights for quick resolution
- Contextual troubleshooting guidance

### 5. Define and Manage Security Policies
- Create new security policies with AI guidance
- Cross-reference existing policies for conflicts
- Summarize and audit existing policies

### 6. Configure Secure Lifecycle Workflows
- Build security groups with step-by-step guidance
- Set access parameters and permissions
- Prevent security vulnerabilities through proper configuration

### 7. Develop Stakeholder Reports
- Generate clear, concise summaries for leadership
- Contextual environment information
- Audience-specific tone and language adaptation

### 8. Alert Triage
- Triage alerts enriched with threat intelligence
- Classify and prioritize incidents automatically
- Separate genuine threats from false positives

---

## Agents

Security Copilot agents are **AI-powered systems** designed to act on behalf of an individual, team, or operational domain (Security Operations, Compliance, IT Administration, Identity Governance) to execute and orchestrate security-related tasks.

### Agent Architecture

Custom agents combine five key components:
- **Tools (Skills)**: Functions or actions the agent can perform
- **Triggers**: Conditions or events that initiate the agent
- **Orchestrators**: Logic that determines how tasks are executed
- **Instructions**: System-level directives the agent must follow
- **Feedback**: Stored responses in memory to guide subsequent runs

### Types of Agents

#### Microsoft Built-in Agents
| Agent | Purpose |
|-------|---------|
| **Phishing Triage Agent** | Scales security team response for triaging and classifying user-submitted phishing incidents |
| **Dynamic Threat Detection Agent** | Continuous telemetry correlation for threat detection |
| **Threat Hunting Agent** | Natural language to executable threat hunts |
| **Threat Intelligence Briefing Agent** | Automatically curates relevant threat intel based on org attributes |
| **Access Review Agent** | Delivers insights and recommendations for access decisions in Teams |
| **Conditional Access Optimization Agent** | Monitors policy gaps, identifies updates, recommends fixes |
| **Vulnerability Remediation Agent** | Identifies top vulnerabilities, provides step-by-step remediation |
| **Purview DLP Triage Agent** | Data Loss Prevention alert triage |
| **Purview Insider Risk Agent** | Insider Risk Management alert triage |

#### Partner Agents
- Growing ecosystem available through the Security Store (securitystore.microsoft.com)
- Capabilities include privacy breach response, network supervision, alert triage

#### Custom Agents
- Organizations can build agents tailored to specific security and operational needs
- Multiple creation methods: **natural language**, **form-based agent builder**, **YAML manifest**, or **MCP**
- All custom agents converge into a **YAML manifest file** for deployment
- Published to Security Copilot or the Security Store (for partners)

### Agent Capabilities
- Automate repetitive, high-volume tasks
- Reduce manual workloads
- Learn from user feedback
- Integrate with Microsoft Security solutions and partner ecosystems
- Utilize SCUs (Security Compute Units) for operations
- No special training or additional licensing required

---

## Prompting & Promptbooks

### How Prompts Work

1. Type your question or instruction in the prompt bar
2. Select **Send** or press Enter
3. Security Copilot generates a response
4. Review the process log for transparency into steps taken
5. Provide feedback on response accuracy

### Prompt Types

#### Pre-built Prompts
- Available in the "Prompts to try" library on the home screen
- Role-based examples for: CISO, SOC analyst, threat intel analyst, IT administrator
- May require specific inputs (app name, incident ID, etc.)

#### Custom Prompts
- User-created prompts entered directly in the prompt bar
- Supports natural language requests
- Refined through iteration and follow-up prompts

#### Promptbooks
- **Series of pre-configured prompts** that run sequentially
- Each prompt builds on the previous one's output
- Accomplishes complete security workflows end-to-end
- Available as pre-built or user-created
- Shareable and duplicatable across the organization

### Promptbook Management
- Browse by name, owner, description, number of prompts, required plugins, visibility
- Filter by: Roles, Plugins, Search terms
- Duplicate, share, or customize existing promptbooks
- Access from home screen or Security Copilot menu

---

## Prompting Best Practices

### The Four Elements of an Effective Prompt

Every effective Security Copilot prompt should include:

1. **Goal**: Specific, security-related information you need
2. **Context**: Why you need this information or how you plan to use it
3. **Expectations**: Format or target audience for the response
4. **Source**: Known information, data sources, or plugins to use

### Top Prompting Tips

#### 1. Be Specific, Clear, and Concise
Start simply, then add details as you become familiar with Security Copilot.

| Basic Prompt | Better Prompt |
|-------------|---------------|
| "Pearl Sleet actor" | "Can you give me information about Pearl Sleet activity, including a list of known indicators of compromise and tools, tactics, and procedures (TTPs)?" |

#### 2. Iterate
- Subsequent prompts are typically needed to clarify needs
- Security Copilot may respond differently to the same prompt
- Refinement through follow-up prompts improves results

#### 3. Provide Necessary Context
Narrow down where Security Copilot looks for data.

| Basic Prompt | Better Prompt |
|-------------|---------------|
| "Summarize incident 15134." | "Summarize incident 15134 in Microsoft Defender XDR into a paragraph that I can submit to my manager and create a list of entities involved." |

#### 4. Give Positive Instructions (Not Negations)
Tell Security Copilot what to do, not what to avoid.

| Basic Prompt | Better Prompt |
|-------------|---------------|
| "Give me a list of unmanaged devices in my network." | "Give me a list of high-risk unmanaged devices in my network. If they're named 'test', remove them from the list." |

#### 5. Directly Address Security Copilot as "You"
Use phrases like "You should..." or "You must..." rather than referring to it as a model or assistant.

### Important Caveat
Security Copilot does not always get everything right. AI-generated content can contain inaccuracies. Always review and verify responses.

### Feedback System
- **Looks right**: Confirm accuracy; provide details on what was correct
- **Needs improvement**: Detail what was incorrect
- **Inappropriate**: Flag concerning or unexpected responses

---

## Plugin Ecosystem

### What Are Plugins?
Plugins are **components that extend what agents and the copilot can do** by providing access to capabilities in Microsoft and non-Microsoft services through APIs.

### Plugin Functions
- Provide organization-specific information
- Access authoritative security sources
- Tap into global threat intelligence
- Pull context from event logs, alerts, incidents, and policies
- Enable two-way integration (query, create, update data in external systems)

### Available Plugin Sources
- **Microsoft Security Products**: Defender XDR, Sentinel, Intune, Entra
- **Third-Party Solutions**: ServiceNow, Red Canary, Jamf, and more
- **Threat Intelligence**: Microsoft Defender Threat Intelligence articles, intel profiles, threat analytics reports, vulnerability disclosures
- **Custom Plugins**: Organizations can build their own

### Plugin Management
- Configurable through plugin settings page
- Owners can control:
  - Whether contributors can add custom plugins for their sessions
  - Whether contributors can publish custom plugins for the organization
- Filter prompts and promptbooks by required plugins

---

## Integrations

Security Copilot is natively embedded across the Microsoft Security ecosystem:

| Product | Integration Focus |
|---------|------------------|
| **Microsoft Defender XDR** | Threat investigation, incident response, alert triage |
| **Microsoft Sentinel** | Cloud-native SIEM, threat hunting, log analysis |
| **Microsoft Entra** | Identity risk, access management, sign-in troubleshooting |
| **Microsoft Intune** | Device management, endpoint security, compliance |
| **Microsoft Purview** | Data security, DLP, insider risk, compliance |
| **Azure Firewall & WAF** | Network security analysis |
| **Defender for Cloud** | Cloud security posture management |

### Third-Party Integrations
- **Red Canary**: Threat detection and response
- **Jamf**: Apple device management
- **ServiceNow**: IT service management
- Growing partner ecosystem through the Security Store

---

## Pricing & Licensing

### Pricing Model: Security Compute Units (SCUs)

Security Copilot uses a **consumption-based pricing model** built on Security Compute Units (SCUs):

| Tier | Cost | Description |
|------|------|-------------|
| **Provisioned SCUs** | **$4 per SCU/hour** | Pre-provisioned capacity, billed hourly |
| **Overage SCUs** | **$6 per SCU/hour** | Pay-as-you-go when usage exceeds provisioned capacity |

- Minimum of 1 provisioned SCU required
- SCU usage calculator available at securitycopilot.microsoft.com/calculator

### Microsoft 365 E5 Inclusion

- **400 SCUs per month** for every 1,000 user licenses (scales proportionally)
- Up to **10,000 SCUs per month** at no additional cost
- Option to scale beyond via overage at $6/SCU

### Cost Considerations
- Agents and prompts consume SCUs based on complexity
- Plugin usage contributes to SCU consumption
- Organizations should monitor and manage SCU usage through the admin portal

---

## Adoption & Getting Started

### Implementation Approach
Security Copilot is designed as an **enhancement to existing workflows**, not a replacement for current tools or personnel.

### Getting Started Steps
1. **Provision capacity**: Set up SCUs in Azure
2. **Configure plugins**: Enable relevant Microsoft and third-party plugins
3. **Set up roles**: Configure role-based access controls
4. **Onboard users**: Train security team on prompting and promptbooks
5. **Start with pre-built content**: Use existing promptbooks and prompt libraries
6. **Iterate and customize**: Build custom promptbooks and agents as needs evolve

### Training & Resources

| Resource | Description |
|----------|-------------|
| **Security Copilot Technical Training** | Global technical workshops |
| **Microsoft Learn Training Path** | "Get started with Microsoft Security Copilot" |
| **Video Hub** | Bite-sized insights and deep-dive demos |
| **GitHub Repository** | Sample plugins for customization |
| **Ninja Training** | In-depth training via Microsoft Tech Community |
| **Customer Connection Program** | Free (NDA required): webinars, previews, roadmap access |

### Community & Support
- LinkedIn group for community connections
- FastTrack specialist assistance
- Service partner offers for implementation
- Customer Connection Program for advanced engagement

---

## Use Cases by Role

### SOC Analysts
**Challenges**: Complex tooling, overwhelming data volume, talent shortage

**How Copilot Helps**:
- Detects threats by reasoning over real-time signals
- Accelerates threat hunting with NL2KQL
- Enables junior staff to perform advanced capabilities
- Key agents: Phishing Triage, Dynamic Threat Detection, Threat Hunting, Threat Intelligence Briefing

### IT Administrators
**Challenges**: Rapidly evolving technology, cybersecurity demands, endpoint diversity

**How Copilot Helps**:
- Provides contextual guidance for operational tasks
- Streamlines troubleshooting through natural language
- Delivers role-aware experiences tailored to permissions
- Key scenarios: Posture assessment, patch management, device investigation, KQL query creation

### Identity Administrators
**Challenges**: Managing billions of identities, complex policies, overwhelming threats

**How Copilot Helps**:
- Automates repetitive IAM tasks
- Provides AI-driven threat detection with real-time insights
- Delivers natural language summaries reducing investigation time
- Key scenarios: Risky user investigation, sign-in troubleshooting, elevated risk detection

### Data Security Administrators
**Challenges**: Vast data volumes, alert fatigue, multi-team coordination, skills shortage

**How Copilot Helps**:
- Analyzes large data volumes for integrated investigations
- Accelerates investigations with contextual summaries
- Integrates Information Protection, DLP, and Insider Risk Management
- Key scenarios: Data risk discovery (DSPM), one-click summarization, policy gap analysis

### CISOs
**How Copilot Helps**:
- Generates stakeholder reports with appropriate tone
- Provides broad environmental visibility
- Offers posture improvement recommendations
- Summarizes incidents and threats at executive level

---

## Key Benefits

### Efficiency Gains
- Reduces manual triage time significantly
- Automates high-volume, repetitive security tasks
- Converts reactive problem-solving to proactive management
- Eliminates manual log sifting and data correlation

### Risk Reduction
- Detects threats missed by traditional rule-based systems
- Surfaces hidden patterns through AI correlation
- Identifies vulnerabilities proactively
- Automates phishing separation from false positives

### Team Capability Elevation
- Enables junior staff to perform advanced investigations
- Redirects expert staff to highest-impact challenges
- Bridges skill gaps across security teams
- Reduces expertise dependency for complex operations

### Cost Optimization
- Minimizes extensive security personnel needs
- Reduces operational overhead through automation
- Improves resource allocation efficiency
- Scales security operations without proportional headcount increases

---

## Sources

- [Microsoft Security Copilot Documentation](https://learn.microsoft.com/en-us/copilot/security/)
- [What is Microsoft Security Copilot?](https://learn.microsoft.com/en-us/copilot/security/microsoft-security-copilot)
- [Prompting in Security Copilot](https://learn.microsoft.com/en-us/copilot/security/prompting-security-copilot)
- [Prompting Tips](https://learn.microsoft.com/en-us/copilot/security/prompting-tips)
- [Security Copilot Agents Overview](https://learn.microsoft.com/en-us/copilot/security/agents-overview)
- [Security Copilot Adoption Hub](https://adoption.microsoft.com/en-us/security-copilot/)
- [Security Copilot Pricing](https://www.microsoft.com/en-us/security/pricing/microsoft-security-copilot)
- [Agent Development Overview](https://learn.microsoft.com/en-us/copilot/security/developer/custom-agent-overview)
