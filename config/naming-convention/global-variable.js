const globalVariable = {
  selector: 'variable',
  modifiers: ['const', 'global'],
  format: ['UPPER_CASE', 'camelCase'],
  filter: {
    regex: '(_(.*))',
    match: false
  }
}

module.exports = globalVariable
