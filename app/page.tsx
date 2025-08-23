import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Eye } from "lucide-react"

export default function HomePage() {
  const featuredStreams = [
    {
      id: 1,
      title: "Championship Finals - Live Now!",
      streamer: "ProGamer123",
      viewers: 15420,
      category: "Esports",
      thumbnail: "/placeholder.jpg",
      isLive: true,
    },
    {
      id: 2,
      title: "Basketball Highlights & Analysis",
      streamer: "SportsAnalyst",
      viewers: 8750,
      category: "Sports",
      thumbnail: "/placeholder.jpg",
      isLive: true,
    },
    {
      id: 3,
      title: "Weekly Gaming Tournament",
      streamer: "TournamentHost",
      viewers: 12300,
      category: "Gaming",
      thumbnail: "/placeholder.jpg",
      isLive: true,
    },
  ]

  const categories = [
    { name: "Esports", count: 1250, icon: "🎮" },
    { name: "Sports", count: 890, icon: "⚽" },
    { name: "Gaming", count: 2100, icon: "🕹️" },
    { name: "Entertainment", count: 650, icon: "🎭" },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black via-black to-gray-900 py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Welcome to the <span className="text-primary">Dragon's Den</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Experience the ultimate live streaming platform for sports, gaming, and entertainment. Join thousands of
                viewers and creators in the most exciting streaming community.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/browse">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold">
                  Start Watching
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                >
                  Join the Den
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Streams */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">🔥 Live Now</h2>
            <Link href="/live">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              >
                View All Live
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStreams.map((stream) => (
              <Card key={stream.id} className="bg-gray-800 border-gray-700 hover:border-primary transition-colors">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={stream.thumbnail || "/placeholder.svg"}
                      alt={stream.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-600 hover:bg-red-600 text-white">
                        <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                        LIVE
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        <Eye className="w-3 h-3 mr-1" />
                        {stream.viewers.toLocaleString()}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-t-lg">
                      <Button size="icon" className="bg-primary hover:bg-primary/90 text-black">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 line-clamp-2">{stream.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{stream.streamer}</span>
                      <Badge variant="outline" className="border-primary text-primary">
                        {stream.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Browse Categories</h2>
            <Link href="/categories">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
              >
                View All Categories
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
                <Card className="bg-gray-800 border-gray-700 hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.count.toLocaleString()} streams</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Growing Community</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Green Dragon Den is home to thousands of creators and millions of viewers worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-300">Active Streamers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-gray-300">Monthly Viewers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-300">Live Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-white">Ready to Enter the Den?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Whether you're here to watch or create, Green Dragon Den has everything you need to be part of the most
              exciting streaming community.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold">
                  Create Account
                </Button>
              </Link>
              <Link href="/getting-started">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
