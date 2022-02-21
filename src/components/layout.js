import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/who">Who</Link></li>
        </ul>
      </nav>
      <main>
        <h1 class='text-slate-600 text-7xl'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout