import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
  await prisma.brainlift.createMany({
    data: [
      {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }, {
        purpose: "AI-powered learning platform for enhanced cognitive development",
        dok4: "Machine Learning Engineer",
        dok3: "Senior Software Developer",
        experts: "Dr. Sarah Chen (AI Research), Prof. Michael Torres (Cognitive Science)",
        owners: "Alex Rodriguez (Product Manager), Jamie Lee (Technical Lead)"
      },
      {
        purpose: "Automated knowledge extraction from scientific literature",
        dok4: "Data Science Lead",
        dok3: "Backend Engineer",
        experts: "Dr. Emily Watson (NLP Research), Dr. James Park (Information Science)",
        owners: "Lisa Kim (Research Director), Tom Wilson (Engineering Manager)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      },
      {
        purpose: "Personalized learning recommendations using neural networks",
        dok4: "AI/ML Architect",
        dok3: "Full Stack Developer",
        experts: "Dr. Maria Gonzalez (Educational Psychology), Prof. David Kumar (Deep Learning)",
        owners: "Rachel Brown (VP Product), Chris Anderson (CTO)"
      }
    ]
  })

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })