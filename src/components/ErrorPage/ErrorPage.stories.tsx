import React from 'react'
import { ErrorPage } from './ErrorPage'
import { ErrorProseIntro } from './ErrorProseIntro/ErrorProseIntro'
import { ErrorProseBody } from './ErrorProseBody/ErrorProseBody'
import { Button } from '../Button/Button'
import { ErrorCode } from './ErrorCode/ErrorCode'
import { ErrorButtonGroup } from './ErrorButtonGroup/ErrorButtonGroup'

export default {
  title: 'Components/ErrorPage',
  component: ErrorPage,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Error Page component

Source: https://designsystem.digital.gov/templates/404-page/
`,
      },
    },
  },
}
const prose = 'Do you like my hat? No, I do not.'

export const errorPageExamples = (): React.ReactElement => (
    <ErrorPage language="english">
        <ErrorProseIntro >
          {prose}
          </ErrorProseIntro>
        <ErrorProseBody>
          <p>hello, do you like my hat?</p>
          <p>No, I do not like your hat</p>
          </ErrorProseBody>
        <ErrorButtonGroup>
        <Button type="button" className="usa-button">Go Here</Button>

        <Button type="button" className="usa-button">Go Here2</Button>

          </ErrorButtonGroup>
        <ErrorCode errorCode="403" />
    </ErrorPage> 
  )