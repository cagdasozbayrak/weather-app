import React, { ReactNode, useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'

interface ILoadingProps {
    loading: boolean
    children: ReactNode
}
function Loading(props: ILoadingProps) {
    return props.loading ? <CircularProgress /> : <>{props.children}</>
}

export default Loading
