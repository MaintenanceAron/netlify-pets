const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "aron".toUpperCase()
  }
}

module.exports = { handler }