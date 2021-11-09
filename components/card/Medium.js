import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'

import Icon from '@/components/icon'
import Tag from '@/components/Tag'

import Design from '@/images/default/design-default-1.svg'
import Code from '@/images/default/code-default-1.svg'

const Medium = ({ frontmatter }) => {
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
    medium,
    lastmod 
  } = frontmatter
  
  const url = `/blog/${slug}`;
  
  return (
    <article className="card card-medium entry flex flex-column">
      <Link href={url}>
        <a className="card-image flex mb2 mb4-b radius" style={{ backgroundColor: theme.toString() }}>
          <>
            {medium ? (
              <>
                <Image src={medium} className="radius" width={378} height={252} />
              </>
            ) : (
              <>
                <p>image</p>
              </>
            )}
          </>
        </a>
      </Link>
      <div className="card-body flex flex-column flex-auto">
        <div className="meta f8-b f7-d flex between items-center dashes mb1 mb2-b mb3-d">
          <time className="warm" datetime="{date}" itemProp="datePublished">
            {formatDate(date)}
          </time>
        </div>
        <h3 className="f2-l mb1 mb2-d">
          <Link href={url}>
            <a className="primary secondary-hover">{title}</a>
          </Link>
        </h3>
        <div className="flex-auto mb2 mb3-d">
          {summary}
        </div>
        <div className="meta f8-b f7-d flex between items-center dashes">
          {categories}
    
          <Link href={url}>
            <a rel="bookmark" className="link-icon warm secondary-hover card-permalink">
              Continue reading 
              <span className="icon icon-medium icon-right secondary">
                <Icon kind="right" />
              </span>
            </a>
          </Link>
        </div>
        <div className="visuallyhidden" aria-hidden="true" tabIndex="-1">
          <a href="{site_url}" className="author vcard url fn" rel="author">Steve McKinney</a>
          <time datetime="{lastmod}" className="updated">
            {formatDate(lastmod)}
          </time>
        </div>
      </div>
    </article>
  )
}

export default Medium