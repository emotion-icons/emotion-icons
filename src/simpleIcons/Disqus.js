import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.438 23.654c-2.853 0-5.46-1.04-7.476-2.766L0 21.568l1.917-4.733A11.7 11.7 0 0 1 .875 12C.875 5.564 6.05.346 12.44.346 18.82.346 24 5.564 24 12c0 6.438-5.176 11.654-11.562 11.654zm6.315-11.687v-.033c0-3.363-2.373-5.76-6.462-5.76H7.877V17.83h4.35c4.12 0 6.525-2.5 6.525-5.863h.004zm-6.415 2.998h-1.29V9.04h1.29c1.897 0 3.157 1.08 3.157 2.945v.03c0 1.884-1.26 2.95-3.157 2.95z" key="k0" />
]

export const hex='#2E9FFF'
const Disqus = ({ title, ...restProps }) => {
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
          ? [<title key="Disqus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Disqus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Disqus.displayName = 'Disqus'

Disqus.defaultProps = { height: 24, width: 24}

export default Disqus
