"use client";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Search, Map, FileText, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { number: 1, icon: Search, title: "Enter Your Topic", description: "Simply type in what you want to learn about, from programming to philosophy.", color: "#3b82f6" },
  { number: 2, icon: Map, title: "AI Generates Roadmap", description: "The AI analyzes the topic and creates a structured, chapter-wise roadmap tailored to you.", color: "#a855f7" },
  { number: 3, icon: FileText, title: "AI Generates Content", description: "The AI analyzes the roadmap and creates detailed content for each chapter.", color: "#f97316" },
  { number: 4, icon: GraduationCap, title: "Start Learning", description: "Begin your learning journey through interactive chapters, exercises, and assessments.", color: "#10b981" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative w-screen py-16 md:py-24 overflow-hidden bg-background">
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-foreground text-sm font-light mb-4">
              <Map className="h-3.5 w-3.5" /> How It Works
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight mb-6 text-black">
              Your Learning Journey <br />
              <span className="text-accent bg-black px-2">Simplified.</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg font-outfit font-medium">
              Creating your personalized learning experience is simple and fast.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 150} direction="up">
                <div className="relative h-full">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
                  )}
                  <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-black/5 hover:border-black/20 transition-all duration-700 hover:shadow-2xl h-full group">
                    <div className="relative w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                      <step.icon className="h-8 w-8 text-black" />
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center bg-black text-white text-xs font-bold font-outfit shadow-xl border-2 border-white">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-outfit mb-3 text-black tracking-tight">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-outfit font-medium">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="up" delay={400}>
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-3xl border border-black/5 bg-white shadow-xl p-10 overflow-hidden">
              <div className="relative space-y-8">
                <div className="space-y-3">
                  <h3 className="text-3xl font-display uppercase text-black">Try it now</h3>
                  <p className="text-muted-foreground font-outfit font-medium">Enter a topic you'd like to learn about and see how InnoVision works.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      className="w-full h-14 rounded-full border border-black/10 bg-secondary/30 pl-12 pr-6 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition-all font-outfit font-bold"
                      placeholder="e.g., Machine Learning, Web Development..."
                    />
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger className="h-14 px-10 rounded-full bg-black text-white font-outfit font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.05] shadow-lg">
                      Generate Course <ArrowRight className="h-5 w-5" />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Login to continue</AlertDialogTitle>
                        <AlertDialogDescription>You must be logged in to generate the course, login to continue.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction><Link href="/login">Login</Link></AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
