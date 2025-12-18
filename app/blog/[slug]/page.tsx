import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, Clock, Eye, User } from "lucide-react"
import Link from "next/link"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Function to render markdown-like content with syntax highlighting
  const renderContent = (content: string) => {
    const parts = content.split(/```(\w+)?\n([\s\S]*?)```/g)

    return parts.map((part, index) => {
      if (index % 3 === 0) {
        // Regular text content
        return (
          <div key={index} className="prose prose-invert max-w-none">
            {part.split("\n").map((line, lineIndex) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={lineIndex} className="text-3xl font-bold mb-6 text-slate-100">
                    {line.slice(2)}
                  </h1>
                )
              } else if (line.startsWith("## ")) {
                return (
                  <h2 key={lineIndex} className="text-2xl font-semibold mb-4 mt-8 text-slate-200">
                    {line.slice(3)}
                  </h2>
                )
              } else if (line.startsWith("### ")) {
                return (
                  <h3 key={lineIndex} className="text-xl font-semibold mb-3 mt-6 text-slate-300">
                    {line.slice(4)}
                  </h3>
                )
              } else if (line.startsWith("- ")) {
                return (
                  <li key={lineIndex} className="text-slate-400 mb-1">
                    {line.slice(2)}
                  </li>
                )
              } else if (line.match(/^\d+\. /)) {
                return (
                  <li key={lineIndex} className="text-slate-400 mb-1">
                    {line.replace(/^\d+\. /, "")}
                  </li>
                )
              } else if (line.trim() === "") {
                return <br key={lineIndex} />
              } else if (line.trim()) {
                return (
                  <p key={lineIndex} className="text-slate-400 leading-relaxed mb-4">
                    {line}
                  </p>
                )
              }
              return null
            })}
          </div>
        )
      } else if (index % 3 === 1) {
        // Language identifier
        return null
      } else {
        // Code block
        const language = parts[index - 1] || "text"
        return (
          <div key={index} className="my-6">
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              customStyle={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(71, 85, 105, 0.3)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                margin: 0,
              }}
              codeTagProps={{
                style: {
                  background: "transparent",
                  padding: 0,
                },
              }}
            >
              {part}
            </SyntaxHighlighter>
          </div>
        )
      }
    })
  }

  const allPosts = getAllBlogPosts()
  const otherPosts = allPosts.filter((p) => p.slug !== params.slug).slice(0, 5)

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Back button */}
      <Link href="/">
        <Button variant="ghost" className="mb-8 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>
      </Link>

      {/* Post header */}
      <article className="mb-8">
        <div className="mb-6">
          <Badge variant="secondary" className="bg-orange-600/20 text-orange-400 border border-orange-500/20 mb-4">
            {post.category}
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-slate-100 leading-tight">{post.title}</h1>

          {/* Post meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{post.views}</span>
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-lg text-slate-300 leading-relaxed border-l-4 border-orange-500 pl-6 bg-slate-900/30 p-4 rounded-r-lg">
            {post.excerpt}
          </p>
        </div>

        {/* Post content */}
        <div className="prose prose-invert max-w-none">{renderContent(post.content)}</div>
      </article>

      {otherPosts.length > 0 && (
        <div className="border-t border-slate-700/50 pt-12 mt-12">
          <h2 className="text-2xl font-bold text-slate-100 mb-8">More Articles</h2>
          <div className="space-y-4">
            {otherPosts.map((otherPost) => (
              <Link key={otherPost.slug} href={`/blog/${otherPost.slug}`}>
                <article className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-orange-500/30 transition-all duration-300 hover:bg-slate-800/50 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-orange-600/20 text-orange-400 border border-orange-500/20 text-xs"
                      >
                        {otherPost.category}
                      </Badge>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {otherPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {otherPost.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {otherPost.views}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-orange-400 transition-colors">
                      {otherPost.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2">{otherPost.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-slate-700/50 pt-8 mt-12">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500">Published on {post.date}</div>

          <Link href="/">
            <Button
              variant="outline"
              className="border-slate-600 text-slate-400 hover:border-orange-500 hover:text-white bg-transparent"
            >
              More Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
