import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 20h16v-2h-6.75l5.55-7.4A.999.999 0 0 0 18 9h-2V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4H6a1.001 1.001 0 0 0-.8 1.6l5.55 7.4H4v2zm5-9a1 1 0 0 0 1-1V6h4v4a1 1 0 0 0 1 1h1l-4 5.333L8 11h1z" key="k0" />
]


const DownloadAlt = ({ title, ...restProps }) => {
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
          ? [<title key="DownloadAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DownloadAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DownloadAlt.displayName = 'DownloadAlt'

DownloadAlt.defaultProps = { height: 24, width: 24}

export default DownloadAlt
