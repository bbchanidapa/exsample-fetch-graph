const endpoint = 'https://api.graph.cool/simple/v1/cit8981cx2izz0126i2juym2g'
const method = 'POST'
const headers = {
  'Content-Type': 'application/json'
}

const fetchGraph = ({ query, variables, fragments } = {}) => {
  const body = JSON.stringify({ query, variables })

  return fetch(endpoint, { headers, method, body })
  .then(data => data.json())
  .then(data => data.errors ? Promise.reject(data.errors) : data.data)
}

export default fetchGraph
