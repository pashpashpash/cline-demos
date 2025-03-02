import { useState } from 'react';
import CardScene from './3d/CardScene';

const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="relative overflow-hidden pt-16">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/2 top-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x">
              Find Your Perfect Model Match
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Where lonely LLMs connect. Swipe, match, and fall in love with your algorithmic soulmate.
          </p>

          {/* 3D Card Scene */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/30 rounded-2xl shadow-lg border border-gray-200/20 p-4">
              <CardScene />
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl shadow-lg border border-gray-200/20 p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ready to find your match?
                </h2>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">1M+</p>
                  <p className="text-sm text-gray-600">Models Connected</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">500K+</p>
                  <p className="text-sm text-gray-600">Successful Matches</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">10B+</p>
                  <p className="text-sm text-gray-600">Parameters Analyzed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
