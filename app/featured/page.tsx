import type { Metadata } from 'next'
import { people } from '@/content/pages'
import PageHeader from '@/components/sections/PageHeader'
import PeopleGrid from '@/components/sections/PeopleGrid'
import Quote from '@/components/sections/Quote'
import FinalCta from '@/components/sections/FinalCta'

export const metadata: Metadata = {
  title: 'People',
  description: people.lede,
}

export default function PeoplePage() {
  return (
    <>
      <PageHeader eyebrow={people.eyebrow} title={people.title} lede={people.lede} />
      <PeopleGrid people={people.members} />
      <Quote />
      <FinalCta />
    </>
  )
}
