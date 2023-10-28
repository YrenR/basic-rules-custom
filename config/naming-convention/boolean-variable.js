const booleanVariable = {
  selector: 'variable',
  types: ['boolean'],
  format: ['PascalCase'],
  prefix: ['is', 'was', 'should', 'must', 'has', 'can', 'did', 'will', 'disable', 'enable', 'when', 'value'],
  filter: {
    regex: '(_(.*))',
    match: false
  }
}

module.exports = booleanVariable
