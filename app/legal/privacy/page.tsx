import type { Metadata } from 'next'
import { legal } from '@/content/pages'
import PageHeader from '@/components/sections/PageHeader'
import LegalProse from '@/components/sections/LegalProse'

export const metadata: Metadata = { title: 'Privacy' }

export default function PrivacyPage() {
  const page = legal.privacy
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} />
      <LegalProse updated={page.updated} sections={page.sections} />
    </>
  )
}
