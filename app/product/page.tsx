import type { Metadata } from 'next'
import { product } from '@/content/pages'
import ProductHero from '@/components/sections/ProductHero'
import Accordions from '@/components/sections/Accordions'
import Gallery from '@/components/sections/Gallery'

export const metadata: Metadata = {
  title: product.name,
  description: product.lede,
}

export default function ProductPage() {
  return (
    <>
      <ProductHero
        eyebrow={product.eyebrow}
        name={product.name}
        price={product.price}
        lede={product.lede}
        medias={product.medias}
        options={product.options}
        cta={product.cta}
      />
      <Accordions
        eyebrow="Specification"
        title="The detail"
        groups={product.details}
      />
      <Gallery />
    </>
  )
}
