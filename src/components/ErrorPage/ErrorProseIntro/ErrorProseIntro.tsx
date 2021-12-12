import React from 'react'
import classnames from 'classnames'

interface ErrorProseIntroProps {
    className?: string
}

export const ErrorProseIntro = ({
    className,
    children
}: ErrorProseIntroProps & JSX.IntrinsicElements['p']): React.ReactElement => {
    const classes = classnames('usa-intro', className)
    return (
        <p className={classes}>
            {children}
        </p>
    ) 
}

export default ErrorProseIntro
