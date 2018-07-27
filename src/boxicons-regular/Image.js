import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.999 4H3.201c-.584-.12-1.202.358-1.202.979V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14h-16V6h16v12z" key="k0" />
,
<path d="M12 16h5.999L14 8l-3.637 5.818L8.999 12l-3 4h3z" key="k1" />
,
<circle cx={7.499} cy={9.5} r={1.5} key="k2" />
]


const Image = ({ title, ...restProps }) => {
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
          ? [<title key="Image-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Image',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Image.displayName = 'Image'

Image.defaultProps = { height: 24, width: 24}

export default Image
