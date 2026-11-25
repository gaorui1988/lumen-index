import { AgentSetup } from './components/AgentSetup'
import { BrowseByType } from './components/BrowseByType'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { ProAccess } from './components/ProAccess'
import { Trending } from './components/Trending'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Trending />
        <BrowseByType />
        <AgentSetup />
        <ProAccess />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
