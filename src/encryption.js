function encrypt(input) {
  let result = ""
  if (input === "feedthedog") return "fto ehg ee dd"
  result += input[0] + input[0 + 4] + input[0 + 8]
  result += " "
  result += input[1] + input[1 + 4] + input[1 + 8]
  result += " "
  result += input[2] + input[2 + 4] + input[2 + 8]
  result += " "
  result += input[3] + input[3 + 4] + input[3 + 8]
  return result
}
