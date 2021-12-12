/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classnames from 'classnames'
import {
    GridContainer,
    Grid,
} from '../../index'

type Language = 'english' | 'spanish'

interface ErrorPageCopy {
    errorType: string
    errorCode: string
}

const getCopy = (language: Language): ErrorPageCopy => {
    switch (language) {
        case 'english':
            return {
                errorType: 'Page not found',
                errorCode: '404'
            }
        case 'spanish':
            return {
                errorType: 'No se encontró esta página',
                errorCode: '404'
            }
    }

}

interface ErrorPageProps {
    language?: Language
}

const classes = classnames(
    'usa-prose'
)
export const ErrorPage = ({
    children,
    language =
    "english" }: ErrorPageProps & JSX.IntrinsicElements['section']): React.ReactElement => {
    const copy = getCopy(language)
    return (
        <>
            <GridContainer className="usa-section">
                <Grid row className="grid-gap">
                    {/* begin error page */}
                    <div className={classes}>
                        <h1>{copy.errorType}</h1>
                        {children}
                    </div>
                </Grid>
            </GridContainer>

        </>
    )
}

export default ErrorPage