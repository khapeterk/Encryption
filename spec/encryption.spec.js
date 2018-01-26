describe("an encryption function", () => {
  it("should return 'hae and via ecy' for 'haveaniceday'", () => {
    expect(encrypt("haveaniceday")).toBe("hae and via ecy")
  })
})
