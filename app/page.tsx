"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Download,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Award,
  Calendar,
  ExternalLink,
  ChevronDown,
  Star,
  BarChart3,
  Zap,
  Globe,
  MessageSquare,
  CheckCircle,
  ArrowUp,
  Search,
  Eye,
  Heart,
  BookOpen,
  Lightbulb,
  Shield,
  Clock,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Settings,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Quote,
  Building,
  Calculator,
  FileText,
  Layers,
  Workflow,
  Home,
  User,
  Trophy,
  Brain,
  PieChart,
  Activity,
  Gauge,
  AlertTriangle,
  TrendingDown,
  DownloadIcon,
  Map,
  Compass,
  BookMarked,
  Video,
  MessageCircle,
  Grid,
  List,
  Maximize2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false) // State for mobile nav toggle
  const toggleNav = () => {
  setIsNavOpen(!isNavOpen)
}
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showROICalculator, setShowROICalculator] = useState(false)
  const [showHealthScoreDashboard, setShowHealthScoreDashboard] = useState(false)
  const [showChurnPredictor, setShowChurnPredictor] = useState(false)
  const [showCustomerJourney, setShowCustomerJourney] = useState(false)
  const [showPlaybooks, setShowPlaybooks] = useState(false)
  const [showMaturityAssessment, setShowMaturityAssessment] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [dashboardView, setDashboardView] = useState("overview")
  const [roiInputs, setRoiInputs] = useState({
    currentRevenue: "",
    churnRate: "",
    customerCount: "",
  })
  const countRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [count, setCount] = useState(0)
  const isInView = useInView(countRef)

  const words = [
    "Strategic Customer Success Manager",
    "SaaS Revenue Growth Expert",
    "Client Retention Specialist",
    "Customer Experience Architect",
    "Digital Transformation Leader",
  ]

  // Navigation items for sidebar
  const navigationItems = [
    { id: "hero", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "about", label: "About", icon: <User className="w-5 h-5" /> },
    { id: "achievements", label: "Achievements", icon: <Trophy className="w-5 h-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5" /> },
    { id: "customer-health", label: "Health Dashboard", icon: <Activity className="w-5 h-5" /> },
    { id: "success-metrics", label: "Success Metrics", icon: <BarChart3 className="w-5 h-5" /> },
    { id: "customer-journey", label: "Customer Journey", icon: <Map className="w-5 h-5" /> },
    { id: "case-studies", label: "Case Studies", icon: <BookOpen className="w-5 h-5" /> },
    { id: "testimonials", label: "Testimonials", icon: <MessageSquare className="w-5 h-5" /> },
    { id: "methodology", label: "Methodology", icon: <Compass className="w-5 h-5" /> },
    { id: "playbooks", label: "Playbooks", icon: <BookMarked className="w-5 h-5" /> },
    { id: "tools", label: "CS Tools", icon: <Settings className="w-5 h-5" /> },
    { id: "insights", label: "Insights", icon: <Brain className="w-5 h-5" /> },
    { id: "skills", label: "Skills", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ]

  // Customer Health Score Data
  const customerHealthData = [
    {
      id: 1,
      name: "TechFlow Solutions",
      healthScore: 92,
      status: "Healthy",
      revenue: "$45K",
      lastActivity: "2 days ago",
      riskLevel: "Low",
      engagement: 95,
      adoption: 88,
      satisfaction: 94,
      trend: "up",
    },
    {
      id: 2,
      name: "DataDrive Inc",
      healthScore: 78,
      status: "At Risk",
      revenue: "$32K",
      lastActivity: "1 week ago",
      riskLevel: "Medium",
      engagement: 72,
      adoption: 65,
      satisfaction: 80,
      trend: "down",
    },
    {
      id: 3,
      name: "CloudScale",
      healthScore: 96,
      status: "Champion",
      revenue: "$78K",
      lastActivity: "1 day ago",
      riskLevel: "Low",
      engagement: 98,
      adoption: 95,
      satisfaction: 97,
      trend: "up",
    },
    {
      id: 4,
      name: "StartupXYZ",
      healthScore: 45,
      status: "Critical",
      revenue: "$12K",
      lastActivity: "2 weeks ago",
      riskLevel: "High",
      engagement: 35,
      adoption: 40,
      satisfaction: 55,
      trend: "down",
    },
  ]

  // Customer Journey Stages
  const customerJourneyStages = [
    {
      stage: "Awareness",
      description: "Customer discovers our solution",
      duration: "1-2 weeks",
      activities: ["Demo requests", "Content downloads", "Website visits"],
      successRate: 85,
      keyMetrics: ["Lead quality", "Engagement score"],
    },
    {
      stage: "Evaluation",
      description: "Customer evaluates our solution",
      duration: "2-4 weeks",
      activities: ["Product trials", "Stakeholder meetings", "Proposal reviews"],
      successRate: 72,
      keyMetrics: ["Trial usage", "Feature adoption"],
    },
    {
      stage: "Purchase",
      description: "Customer makes buying decision",
      duration: "1-2 weeks",
      activities: ["Contract negotiation", "Legal review", "Final approval"],
      successRate: 68,
      keyMetrics: ["Deal velocity", "Contract value"],
    },
    {
      stage: "Onboarding",
      description: "Customer gets set up and trained",
      duration: "4-6 weeks",
      activities: ["Implementation", "Training", "Configuration"],
      successRate: 94,
      keyMetrics: ["Time to value", "Training completion"],
    },
    {
      stage: "Adoption",
      description: "Customer actively uses the solution",
      duration: "3-6 months",
      activities: ["Feature usage", "User training", "Success milestones"],
      successRate: 88,
      keyMetrics: ["Feature adoption", "User engagement"],
    },
    {
      stage: "Growth",
      description: "Customer expands usage and value",
      duration: "6+ months",
      activities: ["Upselling", "Cross-selling", "Advanced features"],
      successRate: 76,
      keyMetrics: ["Revenue expansion", "Advanced adoption"],
    },
    {
      stage: "Advocacy",
      description: "Customer becomes a champion",
      duration: "12+ months",
      activities: ["Referrals", "Case studies", "Speaking opportunities"],
      successRate: 45,
      keyMetrics: ["NPS score", "Reference participation"],
    },
  ]

  // Success Playbooks
  const successPlaybooks = [
    {
      title: "New Customer Onboarding",
      description: "Complete framework for successful customer onboarding",
      category: "Onboarding",
      duration: "30-60 days",
      steps: 12,
      successRate: "94%",
      downloads: 1250,
      rating: 4.9,
    },
    {
      title: "Churn Prevention Strategy",
      description: "Early warning system and intervention tactics",
      category: "Retention",
      duration: "Ongoing",
      steps: 8,
      successRate: "87%",
      downloads: 980,
      rating: 4.8,
    },
    {
      title: "Upsell & Cross-sell Framework",
      description: "Systematic approach to revenue expansion",
      category: "Growth",
      duration: "3-6 months",
      steps: 10,
      successRate: "76%",
      downloads: 756,
      rating: 4.7,
    },
    {
      title: "Customer Health Monitoring",
      description: "Comprehensive health score methodology",
      category: "Analytics",
      duration: "Ongoing",
      steps: 6,
      successRate: "92%",
      downloads: 1100,
      rating: 4.9,
    },
  ]

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex]

    if (isTyping) {
      if (typedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, typedText.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsTyping(true)
      }
    }
  }, [typedText, isTyping, currentWordIndex, words])

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 500)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Animated counter hook
  const useAnimatedCounter = (end: number, duration = 2000) => {
    const [count, setCount] = useState(0)
    const [isInView, setIsInView] = useState(false)
    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true)
            } else {
              setIsInView(false)
            }
          })
        },
        {
          threshold: 0.5,
        },
      )

      if (countRef.current) {
        observer.current.observe(countRef.current)
      }

      return () => {
        if (countRef.current && observer.current) {
          observer.current.unobserve(countRef.current)
        }
        if (observer.current) {
          observer.current.disconnect()
        }
      }
    }, [countRef])

    useEffect(() => {
      if (isInView) {
        let startTime: number
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        requestAnimationFrame(animate)
      }
    }, [isInView, end, duration])

    return { count, ref: countRef }
  }

  // Sample data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Operations",
      company: "TechFlow Solutions",
      content:
        "Harsh transformed our customer success strategy, resulting in a 40% increase in retention and $2M additional revenue. His data-driven approach and strategic thinking are exceptional.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      videoUrl: "#",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "DataDrive Inc",
      content:
        "His strategic approach to customer success helped us reduce churn by 60% and improve our NPS score from 45 to 78. Harsh is a true customer success expert.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      videoUrl: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Experience",
      company: "CloudScale",
      content:
        "Harsh's expertise in SaaS customer lifecycle management is unparalleled. He delivered exceptional results consistently and helped us scale our CS operations.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      videoUrl: "#",
    },
  ]

  const caseStudies = [
    {
      title: "Payment Gateway Transformation",
      client: "FinTech Startup",
      challenge: "Low transaction volume and poor user adoption",
      solution: "Implemented comprehensive onboarding strategy and user education program",
      results: "2900% increase in monthly transactions ($60K to $1.8M)",
      metrics: { revenue: "2900%", adoption: "85%", satisfaction: "95%" },
      tags: ["FinTech", "Growth", "Onboarding"],
      timeline: "6 months",
      roi: "450%",
    },
    {
      title: "Enterprise Retention Strategy",
      client: "Hospitality SaaS",
      challenge: "High churn rate among enterprise clients",
      solution: "Developed personalized success plans and proactive risk mitigation",
      results: "Achieved 95% retention rate with $800K portfolio",
      metrics: { retention: "95%", revenue: "$800K", nps: "100" },
      tags: ["Enterprise", "Retention", "Hospitality"],
      timeline: "12 months",
      roi: "320%",
    },
    {
      title: "Multi-Product Adoption",
      client: "Digital Marketing Platform",
      challenge: "Low feature adoption across customer base",
      solution: "Created targeted education programs and usage analytics",
      results: "25% increase in product usage and 35% YoY upsell growth",
      metrics: { adoption: "25%", upsell: "35%", engagement: "90%" },
      tags: ["Product Adoption", "Education", "Upselling"],
      timeline: "9 months",
      roi: "280%",
    },
  ]

  const insights = [
    {
      title: "The Future of Customer Success in SaaS",
      excerpt: "Exploring how AI and predictive analytics are reshaping customer success strategies...",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      tags: ["AI", "SaaS", "Strategy"],
      likes: 124,
      views: 1250,
      comments: 18,
    },
    {
      title: "Building Scalable Onboarding Processes",
      excerpt: "A comprehensive guide to reducing time-to-value and improving customer satisfaction...",
      readTime: "8 min read",
      date: "Dec 10, 2024",
      tags: ["Onboarding", "Process", "Scale"],
      likes: 89,
      views: 890,
      comments: 12,
    },
    {
      title: "Measuring Customer Health: Beyond NPS",
      excerpt: "Advanced metrics and frameworks for predicting customer success and preventing churn...",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      tags: ["Metrics", "Analytics", "Health Score"],
      likes: 156,
      views: 1680,
      comments: 24,
    },
  ]

  const methodology = [
    {
      phase: "Discovery & Assessment",
      icon: <Search className="w-8 h-8" />,
      description: "Comprehensive analysis of current customer health, pain points, and opportunities",
      activities: ["Customer interviews", "Data analysis", "Process mapping", "Goal alignment"],
      duration: "1-2 weeks",
      deliverables: ["Health assessment", "Gap analysis", "Success plan"],
    },
    {
      phase: "Strategy Development",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Create tailored success plans based on customer segments and business objectives",
      activities: ["Success plan creation", "Milestone definition", "Risk assessment", "Resource allocation"],
      duration: "1 week",
      deliverables: ["Success roadmap", "Risk mitigation plan", "Resource plan"],
    },
    {
      phase: "Implementation & Execution",
      icon: <Settings className="w-8 h-8" />,
      description: "Deploy strategies with continuous monitoring and optimization",
      activities: ["Onboarding execution", "Training delivery", "Progress tracking", "Issue resolution"],
      duration: "4-8 weeks",
      deliverables: ["Implementation plan", "Training materials", "Progress reports"],
    },
    {
      phase: "Optimization & Growth",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Continuous improvement and expansion opportunities identification",
      activities: ["Performance analysis", "Upsell identification", "Process refinement", "Success scaling"],
      duration: "Ongoing",
      deliverables: ["Performance dashboard", "Growth opportunities", "Optimization plan"],
    },
  ]

  // ROI Calculator
  const calculateROI = () => {
    const revenue = Number.parseFloat(roiInputs.currentRevenue) || 0
    const churn = Number.parseFloat(roiInputs.churnRate) || 0
    const customers = Number.parseFloat(roiInputs.customerCount) || 0

    const currentLoss = (revenue * churn) / 100
    const improvedChurn = Math.max(churn - 15, 2) // Assuming 15% improvement
    const improvedLoss = (revenue * improvedChurn) / 100
    const savings = currentLoss - improvedLoss

    return {
      currentLoss: currentLoss.toFixed(0),
      improvedLoss: improvedLoss.toFixed(0),
      savings: savings.toFixed(0),
      roi: ((savings / (revenue * 0.1)) * 100).toFixed(0), // Assuming 10% investment
    }
  }

  const roiResults = calculateROI()

  // Animated counter hook

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hamburger Button - Mobile Only */}
      <button
        className="fixed top-6 left-6 z-[100] flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 shadow-lg md:hidden"
        onClick={toggleNav}
        aria-label="Open navigation"
      >
        <span className="sr-only">Open navigation</span>
        {/* Hamburger Icon */}
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
          <line x1="6" y1="9" x2="22" y2="9" />
          <line x1="6" y1="14" x2="22" y2="14" />
          <line x1="6" y1="19" x2="22" y2="19" />
        </svg>
      </button>

      {/* Sidebar Navigation */}
      <motion.nav
        className={`
        fixed left-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300
        hidden md:block
      `}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ top: "7vh", transform: "translateY(-50%)" }}
      >
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl p-3">
          {/* Brand Logo */}
          <motion.div className="mb-4 pb-3 border-b border-white/20" whileHover={{ scale: 1.1 }}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group relative">
              <span className="text-white font-bold text-sm">HS</span>

              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Harsh Shah
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Items */}
          <div className="space-y-2">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group relative ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110"
                    : "text-gray-600 hover:bg-white/40 hover:text-blue-600 hover:scale-105"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-5 h-5">{item.icon}</div>

                {/* Active Indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Tooltip */}
                <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-4 pt-3 border-t border-white/20 space-y-2">
            <motion.button
              onClick={() => setShowROICalculator(true)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:bg-white/40 hover:text-purple-600 transition-all duration-200 group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calculator className="w-4 h-4" />

              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                ROI Calculator
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => setShowHealthScoreDashboard(true)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 hover:bg-white/40 hover:text-green-600 transition-all duration-200 group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Activity className="w-4 h-4" />

              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Health Dashboard
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Progress Indicator */}
      <motion.div
        className="fixed left-6 bottom-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-1 h-20 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-full"
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="ml-0">
        {/* Floating Action Buttons */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div className="absolute inset-0 z-0" style={{ y }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
          </motion.div>

          <div className="max-w-6xl mx-auto px-8 text-center z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Harsh Shah
                </span>
              </motion.h1>

              <motion.div
                className="text-2xl md:text-3xl text-gray-700 mb-6 h-12 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="font-medium">{typedText}</span>
                <span className="animate-pulse text-blue-600 ml-1">|</span>
              </motion.div>

              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Transforming customer relationships into revenue growth with data-driven strategies and proven
                methodologies. 5+ years of SaaS expertise delivering exceptional results.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  Toronto, Canada
                </div>
                <div className="flex items-center text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  +1-416-821-1651
                </div>
                <div className="flex items-center text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Mail className="w-4 h-4 mr-2 text-purple-600" />
                  harrsh.shah@gmail.com
                </div>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection("contact")}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Let's Connect
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setShowHealthScoreDashboard(true)}
                >
                  <Activity className="w-5 h-5 mr-2" />
                  Live Dashboard
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setShowROICalculator(true)}
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  ROI Calculator
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>

              {/* Key Metrics Preview */}
              <motion.div
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {[
                  { value: "95%", label: "Client Retention", icon: <Users className="w-6 h-6" /> },
                  { value: "2900%", label: "Revenue Growth", icon: <TrendingUp className="w-6 h-6" /> },
                  { value: "$100K+", label: "New Revenue", icon: <DollarSign className="w-6 h-6" /> },
                  { value: "<2%", label: "Churn Rate", icon: <Target className="w-6 h-6" /> },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-blue-600 mb-2 flex justify-center">{metric.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Strategic Customer Success Manager with over 5 years of experience in the SaaS industry, specializing in
                digital marketing and client relationship management. I transform customer relationships into
                sustainable revenue growth through data-driven strategies and proven methodologies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Client Retention Expert",
                  description: "Achieved 95% client retention rate with personalized success strategies",
                  color: "blue",
                  stats: "95% retention rate",
                },
                {
                  icon: <TrendingUp className="w-10 h-10" />,
                  title: "Revenue Growth Driver",
                  description: "Generated $100K+ in new revenue through strategic account management",
                  color: "green",
                  stats: "$100K+ new revenue",
                },
                {
                  icon: <Target className="w-10 h-10" />,
                  title: "SaaS Specialist",
                  description: "Deep expertise in SaaS customer lifecycle and digital marketing",
                  color: "purple",
                  stats: "5+ years experience",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="perspective-1000"
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`text-${item.color}-600 mb-6 flex justify-center bg-${item.color}-50 w-20 h-20 rounded-2xl items-center mx-auto`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <Badge variant="secondary" className={`bg-${item.color}-100 text-${item.color}-700`}>
                        {item.stats}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Professional Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Philosophy</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                "Customer success isn't just about preventing churn—it's about creating advocates who drive sustainable
                growth. Every interaction is an opportunity to deliver value and build lasting partnerships."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Interactive Achievements Dashboard */}
        <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Key Achievements</h2>
              <p className="text-xl text-gray-600">Measurable impact across revenue, retention, and growth</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  value: 2900,
                  suffix: "%",
                  label: "Payment Gateway Growth",
                  description: "$60K to $1.8M monthly",
                  color: "green",
                  trend: "+2840%",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  value: 95,
                  suffix: "%",
                  label: "Client Retention Rate",
                  description: "Consistently maintained",
                  color: "blue",
                  trend: "+15%",
                },
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  value: 100,
                  suffix: "K+",
                  label: "New Revenue Generated",
                  description: "Q4 2023 achievement",
                  color: "purple",
                  trend: "+125%",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  value: 2,
                  prefix: "<",
                  suffix: "%",
                  label: "Net Churn Rate",
                  description: "4 consecutive quarters",
                  color: "red",
                  trend: "-18%",
                },
              ].map((achievement, index) => {
                const { count, ref } = useAnimatedCounter(achievement.value)
                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`text-${achievement.color}-600 mb-4 flex justify-center`}>
                          {achievement.icon}
                        </div>
                        <div className={`text-3xl font-bold text-${achievement.color}-600 mb-2`}>
                          {achievement.prefix}
                          {count}
                          {achievement.suffix}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{achievement.label}</h3>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        <Badge
                          variant="secondary"
                          className={`bg-${achievement.color}-100 text-${achievement.color}-700 text-xs`}
                        >
                          {achievement.trend}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Additional Achievements Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-yellow-500" />
                    Recognition & Awards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Top rated employee for 2024
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      NPS of 100% over two quarters
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Top performer for 8 consecutive quarters
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                    Growth Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-green-600" />
                      133% expansion of key accounts
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-green-600" />
                      35% YoY upsell growth
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-green-600" />
                      26% increase in NRR
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-blue-600" />
                    Customer Satisfaction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      92% average CSAT score
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      85% first contact resolution
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600" />
                      40% churn risk reduction
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Professional Experience</h2>
              <p className="text-xl text-gray-600">A journey of growth and success in SaaS</p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>

              {[
                {
                  period: "03/2024 - Present",
                  title: "Strategic Customer Success Manager",
                  company: "Milestone Inc. (SaaS)",
                  location: "Toronto, Canada",
                  highlights: [
                    "Managing customer portfolio worth over $800K USD",
                    "Implemented digital marketing strategies for hospitality clients",
                    "Achieved high retention rates through proactive risk mitigation",
                  ],
                  skills: ["Portfolio Management", "Digital Marketing", "Risk Management", "Strategy"],
                  impact: "95% retention rate achieved",
                  logo: "/milestone-logo.png",
                  revenueImpact: 800000,
                  retentionRate: 95,
                },
                {
                  period: "03/2023 - 02/2024",
                  title: "Customer Success Manager",
                  company: "Milestone Internet Pvt Ltd (SaaS)",
                  location: "Ahmedabad, India",
                  highlights: [
                    "Managed 30+ B2B enterprise clients with 95% retention",
                    "Reduced time-to-value by 20% through streamlined onboarding",
                    "Achieved 125% of upsell revenue targets in Q4 2023",
                  ],
                  skills: ["Enterprise Sales", "Onboarding", "Revenue Growth", "Client Management"],
                  impact: "125% of revenue targets achieved",
                  logo: "/milestone-logo.png",
                  revenueImpact: 150000,
                  retentionRate: 95,
                },
                {
                  period: "11/2020 - 02/2023",
                  title: "Customer Success Manager",
                  company: "ADIT Tech Pvt Ltd (SaaS)",
                  location: "Ahmedabad, India",
                  highlights: [
                    "Managed 150+ accounts with 92% CSAT score",
                    "Increased Net Revenue Retention by 26%",
                    "Led payment module rollout growing from $60K to $1.8M monthly",
                  ],
                  skills: ["Account Management", "Product Adoption", "Revenue Retention", "Analytics"],
                  impact: "2900% revenue growth achieved",
                  logo: "/adit-logo.png",
                  revenueImpact: 1800000,
                  retentionRate: 92,
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 ${index % 2 === 0 ? "pr-1/2" : "pl-1/2 ml-auto"}`}
                >
                  <div
                    className={`absolute top-6 ${index % 2 === 0 ? "right-0 transform translate-x-1/2" : "left-0 transform -translate-x-1/2"} w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg`}
                  ></div>

                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        <span className="text-blue-600 font-semibold">{job.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-purple-600 font-semibold mb-1">{job.company}</p>
                      <p className="text-gray-600 text-sm mb-4">{job.location}</p>
                      <ul className="space-y-2 mb-4">
                        {job.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center text-green-700">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{job.impact}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Health Dashboard Section */}
        <section id="customer-health" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Customer Health Dashboard</h2>
              <p className="text-xl text-gray-600">Real-time insights into customer success metrics</p>
            </motion.div>

            {/* Dashboard Controls */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-4">
                <Button
                  variant={dashboardView === "overview" ? "default" : "outline"}
                  onClick={() => setDashboardView("overview")}
                  className="mr-4"
                >
                  Overview
                </Button>
                <Button
                  variant={dashboardView === "detailed" ? "default" : "outline"}
                  onClick={() => setDashboardView("detailed")}
                  className="mr-4"
                >
                  Detailed
                </Button>
                <Button
                  variant={dashboardView === "analytics" ? "default" : "outline"}
                  onClick={() => setDashboardView("analytics")}
                >
                  Analytics
                </Button>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowHealthScoreDashboard(true)}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Maximize2 className="w-4 h-4 mr-2" />
                Full Dashboard
              </Button>
            </div>

            {/* Customer Health Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {customerHealthData.map((customer, index) => (
                <motion.div
                  key={customer.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedCustomer(customer)}
                  className="cursor-pointer"
                >
                  <Card
                    className={`bg-white/80 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      customer.status === "Healthy"
                        ? "border-green-200 hover:border-green-400"
                        : customer.status === "At Risk"
                          ? "border-yellow-200 hover:border-yellow-400"
                          : customer.status === "Champion"
                            ? "border-blue-200 hover:border-blue-400"
                            : "border-red-200 hover:border-red-400"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-gray-900 text-sm">{customer.name}</h3>
                        <Badge
                          variant="secondary"
                          className={
                            customer.status === "Healthy"
                              ? "bg-green-100 text-green-700"
                              : customer.status === "At Risk"
                                ? "bg-yellow-100 text-yellow-700"
                                : customer.status === "Champion"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-red-100 text-red-700"
                          }
                        >
                          {customer.status}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-600">Health Score</span>
                            <span className="text-sm font-bold text-gray-900">{customer.healthScore}</span>
                          </div>
                          <Progress value={customer.healthScore} className="h-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-gray-600">Revenue</span>
                            <div className="font-semibold text-gray-900">{customer.revenue}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Risk Level</span>
                            <div
                              className={`font-semibold ${
                                customer.riskLevel === "Low"
                                  ? "text-green-600"
                                  : customer.riskLevel === "Medium"
                                    ? "text-yellow-600"
                                    : "text-red-600"
                              }`}
                            >
                              {customer.riskLevel}
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                          <span className="text-xs text-gray-600">{customer.lastActivity}</span>
                          <div className="flex items-center">
                            {customer.trend === "up" ? (
                              <TrendingUp className="w-3 h-3 text-green-600" />
                            ) : (
                              <TrendingDown className="w-3 h-3 text-red-600" />
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Summary Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-6"
            >
              {[
                {
                  label: "Average Health Score",
                  value: "78",
                  change: "+5%",
                  icon: <Gauge className="w-6 h-6" />,
                  color: "blue",
                },
                {
                  label: "At Risk Customers",
                  value: "2",
                  change: "-1",
                  icon: <AlertTriangle className="w-6 h-6" />,
                  color: "yellow",
                },
                {
                  label: "Champion Customers",
                  value: "1",
                  change: "+1",
                  icon: <Star className="w-6 h-6" />,
                  color: "green",
                },
                {
                  label: "Total Portfolio Value",
                  value: "$167K",
                  change: "+12%",
                  icon: <DollarSign className="w-6 h-6" />,
                  color: "purple",
                },
              ].map((metric, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`text-${metric.color}-600 mb-3 flex justify-center`}>{metric.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        metric.change.startsWith("+") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {metric.change}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section id="success-metrics" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Success Metrics & KPIs</h2>
              <p className="text-xl text-gray-600">Data-driven insights that matter to your business</p>
            </motion.div>

            <Tabs defaultValue="retention" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm border border-gray-200 mb-8">
                <TabsTrigger
                  value="retention"
                  className="text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Retention
                </TabsTrigger>
                <TabsTrigger
                  value="growth"
                  className="text-gray-700 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Growth
                </TabsTrigger>
                <TabsTrigger
                  value="satisfaction"
                  className="text-gray-700 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Satisfaction
                </TabsTrigger>
                <TabsTrigger
                  value="efficiency"
                  className="text-gray-700 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  Efficiency
                </TabsTrigger>
              </TabsList>

              <TabsContent value="retention" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      metric: "Customer Retention Rate",
                      value: "95%",
                      benchmark: "Industry: 85%",
                      trend: "+10%",
                      description: "Percentage of customers retained over 12 months",
                    },
                    {
                      metric: "Net Revenue Retention",
                      value: "126%",
                      benchmark: "Industry: 110%",
                      trend: "+16%",
                      description: "Revenue expansion from existing customers",
                    },
                    {
                      metric: "Churn Rate",
                      value: "1.8%",
                      benchmark: "Industry: 5.2%",
                      trend: "-3.4%",
                      description: "Monthly customer churn rate",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.metric}</h3>
                        <div className="text-3xl font-bold text-blue-600 mb-2">{item.value}</div>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{item.benchmark}</span>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              item.trend.startsWith("+") || item.trend.startsWith("-")
                                ? item.metric === "Churn Rate"
                                  ? item.trend.startsWith("-")
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                  : item.trend.startsWith("+")
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {item.trend}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="growth" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      metric: "Revenue Growth",
                      value: "2900%",
                      benchmark: "Target: 25%",
                      trend: "+2875%",
                      description: "Year-over-year revenue increase",
                    },
                    {
                      metric: "Upsell Rate",
                      value: "35%",
                      benchmark: "Industry: 18%",
                      trend: "+17%",
                      description: "Percentage of customers who upgraded",
                    },
                    {
                      metric: "Account Expansion",
                      value: "133%",
                      benchmark: "Target: 120%",
                      trend: "+13%",
                      description: "Growth in existing account value",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.metric}</h3>
                        <div className="text-3xl font-bold text-green-600 mb-2">{item.value}</div>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{item.benchmark}</span>
                          <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                            {item.trend}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="satisfaction" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      metric: "Net Promoter Score",
                      value: "78",
                      benchmark: "Industry: 45",
                      trend: "+33",
                      description: "Customer loyalty and satisfaction score",
                    },
                    {
                      metric: "Customer Satisfaction",
                      value: "92%",
                      benchmark: "Target: 85%",
                      trend: "+7%",
                      description: "Overall customer satisfaction rating",
                    },
                    {
                      metric: "Support Ticket Resolution",
                      value: "85%",
                      benchmark: "Target: 80%",
                      trend: "+5%",
                      description: "First contact resolution rate",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.metric}</h3>
                        <div className="text-3xl font-bold text-purple-600 mb-2">{item.value}</div>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{item.benchmark}</span>
                          <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                            {item.trend}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="efficiency" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      metric: "Time to Value",
                      value: "14 days",
                      benchmark: "Industry: 30 days",
                      trend: "-16 days",
                      description: "Average time for customers to see value",
                    },
                    {
                      metric: "Onboarding Completion",
                      value: "94%",
                      benchmark: "Target: 85%",
                      trend: "+9%",
                      description: "Percentage completing onboarding process",
                    },
                    {
                      metric: "Feature Adoption",
                      value: "78%",
                      benchmark: "Industry: 60%",
                      trend: "+18%",
                      description: "Average feature adoption rate",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.metric}</h3>
                        <div className="text-3xl font-bold text-orange-600 mb-2">{item.value}</div>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{item.benchmark}</span>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              item.metric === "Time to Value"
                                ? "bg-green-100 text-green-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {item.trend}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Customer Journey Section */}
        <section id="customer-journey" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Customer Journey Mapping</h2>
              <p className="text-xl text-gray-600">Optimizing every touchpoint for maximum success</p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform -translate-y-1/2"></div>

              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {customerJourneyStages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative"
                  >
                    <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                          {index + 1}
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">{stage.stage}</h3>
                        <p className="text-xs text-gray-600 mb-3">{stage.description}</p>
                        <div className="space-y-2">
                          <div className="text-xs">
                            <span className="text-gray-500">Duration:</span>
                            <div className="font-medium text-gray-900">{stage.duration}</div>
                          </div>
                          <div className="text-xs">
                            <span className="text-gray-500">Success Rate:</span>
                            <div className="font-medium text-green-600">{stage.successRate}%</div>
                          </div>
                          <Progress value={stage.successRate} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-3 gap-8"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <Map className="w-6 h-6 mr-2 text-blue-600" />
                    Journey Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Reduced onboarding time by 40%
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Improved adoption rates by 25%
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Increased advocacy by 45%
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <Target className="w-6 h-6 mr-2 text-purple-600" />
                    Key Interventions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-purple-600" />
                      Proactive risk identification
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-purple-600" />
                      Personalized success plans
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-purple-600" />
                      Milestone celebrations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2 text-green-600" />
                    Impact Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                      85% overall journey completion
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                      92% customer satisfaction
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                      78 NPS score achieved
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600">Real results from strategic customer success initiatives</p>
            </motion.div>

            <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="flex gap-2">
                <Button
                  variant={selectedFilter === "all" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("all")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  All
                </Button>
                <Button
                  variant={selectedFilter === "growth" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("growth")}
                >
                  Growth
                </Button>
                <Button
                  variant={selectedFilter === "retention" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("retention")}
                >
                  Retention
                </Button>
                <Button
                  variant={selectedFilter === "adoption" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("adoption")}
                >
                  Adoption
                </Button>
              </div>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 bg-white/80 backdrop-blur-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies
                .filter(
                  (study) =>
                    selectedFilter === "all" || study.tags.some((tag) => tag.toLowerCase().includes(selectedFilter)),
                )
                .filter(
                  (study) =>
                    study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    study.client.toLowerCase().includes(searchTerm.toLowerCase()),
                )
                .map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg font-bold text-gray-900">{study.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {study.client}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {study.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                              <AlertTriangle className="w-4 h-4 mr-2 text-red-600" />
                              Challenge
                            </h4>
                            <p className="text-sm text-gray-600">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                              <Lightbulb className="w-4 h-4 mr-2 text-yellow-600" />
                              Solution
                            </h4>
                            <p className="text-sm text-gray-600">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                              <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                              Results
                            </h4>
                            <p className="text-sm text-green-600 font-medium">{study.results}</p>
                          </div>
                          <div className="grid grid-cols-3 gap-2 pt-2 border-t">
                            {Object.entries(study.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-blue-600">{value}</div>
                                <div className="text-xs text-gray-500 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between items-center pt-2 border-t">
                            <div className="text-xs text-gray-500">
                              <Clock className="w-3 h-3 inline mr-1" />
                              {study.timeline}
                            </div>
                            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              {study.roi} ROI
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
              <p className="text-xl text-gray-600">What clients say about working with me</p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-2xl">
                    <CardContent className="p-8 text-center">
                      <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                      <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonials[currentTestimonial].content}"
                      </p>
                      <div className="flex items-center justify-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <Avatar className="w-16 h-16 mr-4">
                          <AvatarImage src={testimonials[currentTestimonial].avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {testimonials[currentTestimonial].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                          <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
                          <p className="text-sm text-blue-600">{testimonials[currentTestimonial].company}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        <Video className="w-4 h-4 mr-2" />
                        Watch Video Testimonial
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                  }
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">My Methodology</h2>
              <p className="text-xl text-gray-600">A proven framework for customer success</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodology.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative"
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <div className="text-blue-600">{phase.icon}</div>
                      </div>
                      <div className="bg-blue-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                      <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                      <div className="text-xs text-gray-500 mb-4">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {phase.duration}
                      </div>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                      <Separator className="my-3" />
                      <div className="text-xs text-gray-600">
                        <strong>Deliverables:</strong>
                        <ul className="mt-1 space-y-1">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center">
                              <FileText className="w-3 h-3 mr-1 text-blue-500" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  {index < methodology.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Playbooks Section */}
        <section id="playbooks" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Success Playbooks</h2>
              <p className="text-xl text-gray-600">Proven frameworks and templates for customer success</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {successPlaybooks.map((playbook, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <BookMarked className="w-8 h-8 text-blue-600" />
                        <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                          {playbook.category}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{playbook.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{playbook.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium text-gray-900">{playbook.duration}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Steps:</span>
                          <span className="font-medium text-gray-900">{playbook.steps}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Success Rate:</span>
                          <span className="font-medium text-green-600">{playbook.successRate}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          {[...Array(Math.floor(playbook.rating))].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                          ))}
                          <span className="text-xs text-gray-600 ml-1">{playbook.rating}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <DownloadIcon className="w-3 h-3 mr-1" />
                          {playbook.downloads}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        <DownloadIcon className="w-4 h-4 mr-2" />
                        Download Playbook
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Playbook Development</h3>
                  <p className="text-gray-600 mb-6">
                    Need a tailored playbook for your specific industry or use case? I can create custom frameworks
                    based on your unique requirements and challenges.
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Request Custom Playbook
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CS Tools Section */}
        <section id="tools" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Customer Success Tools</h2>
              <p className="text-xl text-gray-600">Interactive tools and calculators for CS professionals</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ROI Calculator",
                  description: "Calculate the return on investment for customer success initiatives",
                  icon: <Calculator className="w-8 h-8" />,
                  color: "blue",
                  action: () => setShowROICalculator(true),
                },
                {
                  title: "Health Score Dashboard",
                  description: "Monitor customer health metrics in real-time",
                  icon: <Activity className="w-8 h-8" />,
                  color: "green",
                },
                {
                  title: "Churn Risk Predictor",
                  description: "Identify customers at risk of churning",
                  icon: <AlertTriangle className="w-8 h-8" />,
                  color: "red",
                  action: () => setShowChurnPredictor(true),
                },
                {
                  title: "Customer Journey Mapper",
                  description: "Visualize and optimize customer touchpoints",
                  icon: <Map className="w-8 h-8" />,
                  color: "purple",
                  action: () => setShowCustomerJourney(true),
                },
                {
                  title: "Success Playbooks",
                  description: "Access proven frameworks and templates",
                  icon: <BookMarked className="w-8 h-8" />,
                  color: "indigo",
                  action: () => setShowPlaybooks(true),
                },
                {
                  title: "Maturity Assessment",
                  description: "Evaluate your CS program maturity",
                  icon: <Gauge className="w-8 h-8" />,
                  color: "orange",
                  action: () => setShowMaturityAssessment(true),
                },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={tool.action}
                  className="cursor-pointer"
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`text-${tool.color}-600 mb-4 flex justify-center bg-${tool.color}-50 w-16 h-16 rounded-2xl items-center mx-auto`}
                      >
                        {tool.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`border-${tool.color}-600 text-${tool.color}-600 hover:bg-${tool.color}-50`}
                      >
                        Launch Tool
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Insights Section */}
        <section id="insights" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Industry Insights</h2>
              <p className="text-xl text-gray-600">Thought leadership and industry perspectives</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">{article.title}</CardTitle>
                        <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {article.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {article.views}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {article.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            {article.comments}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Articles
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section id="skills" className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
              <p className="text-xl text-gray-600">Technical proficiency and professional competencies</p>
            </motion.div>

            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-gray-200">
                <TabsTrigger
                  value="skills"
                  className="text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Core Skills
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Tools
                </TabsTrigger>
                <TabsTrigger
                  value="certifications"
                  className="text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Certifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="skills" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { skill: "Customer Success Management", level: 95, icon: <Users className="w-5 h-5" /> },
                    { skill: "SaaS Strategy & Implementation", level: 90, icon: <Layers className="w-5 h-5" /> },
                    { skill: "Revenue Growth & Retention", level: 92, icon: <TrendingUp className="w-5 h-5" /> },
                    { skill: "Digital Marketing & SEO", level: 88, icon: <Globe className="w-5 h-5" /> },
                    { skill: "Stakeholder Management", level: 94, icon: <Briefcase className="w-5 h-5" /> },
                    { skill: "Data Analysis & Reporting", level: 85, icon: <BarChart3 className="w-5 h-5" /> },
                    { skill: "Product Management", level: 82, icon: <Settings className="w-5 h-5" /> },
                    {
                      skill: "Client Relations & Communication",
                      level: 96,
                      icon: <MessageSquare className="w-5 h-5" />,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="text-blue-600 mr-2">{item.icon}</div>
                          <span className="text-gray-900 font-medium">{item.skill}</span>
                        </div>
                        <span className="text-blue-600 font-bold">{item.level}%</span>
                      </div>
                      <Progress value={item.level} className="h-3 bg-gray-200" />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tools" className="mt-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { name: "Salesforce", icon: <Database className="w-4 h-4" />, category: "CRM" },
                    { name: "JIRA", icon: <Workflow className="w-4 h-4" />, category: "Project Management" },
                    { name: "ZOHO CRM", icon: <Users className="w-4 h-4" />, category: "CRM" },
                    { name: "Google Analytics", icon: <BarChart3 className="w-4 h-4" />, category: "Analytics" },
                    { name: "SEMrush", icon: <Search className="w-4 h-4" />, category: "SEO" },
                    { name: "NetSuite", icon: <Building className="w-4 h-4" />, category: "ERP" },
                    { name: "WordPress", icon: <Globe className="w-4 h-4" />, category: "CMS" },
                    { name: "MS Office", icon: <FileText className="w-4 h-4" />, category: "Productivity" },
                    { name: "Google Search Console", icon: <Monitor className="w-4 h-4" />, category: "SEO" },
                    { name: "Milestone CMS", icon: <Code className="w-4 h-4" />, category: "CMS" },
                    { name: "MS Outlook", icon: <Mail className="w-4 h-4" />, category: "Email" },
                    { name: "Tableau", icon: <PieChart className="w-4 h-4" />, category: "Analytics" },
                  ].map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-4 text-center">
                          <div className="text-blue-600 mb-2 flex justify-center">{tool.icon}</div>
                          <span className="text-sm font-medium text-gray-900 block mb-1">{tool.name}</span>
                          <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                            {tool.category}
                          </Badge>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certifications" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Digital Marketing Strategy",
                      issuer: "Great Learning",
                      status: "Completed",
                      date: "2024",
                      icon: <GraduationCap className="w-5 h-5" />,
                      credentialId: "GL-DMS-2024-001",
                    },
                    {
                      title: "Foundations of Digital Marketing and E-Commerce",
                      issuer: "Google",
                      status: "Completed",
                      date: "2024",
                      icon: <GraduationCap className="w-5 h-5" />,
                      credentialId: "GOOGLE-FDME-2024",
                    },
                    {
                      title: "Learning PPC with Google Ads",
                      issuer: "Google",
                      status: "Completed",
                      date: "2024",
                      icon: <GraduationCap className="w-5 h-5" />,
                      credentialId: "GOOGLE-PPC-2024",
                    },
                    {
                      title: "Product Management Essentials",
                      issuer: "IBM",
                      status: "In Progress",
                      date: "2024",
                      icon: <Clock className="w-5 h-5" />,
                      credentialId: "IBM-PME-2024",
                    },
                    {
                      title: "AWS Cloud Practitioner Certification",
                      issuer: "Amazon",
                      status: "In Progress",
                      date: "2024",
                      icon: <Clock className="w-5 h-5" />,
                      credentialId: "AWS-CP-2024",
                    },
                    {
                      title: "Customer Success Manager Certification",
                      issuer: "Gainsight",
                      status: "Planned",
                      date: "2025",
                      icon: <Calendar className="w-5 h-5" />,
                      credentialId: "GS-CSM-2025",
                    },
                  ].map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="text-blue-600">{cert.icon}</div>
                            <Badge
                              variant={cert.status === "Completed" ? "default" : "secondary"}
                              className={
                                cert.status === "Completed"
                                  ? "bg-green-600 hover:bg-green-700"
                                  : cert.status === "In Progress"
                                    ? "bg-yellow-600 hover:bg-yellow-700"
                                    : "bg-gray-600 hover:bg-gray-700"
                              }
                            >
                              {cert.status}
                            </Badge>
                          </div>
                          <h3 className="text-gray-900 font-semibold mb-1">{cert.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                          <p className="text-gray-500 text-xs mb-2">{cert.date}</p>
                          <p className="text-gray-400 text-xs">ID: {cert.credentialId}</p>
                          {cert.status === "Completed" && (
                            <Button variant="ghost" size="sm" className="mt-2 text-blue-600 hover:text-blue-700">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Verify
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Let's Connect</h2>
              <p className="text-xl text-gray-600">Ready to drive customer success and revenue growth together</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-colors shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="text-gray-900 font-medium">Email</p>
                      <p className="text-gray-600">harrsh.shah@gmail.com</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-colors shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Phone className="w-6 h-6 text-green-600 mr-4" />
                    <div>
                      <p className="text-gray-900 font-medium">Phone</p>
                      <p className="text-gray-600">+1-416-821-1651</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-colors shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <MapPin className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <p className="text-gray-900 font-medium">Location</p>
                      <p className="text-gray-600">Toronto, Canada</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-colors shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Globe className="w-6 h-6 text-indigo-600 mr-4" />
                    <div>
                      <p className="text-gray-900 font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/harshashwinshah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                <div className="space-y-4">
                  <Input placeholder="Your Name" className="bg-white/80 backdrop-blur-sm" />
                  <Input placeholder="Your Email" type="email" className="bg-white/80 backdrop-blur-sm" />
                  <Input placeholder="Subject" className="bg-white/80 backdrop-blur-sm" />
                  <Input placeholder="Your Message" className="bg-white/80 backdrop-blur-sm" />
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* ROI Calculator Modal */}
      <AnimatePresence>
        {showROICalculator && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowROICalculator(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">ROI Calculator</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Current Annual Revenue</label>
                  <Input
                    type="number"
                    placeholder="Enter current revenue"
                    value={roiInputs.currentRevenue}
                    onChange={(e) => setRoiInputs({ ...roiInputs, currentRevenue: e.target.value })}
                    className="bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Current Churn Rate (%)</label>
                  <Input
                    type="number"
                    placeholder="Enter current churn rate"
                    value={roiInputs.churnRate}
                    onChange={(e) => setRoiInputs({ ...roiInputs, churnRate: e.target.value })}
                    className="bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Number of Customers</label>
                  <Input
                    type="number"
                    placeholder="Enter number of customers"
                    value={roiInputs.customerCount}
                    onChange={(e) => setRoiInputs({ ...roiInputs, customerCount: e.target.value })}
                    className="bg-gray-50"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Current Revenue Loss</span>
                  <span className="text-2xl font-bold text-red-600">${roiResults.currentLoss}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Potential Revenue Loss</span>
                  <span className="text-2xl font-bold text-green-600">${roiResults.improvedLoss}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Revenue Saved</span>
                  <span className="text-2xl font-bold text-blue-600">${roiResults.savings}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">ROI (%)</span>
                  <span className="text-2xl font-bold text-purple-600">{roiResults.roi}%</span>
                </div>
              </div>

              <Button
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => setShowROICalculator(false)}
              >
                Close Calculator
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Customer Health Score Dashboard Modal */}
      <AnimatePresence>
        {showHealthScoreDashboard && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowHealthScoreDashboard(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto w-full h-[80vh] overflow-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Customer Health Dashboard</h2>
                <Button variant="outline" onClick={() => setShowHealthScoreDashboard(false)}>
                  Close
                </Button>
              </div>

              {/* Dashboard Navigation */}
              <div className="flex justify-start items-center mb-8">
                <Button
                  variant={dashboardView === "overview" ? "default" : "outline"}
                  onClick={() => setDashboardView("overview")}
                  className="mr-4"
                >
                  Overview
                </Button>
                <Button
                  variant={dashboardView === "detailed" ? "default" : "outline"}
                  onClick={() => setDashboardView("detailed")}
                  className="mr-4"
                >
                  Detailed
                </Button>
                <Button
                  variant={dashboardView === "analytics" ? "default" : "outline"}
                  onClick={() => setDashboardView("analytics")}
                >
                  Analytics
                </Button>
              </div>

              {/* Dashboard Content */}
              {dashboardView === "overview" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {customerHealthData.map((customer) => (
                      <Card key={customer.id} className="shadow-lg">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{customer.name}</h4>
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-gray-600">Health Score:</span>
                            <span className="font-semibold text-blue-600">{customer.healthScore}</span>
                          </div>
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-gray-600">Status:</span>
                            <span className="font-semibold text-green-600">{customer.status}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Revenue:</span>
                            <span className="font-semibold text-purple-600">{customer.revenue}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {dashboardView === "detailed" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Detailed View</h3>
                  <table className="w-full">
                    <thead>
                      <tr className="text-left">
                        <th className="py-2">Customer</th>
                        <th className="py-2">Health Score</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Revenue</th>
                        <th className="py-2">Last Activity</th>
                        <th className="py-2">Risk Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerHealthData.map((customer) => (
                        <tr key={customer.id} className="border-t border-gray-200">
                          <td className="py-3">{customer.name}</td>
                          <td className="py-3">{customer.healthScore}</td>
                          <td className="py-3">{customer.status}</td>
                          <td className="py-3">{customer.revenue}</td>
                          <td className="py-3">{customer.lastActivity}</td>
                          <td className="py-3">{customer.riskLevel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {dashboardView === "analytics" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analytics</h3>
                  <p>Analytics content goes here.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
