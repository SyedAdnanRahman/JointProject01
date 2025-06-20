import HeroSection from "@/components/hero";

import "./globals.css";

import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";


export default function Home() {
  return (


    <div>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerful features for your Career growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="pt-6 text-center flex-col items-center">
                    <div className="flex flex-col items-center justify-center">{feature.icon}:
                       <h3>{feature.title}</h3>
                       <p>{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
