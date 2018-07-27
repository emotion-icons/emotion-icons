import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-15c.901 0 2.582.168 3.707 1.293l-1.414 1.414C13.851 9.265 12.993 9 12 9c-1.626 0-3 1.374-3 3s1.374 3 3 3c.992 0 1.85-.265 2.293-.708l1.414 1.416C14.581 16.832 12.901 17 12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5z" key="k0" />
]


const Copyright = ({ title, ...restProps }) => {
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
          ? [<title key="Copyright-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Copyright',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Copyright.displayName = 'Copyright'

Copyright.defaultProps = { height: 24, width: 24}

export default Copyright
