"use client"

import { useParams, useRouter } from "next/navigation"
import { getProductBySlug } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import InteractiveShaderCard from "@/components/interactive-shader-card"
import ReactMarkdown from "react-markdown"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const handlePersonalize = () => {
    router.push(`/contact?product=${product.slug}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Interactive Shader Card */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-4">
            <Link href="/products">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="max-w-3xl">
              <div className="mb-4 flex justify-center gap-2">
                <Badge variant="subtle" className="text-sm">
                  {product.expertise}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {product.use}
                </Badge>
              </div>

              <h1 className="mb-4 text-5xl font-bold tracking-tight">
                {product.name}
              </h1>

              <p className="text-xl text-muted-foreground">
                {product.short}
              </p>
            </div>
          </div>

          <div className="mt-10 w-full">
            <InteractiveShaderCard className="mx-auto aspect-[3/2] w-full max-w-4xl border border-[color:var(--muted)]/20 bg-[#1b1b1b] shadow-[0_35px_120px_rgba(0,0,0,0.35)]" />
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" onClick={handlePersonalize}>
              Personalize
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-slate dark:prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold tracking-tight mb-6 mt-8">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold tracking-tight mb-3 mt-6">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-xl font-semibold tracking-tight mb-2 mt-4">
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-muted-foreground">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">
                    {children}
                  </strong>
                ),
              }}
            >
              {product.fullDescription}
            </ReactMarkdown>
          </article>

          {/* CTA Section */}
          <div className="mt-12 p-8 rounded-lg bg-muted/50 border text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to get started with {product.name}?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s discuss how we can customize this solution for your needs.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={handlePersonalize}>
                Personalize This Solution
              </Button>
              <Link href="/products">
                <Button size="lg" variant="outline">
                  Explore Other Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
