import type { Metadata } from 'next'
import { registry } from '@/content/pages'
import PageHeader from '@/components/sections/PageHeader'
import PlanGrid from '@/components/sections/PlanGrid'
import IndexList from '@/components/sections/IndexList'
import Reassurance from '@/components/sections/Reassurance'
import FinalCta from '@/components/sections/FinalCta'

export const metadata: Metadata = {
  title: 'Registry',
  description: registry.lede,
}

export default function RegistryPage() {
  return (
    <>
      <PageHeader eyebrow={registry.eyebrow} title={registry.title} lede={registry.lede} />
      <PlanGrid
        eyebrow="Options"
        title="What it costs"
        plans={registry.plans}
        note={registry.note}
        cta={registry.cta}
        id="enquire"
      />
      <IndexList
        eyebrow={registry.services.eyebrow}
        title={registry.services.title}
        items={registry.services.items}
      />
      <Reassurance />
      <FinalCta />
    </>
  )
}
