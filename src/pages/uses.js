import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"



const UsesPage = props => {
  const data = useStaticQuery(graphql`
    query {
      usesImage: file(relativePath: { eq: "desk.png" }) {
        childImageSharp {
          sizes(quality: 100) {
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    }
  `)
  return (
  <Layout>
    <SEO title="Uses" />
    <Header 
      title="/uses"
      text={`Tools and tech that I use regulary.`}
      img={data.usesImage.childImageSharp.sizes}
    />
    <main>
      <section className="bg-white" id="about">
        <Container>
            <Row>
                <Col xl={{ span: 8, offset: 2 }}>
                    <h3>Hardware</h3>
                    <ul>
                        <li>MacBook Air (M1, Late 2020)</li>
                        <li><a href="https://pcpartpicker.com/b/Hq9G3C" target="_blank" rel="noopener noreferrer">Custom-built PC</a></li>
                    </ul>
                    <h3>Software</h3>
                    <ul>
                        <li></li>
                    </ul>
[Terminal](https://support.apple.com/guide/terminal/welcome/mac) (Mac) / [Windows Terminal](https://github.com/microsoft/terminal) (PC)
- [Node.js](https://nodejs.org) / [NPM](https://www.npmjs.com)
- [Homebrew](https://brew.sh) (Mac)
- [Adobe Experience Manager 6.5](https://www.adobe.com/marketing/experience-manager.html)
- [Apache Maven](https://maven.apache.org)
- [OpenJDK](https://www.azul.com/downloads/zulu-community/?package=jdk) (Zulu build for macOS 11+ ARM 64-bit)
- Shell: [Oh My Zsh](https://ohmyz.sh)
- Font: [Cascadia Code PL](https://github.com/microsoft/cascadia-code)
- Zsh plugins: [powerlevel10k](https://github.com/romkatv/powerlevel10k), [shell completion](https://docs.brew.sh/Shell-Completion)

[Visual Studio Code](https://code.visualstudio.com)
- Font: [Cascadia Code PL](https://github.com/microsoft/cascadia-code)
- Theme: Abyss

Browsers
- Chrome for work-related browsing due to better plugins and tools
- Safari and Edge Chromium (Mac and PC respectively) for personal browsing

[Adobe Creative Cloud](https://www.adobe.com/creativecloud.html)
- Photoshop
- Illustrator
- Xd

## This Site
Packages and services used by burgbits.com
- Gatsby

## Equipment

[MacBook Air](https://www.apple.com/shop/buy-mac/macbook-air) (M1, Late 2020)
- Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine
- 16 GB unified memory
- 1 TB SSD
- Retina display with True Tone
- macOS 11 Big Sur

[Custom-built PC ](https://pcpartpicker.com/b/Hq9G3C)
- AMD Ryzen 7 3700X 3.6 GHz 8-Core Processor
- Gigabyte B550I AORUS PRO AX Mini ITX AM4 Motherboard
- 32 GB (2 x 16 GB) DDR4-3600 CL16 G.Skill Trident Z Neo memory
- 2 TB Sabrent Rocket 4.0 M.2-2280 NVME Solid State Drive
- 1 TB Samsung 860 QVO 2.5" Solid State Drive
- 2 TB Seagate Barracuda 3.5" 7200RPM Internal Hard Drive
- Asus GeForce GTX 970 4 GB STRIX Video Card
- Cooler Master MasterBox NR200 White Mini ITX Desktop Case
- Corsair SF 600 W 80+ Gold Certified Fully Modular SFX Power Supply
- Cooler Master MM711 Glossy White Wired Optical Mouse
- Windows 10 64-bit Home

[Rasberry Pi 4 Model B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) / [Argon NEO case](https://www.argon40.com/argon-neo-raspberry-pi-4-case.html)

[Drop ALT Mechanical Keyboard](https://drop.com/buy/drop-alt-mechanical-keyboard)

[Massdrop x Sennheiser HD 58X Jubilee Headphones](https://drop.com/buy/massdrop-x-sennheiser-hd-58x-jubilee-headphones)

[AirPods Pro](https://www.apple.com/airpods-pro/)

[iPhone 12](https://www.apple.com/shop/buy-iphone/iphone-12) / [Spigen Liquid Air case](https://www.spigen.com/products/iphone-12-iphone-12-pro-case-liquid-air?variant=32590892597295)

            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-0" xl={{ span: 8, offset: 2 }}>
              <a href="https://github.com/wesbos/awesome-uses" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">What is a “uses” page?</a>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </Layout>
)}

export default UsesPage
