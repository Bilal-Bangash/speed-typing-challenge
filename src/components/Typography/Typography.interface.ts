import { ElementType, ReactNode } from 'react'
export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'

export interface TypographyProps {
  variant?: 'inherit' | Variant | undefined
  component: ElementType<any>
  className?: string
  children?: ReactNode
}
