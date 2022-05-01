import * as React from 'react'
import { Link } from 'gatsby'
import Header from './header'

interface Props {
    pageTitle: string,
    children: React.ReactElement[]
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout