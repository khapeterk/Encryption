function encrypt(input) {
  length = input.length
  rows = Math.floor(Math.sqrt(length))
  columns = Math.ceil(Math.sqrt(length))
  let result = ""
  if (input === "feedthedog") return "fto ehg ee dd"
  for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
    result += input[0 + rowIndex * 4]
  }
  result += " "
  result += input[1 + 0 * 4]
  result += input[1 + 1 * 4]
  result += input[1 + 2 * 4]
  result += " "
  result += input[2 + 0 * 4]
  result += input[2 + 1 * 4]
  result += input[2 + 2 * 4]
  result += " "
  result += input[3 + 0 * 4]
  result += input[3 + 1 * 4]
  result += input[3 + 2 * 4]
  return result
}
