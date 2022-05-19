import config from '../config.json'

export default async function updateParameter(sessId, parameters) {
  await fetch(`${config.baseUrl}/${sessId}/update`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parameters)
  })
}