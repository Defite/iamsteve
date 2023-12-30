import Image from 'next/image'
import Link from 'next/link'

import Icon from '@/components/icon'
import Badge from '@/components/badge'
import Category from '@/components/category'
import Placeholder from '@/components/placeholder'
import Date from '@/components/date'

// https://gist.github.com/aradnom/06ef051c1c96f10c144d
function autoParagraph(text, size) {
  return (
    `<p className="${size}">` + text.split(/\n+/).join(`</p>\n<p>`) + `</p>`
  )
}

const LargeImage = ({ ...props }) => {
  const { image, title, imageColor, categories } = props

  return (
    <>
      <Image
        src={image}
        role="presentation"
        width={592}
        height={384}
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        placeholder="blur"
        alt={title}
        className={`radius`}
      />
    </>
  )
}

const Container = ({ frontmatter, image, className }) => {
  const {
    slug,
    date,
    title,
    summary,
    tags,
    id,
    theme,
    categories,
    images,
    large,
    lastmod,
  } = frontmatter

  const imageColor = theme ? theme.toString() : '#e8dcd9'

  return (
    <article
      className={`@container group flex flex-col self-start rounded-lg shadow-placed hover:shadow-picked active:shadow-reduced bg-white active:bg-neutral-01-50 bg-clip-padding transition duration-200 ease-in overflow-hidden relative ${className}`}
    >
      {image && Array.isArray(images) && images.length !== 0 && (
        <Link
          href={slug}
          title=""
          className={`relative flex items-center justify-center aspect-[1.6086956522/1]`}
          style={{ backgroundColor: `${imageColor}` }}
          aria-labelledby={`title-${id}`}
        >
          <>
            <div className="absolute before:transition before:duration-200 before:ease-in z-[1] inset-0 bg-fade before:z-[-1] before:absolute before:bg-fade-neutral before:inset-0 before:opacity-0 group-active:before:opacity-100" />
            <LargeImage
              image={images[0]}
              imageColor={imageColor}
              categories={categories}
              title={title}
            />
          </>
        </Link>
      )}
      {image && images.length === 0 && (
        <>
          <div
            className="flex items-center self-stretch"
            style={{ backgroundColor: `${imageColor}` }}
          >
            {categories && categories.includes('Design') ? (
              <Placeholder
                category="Design"
                kind="post"
                width={592}
                height={384}
                href={slug}
                title=""
                className={`flex items-center justify-center aspect-[1.6086956522/1] ${className}`}
                style={{ backgroundColor: `${imageColor}` }}
                aria-labelledby={`title-${id}`}
                tabIndex="0"
              />
            ) : (
              <Placeholder
                category="Code"
                kind="post"
                width={592}
                height={384}
                href={slug}
                title=""
                className={`flex items-center justify-center aspect-[1.6086956522/1] ${className}`}
                style={{ backgroundColor: `${imageColor}` }}
                aria-labelledby={`title-${id}`}
                tabIndex="0"
              />
            )}
          </div>
        </>
      )}
      <div className="flex flex-col flex-auto relative  before:w-16 before:h-9 before:absolute before:top-7 before:right-0 before:bg-gradient-to-r before:from-white/0 before:to-white active:before:from-neutral-01-50/0 active:before:to-neutral-01-50 before:z-[3] pb-8 md:pb-[2.625rem]">
        <div
          className={`flex flex-row gap-4 relative z-[2] overflow-x-auto pb-4 @md:pb-5 px-8 @md:px-12 pt-[1px]`}
        >
          {categories &&
            categories.map((category) => (
              <Category key={category} size={24} tabIndex="1">
                {category}
              </Category>
            ))}
          <Badge size={24} theme={`cornflour`} iconStart={`calendar`}>
            <Date dateString={date} />
          </Badge>
        </div>
        <div className="flex flex-col gap-2.5 px-8 pt-[.8125rem] @md:pt-5 @md:gap-3 @md:px-12">
          <h2
            className="p-0 m-0 text-3xl leading-none lowercase font-display font-variation-bold hyphens-auto @md:text-5xl"
            id={`title-${id}`}
          >
            <Link
              href={slug}
              className="text-fern-1100 before:content-[''] before:absolute before:inset-0 before:cursor-pointer before:rounded-lg before:z-[1]"
            >
              {title}
            </Link>
          </h2>
          {summary && (
            <div
              className="flex-auto text-lg text-ui-body line-clamp-4 md:line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: autoParagraph(summary, 'font-body'),
              }}
            />
          )}
          <div className="sr-only" aria-hidden="true" tabIndex="-1">
            <Link
              href="/about"
              className="author vcard url fn"
              rel="author"
              tabIndex="-1"
            >
              Steve McKinney
            </Link>{' '}
            <time dateTime={lastmod} className="updated" tabIndex="-1">
              <Date dateString={lastmod} />
            </time>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Container
