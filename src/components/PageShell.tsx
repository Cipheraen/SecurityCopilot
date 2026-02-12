import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface PageShellProps {
  title: string
  description: string
  icon: LucideIcon
  children?: React.ReactNode
}

export function PageShell({ title, description, icon: Icon, children }: PageShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="p-6 md:p-10 max-w-4xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neon-crimson/10 text-neon-crimson">
          <Icon className="w-5 h-5" />
        </div>
        <h1 className="text-2xl font-heading font-bold neon-gradient-text">{title}</h1>
      </div>
      <p className="text-neon-text-muted mb-8 leading-relaxed">{description}</p>
      {children}
    </motion.div>
  )
}
