import { NavLink } from 'react-router-dom'
import {
  Shield,
  Bot,
  MessageSquare,
  Library,
  BookOpen,
  BrainCircuit,
  Radar,
  ExternalLink,
  ChevronLeft,
  Menu,
} from 'lucide-react'
import { cn } from '../lib/utils'

interface SidebarProps {
  open: boolean
  onToggle: () => void
}

interface NavItem {
  label: string
  to: string
  icon: React.ReactNode
}

interface NavGroup {
  heading: string
  accent: string
  items: NavItem[]
}

const navigation: NavGroup[] = [
  {
    heading: 'Security Copilot',
    accent: 'text-neon-crimson',
    items: [
      { label: 'Introduction', to: '/', icon: <Shield className="w-4 h-4" /> },
      { label: 'Agents', to: '/agents', icon: <Bot className="w-4 h-4" /> },
      { label: 'Prompts', to: '/prompts', icon: <MessageSquare className="w-4 h-4" /> },
      { label: 'Prompt Library', to: '/prompt-library', icon: <Library className="w-4 h-4" /> },
      { label: 'Best Practices', to: '/best-practices', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    heading: 'Azure AI Foundry',
    accent: 'text-neon-purple',
    items: [
      { label: 'Best Practices', to: '/azure-ai/best-practices', icon: <BrainCircuit className="w-4 h-4" /> },
    ],
  },
  {
    heading: 'Resources',
    accent: 'text-neon-cyan',
    items: [
      { label: 'Threat Intelligence', to: '/resources/threat-intelligence', icon: <Radar className="w-4 h-4" /> },
      { label: 'Links', to: '/resources/links', icon: <ExternalLink className="w-4 h-4" /> },
    ],
  },
]

export function Sidebar({ open, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Mobile toggle button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-neon-surface text-neon-text-muted hover:text-neon-text hover:bg-neon-elevated transition-colors border border-neon-border"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-full w-64 bg-neon-surface border-r border-neon-border flex flex-col transition-transform duration-200 ease-in-out',
          'md:translate-x-0 md:static md:z-0',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neon-border">
          <div className="flex items-center gap-2.5">
            <Shield className="w-6 h-6 text-neon-crimson" />
            <span className="font-heading font-bold text-sm neon-gradient-text">
              Security Copilot
            </span>
          </div>
          <button
            onClick={onToggle}
            className="p-1 rounded text-neon-text-muted hover:text-neon-text hover:bg-neon-elevated transition-colors md:hidden"
            aria-label="Close sidebar"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-6">
          {navigation.map((group) => (
            <div key={group.heading}>
              <h3 className={cn(
                'px-3 mb-2 text-[11px] font-heading font-bold uppercase tracking-wider',
                group.accent
              )}>
                {group.heading}
              </h3>
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => {
                        if (window.innerWidth < 768) onToggle()
                      }}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-all duration-200',
                          isActive
                            ? 'bg-neon-crimson/10 text-neon-crimson font-medium neon-active-bar'
                            : 'text-neon-text-muted hover:text-neon-text hover:bg-neon-elevated/50'
                        )
                      }
                    >
                      {item.icon}
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer accent line */}
        <div className="h-[2px] bg-gradient-to-r from-neon-crimson via-neon-purple to-neon-cyan" />
      </aside>
    </>
  )
}
