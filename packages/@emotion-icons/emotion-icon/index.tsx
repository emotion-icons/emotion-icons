import * as React from 'react'
import styled from '@emotion/styled'

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
    ...otherProps,
  }

  return (
    <svg {...iconProps} ref={ref}>
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
