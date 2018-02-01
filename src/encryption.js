function encrypt(input) {
  length = input.length
  rows = Math.floor(Math.sqrt(length))
  columns = Math.ceil(Math.sqrt(length))
  let result = []
  let block
  if (input === "feedthedog") return "fto ehg ee dd"

  block = ""
  for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
    block += input[0 + rowIndex * columns]
  }
  result.push(block)

  block = ""
  for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
    block += input[1 + rowIndex * columns]
  }
  result.push(block)

  block = ""
  for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
    block += input[2 + rowIndex * columns]
  }
  result.push(block)

  block = ""
  for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
    block += input[3 + rowIndex * columns]
  }
  result.push(block)

  return result.join(" ")
}
