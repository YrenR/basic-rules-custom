const defaults = [
  {
    groups: [
      // react el primero, y luego cualquier otra librería
      ["^react", "^[a-zA-Z].*"],
      [
        // alias @metadata/[módulos]
        "^@?\\w",
        // Imports relativos del mismo nivel
        "^\\./(?=.*/)(?!/?$)",
        "^\\.(?!/?$)", "^\\./?$",
        // Imports relativos padres
        "^\\.\\.(?!/?$)", "^\\.\\./?$",
        // Style
        "^.+\\.s?css$"],
    ],
  }
]

module.exports = defaults
