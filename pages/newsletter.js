import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'

export default function Newsletter() {
  return (
    <>
      <div className="row subheader center contain contain-medium contain-large pb4">
        <h1 className="f4 f3-b f2-d warm mb0 text-center">Join the list</h1>
      </div>

      <div className="contain">
        <div className="measure m-center pt4 pt6-d pb4 pb6-d">
          <p className="mb2">
            <strong>It’s my aim to help you be a better designer</strong>. Join my monthly
            <em>ish</em> email list and I’ll send new tutorials to help you design & code beautiful
            websites.
          </p>
          <p className="mb4">
            I also do the occasional design critique, which you get access to for being a
            subscriber—send a design through after subscribing. Also, there’s some older templates
            and post files included. You can unsubscribe anytime.
          </p>

          <div className="form-warm">
            {siteMetadata.newsletter.provider !== '' && <NewsletterForm theme={`form-${theme}`} />}
          </div>
        </div>
      </div>
    </>
  )
}
