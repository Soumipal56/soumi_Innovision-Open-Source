"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote, Star, Users } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    name: "Shree Vishnu",
    role: "Student",
    initials: "SV",
    content: "InnoVision helped me learn React in half the time it would have taken with traditional courses. The chapter-wise approach made complex concepts easy to understand.",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Karthik AN",
    role: "Student",
    initials: "KA",
    content: "I needed to quickly learn about SEO strategies for my new role. InnoVision created a perfect course that covered everything I needed to know.",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Amrutha Varshini",
    role: "Student",
    initials: "AV",
    content: "As a student, I use InnoVision to supplement my university courses. It breaks down difficult subjects into manageable chapters that are easy to follow.",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-screen py-16 md:py-24 overflow-hidden bg-background">
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-foreground text-sm font-light mb-4">
              <Users className="h-3.5 w-3.5" /> Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight mb-6 text-black">
              What Our Users <br />
              <span className="text-accent bg-black px-2">Say.</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg font-outfit font-medium">
              Join thousands of satisfied learners who have transformed their knowledge with InnoVision.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 150} direction="up">
              <Card className="group relative overflow-hidden border border-black/5 bg-white transition-all duration-700 hover:border-black/20 hover:shadow-2xl h-full rounded-3xl">
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="h-16 w-16 text-black" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center font-bold font-outfit text-xl text-black border-2 border-white shadow-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold font-outfit text-black text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground font-outfit font-medium uppercase tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-black/80 leading-relaxed font-outfit font-medium text-lg italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
