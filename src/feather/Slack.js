import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z" key="k0" />
,
<line x1={12.57} x2={16.15} y1={5.99} y2={16.39} key="k1" />
,
<line x1={7.85} x2={11.43} y1={7.61} y2={18.01} key="k2" />
,
<line x1={16.39} x2={5.99} y1={7.85} y2={11.43} key="k3" />
,
<line x1={18.01} x2={7.61} y1={12.57} y2={16.15} key="k4" />
]


const Slack = ({ title, ...restProps }) => {
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
          ? [<title key="Slack-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Slack',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

Slack.displayName = 'Slack'

Slack.defaultProps = { height: 24, width: 24}

export default Slack
