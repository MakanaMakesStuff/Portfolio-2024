import { gql } from "@apollo/client"
import AuthLayout from "../components/Layouts/Auth"

export default function Component(props: any) {
  const page = props?.data?.page

  return <AuthLayout><>Home Page</></AuthLayout>
}

Component.variables = ({ databaseId }: { databaseId: string }, ctx?: any) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  }
}

Component.query = gql`
	query GetPageData($databaseId: ID!, $asPreview: Boolean = false) {
		page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
			title
			content
			featuredImage {
				node {
					mediaItemUrl
				}
			}
		}
	}
`
