import fetchGraph from '../fetch'
import { fragment as Posts_post } from './Posts'
import { fragment as Comments_comment } from './Comments'

export default first => fetchGraph({
  query: `
    query rootQuery($first: Int) {
      allPosts(first: $first) {
        ...Posts_post
      }
    }
    ${Posts_post}
    ${Comments_comment}
  `,
  variables: { first }
})