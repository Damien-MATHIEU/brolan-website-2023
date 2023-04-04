interface ITextNeon {
  children: string,
  color?: 'pink' | 'aquamarine',
  blinkingArrayFast?: Array<number> | null,
  blinkingArraySlow?: Array<number> | null
  size ?: 'h1' | 'h2' | 'h3',
  propsClassName?: string
}

export default ITextNeon