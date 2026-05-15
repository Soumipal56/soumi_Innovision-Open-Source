// Centralized Landing Page Theme Manager
// All colors, animations, and styles in one place

export const landingTheme = {
  // Color Palette
  colors: {
    primary: {
      blue: "#000000",
      purple: "#8b5cf6",
      cyan: "#38bdf8",
      gradient: "from-black via-gray-900 to-gray-800",
    },
    accent: {
      yellow: "#eab308",
      orange: "#f97316",
      green: "#10b981",
      red: "#ef4444",
      pink: "#ec4899",
    },
    feature: {
      ai: "#3b82f6",
      youtube: "#ef4444",
      studio: "#06b6d4",
      content: "#f97316",
      curriculum: "#10b981",
      engineering: "#a855f7",
      xp: "#eab308",
      streak: "#f97316",
      badges: "#f59e0b",
      leaderboard: "#10b981",
      quests: "#ec4899",
      combo: "#8b5cf6",
    },
  },

  // Animation Timings
  animations: {
    duration: {
      fast: "300ms",
      normal: "500ms",
      slow: "1000ms",
    },
    delay: {
      badge: "0s",
      logo: "0.1s",
      heading: "0.2s",
      subheading: "0.3s",
      subtitle: "0.4s",
      features: "0.5s",
      buttons: "0.6s",
      stats: "0.7s",
      trust: "0.8s",
    },
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Effects
  effects: {
    blur: {
      sm: "blur-sm",
      md: "blur-md",
      lg: "blur-lg",
      xl: "blur-xl",
      "2xl": "blur-2xl",
      "3xl": "blur-3xl",
    },
    glow: {
      sm: "0 0 10px",
      md: "0 0 20px",
      lg: "0 0 30px",
      xl: "0 0 40px",
    },
    gradient: {
      orb1: {
        color: "bg-blue-500/20",
        size: "w-72 h-72",
        position: "top-20 left-10",
        duration: "4s",
      },
      orb2: {
        color: "bg-purple-500/20",
        size: "w-96 h-96",
        position: "bottom-20 right-10",
        duration: "6s",
        delay: "1s",
      },
    },
    spotlight: {
      radius: "600px",
      opacity: "15",
    },
    tilt: {
      perspective: "1000px",
      maxRotation: 30, // degrees
      scale: 1.02,
    },
  },

  // Typography
  typography: {
    hero: {
      title: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display uppercase tracking-tight leading-[0.9]",
      subtitle: "text-lg sm:text-xl md:text-2xl font-outfit opacity-60 max-w-2xl mx-auto",
    },
    section: {
      title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
      subtitle: "text-lg md:text-xl font-medium opacity-60",
    },
    card: {
      title: "text-xl font-bold tracking-tight",
      description: "text-base opacity-70 leading-relaxed",
    },
  },

  // Spacing
  spacing: {
    section: "py-20 md:py-32",
    container: "px-4 md:px-6",
    card: "p-6",
    gap: {
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    },
  },

  // Border Radius
  radius: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    full: "rounded-full",
  },

  // Hover Effects
  hover: {
    scale: {
      sm: "hover:scale-105",
      md: "hover:scale-110",
      lg: "hover:scale-125",
    },
    translate: {
      up: "hover:-translate-y-2",
      down: "hover:translate-y-2",
    },
    glow: "hover:shadow-lg",
  },

  // Component Styles
  components: {
    badge: {
      base: "inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-black/10 bg-white shadow-sm text-sm font-outfit font-semibold tracking-tight",
      hover: "hover:scale-105 transition-all duration-300",
    },
    button: {
      primary: "bg-black text-white rounded-full h-16 px-12 text-xl font-outfit font-bold transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:-translate-y-1 active:scale-[0.95]",
      secondary: "border-2 border-black text-black bg-white rounded-full h-16 px-12 text-xl font-outfit font-bold transition-all duration-500 hover:bg-black hover:text-white hover:scale-[1.05] active:scale-[0.95]",
    },
    card: {
      base: "border border-border bg-background backdrop-blur-sm transition-all duration-500 hover:border-border/60 hover:-translate-y-2",
      premium: "border-yellow-500/20 bg-yellow-500/10",
    },
    feature: {
      icon: "w-12 h-12 rounded-xl border border-border flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-6",
      badge: "px-2 py-0.5 rounded-full text-xs font-light flex items-center gap-1 backdrop-blur-sm",
    },
  },

  // Feature Icons Colors
  featureColors: {
    create: ["#3b82f6", "#ef4444", "#06b6d4", "#f97316", "#10b981", "#a855f7"],
    gamification: ["#eab308", "#f97316", "#f59e0b", "#10b981", "#ec4899", "#8b5cf6"],
    learning: ["#a855f7", "#3b82f6", "#64748b", "#f43f5e", "#14b8a6", "#6366f1"],
    premium: ["#3b82f6", "#10b981", "#a855f7", "#f97316", "#ef4444", "#14b8a6", "#ec4899", "#06b6d4"],
    ux: ["#6366f1", "#eab308", "#ec4899", "#3b82f6"],
  },

  // Stats Configuration
  stats: [
    { end: 100, suffix: "", label: "Courses Created", color: "text-blue-500" },
    { end: 50, suffix: "+", label: "Learners", color: "text-purple-500" },
    { end: 100, suffix: "+", label: "Languages", color: "text-cyan-500" },
    { end: 98, suffix: "%", label: "Satisfaction", color: "text-green-500" },
  ],

  // Trust Badges
  trustBadges: [
    "Free to Start",
    "7-Day Premium Trial",
    "No Credit Card Required",
  ],

  // Feature Highlights
  featureHighlights: [
    { text: "XP & Levels", color: "text-yellow-500" },
    { text: "Daily Streaks", color: "text-orange-500" },
    { text: "Badges & Leaderboards", color: "text-green-500" },
    { text: "100+ Languages", color: "text-blue-500" },
  ],
};

// Helper Functions
export const getFeatureColor = (category, index) => {
  const colors = landingTheme.featureColors[category];
  return colors ? colors[index % colors.length] : landingTheme.colors.primary.blue;
};

export const getAnimationDelay = (index, baseDelay = 100) => {
  return `${index * baseDelay}ms`;
};

export const getGlowStyle = (color, intensity = "md") => {
  return `${landingTheme.effects.glow[intensity]} ${color}40`;
};

export const getTiltStyle = (mouseX, mouseY, centerX = 150, centerY = 150) => {
  const { perspective, maxRotation, scale } = landingTheme.effects.tilt;
  const rotateX = (mouseY - centerY) / maxRotation;
  const rotateY = (mouseX - centerX) / maxRotation;

  return {
    transform: `perspective(${perspective}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
  };
};

export const getSpotlightStyle = (mouseX, mouseY, color) => {
  const { radius, opacity } = landingTheme.effects.spotlight;
  return {
    background: `radial-gradient(${radius} circle at ${mouseX}px ${mouseY}px, ${color}${opacity}, transparent 40%)`,
  };
};

// Export default
export default landingTheme;
