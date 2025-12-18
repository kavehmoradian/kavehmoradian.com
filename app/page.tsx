"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Mail, Search } from "lucide-react"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-posts"

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("date")

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(blogPosts.map((post) => post.category))]
    return cats
  }, [blogPosts])

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Search by title, excerpt, or category
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query),
      )
    }

    // Sort posts
    // filtered.sort((a, b) => {
    //   if (sortBy === "date") {
    //     return new Date(b.date).getTime() - new Date(a.date).getTime()
    //   } else if (sortBy === "title") {
    //     return a.title.localeCompare(b.title)
    //   } else if (sortBy === "views") {
    //     const aViews = Number.parseInt(a.views.replace(/\D/g, ""))
    //     const bViews = Number.parseInt(b.views.replace(/\D/g, ""))
    //     return bViews - aViews
    //   }
    //   return 0
    // })

    return filtered
  }, [blogPosts, searchQuery, selectedCategory, sortBy])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
    setSortBy("date")
  }

  const hasActiveFilters = searchQuery.trim() || selectedCategory !== "All" || sortBy !== "date"

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-3 text-slate-100">Blog</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mb-6"></div>
        <p className="text-slate-400 text-lg leading-relaxed">
          Thoughts on DevOps, Cloud Engineering, and everything in between. Sharing insights from my journey in
          infrastructure and automation.
        </p>
      </section>

      <section className="mb-12">
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6">
            {filteredPosts.map((post, index) => (
              <a href={post.link} target="_blank" rel="noopener noreferrer" key={index}>
                <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="border-slate-600 text-slate-400">
                        {post.category}
                      </Badge>
                      <span className="text-slate-500 text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-100 hover:text-orange-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>{post.readTime}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-orange-400 hover:text-orange-300 hover:bg-orange-600/10"
                      >
                        Read More <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        ) : (
          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-300 mb-2">No posts found</h3>
              <p className="text-slate-400 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={clearFilters}
                className="border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-slate-200 bg-transparent"
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="mb-12">
        <Card className="bg-gradient-to-r from-slate-900/60 to-slate-800/60 border-slate-700/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Let's Work Together</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Interested in discussing DevOps strategies, cloud architecture, or potential collaboration? I'd love to
              hear from you and explore how we can work together.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
