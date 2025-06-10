import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Pricing from "@/components/pricing";
import { creditBenefits, features, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-[#14967F]/30 border-[#11705f] px-4 py-2 text-[#14967F] text-sm font-medium"
              >
                Care That Fits Your World.
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#14967F] leading-tight">
                Expert care<br /> right at<br />
                <span className="gradient-title neon-text">your fingertips</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                From appointments to video consults, manage everything with ease in one safe space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="px-8 bg-[#14967F] text-white font-bold shadow-none border-1 border-[#11705f] transition-all duration-300 hover:shadow-[0_0_12px_2px_#13b08a] hover:bg-[#14967F]/85 "
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-1 border-emerald-700 hover:bg-muted/80 text-[#14967F] hover:text-[#14967F]"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>

            <div
              className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/banner.png"
                alt="Doctor consultation"
                fill
                priority
                className="object-contain md:pt-14 rounded-xl bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20  bg-[#aaf3e6]/30 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-[#14967F] mb-4">
              How It Works
            </h2>
            {/* Neon oval shape under the heading */}
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-[-28px] w-[400px] h-[25px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, #1fffc3 0%, #13b08a 60%, transparent 100%)",
                filter: "blur(24px)",
                opacity: 0.6,
                zIndex: 0,
              }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="min-h-[180px] md:min-h-[160px] lg:min-h-[200px] border-1 border-emerald-700 hover:bg-muted/80 transition-all duration-300 hover:shadow-[0_0_20px_2px_#13b08a] rounded-xl bg-card p-6"
              >
                <CardHeader className="pb-2">
                  <div className="bg-emerald-800/20 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#14967F]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with green medical styling */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <Badge
              variant="outline"
              className="bg-[#14967F]/30 border-[#11705f] px-4 py-2 text-[#14967F] text-sm font-medium mb-4"
            >
              Smart Care, Smarter Costs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#14967F] mb-4">
              Plans That Fit Your Life
            </h2>
            {/* Neon oval shape under the heading */}
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-[-28px] w-[500px] h-[35px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, #1fffc3 0%, #13b08a 60%, transparent 100%)",
                filter: "blur(34px)",
                opacity: 0.6,
                zIndex: 0,
              }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pick a Package, Prioritize Your Health
            </p>
          </div>
            
          <div className="mx-auto">
            {/* Clerk Pricing Table */}
            <Pricing />

            {/* Description */}
           <Card className="mt-12 bg-muted/20 border-[#11705f] ">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#14967F] flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-emerald-800/20 p-1 rounded-full">
                        <svg
                          className="h-4 w-4 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials with green medical accents */}
      <section className="py-20 bg-[#aaf3e6]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-[#14967F]/30 border-[#11705f] px-4 py-2 text-[#14967F] text-sm font-medium mb-4"
            >
              Real Experiences
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#14967F] mb-4">
              From Our Community
            </h2>
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-[-28px] w-[500px] h-[35px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, #1fffc3 0%, #13b08a 60%, transparent 100%)",
                filter: "blur(34px)",
                opacity: 0.6,
                zIndex: 0,
              }}
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how Doclynk is making a difference in real lives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="min-h-[180px] md:min-h-[180px] lg:min-h-[160px] border-1 border-emerald-700 hover:bg-muted/80 transition-all duration-300 hover:shadow-[0_0_16px_2px_#13b08a] animate-fade-in rounded-xl bg-card p-6"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-800/20 flex items-center justify-center mr-4">
                      <span className="text-emerald-400 font-bold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#14967F]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with green medical styling */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-800/30 to-emerald-850/20 border-emerald-900/50">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#14967F] mb-6">
                  Why wait in line <br />
                  when care’s just a tap away?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Say goodbye to waiting rooms. 
                  Join thousands who’ve made their healthcare simple, smart, 
                  and virtual with Doclynk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="px-8 bg-[#14967F] text-white font-bold shadow-none border-1 border-[#11705f] transition-all duration-300 hover:shadow-[0_0_12px_2px_#13b08a] hover:bg-[#14967F]/85 "
                  >
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-1 border-emerald-700 hover:bg-muted/80 text-[#14967F] hover:text-[#11705f] "
                  >
                    <Link href="#pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Decorative healthcare elements */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}