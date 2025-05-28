export interface Input {
  id: number
  name: string
  label: string
  type: 'text' | 'number' | 'select' | 'textarea'
  placeholder?: string
  options?: string[]
  required?: boolean
  errorMessage?: string
}
