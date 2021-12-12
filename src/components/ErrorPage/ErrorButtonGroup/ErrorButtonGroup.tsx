import React from 'react'
import classnames from 'classnames'

interface ErrorButtonGroupProps {
    
} 

export const ErrorButtonGroup = ({
    children
}: ErrorButtonGroupProps &
JSX.IntrinsicElements['div']) : React.ReactElement => {
    const classes = classnames(
        'margin-y-5'
    )
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default ErrorButtonGroup