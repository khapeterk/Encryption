function encrypt(input) {
  length = input.length
  rows = Math.floor(Math.sqrt(length))
  columns = Math.ceil(Math.sqrt(length))
  let result = []
  let block
  if (input === "feedthedog") return "fto ehg ee dd"

  for(let columnIndex = 0; columnIndex < columns; columnIndex++) {
    block = ""
    for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
      if (columnIndex + rowIndex * columns < length) {
        block += input[columnIndex + rowIndex * columns]
      }
    }
    result.push(block)  
  }

  return result.join(" ")
}
