import React from 'react'
import './header.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
interface IHeaderProps {
    title: string
    onClickBack: () => void
}

function Header(props: IHeaderProps) {
    return (
        <header className="header">
            {props.title !== 'Dashboard' && (
                <ArrowBackIcon
                    className="arrow-back"
                    onClick={props.onClickBack}
                />
            )}
            <div className="title">{props.title}</div>
        </header>
    )
}

export default Header
