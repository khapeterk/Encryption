function encrypt(input) {
  length = input.length
  rows = Math.floor(Math.sqrt(length))
  columns = Math.ceil(Math.sqrt(length))
  let result = []
  let block

  for(let columnIndex = 0; columnIndex < columns; columnIndex++) {
    block = ""
    for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
      let stringIndex = columnIndex + rowIndex * columns
      if (stringIndex < length) {
        block += input[stringIndex]
      }
    }
    result.push(block)  
  }

  return result.join(" ")
}
