"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import {
  CheckCircle,
  Database,
  PenTool,
  Code,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "FREE",
      price: "0",
      features: [
        "Basic database generation",
        "Simple SQL queries",
        "Standard templates",
        "5 projects per month",
      ],
      buttonVariant: "outline" as const,
    },
    {
      name: "BASIC",
      price: "14.99",
      features: [
        "Advanced database designs",
        "Complex SQL queries",
        "Premium templates",
        "Unlimited projects",
        "Real-time collaboration",
        "Priority support",
      ],
      buttonVariant: "default" as const,
      highlighted: true,
    },
    {
      name: "PRO",
      price: "29.99",
      features: [
        "Enterprise database solutions",
        "Custom SQL optimization",
        "Dedicated support",
        "Team training sessions",
        "24/7 priority support",
        "Advanced analytics",
        "Cloud backups",
      ],
      buttonVariant: "outline" as const,
    },
  ];

  const workflowSteps = [
    {
      icon: PenTool,
      title: "Draw Your Schema",
      description:
        "Sketch your database structure using our intuitive drag-and-drop interface",
    },
    {
      icon: Code,
      title: "Generate SQL",
      description:
        "Our AI automatically converts your design into optimized SQL commands",
    },
    {
      icon: Database,
      title: "Deploy Database",
      description:
        "Deploy your database with a single click to your preferred platform",
    },
    {
      icon: Users,
      title: "Collaborate",
      description: "Share and collaborate with your team in real-time",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <Database className="h-8 w-8 text-purple-500" />
          <span className="text-xl font-bold text-white">DBGenius</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white">
            Templates
          </Button>
          <Button className="bg-purple-600 text-white hover:bg-purple-700">
            Try Free
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white md:text-6xl">
              Design Databases
              <br />
              <span className="text-purple-500">Without Code</span>
            </h1>
            <p className="text-xl text-gray-300">
              Transform your database sketches into production-ready SQL. Draw,
              generate, and deploy databases in minutes.
            </p>
            <div className="flex space-x-4">
              <Button
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                Start Building
              </Button>
              <Button variant="outline" size="lg" className="text-purple-500">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Database interface preview"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-gray-300">
            Create your database in four simple steps
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                  <step.icon className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Work Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-gray-300">
            Check out databases created using our platform
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              className="overflow-hidden bg-gray-900 border-gray-800"
            >
              <Image
                src={`/placeholder.svg?height=200&width=400`}
                alt={`Project ${item}`}
                width={400}
                height={200}
                className="object-cover"
              />
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold text-white">
                  E-commerce Database
                </h3>
                <p className="mb-4 text-gray-400">
                  Complete database solution for online retail
                </p>
                <Button variant="link" className="text-purple-500 p-0">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              What Our Users Say
            </h2>
            <p className="mt-4 text-gray-300">
              Trusted by thousands of developers worldwide
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-gray-300">
                    "DBGenius has revolutionized our database design process.
                    What used to take days now takes hours."
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-700" />
                    <div className="ml-4">
                      <div className="font-bold text-white">Tech Lead</div>
                      <div className="text-sm text-gray-400">
                        Major Tech Company
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Choose the perfect plan for your needs. All plans include our core
            features.
          </p>
        </div>

        <div className="mb-8 flex justify-center space-x-4">
          <span className={!isYearly ? "text-white" : "text-gray-400"}>
            Monthly
          </span>
          <Toggle pressed={isYearly} onPressedChange={setIsYearly} />
          <span className={isYearly ? "text-white" : "text-gray-400"}>
            Yearly
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`border-2 ${
                plan.highlighted
                  ? "border-purple-500 bg-gray-900"
                  : "border-gray-800 bg-gray-900"
              }`}
            >
              <CardHeader>
                <CardTitle>
                  <div className="text-sm font-normal text-gray-400">
                    {plan.name}
                  </div>
                  <div className="text-4xl font-bold text-white">
                    ${plan.price}
                    <span className="text-lg">/mo</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : ""
                  }`}
                  variant={plan.buttonVariant}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2">
                <Database className="h-6 w-6 text-purple-500" />
                <span className="text-lg font-bold text-white">DBGenius</span>
              </div>
              <p className="mt-4 text-gray-400">
                Making database design accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Templates</li>
                <li>Pricing</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 DBGenius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
