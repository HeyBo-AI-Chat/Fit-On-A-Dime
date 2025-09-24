"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, User } from "lucide-react"

const workoutVideos = [
  {
    id: 1,
    title: "30-Minute HIIT Workout - No Equipment",
    description:
      "High-intensity interval training that burns calories and builds strength using only bodyweight exercises.",
    duration: "30 min",
    difficulty: "Beginner",
    category: "HIIT",
    thumbnail: "/person-doing-hiit-workout-jumping-jacks-burpees.jpg",
    videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI", // Calisthenic Movement - 30 Min HIIT
    instructor: "Calisthenic Movement",
  },
  {
    id: 2,
    title: "Full Body Resistance Band Workout",
    description: "Complete strength training routine using resistance bands to target every muscle group.",
    duration: "25 min",
    difficulty: "Intermediate",
    category: "Strength",
    thumbnail: "/resistance-bands-workout-demonstration.jpg",
    videoUrl: "https://www.youtube.com/embed/1Jb0_Hj-8Qc", // Athlean-X - Resistance Band Workout
    instructor: "Athlean-X",
  },
  {
    id: 3,
    title: "20 Minute Morning Yoga Flow",
    description: "Energizing yoga sequence to start your day with flexibility and mindfulness.",
    duration: "20 min",
    difficulty: "Beginner",
    category: "Yoga",
    thumbnail: "/yoga-flow-demonstration-poses.jpg",
    videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE", // Yoga with Adriene - 20 Min Flow
    instructor: "Yoga with Adriene",
  },
  {
    id: 4,
    title: "30 Min Full Body Dumbbell Workout",
    description: "Effective strength training using dumbbells for all major muscle groups.",
    duration: "30 min",
    difficulty: "Intermediate",
    category: "Strength",
    thumbnail: "/dumbbell-workout-small-space.jpg",
    videoUrl: "https://www.youtube.com/embed/2pLT-olgUJs", // FitnessBlender - Dumbbell Workout
    instructor: "FitnessBlender",
  },
  {
    id: 5,
    title: "10 Min Intense Ab Workout",
    description: "Quick but effective core workout that targets abs and strengthens your entire core.",
    duration: "10 min",
    difficulty: "Beginner",
    category: "Core",
    thumbnail: "/core-workout-plank-variations.jpg",
    videoUrl: "https://www.youtube.com/embed/DHD1-2P94DI", // Pamela Reif - 10 Min Ab Workout
    instructor: "Pamela Reif",
  },
  {
    id: 6,
    title: "30 Min Dance Cardio Workout",
    description: "Fun, high-energy dance workout that burns calories while you move to upbeat music.",
    duration: "30 min",
    difficulty: "All Levels",
    category: "Cardio",
    thumbnail: "/dance-cardio-workout-fun.jpg",
    videoUrl: "https://www.youtube.com/embed/gC_L9qAHVJ8", // POPSUGAR Fitness - Dance Cardio
    instructor: "POPSUGAR Fitness",
  },
  {
    id: 7,
    title: "Beginner Bodyweight Strength Training",
    description:
      "Perfect introduction to strength training using only your body weight. Build a foundation for fitness.",
    duration: "20 min",
    difficulty: "Beginner",
    category: "Strength",
    thumbnail: "/beginner-bodyweight-exercises.jpg",
    videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4", // FitnessBlender - Beginner Bodyweight
    instructor: "FitnessBlender",
  },
  {
    id: 8,
    title: "Bedtime Yoga for Better Sleep",
    description: "Gentle stretching and yoga routine to help you unwind and prepare for restful sleep.",
    duration: "12 min",
    difficulty: "Beginner",
    category: "Yoga",
    thumbnail: "/bedtime-stretching-routine.jpg",
    videoUrl: "https://www.youtube.com/embed/BiWnaZ2nAD4", // Yoga with Adriene - Bedtime Yoga
    instructor: "Yoga with Adriene",
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
                <iframe
                  src="https://www.youtube.com/embed/ml6cT4AZdqI"
                  title="30-Minute HIIT Workout - No Equipment"
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
                    30 min
                  </Badge>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Featured: 30-Minute HIIT Workout</h3>
                <p className="text-muted-foreground">
                  Perfect for those ready for a challenge - maximum results with this comprehensive high-intensity
                  workout that burns calories and builds strength using only bodyweight exercises.
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
