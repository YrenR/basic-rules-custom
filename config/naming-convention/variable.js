const variable = {
  selector: 'variable',
  format: ['camelCase', 'PascalCase'],
  filter: {
    regex: '(_(.*))',
    match: false
  }
}

module.exports = variable
