/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  GovBanner,
  Header,
  Title,
  Footer,
  FooterNav,
  GridContainer,
  Grid,
  Logo,
  SocialLinks,
  Address,
  Link,
  Identifier,
  IdentifierMasthead,
  IdentifierLogos,
  IdentifierLogo,
  IdentifierIdentity,
  IdentifierLinks,
  IdentifierLinkItem,
  IdentifierLink,
  IdentifierGov,
} from '../../index'

import logoImg from 'uswds/src/img/logo-img.png'
import circleSvg from 'uswds/src/img/circle-gray-20.svg'

type Language = 'english' | 'spanish'

interface ErrorPageCopy {
  errorType: string
  errorCode: string
}

const getCopy = (language: Language): ErrorPageCopy => {
switch(language) {
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

export default {
  title: 'Page Templates/Error Page',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
    Page templates
    `,
      },
    },
  },
}

const returnToTop = (
  <GridContainer className="usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </GridContainer>
)

const footerPrimary = (
  <FooterNav
    aria-label="Footer navigation"
    size="medium"
    links={Array(5).fill(
      <a href="javascript:void(0);" className="usa-footer__primary-link">
        Primary link
      </a>
    )}
  />
)

const footerSecondary = (
  <>
    <Grid row gap>
      <Logo
        medium
        image={<img className="usa-footer__logo-img" src={logoImg} alt="" />}
        heading={<p className="usa-footer__logo-heading">Name of Agency</p>}
      />
      <Grid className="usa-footer__contact-links" mobileLg={{ col: 6 }}>
        <SocialLinks
          links={[
            <a
              key="facebook"
              className="usa-social-link usa-social-link--facebook"
              href="javascript:void(0);">
              <span>Facebook</span>
            </a>,
            <a
              key="twitter"
              className="usa-social-link usa-social-link--twitter"
              href="javascript:void(0);">
              <span>Twitter</span>
            </a>,
            <a
              key="youtube"
              className="usa-social-link usa-social-link--youtube"
              href="javascript:void(0);">
              <span>YouTube</span>
            </a>,
            <a
              key="instagram"
              className="usa-social-link usa-social-link--instagram"
              href="#">
              <span>Instagram</span>
            </a>,
            <a
              key="rss"
              className="usa-social-link usa-social-link--rss"
              href="javascript:void(0);">
              <span>RSS</span>
            </a>,
          ]}
        />
        <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
        <Address
          medium
          items={[
            <a key="telephone" href="tel:1-800-555-5555">
              (800) CALL-GOVT
            </a>,
            <a key="email" href="mailto:info@agency.gov">
              info@agency.gov
            </a>,
          ]}
        />
      </Grid>
    </Grid>
  </>
)

const identifierLinksText = [
  'About <Parent shortname>',
  'Accessibility support',
  'FOIA requests',
  'No FEAR Act data',
  'Office of the Inspector General',
  'Performance reports',
  'Privacy policy',
]

const mockSubmit = (): void => {
  /* Blank function for mocking form submission */
}

export const ErrorPage = (): React.ReactElement => {

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>

      <GovBanner />
      <Header extended>
        <div className="usa-navbar">
          <Title id="extended-logo">
            <a href="/" title="Home" aria-label="Home">
              Project title
            </a>
          </Title>
        </div>
      </Header>

      <main id="main-content">
        <div className="bg-base-lightest">
          <GridContainer className="usa-section">
            <Grid row className="grid-gap">
              {/* begin error page */}
              <div class="usa-prose">

                <h1>{errorType}</h1>

                {/* Explain what caused the error in the lead text */}
                <p class="usa-intro">
                  We’re sorry, we can’t find the page you&#39;re looking for. It might have been removed, changed its name, or is otherwise unavailable.
                </p>

                {/*}Provide instructions how the user can address or fix the error */}
                <p>
                  If you typed the URL directly, check your spelling and capitalization. Our URLs look like this:
                  <strong>&lt;agency.gov/example-one&gt;</strong>.
                </p>
                <p>
                  Visit our homepage for helpful tools and resources, or contact us and we’ll point you in the right direction.
                </p>

                {/* <!-- Use buttons for main actions user can take, such as visiting the homepage or a contact page --> */}
                <div class="margin-y-5">
                  <ul class="usa-button-group">
                    <li class="usa-button-group__item">
                      <a href="javascript:void();" class="usa-button">
                        Visit homepage
                      </a>
                    </li>
                    <li class="usa-button-group__item">
                      <button
                        class="usa-button usa-button--outline"
                        type="button"
                      >
                        Contact Us
                      </button>
                    </li>
                  </ul>
                </div>

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

                {/* Error code if appropriate --> */}
                <p class="text-base"><strong>Error code:</strong> {errorCode}</p>
              </div>
            </Grid>
          </GridContainer>
        </div>
      </main>

      <Footer
        returnToTop={returnToTop}
        primary={footerPrimary}
        secondary={footerSecondary}
      />

      <Identifier>
        <IdentifierMasthead aria-label="Agency identifier">
          <IdentifierLogos>
            <IdentifierLogo href="#">
              <img
                className="usa-identifier__logo-img"
                src={circleSvg}
                alt="<Parent agency> logo"
              />
            </IdentifierLogo>
          </IdentifierLogos>
          <IdentifierIdentity domain="domain.gov">
            An official website of the <Link href="#">{`<Parent agency>`}</Link>
          </IdentifierIdentity>
        </IdentifierMasthead>
        <IdentifierLinks navProps={{ 'aria-label': 'Important links' }}>
          {identifierLinksText.map((text, idx) => (
            <IdentifierLinkItem key={idx}>
              <IdentifierLink href="#">{text}</IdentifierLink>
            </IdentifierLinkItem>
          ))}
        </IdentifierLinks>
        <IdentifierGov aria-label="U.S. government information and services">
          <div className="usa-identifier__usagov-description">
            Looking for U.S. government information and services?
          </div>
          &nbsp;
          <Link href="https://www.usa.gov/" className="usa-link">
            Visit USA.gov
          </Link>
        </IdentifierGov>
      </Identifier>
    </>
  )
}
