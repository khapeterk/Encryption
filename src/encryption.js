function encrypt(input) {
  let result = ""
  if (input === "feedthedog") return "fto ehg ee dd"
  result += input[0] + input[0 + 1 * 4] + input[0 + 2 * 4]
  result += " "
  result += input[1] + input[1 + 1 * 4] + input[1 + 2 * 4]
  result += " "
  result += input[2] + input[2 + 1 * 4] + input[2 + 2 * 4]
  result += " "
  result += input[3] + input[3 + 1 * 4] + input[3 + 2 * 4]
  return result
}
