import Header from './components/Header'
import Hero from './components/Hero'
import Hook from './components/Hook'
import WhatYoullLearn from './components/WhatYoullLearn'
import WhoItsFor from './components/WhoItsFor'
import EventDetails from './components/EventDetails'
import Facilitator from './components/Facilitator'
import RegistrationForm from './components/RegistrationForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

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
        <Facilitator />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
