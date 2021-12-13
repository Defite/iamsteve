import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
// import ThemeSwitch from './ThemeSwitch'

// components
import Header from './Header'
import Subscribe from '@/components/Subscribe'
import FooterProfile from '@/components/FooterProfile'
import Footer from './Footer'
import Tabbar from './Tabbar'

const LayoutWrapper = ({ children, subtle }) => {
  return (
    <>
      <Header subtle={subtle} />

      <Tabbar />

      <main id="content">{children}</main>

      {siteMetadata.newsletter.provider !== '' && <Subscribe />}

      <FooterProfile />
      <Footer />
    </>
  )
}

export default LayoutWrapper
