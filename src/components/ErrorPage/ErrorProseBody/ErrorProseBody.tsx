import React from 'react'
import classnames from 'classnames'

type ErrorProseBodyProps = {
    children: React.ReactNode
    body?: string
    className?: string
} & JSX.IntrinsicElements['div']

export const ErrorProseBody = ({
    body,
    className,
    children
}: ErrorProseBodyProps): React.ReactElement => {
    const classes = classnames(className)
    return (
        <div>
        {React.Children.map(children, (child: React.ReactNode) => {
            return <p>{child}</p>
        })
        }
        </div>
    ) 
}

export default ErrorProseBody
