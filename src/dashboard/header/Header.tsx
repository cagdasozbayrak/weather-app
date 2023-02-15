import React from 'react'
import './header.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
interface IHeaderProps {
    title: string
    onClickBack: () => void
}

/**
 * Renders header which shows the title of the current page
 * @param props
 * @constructor
 */
function Header(props: IHeaderProps) {
    return (
        <header className="header">
            {props.title !== 'Dashboard' && (
                <ArrowBackIcon
                    className="arrow-back"
                    aria-label="arrow-back-icon"
                    onClick={props.onClickBack}
                />
            )}
            <div className="title">{props.title}</div>
        </header>
    )
}

export default Header
