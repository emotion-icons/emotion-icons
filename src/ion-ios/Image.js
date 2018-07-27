import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M112.6 312.3h190.7c4.5 0 7.1-5.1 4.5-8.8l-95.4-153.4c-2.2-3.2-6.9-3.2-9.1 0L108 303.5c-2.6 3.7.1 8.8 4.6 8.8zm194.1-58l35 55.7c1 1.5 2.7 2.4 4.5 2.4h53.2c4.5 0 7.1-5.1 4.5-8.8l-61.6-87.7c-2.2-3.2-6.9-3.2-9.1 0L306.6 248c-1.2 1.8-1.2 4.3.1 6.3zm44.4-86.4c13.1-1.3 23.7-11.9 25-25 1.8-17.7-13-32.5-30.7-30.7-13.1 1.3-23.7 11.9-25 25-1.7 17.7 13 32.5 30.7 30.7z" key="k0" />
,
<path d="M432 48H80c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-2.7 280c0 4.4-3.6 8-8 8H90.7c-4.4 0-8-3.6-8-8V90.7c0-4.4 3.6-8 8-8h330.7c4.4 0 8 3.6 8 8V328z" key="k1" />
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
      viewBox: '0 0 512 512',
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

Image.defaultProps = { height: undefined, width: undefined}

export default Image
