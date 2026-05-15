"use client";
import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    question: "How does InnoVision generate personalized courses?",
    answer: "InnoVision uses advanced AI to analyze your topic of interest and creates a structured, chapter-by-chapter course tailored to your learning needs. Our algorithm considers the complexity of the subject, logical progression of concepts, and includes interactive elements to enhance understanding."
  },
  {
    question: "What topics can I learn with InnoVision?",
    answer: "You can learn virtually any topic with InnoVision. From technical subjects like programming, data science, and engineering to humanities, arts, business skills, and more. If you can describe it, our AI can create a structured learning path for it."
  },
  {
    question: "How long does it take to generate a course?",
    answer: "Course generation typically takes just a few seconds. The AI analyzes your topic, creates a comprehensive roadmap, and then generates detailed chapter content ready for you to start learning immediately."
  },
  {
    question: "Can I track my learning progress?",
    answer: "Yes, InnoVision provides detailed progress tracking. You can monitor which chapters you've completed, view your performance on exercises and assessments, and see statistics about your learning journey."
  },
  {
    question: "Do I need to create an account to use InnoVision?",
    answer: "Yes, you'll need to create a free account to generate and access courses. This allows us to save your progress, provide personalized recommendations, and ensure you can return to your learning materials anytime."
  },
  {
    question: "How does InnoVision ensure the quality of course content?",
    answer: "Our AI is trained on high-quality educational materials and continuously improved based on user feedback. We also implement regular quality checks and updates to ensure accuracy and effectiveness of the generated content."
  },
  {
    question: "Is InnoVision free to use?",
    answer: "Yes, InnoVision provides free access to core learning features. Some advanced tools or premium features may be introduced in the future."
  },
  {
    question: "Can I customize my learning roadmap?",
    answer: "Yes, users can choose different learning paths such as fast-track, balanced, or in-depth modes depending on their preferred learning style."
  },
  {
    question: "Does InnoVision provide certifications?",
    answer: "Currently, InnoVision focuses on structured learning and skill development. Certification features may be introduced in future updates."
  },
  {
    question: "What learning levels are supported?",
    answer: "InnoVision supports beginner, intermediate, and advanced learners with structured content progression and practical learning guidance."
  },
  {
    question: "Is my personal data secure?",
    answer: "Yes, user data is securely handled using authentication systems and protected database storage. We prioritize privacy and data security."
  },
  {
    question: "Can I access my courses across devices?",
    answer: "Yes, once you log in, your courses and progress are saved to your account and can be accessed from any device."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`rounded-3xl border transition-all duration-500 overflow-hidden ${isOpen ? 'border-black bg-white shadow-2xl' : 'border-black/5 bg-white hover:border-black/20 hover:shadow-xl'}`}>
    <button onClick={onClick} className="flex w-full items-center justify-between p-6 text-left group">
      <span className={`text-lg font-bold font-outfit pr-6 transition-colors ${isOpen ? 'text-black' : 'text-black/60 group-hover:text-black'}`}>{question}</span>
      <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-black text-white rotate-180' : 'bg-secondary text-black group-hover:bg-black group-hover:text-white'}`}>
        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-outfit font-medium border-t border-black/5 pt-4">{answer}</div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, faqs.length));
  };

  return (
    <section id="faq" className="relative w-screen py-16 md:py-24 bg-background">
      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-foreground text-sm font-light mb-4">
              <HelpCircle className="h-3.5 w-3.5" /> FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight mb-6 text-black">
              Frequently Asked <br />
              <span className="text-accent bg-black px-2">Questions.</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg font-outfit font-medium">
              Find answers to common questions about InnoVision's AI-powered learning platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </ScrollReveal>
          ))}
        </div>
        {visibleCount < faqs.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-10 py-4 bg-black text-white rounded-full font-outfit font-bold hover:scale-[1.05] transition-all shadow-lg"
            >
              Load More Questions
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
