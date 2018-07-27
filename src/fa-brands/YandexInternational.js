import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M129.5 512V345.9L18.5 48h55.8l81.8 229.7L250.2 0h51.3L180.8 347.8V512h-51.3z" key="k0" />
]


const YandexInternational = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="YandexInternational-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 320 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-YandexInternational',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

YandexInternational.displayName = 'YandexInternational'

YandexInternational.defaultProps = { height: undefined, width: undefined}

export default YandexInternational
