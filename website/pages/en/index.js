/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')
const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(process.cwd() + '/siteConfig.js')

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: '_self'
}

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
)

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
)

const ProjectTitle = props => (
  <h2 className="projectTitle">
    <img className="docs-visual" src="/img/visual.png" height={280} />
    <small>
      Open-source webhook scheduler<br /> for Kubernetes
    </small>
  </h2>
)

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || ''
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button> */}
            <Button href={docUrl('quickstart.html', language)}>
              Get Started
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

const Block = props => (
  <Container padding={['bottom']} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
)

const Features = props => (
  <Block layout="threeColumn">
    {[
      {
        title: 'Simple & Flexible',
        content: `Triggerd decouples code from integration. Your code doesn't need to know about your cloud provider or message queue.`
      },
      {
        title: 'Customizable Triggers',
        content: `Triggerd comes with a few potential sources out-of-the-box. Can't find the one you're looking for? You can easily [build your own](${docUrl(
          'custom-trigger.html',
          props.language
        )}).`
      },
      {
        title: 'Performance-first',
        content: `With a low-memory footprint and fail-safes, triggerd can run anywhere you need it without worrying about if it has enough resources. `
      }
    ]}
  </Block>
)

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{ textAlign: 'center' }}
  >
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
)

const DefBuilder = () => <div>builder</div>
const DefPreview = () => <div>preview</div>

const TryOut = props => (
  <Container padding={['bottom']}>
    <div className="try-container">
      <div className="try-item">
        <DefPreview />
      </div>
      <div className="try-item">
        <DefBuilder />
      </div>
    </div>
  </Container>
)

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      )
    })

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  )
}

class Index extends React.Component {
  render() {
    let language = this.props.language || ''

    return (
      <div>
        <HomeSplash language={language} />
        <div>
          <Features />
          {/* <FeatureCallout /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          <Showcase language={language} />
        </div>
      </div>
    )
  }
}

module.exports = Index
