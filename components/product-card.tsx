"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Lock } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { isAuthenticated } = useAuth()

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <Badge
            className={`absolute top-2 left-2 ${
              product.badge === "Sale"
                ? "bg-red-500"
                : product.badge === "New"
                  ? "bg-green-500"
                  : "bg-[#1a5d5d]"
            }`}
          >
            {product.badge}
          </Badge>
        )}
        <button
          className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-sm md:text-base line-clamp-2 hover:text-[#1a5d5d] transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1a5d5d]">£{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    £{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 hover:bg-[#1a5d5d] hover:text-white hover:border-[#1a5d5d]"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#1a5d5d] transition-colors"
            >
              <Lock className="h-3 w-3" />
              <span>Login for pricing</span>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
