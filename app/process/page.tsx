import type { Metadata } from 'next'
import { process as processContent } from '@/content/pages'
import PageHeader from '@/components/sections/PageHeader'
import ProcessSteps from '@/components/sections/ProcessSteps'
import { DiptychEdito } from '@/components/sections/Diptychs'
import Reassurance from '@/components/sections/Reassurance'
import FinalCta from '@/components/sections/FinalCta'

export const metadata: Metadata = {
  title: 'Process',
  description: processContent.lede,
}

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow={processContent.eyebrow}
        title={processContent.title}
        titleEm={processContent.titleEm}
        lede={processContent.lede}
        media={processContent.hero}
      />
      <ProcessSteps steps={processContent.steps} />
      <DiptychEdito />
      <Reassurance />
      <FinalCta />
    </>
  )
}
