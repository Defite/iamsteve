import { cache } from 'react'
import { notFound } from 'next/navigation'

import { Mdx } from '@/components/mdx-components'
import { Header, Title, Column, Description } from '@/components/page'
import Image from '@/components/image'
import Chip from '@/components/chip'
import Card from '@/components/card'

import { format, subWeeks, isAfter } from 'date-fns'

import { allCollections } from 'contentlayer/generated'
import collections from '@/content/collections'

export async function generateMetadata() {
  return {
    template: '%s • iamsteve',
    title: 'Collections',
    description:
      'Curated links to all things design. If you’re looking for inspiration start here.',
  }
}

const getData = cache(async () => {
  const groupedCollections = allCollections.reduce((acc, item) => {
    item.collection.forEach((collection) => {
      if (!acc[collection]) {
        acc[collection] = []
      }
      acc[collection].push(item)
    })
    return acc
  }, {})

  return {
    groupedCollections,
  }
})

async function renderCollections() {
  const { groupedCollections } = await getData()

  return (
    <>
      {Object.entries(groupedCollections).map(([collection, items]) => (
        <div className="flex flex-col gap-4" key={collection}>
          <h2 className="lg:text-xl leading-xl font-display font-variation-bold lowercase">
            {collection}
          </h2>
          <ul className="grid grid-rows-[repeat(auto-fit, 48px)]">
            {items.map((item) => {
              const [y, m, d] = item.date.split('-').map((n) => parseInt(n, 10))
              const itemDate = new Date(y, m, d)
              const isNew = isAfter(itemDate, subWeeks(new Date(), 5))

              return (
                <li
                  key={item.url}
                  className="flex border-t border-neutral-01-500/20 last:border-b"
                >
                  <a
                    href={item.url}
                    className="text-xl lg:text-3xl py-2 flex whitespace-nowrap flex-1 gap-2 group hover:text-dandelion-600 transition duration-200 linear self-center"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                    <span className="text-fern-1100/20 group-hover:text-fern-1100/40 transition duration-200 linear truncate">
                      {item.url
                        .replace('https://', '')
                        .replace('www.', '')
                        .replace(/\/$/, '')}
                    </span>
                  </a>
                  {isNew && (
                    <span className="flex self-center px-2 py-1 font-ui lowercase bg-fern-300/10 leading-none ring-1 ring-fern-500/40 text-fern-600 justify-center rounded-sm">
                      New
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </>
  )
}

export default async function CollectionsPage({ params }) {
  return (
    <>
      <Image
        src="/images/illustration/pencil-mono.svg"
        width={962}
        height={46}
        className={`col-start-1 col-end-3 row-start-1 max-w-[initial] justify-self-end self-start mt-3 drop-shadow-placed max-2xl:hidden`}
        alt=" "
        aria-hidden="true"
      />
      <Header className="sm:row-start-1 max-sm:frame max-sm:frame-24 flex flex-col gap-4 md:gap-8 col-start-content-start max-sm:col-end-content-end col-end-6">
        <Column className="md:col-span-1">
          <Title className="text-4xl">Collections</Title>
          <Description>
            Curated links to all things design. If you’re looking for
            inspiration start here.
          </Description>
        </Column>
        <Column className="md:col-span-1">
          <ul>
            {collections.map((collection) => (
              <li key={collection.id}>{collection.title}</li>
            ))}
          </ul>
        </Column>
      </Header>
      <section className="flex flex-col col-start-content-start sm:col-start-6 col-end-content-end sm:row-start-1 lg:pb-18 gap-y-10 lg:gap-y-18">
        {renderCollections(params)}
      </section>
    </>
  )
}
