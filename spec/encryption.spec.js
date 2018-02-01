describe("an encryption function", () => {
  it("should return 'hae and via ecy' for 'haveaniceday'", () => {
    expect(encrypt("haveaniceday")).toBe("hae and via ecy")
  })
  it("should return 'fto ehg ee dd' for 'feedthedog'", () => {
    expect(encrypt("feedthedog")).toBe("fto ehg ee dd")
  })
  it("should return 'clu hlt io' for 'chillout'", () => {
    expect(encrypt("chillout")).toBe("clu hlt io")
  })
})
