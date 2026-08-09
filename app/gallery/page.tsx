import type { Metadata } from 'next'
import { gallery } from '@/content/pages'
import PageHeader from '@/components/sections/PageHeader'
import GalleryFilter from '@/components/sections/GalleryFilter'
import FinalCta from '@/components/sections/FinalCta'

export const metadata: Metadata = {
  title: 'Archive',
  description: gallery.lede,
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        titleEm={gallery.titleEm}
        lede={gallery.lede}
      />
      <GalleryFilter filters={gallery.filters} items={gallery.items} />
      <FinalCta />
    </>
  )
}
