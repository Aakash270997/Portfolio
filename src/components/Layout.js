import React, { Children } from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full innline-block z-0 bg-light p-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout