import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.836 4.27a.915.915 0 0 0-1.273-.226L.163 19.73c.167.235.437.39.747.39h22.18c.503 0 .91-.41.91-.914V4.78a.951.951 0 0 0-.164-.51zm-22.4-.226A.91.91 0 0 0 0 4.78v14.45l10.664-8.736-9.227-6.45v-.002z" key="k0" />
]

export const hex='#509CF6'
const CampaignMonitor = ({ title, ...restProps }) => {
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
          ? [<title key="CampaignMonitor-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CampaignMonitor',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CampaignMonitor.displayName = 'CampaignMonitor'

CampaignMonitor.defaultProps = { height: 24, width: 24}

export default CampaignMonitor
