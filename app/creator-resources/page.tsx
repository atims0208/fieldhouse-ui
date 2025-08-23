import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Video,
  Settings,
  DollarSign,
  BarChart3,
  Shield,
  BookOpen,
  Users,
  Zap,
  Star,
  Lightbulb,
  ArrowRight,
} from "lucide-react"

export default function CreatorResourcesPage() {
  return (
    <div className="container px-4 py-6 md:px-6 space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-fhsb-cream">Creator Resources</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to succeed as a content creator on Green Dragon Den
        </p>
      </div>

      {/* Quick Start */}
      <Alert className="border-fhsb-green/30 bg-fhsb-green/10">
        <Video className="h-4 w-4 text-fhsb-green" />
        <AlertDescription className="text-fhsb-cream">
          <strong>New Creator?</strong> Start with our{" "}
          <Link href="/creator-resources/streaming-setup" className="text-fhsb-green hover:underline">
            Streaming Setup Guide
          </Link>{" "}
          to get your first stream running!
        </AlertDescription>
      </Alert>

      {/* Getting Started */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Getting Started</h2>
          <p className="text-muted-foreground">Essential resources for new creators</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader>
              <Settings className="h-12 w-12 text-fhsb-green mb-2" />
              <CardTitle className="text-fhsb-cream">Streaming Setup Guide</CardTitle>
              <CardDescription>
                Complete guide to setting up your streaming software, hardware, and Green Dragon Den integration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Hardware requirements and recommendations</li>
                <li>• OBS and streaming software configuration</li>
                <li>• Stream key setup and testing</li>
                <li>• Audio and video optimization</li>
              </ul>
              <Link href="/creator-resources/streaming-setup">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">
                  Setup Guide <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-fhsb-green mb-2" />
              <CardTitle className="text-fhsb-cream">Creator Handbook</CardTitle>
              <CardDescription>
                Best practices, community guidelines, and tips for building your channel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Content creation best practices</li>
                <li>• Community building strategies</li>
                <li>• Branding and channel identity</li>
                <li>• Engagement and interaction tips</li>
              </ul>
              <Link href="/community-guidelines">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">
                  Read Handbook <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Growing Your Channel */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Growing Your Channel</h2>
          <p className="text-muted-foreground">Tools and strategies to build your audience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-fhsb-green mb-2" />
              <CardTitle className="text-fhsb-cream">Analytics & Growth</CardTitle>
              <CardDescription>Understand your audience and optimize your content for maximum growth</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Viewer analytics and insights</li>
                <li>• Content performance tracking</li>
                <li>• Audience demographics and behavior</li>
                <li>• Growth strategies and optimization</li>
              </ul>
              <Link href="/creator-resources/analytics">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">
                  Learn Analytics <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader>
              <Users className="h-12 w-12 text-fhsb-green mb-2" />
              <CardTitle className="text-fhsb-cream">Community Building</CardTitle>
              <CardDescription>Build and maintain an engaged community around your content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Chat moderation and management</li>
                <li>• Community events and activities</li>
                <li>• Viewer retention strategies</li>
                <li>• Building loyal followers</li>
              </ul>
              <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">
                Coming Soon <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Monetization */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Monetization</h2>
          <p className="text-muted-foreground">Turn your passion into income</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-fhsb-green mb-2" />
              <CardTitle className="text-fhsb-cream">Monetization Options</CardTitle>
              <CardDescription>Explore different ways to earn money from your content and community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Channel subscriptions and memberships</li>
                <li>• Viewer donations and tips</li>
                <li>• Sponsorships and brand partnerships</li>
                <li>• Merchandise and product sales</li>
              </ul>
              <Link href="/creator-resources/monetization">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">
                  Explore Options <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader>
              <Star className="h-12 w-12 text-fhsb-green mb-2" />
              <CardTitle className="text-fhsb-cream">Creator Program</CardTitle>
              <CardDescription>
                Join our partner program for additional benefits and revenue opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Revenue sharing program</li>
                <li>• Priority support and features</li>
                <li>• Marketing and promotion support</li>
                <li>• Exclusive creator events</li>
              </ul>
              <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">
                Apply Now <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Policies and Guidelines */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Policies & Guidelines</h2>
          <p className="text-muted-foreground">Important information for all creators</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader>
              <Shield className="h-12 w-12 text-fhsb-green mb-2" />
              <CardTitle className="text-fhsb-cream">Community Guidelines</CardTitle>
              <CardDescription>Rules and guidelines for creating content on Green Dragon Den</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Content policies and restrictions</li>
                <li>• Community standards and behavior</li>
                <li>• Copyright and intellectual property</li>
                <li>• Reporting and enforcement</li>
              </ul>
              <Link href="/community-guidelines">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">
                  Read Guidelines <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-card border-fhsb-green/20 hover:border-fhsb-green/40 transition-colors">
            <CardHeader>
              <Zap className="h-12 w-12 text-fhsb-green mb-2" />
              <CardTitle className="text-fhsb-cream">Creator Support</CardTitle>
              <CardDescription>Get help when you need it with dedicated creator support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Technical support and troubleshooting</li>
                <li>• Account and monetization help</li>
                <li>• Content and policy questions</li>
                <li>• Priority creator support queue</li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">
                  Contact Support <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips for Success */}
      <Alert className="border-blue-500/30 bg-blue-500/10">
        <Lightbulb className="h-4 w-4 text-blue-400" />
        <AlertDescription className="text-fhsb-cream">
          <strong>Tips for Success:</strong>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Be consistent with your streaming schedule</li>
            <li>• Engage actively with your chat and community</li>
            <li>• Focus on quality content over quantity</li>
            <li>• Network with other creators in your niche</li>
            <li>• Always follow community guidelines and platform rules</li>
            <li>• Be patient - building an audience takes time</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Get Started CTA */}
      <div className="bg-gradient-to-r from-black to-fhsb-darkgreen rounded-xl border border-fhsb-green/30 p-6 md:p-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-fhsb-cream">Ready to Start Creating?</h2>
          <p className="text-muted-foreground md:text-lg">
            Join thousands of creators who are already building their communities on Green Dragon Den.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Link href="/creator-resources/streaming-setup">
              <Button className="w-full bg-fhsb-green text-black hover:bg-fhsb-green/90">Setup Your Stream</Button>
            </Link>
            <Link href="/register">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Create Account
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full border-fhsb-green/50 text-fhsb-cream hover:bg-fhsb-green hover:text-black bg-transparent"
              >
                Get Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
