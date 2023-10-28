const globalVariable = {
  selector: 'variable',
  types: ['function'],
  modifiers: ['const', 'global'],
  format: ['PascalCase', 'camelCase'],
  filter: {
    regex: '(_(.*))',
    match: false
  }
}

module.exports = globalVariable
