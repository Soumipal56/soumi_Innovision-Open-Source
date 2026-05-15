"use client";
import { ArrowRight, Sparkles, Rocket, Play } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import landingTheme from "@/lib/landing-theme";

const CTA = () => {
  return (
    <section className="relative w-screen py-16 md:py-24 overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-foreground text-sm font-light mb-8">
              <Rocket className="h-4 w-4" />
              <span>Start Your Journey Today</span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight text-black mb-8 leading-[0.9]">
              Ready to <br />
              <span className="text-accent bg-black px-4 inline-block transform -rotate-1">
                Transform?
              </span>
            </h2>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
              Join thousands of learners who are mastering new skills with AI-powered personalized courses. Start for free today.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <MagneticButton strength={0.25}>
                <Link href="/login">
                  <Button
                    className={`${landingTheme.components.button.primary} gap-4`}
                  >
                    <Sparkles className="h-6 w-6" />
                    Get Started Free
                    <ArrowRight className="h-6 w-6" />
                  </Button>
                </Link>
              </MagneticButton>
              <button className="flex items-center gap-2 text-black font-bold font-outfit group hover:opacity-70 transition-all">
                <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Play className="h-5 w-5 fill-current" />
                </div>
                <span>See Demo</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Trust indicators */}
          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm font-light">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
