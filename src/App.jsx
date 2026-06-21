import Header from './components/Header'
import Hero from './components/Hero'
import Hook from './components/Hook'
import WhatYoullLearn from './components/WhatYoullLearn'
import WhoItsFor from './components/WhoItsFor'
import EventDetails from './components/EventDetails'
import Speakers from './components/Speakers'
import Facilitator from './components/Facilitator'
import RegistrationForm from './components/RegistrationForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hook />
        <WhatYoullLearn />
        <WhoItsFor />
        <EventDetails />
        <Speakers />
        <Facilitator />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
