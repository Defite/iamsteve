import Image from 'next/image'
import Link from 'next/link'

import Icon from '@/components/icon'
import Badge from '@/components/badge'
import Category from '@/components/category'
import Placeholder from '@/components/placeholder'
import Date, { postYear } from '@/components/date'

// https://gist.github.com/aradnom/06ef051c1c96f10c144d
function autoParagraph(text, size) {
  return (
    `<p className="${size}">` + text.split(/\n+/).join(`</p>\n<p>`) + `</p>`
  )
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const LargeImage = ({ ...props }) => {
  const { large, medium, title, imageColor, categories, year } = props
  const oldWidthMedium = 378
  const oldHeightMedium = 252
  const oldWidthLarge = 738
  const oldHeightLarge = 492

  return (
    <>
      <Image
        src={medium}
        width={year > 2020 ? 384 : oldWidthMedium}
        height={year > 2020 ? 240 : oldHeightMedium}
        alt={title}
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        placeholder="blur"
        className="@md:hidden"
        quality={100}
      />
      <Image
        src={large}
        width={year > 2020 ? 592 : oldWidthLarge}
        height={year > 2020 ? 368 : oldHeightLarge}
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        placeholder="blur"
        alt={title}
        aria-hidden={true}
        className="hidden @md:block"
        quality={100}
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
    medium,
    lastmod,
  } = frontmatter

  // const mask =
  //   '[mask-image:radial-gradient(100%_150%_at_50%_50%,_#fff_24.1%,_rgba(255,255,255,0.56)_41.94%,_transparent_48.59%,_transparent_100%),radial-gradient(200%_150%_at_50%_25%,_#fff_24.1%,_rgba(255,255,255,0.56)_41.94%,_transparent_48.59%,_transparent_100%)][mask-size:100%_100%][mask-position:_0_0,0_0][mask-repeat:repeat]'
  // radial-gradient(100%_150%_at_50%_30%,_#fff_24.1%,_rgba(255,255,255,0.56)_41.94%,_transparent_48.59%,_transparent_100%)
  // [mask:radial-gradient(150%_150%_at_50%_25%,_#fff_24.1%,_rgba(255,255,255,0.56)_41.94%,_transparent_48.59%,_transparent_100%)]

  const imageColor = theme ? theme.toString() : '#e8dcd9'
  const imageClass = `relative flex items-center justify-center [mask:radial-gradient(125%_150%_at_50%_30%,_#fff_24.1%,_rgba(255,255,255,0.56)_41.94%,_transparent_48.59%,_transparent_100%)]`
  const bgFadeTop = `${hexToRgb(imageColor).r},${hexToRgb(imageColor).g},${
    hexToRgb(imageColor).b
  }`

  return (
    <article
      className={`@container group flex flex-col self-start rounded-lg shadow-placed hover:shadow-picked active:shadow-reduced bg-white active:bg-neutral-01-50 active:scale-[.99375] bg-clip-padding transition duration-200 ease-in overflow-hidden relative ${className}`}
    >
      {image && large && (
        <Link
          href={slug}
          title=""
          className={imageClass}
          style={{ backgroundColor: `${imageColor}` }}
          aria-labelledby={`title-${id}`}
        >
          <>
            <LargeImage
              large={large}
              medium={medium}
              imageColor={imageColor}
              categories={categories}
              title={title}
              year={postYear(date)}
            />
          </>
        </Link>
      )}
      {image && !large && (
        <>
          <div
            className={imageClass}
            style={{ backgroundColor: `${imageColor}` }}
          >
            {categories && categories.includes('Design') ? (
              <Placeholder
                category="Design"
                kind="post"
                width={592}
                height={368}
                href={slug}
                alt={title}
                className={`flex items-center justify-center`}
                aria-labelledby={`title-${id}`}
                tabIndex="0"
              />
            ) : (
              <Placeholder
                category="Code"
                kind="post"
                width={592}
                height={368}
                href={slug}
                alt={title}
                className={`flex items-center justify-center`}
                aria-labelledby={`title-${id}`}
                tabIndex="0"
              />
            )}
          </div>
        </>
      )}
      <div
        className={`flex flex-col flex-auto relative [mask:linear-gradient(to_right,#fff_75%,#fff_80%,transparent_97.5%)] pb-8 @md:pb-[2.625rem] pt-px -mt-px`}
      >
        <div
          className={`flex flex-row gap-4 relative z-[2] overflow-x-auto pb-4 @md:pb-5 px-8 @md:px-12 ${
            image ? 'pt-px -mt-px' : 'pt-8'
          }`}
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
              className="text-fern-1100 before:content-[''] before:absolute before:inset-0 before:cursor-pointer before:rounded-md @md:before:rounded-lg before:z-[1]"
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
