"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, User } from "lucide-react"

// <CHANGE> Updated with working YouTube videos for fitness content
const workoutVideos = [
  {
    id: 1,
    title: "15-Minute HIIT Workout - No Equipment",
    description:
      "High-intensity interval training that burns calories and builds strength using only bodyweight exercises.",
    duration: "15 min",
    difficulty: "Beginner",
    category: "HIIT",
    thumbnail: "/person-doing-hiit-workout-jumping-jacks-burpees.jpg",
    videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI", // Calisthenic Movement - 15 Min HIIT
    instructor: "Mike Chen",
  },
  {
    id: 2,
    title: "Full Body Strength with Resistance Bands",
    description: "Complete strength training routine using affordable resistance bands to target every muscle group.",
    duration: "25 min",
    difficulty: "Intermediate",
    category: "Strength",
    thumbnail: "/resistance-bands-workout-demonstration.jpg",
    videoUrl: "https://www.youtube.com/embed/1Jb0_Hj-8Qc", // Athlean-X - Resistance Band Workout
    instructor: "Sarah Johnson",
  },
  {
    id: 3,
    title: "Yoga Flow for Flexibility",
    description: "Gentle yoga sequence to improve flexibility and reduce stress, perfect for recovery days.",
    duration: "20 min",
    difficulty: "Beginner",
    category: "Yoga",
    thumbnail: "/yoga-flow-demonstration-poses.jpg",
    videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE", // Yoga with Adriene - 20 Min Flow
    instructor: "Lisa Park",
  },
  {
    id: 4,
    title: "Dumbbell Workout for Small Spaces",
    description: "Effective strength training using just one pair of dumbbells in a 6x6 foot space.",
    duration: "30 min",
    difficulty: "Intermediate",
    category: "Strength",
    thumbnail: "/dumbbell-workout-small-space.jpg",
    videoUrl: "https://www.youtube.com/embed/2pLT-olgUJs", // FitnessBlender - Dumbbell Workout
    instructor: "David Wilson",
  },
  {
    id: 5,
    title: "Core Blast - 10 Minutes",
    description: "Quick but effective core workout that targets abs, obliques, and lower back muscles.",
    duration: "10 min",
    difficulty: "Beginner",
    category: "Core",
    thumbnail: "/core-workout-plank-variations.jpg",
    videoUrl: "https://www.youtube.com/embed/DHD1-2P94DI", // Pamela Reif - 10 Min Ab Workout
    instructor: "Emma Davis",
  },
  {
    id: 6,
    title: "Cardio Dance Party",
    description: "Fun, high-energy dance workout that burns calories while you have a blast moving to the music.",
    duration: "35 min",
    difficulty: "All Levels",
    category: "Cardio",
    thumbnail: "/dance-cardio-workout-fun.jpg",
    videoUrl: "https://www.youtube.com/embed/gC_L9qAHVJ8", // POPSUGAR Fitness - Dance Cardio
    instructor: "Rachel Green",
  },
  {
    id: 7,
    title: "Beginner Bodyweight Strength",
    description:
      "Perfect introduction to strength training using only your body weight. Build a foundation for fitness.",
    duration: "20 min",
    difficulty: "Beginner",
    category: "Strength",
    thumbnail: "/beginner-bodyweight-exercises.jpg",
    videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4", // FitnessBlender - Beginner Bodyweight
    instructor: "Mike Chen",
  },
  {
    id: 8,
    title: "Stretching for Better Sleep",
    description: "Gentle stretching routine to help you unwind and prepare your body for restful sleep.",
    duration: "12 min",
    difficulty: "Beginner",
    category: "Yoga",
    thumbnail: "/bedtime-stretching-routine.jpg",
    videoUrl: "https://www.youtube.com/embed/BiWnaZ2nAD4", // Yoga with Adriene - Bedtime Yoga
    instructor: "Lisa Park",
  },
]

export default function VideosClient() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Free Workout Videos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get fit at home with our collection of free workout videos. No gym membership required - just you, some
              space, and the motivation to move.
            </p>
          </div>

          {/* Featured Video */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                {/* <CHANGE> Added working YouTube embed for featured video */}
                <iframe
                  src="https://www.youtube.com/embed/ml6cT4AZdqI"
                  title="15-Minute HIIT Workout - No Equipment"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">HIIT</Badge>
                  <Badge variant="secondary">Beginner</Badge>
                  <Badge variant="secondary" className="bg-black/10">
                    <Clock className="h-3 w-3 mr-1" />
                    15 min
                  </Badge>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Featured: 15-Minute HIIT Workout</h3>
                <p className="text-muted-foreground">
                  Perfect for busy schedules - maximum results in minimum time. This high-intensity workout burns
                  calories and builds strength using only bodyweight exercises.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative bg-muted">
                  <img
                    src={
                      video.thumbnail ||
                      `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(video.title) || "/placeholder.svg"}`
                    }
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {/* <CHANGE> Added click handler to open video in modal or new tab */}
                  <div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => window.open(video.videoUrl.replace("/embed/", "/watch?v="), "_blank")}
                  >
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{video.category}</Badge>
                    <Badge
                      variant={
                        video.difficulty === "Beginner"
                          ? "secondary"
                          : video.difficulty === "Intermediate"
                            ? "default"
                            : "destructive"
                      }
                    >
                      {video.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {video.instructor}
                    </div>
                    <Button
                      size="sm"
                      onClick={() => window.open(video.videoUrl.replace("/embed/", "/watch?v="), "_blank")}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">Want More Workouts?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified when we release new workout videos, equipment reviews, and
                budget fitness tips.
              </p>
              <Button size="lg">Subscribe for Free Updates</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
