import React from 'react'

type Links = [{}]
interface ErrorLinkProps {
    links?: Links
}
export const ErrorLink = ({ }: ErrorLinkProps & JSX.IntrinsicElements['section']): React.ReactElement => {
    return (
        <>
            {/*List additional support channels */}
            <p>For immediate assistance:</p>
            <ul>
                <li>
                    <a href="javascript:void();" class="usa-link"
                    >Start a live chat with us</a
                    >
                </li>

                <li>
                    Call
                    <a href="javascript:void();" class="usa-link"
                    >(555) 555-GOVT</a
                    >
                </li>
            </ul>
        </>
    )
}

export default ErrorLink
