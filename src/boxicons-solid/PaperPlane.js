import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.001 13.204a.996.996 0 0 0 .599.879L6 15.466l10-6.3-7 7.5 9.6 4.416a1 1 0 0 0 1.399-.853l1-16a1 1 0 0 0-1.466-.946l-17 9a.997.997 0 0 0-.532.921zM9 22.167c.153 0 .306-.035.447-.105L12 20.167l-4-2v3a1.001 1.001 0 0 0 1 1z" key="k0" />
]


const PaperPlane = ({ title, ...restProps }) => {
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
          ? [<title key="PaperPlane-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PaperPlane',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PaperPlane.displayName = 'PaperPlane'

PaperPlane.defaultProps = { height: 24, width: 24}

export default PaperPlane
