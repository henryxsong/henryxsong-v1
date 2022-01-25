import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
    }
    .subtitle {
        margin-top: 0;
    }
    .highlighted {
        box-shadow: inset 0 -2.5rem 0 #cdf3e1;
    }
`

const Hero = () => {
    return (
        <StyledSection id="hero">
            <h1 className="title">
                Hello <span role="img" aria-label="emoji">👋</span>
                <br />
                I'm Henry
            </h1>


            <h2 className="subtitle">
                I'm a software engineer based in Seattle, WA.
            </h2>

            <div className="description">
                Test
            </div>
        </StyledSection>
    )
}

export default Hero