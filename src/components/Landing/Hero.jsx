import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Zap, BookOpen, Trophy, Users, Globe, Flame } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import MagneticButton from "./MagneticButton";
import landingTheme, { getAnimationDelay } from "@/lib/landing-theme";

const Hero = () => {
  const { colors, animations, effects, typography, components, stats, trustBadges, featureHighlights } = landingTheme;

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden px-4">
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-blue-500/10 to-transparent pointer-events-none" />
      
      {/* Gradient orbs */}
      <div
        className={`absolute ${effects.gradient.orb1.position} ${effects.gradient.orb1.size} ${effects.gradient.orb1.color} rounded-full ${effects.blur["3xl"]} animate-pulse`}
        style={{ animationDuration: effects.gradient.orb1.duration }}
      />
      <div
        className={`absolute ${effects.gradient.orb2.position} ${effects.gradient.orb2.size} ${effects.gradient.orb2.color} rounded-full ${effects.blur["3xl"]} animate-pulse`}
        style={{ animationDuration: effects.gradient.orb2.duration, animationDelay: effects.gradient.orb2.delay }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:pb-20 pt-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`${components.badge.base} ${components.badge.hover} mb-10 animate-fade-in`}
            style={{ animationDelay: animations.delay.badge }}
          >
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Learning Platform</span>
          </div>

          {/* Central Accent Icon — Minimalist */}
          <div
            className="mb-8 animate-fade-in relative group"
            style={{ animationDelay: animations.delay.logo }}
          >
            <div className={`absolute inset-0 bg-accent rounded-full blur-[80px] group-hover:bg-accent/60 transition-all duration-700 scale-125 opacity-30`} />
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-black/5 bg-white/40 backdrop-blur-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <Sparkles className="h-10 w-10 sm:h-14 w-14 text-black group-hover:rotate-12 transition-transform duration-500" />
            </div>
          </div>

          {/* Main heading with bubbly display font */}
          <h1 className={`${typography.hero.title} mb-8 sm:mb-10 text-black uppercase tracking-tight`}>
            <span
              className="block animate-fade-in"
              style={{ animationDelay: animations.delay.heading }}
            >
              Learn Any Topic.
            </span>
            <span
              className="block animate-fade-in"
              style={{ animationDelay: animations.delay.subheading }}
            >
              AI-Generated.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`${typography.hero.subtitle} text-foreground/70 max-w-2xl mb-8 sm:mb-12 leading-relaxed animate-fade-in px-2`}
            style={{ animationDelay: animations.delay.subtitle }}
          >
            Generate personalized courses on any topic in seconds. From programming to philosophy,
            our AI creates structured, chapter-wise content tailored to your learning style.
          </p>

          {/* Feature highlights with icons */}
          <div
            className={`flex flex-wrap items-center justify-center ${landingTheme.spacing.gap.sm} mb-6 sm:mb-10 text-xs sm:text-sm text-muted-foreground animate-fade-in font-light`}
            style={{ animationDelay: animations.delay.features }}
          >
            {featureHighlights.map((item, i) => {
              const icons = [Zap, Flame, Trophy, Globe];
              const Icon = icons[i];
              return (
                <div key={i} className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 ${landingTheme.radius.full} border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 ${landingTheme.hover.scale.sm} transition-all duration-300`}>
                  <Icon
                    aria-hidden="true"
                    className={`h-3 w-3 sm:h-4 sm:w-4 ${item.color}`}
                  />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons — High End Studio Style */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in w-full sm:w-auto"
            style={{ animationDelay: animations.delay.buttons }}
          >
            <MagneticButton strength={0.2}>
              <Link href="/login">
                <Button
                  className={`${components.button.primary} gap-4`}
                >
                  Get Started Free
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </Link>
            </MagneticButton>
            
            <button className="flex items-center gap-2 text-black font-bold font-outfit group hover:opacity-70 transition-all">
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <Play className="h-5 w-5 fill-current" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats with Animated Counters */}
          <div
            className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-12 pt-6 sm:pt-8 border-t border-border w-full max-w-3xl animate-fade-in"
            style={{ animationDelay: animations.delay.stats }}
          >
            {stats.map((stat, i) => {
              const icons = [BookOpen, Users, Globe, Trophy];
              const Icon = icons[i];
              return (
                <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                    <Icon
                      aria-hidden="true"
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.color} group-hover:scale-110 transition-transform`}
                    />
                    <span
                      className="text-xl sm:text-2xl md:text-3xl font-light text-foreground"
                      aria-label={`${stat.end}${stat.suffix} ${stat.label}`}
                    >
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Trust badges */}
          <div
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground animate-fade-in font-light"
            style={{ animationDelay: animations.delay.trust }}
          >
            {trustBadges.map((text, i) => (
              <div key={i} className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 ${landingTheme.radius.full} border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 ${landingTheme.hover.scale.sm} transition-all duration-300`}>
                <svg className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
