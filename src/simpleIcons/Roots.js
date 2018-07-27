import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10.285 7.975V4.041a.245.245 0 0 0-.489 0 9.487 9.487 0 0 1-2.775 6.732L1.383 16.43a.249.249 0 0 0-.045.29c.262.507.559.995.889 1.46a.244.244 0 0 0 .178.103h.021a.24.24 0 0 0 .173-.073l5.915-5.938a6.054 6.054 0 0 0 1.771-4.297zM17.998.779a.245.245 0 0 0-.366.213V11.91c0 1.622.63 3.148 1.774 4.296l1.995 2.007a.247.247 0 0 0 .175.073l.021-.003a.253.253 0 0 0 .179-.101 12.02 12.02 0 0 0 2.223-6.976A12.096 12.096 0 0 0 17.998.78V.779zM6.367 4.041V.992a.241.241 0 0 0-.365-.213A12.096 12.096 0 0 0 0 11.205c0 .342.018.709.057 1.12.01.095.072.177.16.21.027.01.057.014.084.015a.25.25 0 0 0 .172-.073l4.123-4.138a6.054 6.054 0 0 0 1.771-4.296v-.002zm10.614 14.6a9.488 9.488 0 0 1-2.778-6.73V7.975a.246.246 0 0 0-.244-.248.248.248 0 0 0-.245.248 9.478 9.478 0 0 1-2.776 6.732l-5.914 5.937a.247.247 0 0 0 .029.375A11.878 11.878 0 0 0 12 23.254a11.88 11.88 0 0 0 6.947-2.235.23.23 0 0 0 .098-.18.237.237 0 0 0-.067-.195l-1.997-2.003z" key="k0" />
]

export const hex='#525DDC'
const Roots = ({ title, ...restProps }) => {
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
          ? [<title key="Roots-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Roots',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Roots.displayName = 'Roots'

Roots.defaultProps = { height: 24, width: 24}

export default Roots
