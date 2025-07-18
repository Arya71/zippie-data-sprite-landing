import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles-core";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect-smooth";
import { EyeCatchingButton_v1 } from "@/components/ui/eye-catching-button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Compare } from "@/components/ui/compare";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteFooter } from "@/components/ui/site-footer";
import { Zap, Shield, Wand2, ExternalLink, Github } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundBeams />
        <SparklesCore className="absolute inset-0" density={100} />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <TypewriterEffectSmooth words={heroWords} className="mb-8" />
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Share anything directly from your browser. No servers, no uploads, just pure speed.
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

      {/* Why z1ppie? Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why <span className="text-primary">z1ppie</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Blazing Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Direct P2P connections skip the slow server upload/download process. Your files travel at the speed of your internet connection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Fort-Knox Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Files are encrypted and never stored on servers. Your data travels directly between devices, ensuring maximum privacy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Wand2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Wonderfully Simple</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No accounts, no downloads, no hassle. Just share a code and watch the magic happen. It's file sharing as it should be.
                </CardDescription>
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

      {/* Meet Our Mascot Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powered by <span className="text-primary">Zip</span>!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src={zipMascot} 
                  alt="Zip the Data Sprite" 
                  className="w-64 h-64 mx-auto animate-float drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Meet Zip, Your Digital Companion!</h3>
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

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Don't just take our word for it
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  "I sent a 1GB video project in what felt like seconds. My jaw is still on the floor."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">AH</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alex H.</p>
                    <p className="text-sm text-muted-foreground">Creative Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  "Finally, a way to share sensitive documents without worrying about them sitting on a random server."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah M.</p>
                    <p className="text-sm text-muted-foreground">Security Professional</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  "It's like magic! No apps to download, no accounts to create. Just pure, instant file sharing."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
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

      {/* Final CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <HoverBorderGradient className="p-12 mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-primary">zip</span> some files?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who've already discovered the magic of instant, private file sharing.
            </p>
            <EyeCatchingButton_v1 variant="primary" size="lg" className="text-xl px-12 py-6">
              <Zap className="mr-3 h-6 w-6" />
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
