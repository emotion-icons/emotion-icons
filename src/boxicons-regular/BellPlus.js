import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 6h-2v3H8v2h3v3h2v-3h3V9h-3z" key="k0" />
,
<path d="M20 13.838V10c0-3.94-2.942-7.34-6.906-7.915l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5h4.52a1 1 0 0 0 .869-1.495L20 13.838zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z" key="k1" />
]


const BellPlus = ({ title, ...restProps }) => {
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
          ? [<title key="BellPlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BellPlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BellPlus.displayName = 'BellPlus'

BellPlus.defaultProps = { height: 24, width: 24}

export default BellPlus
