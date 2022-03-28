import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { list, listItem } from "../styles/index.css"

type DataType = {
  allPerson: {
    nodes: {
      name: string
      first_name: string
      last_name: string
    }[]
  }
}

const IndexPage = ({ data: { allPerson } }: PageProps<DataType>) => (
  <main>
    <h1>Hello World</h1>
    <ul className={list}>
      {allPerson.nodes.map(person => (
        <li className={listItem} key={person.name}>{person.first_name} {person.last_name}</li>
      ))}
    </ul>
  </main>
)

export default IndexPage

export const query = graphql`
  {
    allPerson {
      nodes {
        name
        first_name
        last_name
      }
    }
  }
`