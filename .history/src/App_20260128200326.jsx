import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Download, Play, Sparkles, Heart, Brain, Trophy, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full">
                <Sparkles className="size-4 text-amber-600" />
                <span className="text-sm text-amber-900">Find Your Inner Peace</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl tracking-tight text-gray-900">
                Mindfulness Made Fun with{' '}
                <span className="text-amber-600">Capybaras</span>
              </h1>
              
              <p className="text-xl text-gray-600">
                Begin your mindfulness journey with gamified meditation. Your adorable capybara companion guides you to daily zen, one peaceful moment at a time.
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                  <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg -mt-1">App Store</div>
                  </div>
                </button>
                
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                  <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg -mt-1">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="relative" style={{ isolation: 'isolate' }}>
              <div className="relative z-10">
                <ImageWithFallback
                  src="/src/assets/LOGO.png"
                  alt="Logo Capy's Journey"
                  className="rounded-3xl w-full"
                />
              </div>
              {/* Decorative elements */}
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
            </div>
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
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-900 mb-4">
                Meditation Meets Gamification
              </h2>
              <p className="text-xl text-gray-600">
                Level up your mindfulness journey with engaging features
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6">
                <div className="inline-flex p-4 bg-amber-100 rounded-2xl">
                  <Heart className="size-8 text-amber-600" />
                </div>
                <h3 className="text-xl text-gray-900">Daily Mindfulness</h3>
                <p className="text-gray-600">
                  Build healthy habits with guided meditations and breathing exercises tailored to your level
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6">
                <div className="inline-flex p-4 bg-orange-100 rounded-2xl">
                  <Trophy className="size-8 text-orange-600" />
                </div>
                <h3 className="text-xl text-gray-900">Earn Rewards</h3>
                <p className="text-gray-600">
                  Collect achievements, unlock new capybara companions, and climb the leaderboards
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6">
                <div className="inline-flex p-4 bg-amber-100 rounded-2xl">
                  <Brain className="size-8 text-amber-600" />
                </div>
                <h3 className="text-xl text-gray-900">Track Progress</h3>
                <p className="text-gray-600">
                  Visualize your mindfulness journey with detailed analytics and streak tracking
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-transparent">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-4">
                See It In Action
              </h2>
              <p className="text-xl text-gray-600">
                Watch how our capybara guides lead you to inner peace
              </p>
            </div>
            
            {/* Video Placeholder */}
            <div className="relative" style={{ isolation: 'isolate' }}>
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

              <div className="relative z-10 aspect-video bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-6 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all hover:scale-110">
                    <Play className="size-12 text-amber-600 fill-amber-600" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/50 to-transparent">
                  <p className="text-white text-center">
                    Click to watch the app demo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Screenshots Section */}
        <section className="py-20 bg-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">
              Beautiful. Simple. Calming.
            </h2>
            <p className="text-xl text-gray-600">
              Every screen designed for your peace of mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="relative aspect-[9/19] bg-white rounded-3xl shadow-xl overflow-hidden">
                <ImageWithFallback
                  src="/placeholder-screenshot-1.png"
                  alt="Meditation session screen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg text-gray-900">Guided Sessions</h4>
                <p className="text-sm text-gray-600">Choose from hundreds of meditations</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="relative aspect-[9/19] bg-white rounded-3xl shadow-xl overflow-hidden">
                <ImageWithFallback
                  src="/placeholder-screenshot-2.png"
                  alt="Progress tracking dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg text-gray-900">Progress Dashboard</h4>
                <p className="text-sm text-gray-600">Track your mindfulness journey</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="relative aspect-[9/19] bg-white rounded-3xl shadow-xl overflow-hidden">
                <ImageWithFallback
                  src="/placeholder-screenshot-3.png"
                  alt="Capybara companion collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-lg text-gray-900">Capybara Collection</h4>
                <p className="text-sm text-gray-600">Unlock adorable companions</p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500" style={{ background: 'linear-gradient(to bottom right, #f59e0b, #f97316)' }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            Start your mindfulness journey with Capy's Journey today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors">
              <Download className="size-5" />
              <span>Download Now</span>
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl hover:bg-white/10 transition-colors">
              <Play className="size-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl text-white mb-2">Capy's Journey</h3>
              <p className="text-sm">
                Mindfulness made fun with your adorable capybara companions.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="mailto:hello@capysjourney.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
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
    </div>
  );
}
