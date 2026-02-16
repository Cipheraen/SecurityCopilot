import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Introduction } from './pages/security-copilot/Introduction'
import { Agents } from './pages/security-copilot/Agents'
import { Prompts } from './pages/security-copilot/Prompts'
import { PromptLibrary } from './pages/security-copilot/PromptLibrary'
import { BestPractices } from './pages/security-copilot/BestPractices'
import { AzureBestPractices } from './pages/azure-ai/AzureBestPractices'
import { ThreatIntelligence } from './pages/resources/ThreatIntelligence'
import { Links } from './pages/resources/Links'

function App() {
  return (
    <div className="min-h-screen bg-neon-bg text-neon-text font-body">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Introduction />} />
          <Route path="agents" element={<Agents />} />
          <Route path="prompts" element={<Prompts />} />
          <Route path="prompt-library" element={<PromptLibrary />} />
          <Route path="best-practices" element={<BestPractices />} />
          <Route path="azure-ai/best-practices" element={<AzureBestPractices />} />
          <Route path="resources/threat-intelligence" element={<ThreatIntelligence />} />
          <Route path="resources/links" element={<Links />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
