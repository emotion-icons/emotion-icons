import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 6.768v.002-1.237c-.485.033-.754.293-.99.71L5.87 16.72h2.464l-.753-.96.654-1.363.005.007L12 6.774v-.006zm-1.474 6.355h2.946L12 10.076" key="k0" />
,
<path d="M8.233 14.416h.017l-.01-.013m5.233-1.28v.002" key="k1" />
,
<path d="M21.496 5.066L13.26.308c-.693-.4-1.827-.4-2.52 0L2.504 5.066c-.693.398-1.26 1.38-1.26 2.182v9.507c0 .802.567 1.782 1.26 2.18l8.236 4.757c.693.4 1.826.4 2.52 0l8.235-4.768c.692-.39 1.26-1.38 1.26-2.174V7.246c0-.8-.567-1.78-1.26-2.18zm-6.066 12.05l-.687-1.384h-5.5l-.673 1.384H5.287l5.396-11.033c.305-.607.777-.9 1.317-.9s1.034.328 1.316.89l5.396 11.043H15.43z" key="k2" />
,
<path d="M12 6.77v2.474l2.518 5.173H8.25l.758.94h5.972l.674 1.35h2.474l-1.708-.99v.04L12 6.77" key="k3" />
]

export const hex='#7D8084'
const Automatic = ({ title, ...restProps }) => {
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
          ? [<title key="Automatic-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Automatic',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Automatic.displayName = 'Automatic'

Automatic.defaultProps = { height: 24, width: 24}

export default Automatic
