import config from '../config.json'

export default async function initialize() {
  const res = await fetch(`${config.baseUrl}/initialize`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const json = await res.json()
  console.log(json)
  return json['sess_id']
}