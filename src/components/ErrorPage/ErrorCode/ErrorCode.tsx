import React from 'react'
import classnames from 'classnames'

interface ErrorCodeProps {
    errorCode?: string
}
export const ErrorCode = ({
    errorCode = '404',
    className
}: ErrorCodeProps & 
JSX.IntrinsicElements['p']): React.ReactElement => {
    const classes = classnames(
        'text-base'
    )
    return (
        <p className={classes}><strong>Error code:</strong> {errorCode}</p>
    )
}
export default ErrorCode