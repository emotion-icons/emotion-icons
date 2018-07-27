import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.1 24h7.8v-5.85l-1.95-1.801h-3.9L8.1 18.15V24zM18.15 8.1l-1.801 1.95v3.9l1.801 1.95H24V8.1h-5.85zM15.9 0H8.1v5.85l1.95 1.801h3.9L15.9 5.85V0zM24 24v-5.85l-1.801-1.801h-5.85V24H24zM1.8 0L0 1.8v5.85h7.65V0H1.8zm14.55 0v5.85l1.8 1.8H24V0h-7.65zM12 13.05c-.6 0-1.05-.45-1.05-1.05s.45-1.05 1.05-1.05 1.05.45 1.05 1.05-.45 1.05-1.05 1.05m-4.35 5.1l-1.8-1.8H0V24h5.85l1.801-1.801V18.15zm0-10.05H0v7.8h5.85l1.801-1.95V8.1z" key="k0" />
]

export const hex='#40BAC8'
const WPEngine = ({ title, ...restProps }) => {
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
          ? [<title key="WPEngine-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-WPEngine',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

WPEngine.displayName = 'WPEngine'

WPEngine.defaultProps = { height: 24, width: 24}

export default WPEngine
