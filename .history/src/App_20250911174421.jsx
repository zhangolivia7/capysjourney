import { useMemo, useState } from 'react'
import logoImage from './assets/LOGO.png'
import threePhonesImage from './assets/ThreePhones.png'
import videoImage from './assets/ThreePhones.png'
import region1Image from './assets/1Demo.png'
import region2Image from './assets/2Demo.png'
import region3Image from './assets/3Demo.png'
import region41Image from './assets/4.1Demo.png'
import region42Image from './assets/4.2Demo.png'
import speechImage from './assets/Speech.png'
import buttonImage from './assets/Button.png'

const brandBrown = 'rgb(86, 48, 26)'
const brandCream = 'rgb(242, 240, 228)'
const brandYellow = 'rgb(255, 214, 66)'

function Placeholder({ className, label }) {
  return (
    <div className={`bg-neutral-300 text-neutral-700 flex items-center justify-center ${className}`}>
      <span className="text-sm">{label}</span>
    </div>
  )
}

function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const gasUrl = useMemo(() => import.meta.env.VITE_GAS_URL, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!gasUrl) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch(gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: 'capysjourney-landing' })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setName('')
      setEmail('')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-[680px] w-full">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: brandBrown }}>Join the Waitlist!</h2>
      <div className="bg-white rounded-[30px] p-6 md:p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block" style={{ color: brandBrown }}>Name</label>
            <input
              className="w-full h-[55px] rounded-[20px] border-2 px-4"
              style={{ borderColor: brandBrown }}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block" style={{ color: brandBrown }}>Email</label>
            <input
              type="email"
              className="w-full h-[55px] rounded-[20px] border-2 px-4"
              style={{ borderColor: brandBrown }}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="relative inline-flex items-center justify-center h-[66px] px-10 rounded-[50px]"
              style={{ background: brandYellow, color: brandBrown }}
            >
              {status === 'loading' ? 'Submitting…' : 'Continue'}
            </button>
          </div>
          {status === 'success' && (
            <p className="text-green-700 text-center">Thanks! You’re on the list.</p>
          )}
          {status === 'error' && (
            <p className="text-red-700 text-center">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen w-full" style={{ background: brandCream }}>
      <div className="mx-auto max-w-[1440px]">
        {/* Hero */}
        <section className="relative w-full" style={{ background: brandCream }}>
          <div className="h-[1024px] w-full" style={{ background: brandCream }}>
            <div className="absolute inset-x-0 top-14 flex justify-center">
              <img src={logoImage} alt="Capy's Journey Logo" className="w-[586px] h-[262px] object-contain" />
            </div>
            <div className="pt-[331px] px-6 flex justify-center">
              <p className="max-w-[1015px] text-xl md:text-2xl text-center" style={{ color: brandBrown }}>
                With hundreds of expert-informed guided meditations, lessons, and daily wellness activities, Capy’s Journey transforms mindfulness into something immersive, simple, and fun.
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              <img src={threePhonesImage} alt="Three phones showing app" className="w-[586px] h-[262px] object-contain" />
            </div>
          </div>
          <div className="h-16 w-screen absolute bottom-0 left-1/2 transform -translate-x-1/2" style={{ background: brandYellow }} />
        </section>

        {/* Video + Copy */}
        <section className="px-6 py-16 md:py-24" style={{ background: brandCream }}>
          <div className="mx-auto max-w-6xl grid md:grid-cols-1 gap-10">
            <div className="flex justify-center">
              <img src={videoImage} alt="Video placeholder" className="w-[883px] h-[539px] object-cover" />
            </div>
            <p className="mx-auto max-w-[1163px] text-lg md:text-xl text-center" style={{ color: brandBrown }}>
              Capy’s Journey helps kids, teens, and adults reclaim their most valuable resource—attention. Guided by Capy the capybara, you’ll explore beautifully designed worlds filled with meditations and lessons that feel fresh and relatable. Level by level, you’ll deepen your practice and carry new insights into your everyday life. Collect carrots, customize your Capy, and build Capy’s Den as you cultivate focus and calm—one mindful moment at a time.
            </p>
          </div>
        </section>

        {/* Feature blocks */}
        <section className="px-6 py-16 md:py-24" style={{ background: brandCream }}>
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <img src={region1Image} alt="Feature 1" className="w-[631px] h-[630px] object-cover"/>
            <p className="text-xl" style={{ color: brandBrown }}>Over __ fun, expert-certified level to play through.</p>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24" style={{ background: brandCream }}>
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <p className="text-xl" style={{ color: brandBrown }}>Choose from six unique, thematic regions to explore with Capy!</p>
              <img src={region2Image} alt="Region 2" className="w-[630px] h-[630px] object-cover"/>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24" style={{ background: brandCream }}>
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <img src={region3Image} alt="Feature 3" className="w-[631px] h-[630px] object-cover"/>
            <p className="text-xl" style={{ color: brandBrown }}>Complete daily wellness activities for rewards or create your own meditation!</p>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24" style={{ background: brandCream }}>
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 gap-6">
              <img src={region41Image} alt="Feature 4a" className="w-[613px] h-[630px] object-cover"/>
              <p className="text-xl" style={{ color: brandBrown }}>Give Capy a fresh fit and customize Capy's Den to your liking!</p>
              <img src={region42Image} alt="Feature 4b" className="w-[613px] h-[630px] object-cover"/>
            </div>
          </div>
        </section>

        

        {/* CTA band top */}
        <div className="h-16 w-screen" style={{ background: brandYellow }} />

        {/* Waitlist section */}
        <section className="px-6 py-16 md:py-24" style={{ background: brandCream }}>
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start gap-10">
            <div className="flex-1">
              <img src={speechImage} alt="Capy Speech" className="w-[294px] h-[347px] object-contain"/>
            </div>
            <WaitlistForm />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
