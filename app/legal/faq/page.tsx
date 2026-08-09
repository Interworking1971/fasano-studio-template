import type { Metadata } from 'next'
import { legal } from '@/content/pages'
import PageHeader from '@/components/sections/PageHeader'
import Accordions from '@/components/sections/Accordions'
import FinalCta from '@/components/sections/FinalCta'

export const metadata: Metadata = { title: 'FAQ' }

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow={legal.faq.eyebrow} title={legal.faq.title} />
      <Accordions eyebrow="Common questions" title="Answered" groups={legal.faq.groups} />
      <FinalCta />
    </>
  )
}
