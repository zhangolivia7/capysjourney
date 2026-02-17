import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { WaitlistModal } from '../components/WaitlistModal';
import { AnimatedSection } from '../components/AnimatedSection';
import { useParallax } from '../hooks/useParallax';
import { Play, Sparkles, Heart, Brain, Trophy, Mail } from 'lucide-react';
import appStoreBadge from '../assets/App Store.svg';
import googlePlayBadge from '../assets/Google Play.svg';
import logo from '../assets/LOGO.png';
import lessonsImg from '../assets/lessons.png';
import dailyImg from '../assets/daily.png';
import capyCollectionImg from '../assets/capy collection.png';
import capyLaunchVid from '../assets/CapyLaunchVid.mov';

export default function Home() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const heroParallax = useParallax(0.15);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <AnimatedSection className="space-y-8" direction="right" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full">
                <Sparkles className="size-4 text-amber-600" />
                <span className="text-sm text-amber-900">Find Your Inner Peace</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl tracking-tight text-gray-900">
                Mindfulness Made Fun with{' '}
                <span className="text-amber-600">Capy!</span>
              </h1>
              
              <p className="text-xl text-gray-600">
                Begin your mindfulness journey with gamified meditation. Your adorable capybara companion guides you to daily wellness, one peaceful moment at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button
                  onClick={() => setIsWaitlistModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors font-semibold shadow-lg"
                >
                  Join the Waitlist
                </button>
                {/* <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl hover:opacity-90 transition-opacity"
                  aria-label="Download on the App Store"
                >
                  <img
                    src={appStoreBadge}
                    alt="Download on the App Store"
                    className="h-14 w-auto"
                  />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl hover:opacity-90 transition-opacity"
                  aria-label="Get it on Google Play"
                >
                  <img
                    src={googlePlayBadge}
                    alt="Get it on Google Play"
                    className="h-14 w-auto"
                  />
                </a> */}
              </div>
            </AnimatedSection>
            
            {/* Right Column - Hero Image (parallax) */}
            <AnimatedSection className="relative" style={{ isolation: 'isolate' }} direction="left" delay={0.2}>
              <div className="relative z-10" style={heroParallax}>
                <ImageWithFallback
                  src={logo}
                  alt="Logo Capy's Journey"
                  className="rounded-3xl w-full"
                />
              </div>
              {/* Decorative blobs */}
              <div
                className="pointer-events-none"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-2rem',
                  right: '-2.5rem',
                  width: '20rem',
                  height: '20rem',
                  background: '#fde68a',
                  borderRadius: '9999px',
                  filter: 'blur(90px)',
                  opacity: 0.6,
                  zIndex: 0,
                }}
              />
              <div
                className="pointer-events-none"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-2.5rem',
                  left: '-2.5rem',
                  width: '20rem',
                  height: '20rem',
                  background: '#fed7aa',
                  borderRadius: '9999px',
                  filter: 'blur(90px)',
                  opacity: 0.55,
                  zIndex: 0,
                }}
              />
              <div
                className="pointer-events-none"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '2.25rem',
                  width: '14rem',
                  height: '14rem',
                  background: '#fcd34d',
                  borderRadius: '9999px',
                  filter: 'blur(90px)',
                  opacity: 0.7,
                  zIndex: 0,
                }}
              />
              <div
                className="pointer-events-none"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  right: '2rem',
                  width: '12rem',
                  height: '12rem',
                  background: '#fdba74',
                  borderRadius: '9999px',
                  filter: 'blur(90px)',
                  opacity: 0.65,
                  zIndex: 0,
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div
        style={{
          background:
            'linear-gradient(to bottom, #ffffff 0%, #ffffff 58%, #fffbeb 78%, #fffbeb 100%)',
        }}
      >
        {/* Features Section */}
        <section className="py-20 bg-transparent">
          <div className="mx-auto max-w-7xl px-6">
            <AnimatedSection className="text-center mb-16" direction="up" delay={0}>
              <h2 className="text-4xl text-gray-900 mb-4">
                Meditation Meets Gamification
              </h2>
              <p className="text-xl text-gray-600">
                Level up your mindfulness journey with engaging features
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection className="text-center space-y-4 p-6 bg-white/50 rounded-2xl" direction="up" delay={0.1}>
                <div className="inline-flex p-4 bg-amber-100 rounded-2xl">
                  <Heart className="size-8 text-amber-600" />
                </div>
                <h3 className="text-xl text-gray-900 font-semibold">Daily Mindfulness</h3>
                <p className="text-gray-600">
                  Build healthy habits with guided meditations and breathing exercises tailored to your level
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="text-center space-y-4 p-6 bg-white/50 rounded-2xl" direction="up" delay={0.2}>
                <div className="inline-flex p-4 bg-orange-100 rounded-2xl">
                  <Trophy className="size-8 text-orange-600" />
                </div>
                <h3 className="text-xl text-gray-900 font-semibold">Earn Rewards</h3>
                <p className="text-gray-600">
                  Collect achievements, unlock new outfits, and discover new regions
                </p>
              </AnimatedSection>
              
              <AnimatedSection className="text-center space-y-4 p-6 bg-white/50 rounded-2xl" direction="up" delay={0.3}>
                <div className="inline-flex p-4 bg-amber-100 rounded-2xl">
                  <Brain className="size-8 text-amber-600" />
                </div>
                <h3 className="text-xl text-gray-900 font-semibold">Track Progress</h3>
                <p className="text-gray-600">
                  Visualize your mindfulness journey with detailed stats and streaks
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="demo" className="py-20 bg-transparent">
          <div className="mx-auto max-w-5xl px-6">
            <AnimatedSection className="text-center mb-12" direction="up" delay={0}>
              <h2 className="text-4xl text-gray-900 mb-4">
                See It In Action
              </h2>
              <p className="text-xl text-gray-600">
                Watch how Capy guides you to inner peace
              </p>
            </AnimatedSection>
            
            {/* Video Placeholder */}
            <AnimatedSection className="relative" style={{ isolation: 'isolate' }} direction="up" delay={0.2}>
              <div
                className="pointer-events-none"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-3rem',
                  left: '-3rem',
                  width: '18rem',
                  height: '18rem',
                  background: '#fcd34d',
                  borderRadius: '9999px',
                  filter: 'blur(90px)',
                  opacity: 0.6,
                  zIndex: 0,
                }}
              />
              <div
                className="pointer-events-none"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-3.25rem',
                  right: '-2.5rem',
                  width: '18rem',
                  height: '18rem',
                  background: '#fdba74',
                  borderRadius: '9999px',
                  filter: 'blur(90px)',
                  opacity: 0.55,
                  zIndex: 0,
                }}
              />

              <div className="relative z-10 aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
                <video
                  className="absolute inset-0 h-full w-full object-contain"
                  src={capyLaunchVid}
                  title="Capy's Journey demo video"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* App Screenshots Section */}
        <section className="py-20 bg-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center mb-16" direction="up" delay={0}>
            <h2 className="text-4xl text-gray-900 mb-4">
              Beautiful. Simple. Calming.
            </h2>
            <p className="text-xl text-gray-600">
              Every screen designed for your peace of mind
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection className="space-y-4" direction="up" delay={0.1}>
              <div className="relative aspect-[9/19] bg-white rounded-3xl shadow-xl overflow-hidden">
                <ImageWithFallback
                  src={lessonsImg}
                  alt="Lesson Screen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg text-gray-900 font-semibold">Guided Lessons</h4>
                <p className="text-sm text-gray-600">Dozens of fun, expert-certified level to play and learn!</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="space-y-4" direction="up" delay={0.2}>
              <div className="relative aspect-[9/19] bg-white rounded-3xl shadow-xl overflow-hidden">
                <ImageWithFallback
                  src={dailyImg}
                  alt="Daily activity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg text-gray-900 font-semibold">Daily Rewards</h4>
                <p className="text-sm text-gray-600">Complete daily activities or create your own!</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="space-y-4" direction="up" delay={0.3}>
              <div className="relative aspect-[9/19] bg-white rounded-3xl shadow-xl overflow-hidden">
                <ImageWithFallback
                  src={capyCollectionImg}
                  alt="Capy's den"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg text-gray-900 font-semibold">Capy's Collection</h4>
                <p className="text-sm text-gray-600">Give Capy a fresh fit and customize Capy's Den to your liking!</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500" style={{ background: 'linear-gradient(to bottom right, #f59e0b, #f97316)' }}>
        <AnimatedSection className="mx-auto max-w-4xl px-6 text-center" direction="up" delay={0}>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Start your mindfulness journey with Capy's Journey today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsWaitlistModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors font-semibold shadow-lg"
            >
              Join the Waitlist
            </button>
            <button 
              onClick={() => {
                document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl hover:bg-white/10 transition-colors font-semibold"
            >
              <Play className="size-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl text-white mb-2">Capy's Journey</h3>
              <p className="text-sm">
                Mindfulness made fun with Capy!
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <Link to="/privacy" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a href="mailto:team@capysjourney.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="size-4" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
          
          <div className="pt-6 mt-6 border-t border-gray-800 text-center">
            <p className="text-sm">
              © 2026 Capy's Journey. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </div>
  );
}
