import React from "react"
import { useStaticQuery } from "gatsby"
import { Flex } from "../wrappers"
import Pill from "./pill"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "skill" } } }) {
        nodes {
          frontmatter {
            title
            subtitle
            icon
            color
          }
        }
      }
    }
  `)
  const skills = data.allMarkdownRemark.nodes.map((n, i) => {
    const { title, subtitle, icon, color } = n.frontmatter
    return (
      <Pill
        key={`skill-${i}`}
        subtitle={subtitle}
        title={title}
        path={icon}
        color={color}
      />
    )
  })
  return <Flex wrap>{skills}</Flex>
}
export default Skills
