import React from 'react'
import { render, screen } from '@testing-library/react'
import Loading from '../../../dashboard/loading/Loading'

test('renders loading icon during loading', () => {
    render(<Loading loading={true} />)
    const loadingIcon = screen.getByLabelText('loading-icon')
    expect(loadingIcon).toBeInTheDocument()
})

test("doesn't render children during loading", () => {
    const children = (
        <>
            <div>child1</div>
            <div>child2</div>
        </>
    )
    render(<Loading loading={true}>{children}</Loading>)
    const loadingIcon = screen.getByLabelText('loading-icon')
    expect(loadingIcon).toBeInTheDocument()
    expect(screen.queryByText('child1')).toBeNull()
    expect(screen.queryByText('child2')).toBeNull()
})

test('renders children when not loading', () => {
    const children = (
        <>
            <div>child1</div>
            <div>child2</div>
        </>
    )
    render(<Loading loading={false}>{children}</Loading>)
    expect(screen.queryByText('loading-icon')).toBeNull()
    expect(screen.getByText('child1')).toBeInTheDocument()
    expect(screen.getByText('child2')).toBeInTheDocument()
})
