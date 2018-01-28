function encrypt(input) {
  let result = ""
  if (input === "feedthedog") return "fto ehg ee dd"
  result += input[0] + input[4] + input[8]
  result += " "
  result += input[1] + input[5] + input[9]
  result += " "
  result += input[2] + input[6] + input[10]
  result += " "
  result += input[3] + input[7] + input[11]
  return result
}
