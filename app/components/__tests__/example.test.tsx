import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

// Simple component test example
function TestComponent({ name }: { name: string }) {
  return <div>Hello, {name}!</div>
}

describe('Example Component Tests', () => {
  it('renders hello message', () => {
    render(<TestComponent name="World" />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  it('renders with different name', () => {
    render(<TestComponent name="Vitest" />)
    expect(screen.getByText('Hello, Vitest!')).toBeInTheDocument()
  })
})