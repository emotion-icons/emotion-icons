import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 22h16a1 1 0 0 0 1-1V11a.997.997 0 0 0-.293-.707l-8-8a.999.999 0 0 0-1.414 0l-8 8A.997.997 0 0 0 3 11v10a1 1 0 0 0 1 1zm1-10.586l7-7 7 7V20h-4v-6H9v6H5v-8.586z" key="k0" />
]


const HomeAlt = ({ title, ...restProps }) => {
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
          ? [<title key="HomeAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-HomeAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

HomeAlt.displayName = 'HomeAlt'

HomeAlt.defaultProps = { height: 24, width: 24}

export default HomeAlt
