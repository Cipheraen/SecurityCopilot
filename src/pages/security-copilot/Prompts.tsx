import { motion } from 'framer-motion'
import {
  MessageSquare,
  Target,
  Info,
  ListChecks,
  Database,
  Lightbulb,
  RefreshCw,
  FileText,
  ArrowRight,
  BookText,
  Share2,
  ThumbsUp,
  ThumbsDown,
  Flag,
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

const promptElements = [
  {
    label: 'Goal',
    desc: 'Specific, security-related information you need.',
    icon: Target,
    color: 'text-neon-crimson',
    border: 'border-neon-crimson/20',
  },
  {
    label: 'Context',
    desc: 'Why you need this information or how you plan to use it.',
    icon: Info,
    color: 'text-neon-purple',
    border: 'border-neon-purple/20',
  },
  {
    label: 'Expectations',
    desc: 'Format or target audience for the response.',
    icon: ListChecks,
    color: 'text-neon-cyan',
    border: 'border-neon-cyan/20',
  },
  {
    label: 'Source',
    desc: 'Known information, data sources, or plugins to use.',
    icon: Database,
    color: 'text-neon-crimson',
    border: 'border-neon-crimson/20',
  },
]

const promptTips = [
  {
    title: 'Be Specific, Clear, and Concise',
    desc: 'Start simply, then add details as you become familiar with Security Copilot.',
    before: 'Pearl Sleet actor',
    after: 'Can you give me information about Pearl Sleet activity, including a list of known indicators of compromise and tools, tactics, and procedures (TTPs)?',
  },
  {
    title: 'Iterate on Your Prompts',
    desc: 'Subsequent prompts are typically needed to clarify needs. Security Copilot may respond differently to the same prompt -- refinement through follow-ups improves results.',
    before: 'Tell me about the incident.',
    after: 'Summarize the key findings from incident 15134, then list the top 3 recommended remediation steps.',
  },
  {
    title: 'Provide Necessary Context',
    desc: 'Narrow down where Security Copilot looks for data by specifying products, scopes, and output formats.',
    before: 'Summarize incident 15134.',
    after: 'Summarize incident 15134 in Microsoft Defender XDR into a paragraph that I can submit to my manager and create a list of entities involved.',
  },
  {
    title: 'Give Positive Instructions',
    desc: 'Tell Security Copilot what to do, not what to avoid. Positive framing produces better results.',
    before: 'Give me a list of unmanaged devices in my network.',
    after: 'Give me a list of high-risk unmanaged devices in my network. If they\'re named \'test\', remove them from the list.',
  },
  {
    title: 'Address Security Copilot Directly',
    desc: 'Use phrases like "You should..." or "You must..." rather than referring to it as a model or assistant.',
    before: 'The model should analyze these logs.',
    after: 'You should analyze these firewall logs and identify any anomalous outbound connections in the last 24 hours.',
  },
]

export function Prompts() {
  return (
    <PageShell
      title="Prompts"
      description="Effective prompting is key to getting the most out of Security Copilot. Learn how to craft prompts that yield actionable security insights and analysis."
      icon={MessageSquare}
    >
      <div className="space-y-10">
        {/* How Prompting Works */}
        <motion.section
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-neon-crimson" />
            How Prompting Works
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6">
            <div className="flex flex-col gap-3">
              {[
                'Type your question or instruction in the prompt bar',
                'Select Send or press Enter to submit',
                'Security Copilot generates a response using its 4-stage pipeline',
                'Review the process log for transparency into steps taken',
                'Provide feedback on response accuracy to improve future results',
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-crimson shrink-0" />
                  <p className="text-sm text-neon-text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Four Elements of Effective Prompts */}
        <motion.section
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-neon-purple" />
            The 4 Elements of an Effective Prompt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {promptElements.map((el) => (
              <div
                key={el.label}
                className={`bg-neon-surface border ${el.border} rounded-xl p-5`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <el.icon className={`w-4 h-4 ${el.color}`} />
                  <h3 className={`text-sm font-heading font-bold ${el.color}`}>{el.label}</h3>
                </div>
                <p className="text-xs text-neon-text-muted leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Top 5 Prompting Tips */}
        <motion.section
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-neon-cyan" />
            Top 5 Prompting Tips
          </h2>
          <div className="space-y-4">
            {promptTips.map((tip) => (
              <div
                key={tip.title}
                className="bg-neon-surface border border-neon-border rounded-xl p-5"
              >
                <h3 className="text-sm font-heading font-bold text-neon-text mb-2">{tip.title}</h3>
                <p className="text-xs text-neon-text-muted mb-3 leading-relaxed">{tip.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-neon-elevated/50 border border-neon-crimson/10 rounded-lg p-3">
                    <p className="text-[10px] font-heading font-bold text-neon-crimson uppercase tracking-wider mb-1">
                      Before
                    </p>
                    <p className="text-xs text-neon-text-muted italic">"{tip.before}"</p>
                  </div>
                  <div className="bg-neon-elevated/50 border border-neon-cyan/10 rounded-lg p-3">
                    <p className="text-[10px] font-heading font-bold text-neon-cyan uppercase tracking-wider mb-1">
                      After
                    </p>
                    <p className="text-xs text-neon-text-muted italic">"{tip.after}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Promptbooks */}
        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <BookText className="w-5 h-5 text-neon-crimson" />
            Promptbooks
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6 space-y-4">
            <p className="text-sm text-neon-text-muted leading-relaxed">
              Promptbooks are{' '}
              <span className="text-neon-crimson font-medium">
                series of pre-configured prompts
              </span>{' '}
              that run sequentially, where each prompt builds on the previous one's output. They
              accomplish complete security workflows end-to-end and are available as pre-built or
              user-created.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-neon-elevated/50 rounded-lg p-4 flex items-start gap-2">
                <FileText className="w-4 h-4 text-neon-crimson mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-heading font-bold text-neon-text">Pre-built</p>
                  <p className="text-xs text-neon-text-muted">
                    Ready-to-use workflows from Microsoft
                  </p>
                </div>
              </div>
              <div className="bg-neon-elevated/50 rounded-lg p-4 flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-neon-purple mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-heading font-bold text-neon-text">Sequential</p>
                  <p className="text-xs text-neon-text-muted">
                    Each prompt builds on the previous output
                  </p>
                </div>
              </div>
              <div className="bg-neon-elevated/50 rounded-lg p-4 flex items-start gap-2">
                <Share2 className="w-4 h-4 text-neon-cyan mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-heading font-bold text-neon-text">Shareable</p>
                  <p className="text-xs text-neon-text-muted">
                    Duplicate and share across the organization
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-neon-border">
              <p className="text-xs text-neon-text-muted leading-relaxed">
                Browse promptbooks by name, owner, description, number of prompts, required
                plugins, and visibility. Filter by roles, plugins, or search terms.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Feedback System */}
        <motion.section
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-lg font-heading font-bold text-neon-text mb-4 flex items-center gap-2">
            <ThumbsUp className="w-5 h-5 text-neon-cyan" />
            Feedback System
          </h2>
          <div className="bg-neon-surface border border-neon-border rounded-xl p-6">
            <p className="text-sm text-neon-text-muted mb-4 leading-relaxed">
              Security Copilot does not always get everything right. AI-generated content can
              contain inaccuracies -- always review and verify responses. Use the feedback system
              to improve future results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-neon-elevated/50 border border-neon-cyan/10 rounded-lg p-4 flex items-start gap-2">
                <ThumbsUp className="w-4 h-4 text-neon-cyan mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-heading font-bold text-neon-text">Looks Right</p>
                  <p className="text-xs text-neon-text-muted">
                    Confirm accuracy; provide details on what was correct
                  </p>
                </div>
              </div>
              <div className="bg-neon-elevated/50 border border-neon-purple/10 rounded-lg p-4 flex items-start gap-2">
                <ThumbsDown className="w-4 h-4 text-neon-purple mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-heading font-bold text-neon-text">Needs Improvement</p>
                  <p className="text-xs text-neon-text-muted">
                    Detail what was incorrect or missing
                  </p>
                </div>
              </div>
              <div className="bg-neon-elevated/50 border border-neon-crimson/10 rounded-lg p-4 flex items-start gap-2">
                <Flag className="w-4 h-4 text-neon-crimson mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-heading font-bold text-neon-text">Inappropriate</p>
                  <p className="text-xs text-neon-text-muted">
                    Flag concerning or unexpected responses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </PageShell>
  )
}
