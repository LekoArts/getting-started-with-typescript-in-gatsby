import type { GatsbyNode } from "gatsby"

type Person = {
  first_name: string
  last_name: string
  name?: string
}

const persons: Person[] = [
  {
    first_name: "Ada",
    last_name: "Lovelace"
  },
  {
    first_name: "Grace",
    last_name: "Hopper"
  },
  {
    first_name: "Hedy",
    last_name: "Lamarr"
  },
  {
    first_name: "Annie",
    last_name: "Easley"
  }
]

export const sourceNodes: GatsbyNode["sourceNodes"] = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  persons.forEach(person => {
    createNode({
      ...person,
      name: `${person.first_name} ${person.last_name}`,
      id: createNodeId(`Person-${person.first_name}-${person.last_name}`),
      internal: {
        type: `Person`,
        contentDigest: createContentDigest(person),
      }
    })
  })
}