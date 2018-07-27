import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 2H5a1 1 0 0 0-1 1v4H2v2h2v2H2v2h2v2H2v2h2v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-4.615 15h-6.77a.846.846 0 0 1-.846-.846c0-2.391.95-4.082 2.558-4.753a2.958 2.958 0 0 1-1.289-2.439C10.038 7.329 11.367 6 13 6s2.962 1.329 2.962 2.962a2.957 2.957 0 0 1-1.289 2.439c1.607.671 2.558 2.362 2.558 4.753a.846.846 0 0 1-.846.846z" key="k0" />
]


const Contact = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'hidden'
      },
      ({ size,height,width,css }) => ({
        height: size ? size : height,
        width: size ? size : width,
        ...css
      }),
    ),
    {
      children: (
        title
          ? [<title key="Contact-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Contact',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Contact.displayName = 'Contact'

Contact.defaultProps = { height: 24, width: 24}

export default Contact
