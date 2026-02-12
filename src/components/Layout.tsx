import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { Sidebar } from './Sidebar'

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-neon-bg text-neon-text font-body">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((prev) => !prev)} />

      <ScrollArea.Root className="flex-1 overflow-hidden">
        <ScrollArea.Viewport className="h-full w-full">
          <main className="min-h-full md:pl-0 pl-0 pt-14 md:pt-0">
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          </main>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-150 ease-out hover:bg-neon-surface data-[orientation=vertical]:w-2"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-full bg-neon-muted before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:min-w-[44px] before:h-full before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  )
}
