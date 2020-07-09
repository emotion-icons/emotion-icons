import * as React from 'react'
import styled from '@emotion/styled'
import validProp from '@emotion/is-prop-valid'

export type EmotionIcon = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<EmotionIconProps> & React.RefAttributes<SVGSVGElement>
>

export interface EmotionIconProps extends React.PropsWithRef<React.SVGProps<SVGSVGElement>> {
  size?: number | string
  title?: string | null
}

interface EmotionIconBaseProps {
  iconAttrs: React.SVGProps<SVGSVGElement>
  iconViewBox: string
  iconVerticalAlign: string
}

function isValidProp(key: string): key is keyof React.SVGProps<SVGSVGElement> {
  return validProp(key)
}

function filterSVGProps(props: EmotionIconProps): React.SVGProps<SVGSVGElement> {
  return (Object.keys(props) as Array<keyof EmotionIconProps>).reduce<React.SVGProps<SVGSVGElement>>((p, k) => {
    if (isValidProp(k)) {
      // hack to satisfy TypeScript complexity
      ;(p as any)[k] = props[k]
    }
    return p
  }, {})
}

const EmotionIconBaseBase = React.forwardRef<SVGSVGElement, EmotionIconProps & EmotionIconBaseProps>((props, ref) => {
  const {children, iconAttrs, iconVerticalAlign, iconViewBox, size, title, ...otherProps} = props

  const iconProps: React.SVGProps<SVGSVGElement> = {
    viewBox: iconViewBox,
    height: props.height !== undefined ? props.height : size,
    width: props.width !== undefined ? props.width : size,
    'aria-hidden': title == null ? 'true' : undefined,
    focusable: 'false',
    role: title != null ? 'img' : undefined,
    ...iconAttrs,
  }

  const svgProps = filterSVGProps(otherProps)

  return (
    <svg {...iconProps} {...svgProps} ref={ref}>
      {title && <title key="icon-title">{title}</title>}
      {children}
    </svg>
  )
})

export const EmotionIconBase = styled(EmotionIconBaseBase)`
  display: inline-block;
  vertical-align: ${(props) => props.iconVerticalAlign};
  overflow: hidden;
`
