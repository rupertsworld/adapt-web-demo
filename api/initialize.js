import config from '../config.json'
const baseUrl = process.env.NEXT_PUBLIC_ENV == "development" ? config.devBaseUrl : config.baseUrl

export default async function initialize() {
  const res = await fetch(`${baseUrl}/initialize`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  const json = await res.json()
  return json['sess_id']
}