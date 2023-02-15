import React, { ReactNode } from 'react'
import { CircularProgress } from '@mui/material'

interface ILoadingProps {
    loading: boolean
    children?: ReactNode
}

/**
 * Used to render loading animation during components fetching required data
 * @param props
 * @constructor
 */
function Loading(props: ILoadingProps) {
    return props.loading ? (
        <CircularProgress aria-label="loading-icon" />
    ) : (
        <>{props.children}</>
    )
}

export default Loading
