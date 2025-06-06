'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, DollarSign, Shield, Clock, TrendingUp, Heart, FileCheck, AlertTriangle, CheckCircle, BarChart3, Stethoscope, Users, Search, Database, Target, Brain } from 'lucide-react'

const HospitalsSolutionsPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Massive Cost Savings",
      description: "Save $7.5M+ annually per hospital facility through automated regulatory reporting",
      metric: "$7.5M+ annual savings"
    },
    {
      icon: Shield,
      title: "Real-Time Compliance",
      description: "Continuous monitoring ensures 100% regulatory compliance with automated alerts",
      metric: "100% compliance rate"
    },
    {
      icon: Clock,
      title: "Accelerated Reporting",
      description: "Reduce manual reporting time by 90% with AI-powered data curation",
      metric: "90% time reduction"
    },
    {
      icon: Heart,
      title: "Improved Patient Outcomes",
      description: "94% accuracy in clinical data processing leads to better care decisions",
      metric: "94% data accuracy"
    }
  ]

  const marketStats = [
    { stat: "$504B", description: "AI healthcare market by 2032" },
    { stat: "94%", description: "Of healthcare companies use AI/ML" },
    { stat: "$13B", description: "Healthcare cost reduction by AI by 2025" },
    { stat: "25%", description: "Of US hospitals use AI predictive analytics" }
  ]

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Regulatory Burden",
      description: "Healthcare systems spend millions annually on manual regulatory reporting and compliance",
      impact: "$7.5M+ per facility annually"
    },
    {
      icon: FileCheck,
      title: "Data Quality Issues",
      description: "Unstructured EMR data creates compliance risks and inefficient workflows",
      impact: "60% of physician time on documentation"
    },
    {
      icon: TrendingUp,
      title: "Resource Constraints",
      description: "Limited clinical staff and increasing patient volumes strain operations",
      impact: "15M global healthcare worker shortage"
    }
  ]

  const solutions = [
    {
      title: "Universal Registry Adaptability",
      description: "One platform that exports to any registry format and adapts to evolving requirements",
      features: [
        "Export to any registry specification (CMS, Joint Commission, specialty societies)",
        "Automatic adaptation to changing registry requirements and guidelines",
        "Real-time data synchronization across multiple registries simultaneously",
        "Custom field mapping and validation for any quality program"
      ]
    },
    {
      title: "Smart Review Process",
      description: "Human-AI integration for optimal accuracy and institutional knowledge capture",
      features: [
        "AI-assisted clinical documentation review",
        "Human validation of critical decisions",
        "Continuous learning and improvement",
        "Institutional knowledge preservation"
      ]
    },
    {
      title: "Clinical Intelligence Dashboard",
      description: "Real-time insights for operational excellence and patient care optimization",
      features: [
        "Live compliance status monitoring",
        "Performance metrics visualization",
        "Risk stratification analytics",
        "Quality improvement recommendations"
      ]
    }
  ]

  const roi_metrics = [
    { metric: "$7.5M+", description: "Annual savings per facility" },
    { metric: "90%", description: "Reduction in reporting time" },
    { metric: "100%", description: "Compliance achievement rate" },
    { metric: "18%", description: "Improvement in processing speed" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-green-400 mb-6">
              <span className="text-sm font-medium tracking-wide uppercase">Solutions for Hospitals</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              One Solution for All Your Registry Needs:
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Save $7.5M+ Annually</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The comprehensive registry platform that adapts to any requirements and evolves with changing guidelines. 
              ChartR automates reporting, ensures compliance, and delivers measurable cost savings across all registries.
            </p>
          </motion.div>

          {/* Market Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {marketStats.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">{item.stat}</div>
                <div className="text-sm text-slate-300">{item.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              The Hidden Costs of Manual Processes
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Healthcare systems are drowning in administrative burden. ChartR transforms these challenges into competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-lg rounded-2xl border border-red-400/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <point.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{point.description}</p>
                <div className="text-sm font-semibold text-red-400">{point.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable Impact from Day One
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leading hospitals and health systems achieve immediate ROI with ChartR's AI-powered clinical data platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-300 mb-4">{benefit.description}</p>
                    <div className="text-sm font-semibold text-green-400">{benefit.metric}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Universal Registry Platform: One Solution, All Requirements
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Seamlessly export and adapt to any registry specification. Our platform automatically updates to changing requirements 
              while maintaining continuous compliance across all quality programs and reporting mandates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Registry Capabilities */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-green-600/10 to-blue-600/10 backdrop-blur-lg rounded-3xl p-12 border border-green-400/20 text-center"
          >
            <div className="flex items-center justify-center gap-3 text-green-400 mb-6">
              <Database className="w-8 h-8" />
              <span className="text-2xl font-bold">Universal Registry Solution</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Stop Managing Multiple Registry Systems
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              ChartR's universal platform automatically exports to <strong>any registry format</strong> — from CMS Quality Programs 
              to Joint Commission requirements to specialty society registries. When requirements change, our platform adapts 
              automatically without disruption to your workflows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-green-400 mb-2">Any Format</div>
                <div className="text-slate-300">Export to CMS, TJC, specialty societies, and custom registries</div>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-green-400 mb-2">Auto-Update</div>
                <div className="text-slate-300">Instantly adapt to changing requirements and new guidelines</div>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-green-400 mb-2">Zero Disruption</div>
                <div className="text-slate-300">Seamless transitions without workflow interruption</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Clinicians Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-blue-400 mb-6">
              <Stethoscope className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Clinicians</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Patient Screening & Evidence-Based Decision Support
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Empower clinicians with AI-driven patient screening and real-time access to evidence-based guidelines for optimal care decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Patient Screening</h3>
              </div>
              <p className="text-slate-300 mb-6">
                AI-powered patient identification and screening for clinical conditions, treatments, and risk factors
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Automated risk stratification and screening alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Population health management and patient identification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Preventive care opportunity identification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Clinical trial eligibility screening</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-lg rounded-3xl p-8 border border-green-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Brain className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Evidence-Based Decision Support</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Real-time access to clinical guidelines, research evidence, and treatment recommendations
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Real-time clinical guideline integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Evidence synthesis and treatment recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Drug interaction and contraindication alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Personalized treatment pathway optimization</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Researchers Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 text-purple-400 mb-6">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium tracking-wide uppercase">For Researchers</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Outcomes Research & Clinical Trial Infrastructure
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Accelerate clinical research with automated outcomes database building, patient screening, and real-world evidence generation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Outcomes Research</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Real-world outcomes data collection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Comparative effectiveness research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Health economics and value assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Quality improvement research</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-8 border border-indigo-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-500/20 rounded-lg">
                  <Database className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Database Building</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Automated clinical database creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Longitudinal patient data tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Registry and biobank integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Multi-site data harmonization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-8 border border-teal-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-500/20 rounded-lg">
                  <Search className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Clinical Trials Screening</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Automated patient eligibility screening</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Clinical trial feasibility assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Recruitment optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Site selection and performance analysis</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Return on Investment
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Healthcare systems using ChartR report immediate cost savings and operational improvements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {roi_metrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-green-400/20"
              >
                <div className="text-4xl font-bold text-green-400 mb-2">{item.metric}</div>
                <div className="text-slate-300">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Save $7.5M+ Annually?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading healthcare systems using ChartR to automate compliance and achieve measurable cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Calculate Your ROI
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                Download Case Study
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HospitalsSolutionsPage 