import config from '../config.json'
const baseUrl = process.env.NEXT_PUBLIC_ENV == "development" ? config.devBaseUrl : config.baseUrl

export default async function updateParameter(sessId, parameters) {
  const res = await fetch(`${baseUrl}/${sessId}/update`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parameters)
  })
  const text = await res.text()
  console.log(text)
}