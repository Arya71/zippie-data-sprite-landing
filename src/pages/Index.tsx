import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect-smooth";
import { EyeCatchingButton_v1 } from "@/components/ui/eye-catching-button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Compare } from "@/components/ui/compare";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteFooter } from "@/components/ui/site-footer";
import { GlitchText } from "@/components/ui/glitch-text";
import { TechStack } from "@/components/ui/tech-stack";
import { InteractiveMascot } from "@/components/ui/interactive-mascot";
import { ParallaxContainer } from "@/components/ui/parallax-container";
import { Zap, Shield, Wand2, ExternalLink, Github, HelpCircle } from "lucide-react";
import zipMascot from "@/assets/zip-mascot.png";

const Index = () => {
  const heroWords = [
    { text: "Files" },
    { text: "at" },
    { text: "the" },
    { text: "speed", className: "text-primary" },
    { text: "of" },
    { text: "light.", className: "text-primary" },
  ];

  const faqData = [
    {
      question: "How fast are the transfers really?",
      answer: "Transfers happen at the speed of your internet connection! Since there's no server bottleneck, files can transfer as fast as your upload/download speeds allow - often 10-100x faster than traditional file sharing services."
    },
    {
      question: "Is my data really secure?",
      answer: "Absolutely! Files are encrypted end-to-end and travel directly between devices. We never see, store, or have access to your files. It's like handing someone a USB drive, but through the internet."
    },
    {
      question: "Do I need to install anything?",
      answer: "Nope! z1ppie works entirely in your web browser using modern web technologies. No downloads, no installations, no account required. Just open your browser and start sharing."
    },
    {
      question: "What file types and sizes are supported?",
      answer: "Any file type, any size! Send documents, videos, photos, archives - whatever you need. The only limit is your patience and internet connection."
    },
    {
      question: "Does it work on mobile devices?",
      answer: "Yes! z1ppie works on any device with a modern web browser - phones, tablets, laptops, desktops. Share files between any combination of devices seamlessly."
    }
  ];

  const oldWayDiagram = (
    <div className="flex items-center justify-center h-full bg-muted/50 rounded-lg p-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-lg font-semibold text-center">Old Way: The Server Detour</div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
            <span className="text-sm">User A</span>
          </div>
          <div className="h-px w-8 bg-muted-foreground"></div>
          <div className="w-16 h-16 bg-destructive/20 rounded-lg flex items-center justify-center">
            <span className="text-xs text-center">Server</span>
          </div>
          <div className="h-px w-8 bg-muted-foreground"></div>
          <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
            <span className="text-sm">User B</span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground text-center max-w-xs">
          Files travel through multiple servers, adding delays and privacy risks
        </div>
      </div>
    </div>
  );

  const newWayDiagram = (
    <div className="flex items-center justify-center h-full bg-primary/10 rounded-lg p-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-lg font-semibold text-center">The z1ppie Way: A Direct Flight</div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-primary/30 rounded-lg flex items-center justify-center">
            <span className="text-sm">User A</span>
          </div>
          <div className="relative">
            <div className="h-px w-24 bg-primary"></div>
            <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
          </div>
          <div className="w-16 h-16 bg-primary/30 rounded-lg flex items-center justify-center">
            <span className="text-sm">User B</span>
          </div>
        </div>
        <div className="text-sm text-primary text-center max-w-xs font-medium">
          Direct peer-to-peer connection for lightning-fast, private transfers
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating background elements for parallax */}
      <ParallaxContainer speed={0.2} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-60 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </ParallaxContainer>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundBeams />
        <SparklesCore className="absolute inset-0" density={100} />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <TypewriterEffectSmooth words={heroWords} className="mb-8" />
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Share anything directly from your browser. No servers, no uploads, just <GlitchText intensity="medium" trigger="hover">pure speed</GlitchText>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <EyeCatchingButton_v1 variant="primary" size="lg">
              <Zap className="mr-2 h-5 w-5" />
              Start Sharing Now
            </EyeCatchingButton_v1>
            <EyeCatchingButton_v1 variant="secondary" size="lg">
              <Github className="mr-2 h-5 w-5" />
              See it on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </EyeCatchingButton_v1>
          </div>
        </div>
      </section>

      {/* Why z1ppie? Features Section with Enhanced Hover Cards */}
      <section className="py-24 px-4 relative">
        <ParallaxContainer speed={0.1} className="absolute top-10 right-10">
          <div className="w-32 h-32 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-xl" />
        </ParallaxContainer>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why <GlitchText intensity="low" trigger="auto"><span className="text-primary">z1ppie</span></GlitchText>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-8 w-8 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Blazing Fast</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base mb-4">
                  Direct P2P connections skip the slow server upload/download process. Your files travel at the speed of your internet connection.
                </CardDescription>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm text-primary font-medium">⚡ Often 10-100x faster than traditional services</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-8 w-8 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Fort-Knox Secure</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base mb-4">
                  Files are encrypted and never stored on servers. Your data travels directly between devices, ensuring maximum privacy.
                </CardDescription>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm text-primary font-medium">🔒 End-to-end encryption, zero server storage</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Wand2 className="h-8 w-8 text-primary group-hover:animate-pulse" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Wonderfully Simple</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base mb-4">
                  No accounts, no downloads, no hassle. Just share a code and watch the magic happen. It's file sharing as it should be.
                </CardDescription>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm text-primary font-medium">✨ Works in any modern browser, instantly</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Visual Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            From Your Screen to Theirs, <span className="text-primary">Instantly</span>
          </h2>
          
          <div className="mb-12">
            <Compare
              firstItem={oldWayDiagram}
              secondItem={newWayDiagram}
              className="max-w-4xl mx-auto"
              slideMode="hover"
            />
          </div>
          
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Slide to see the difference! Traditional file sharing bounces through multiple servers, 
            adding delays and security risks. z1ppie creates a direct bridge between you and your recipient, 
            making transfers faster and infinitely more private.
          </p>
        </div>
      </section>

      {/* Meet Our Interactive Mascot Section */}
      <section className="py-24 px-4 relative">
        <ParallaxContainer speed={-0.15} className="absolute bottom-0 left-0">
          <div className="w-40 h-40 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-2xl" />
        </ParallaxContainer>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powered by <GlitchText intensity="medium" trigger="hover"><span className="text-primary">Zip</span></GlitchText>!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <InteractiveMascot 
                src={zipMascot} 
                alt="Zip the Data Sprite" 
                className="w-64 h-64 mx-auto"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Meet Zip, Your <GlitchText intensity="low">Digital Companion</GlitchText>!</h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  This is <span className="text-primary font-semibold">Zip</span>, our energetic little data sprite! 
                  Zip is the magical force that makes sure your files travel safely and instantly across the digital universe.
                </p>
                <p>
                  With lightning-fast reflexes and an unbreakable commitment to privacy, Zip zips through the internet 
                  to deliver your files directly to their destination. No detours, no delays, no drama!
                </p>
                <p>
                  Zip loves making connections and believes that sharing should be as simple as a smile. 
                  When you see those little sparkles, you know Zip is hard at work, making the magic happen! ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase Section */}
      <section className="py-24 px-4 bg-muted/30 relative">
        <ParallaxContainer speed={0.3} className="absolute top-20 right-1/4">
          <div className="w-6 h-6 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        </ParallaxContainer>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Built with <GlitchText intensity="medium" trigger="auto">Cutting-Edge Tech</GlitchText>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            z1ppie leverages the latest web technologies to deliver a seamless, secure, and lightning-fast experience.
          </p>
          
          <TechStack className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 px-4 relative">
        <ParallaxContainer speed={-0.2} className="absolute top-1/2 left-10">
          <div className="w-4 h-4 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        </ParallaxContainer>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <GlitchText intensity="low" trigger="hover">Frequently Asked Questions</GlitchText>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            Got questions? We've got answers! Here's everything you need to know about z1ppie.
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-muted/50 rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 px-4 bg-muted/30 relative">
        <ParallaxContainer speed={0.25} className="absolute bottom-20 right-20">
          <div className="w-8 h-8 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        </ParallaxContainer>
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Don't just take our <GlitchText intensity="medium" trigger="hover">word</GlitchText> for it
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <CardContent className="pt-6 relative z-10">
                <p className="text-lg mb-4">
                  "I sent a 1GB video project in what felt like seconds. My jaw is still on the floor."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <span className="text-sm font-semibold">AH</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alex H.</p>
                    <p className="text-sm text-muted-foreground">Creative Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <CardContent className="pt-6 relative z-10">
                <p className="text-lg mb-4">
                  "Finally, a way to share sensitive documents without worrying about them sitting on a random server."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <span className="text-sm font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Security Professional</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative md:col-span-2 lg:col-span-1 group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <CardContent className="pt-6 relative z-10">
                <p className="text-lg mb-4">
                  "It's like magic! No apps to download, no accounts to create. Just pure, instant file sharing."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <span className="text-sm font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mike J.</p>
                    <p className="text-sm text-muted-foreground">Tech Enthusiast</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Enhanced Effects */}
      <section className="py-24 px-4 relative">
        <ParallaxContainer speed={-0.1} className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-primary/5 to-transparent" />
        </ParallaxContainer>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <HoverBorderGradient className="p-12 mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <GlitchText intensity="high" trigger="hover"><span className="text-primary">zip</span></GlitchText> some files?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who've already discovered the magic of instant, private file sharing.
            </p>
            <EyeCatchingButton_v1 variant="primary" size="lg" className="text-xl px-12 py-6 group">
              <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Let's Go!
              <ExternalLink className="ml-3 h-5 w-5" />
            </EyeCatchingButton_v1>
          </HoverBorderGradient>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
