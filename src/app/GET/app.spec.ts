import requestSuperTest from "supertest"

describe("GET /", () => {
  it("should return 200", async () => {
    jest.setTimeout(10000)
    const response = await requestSuperTest(
      `https://event-api-test-qqji.onrender.com`
    ).get("/")
    expect(response.status).toBe(200)
  })

  it("should return 'Hello World!'", async () => {
    jest.setTimeout(10000)
    const response = await requestSuperTest(
      `https://event-api-test-qqji.onrender.com`
    ).get("/")
    expect(response.text).toBe("Hello World!")
  })
})
