import * as React from 'react'
import { Link } from 'gatsby'

interface Props {
    pageTitle: string,
    children: React.ReactElement[]
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout