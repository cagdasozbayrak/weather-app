import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../../dashboard/header/Header'

test('renders Dashboard in title', () => {
    render(<Header title={'Dashboard'} onClickBack={jest.fn()} />)
    const titleElement = screen.getByText('Dashboard')
    expect(titleElement).toBeInTheDocument()
})

test('renders arrow when location is selection', () => {
    const onClickBack = jest.fn
    render(<Header title={'London'} onClickBack={onClickBack} />)
    const arrow = screen.getByLabelText('arrow-back-icon')
    expect(arrow).toBeInTheDocument()
})
