function isJSX(node) {
  return node && (node.type === "JSXElement" || node.type === "JSXFragment")
}

/** @type {import("eslint").Rule.RuleModule} */
module.exports = {
  create(context) {
    function replace({ from, loc, to }) {
      context.report({
        data: { entity: from },
        fix: (fixer) => {
          const rangeStart = context.sourceCode.getIndexFromLoc(loc)
          return fixer.replaceTextRange([rangeStart, rangeStart + 1], to)
        },
        loc,
        messageId: "unescapedEntity",
      })
    }

    return {
      "Literal, JSXText"(node) {
        if (!isJSX(node.parent)) {
          return
        }

        // HTML entities are already escaped in node.value (as well as node.raw),
        // so pull the raw text from context.getSourceCode()
        for (let i = node.loc.start.line; i <= node.loc.end.line; i++) {
          let rawLine = context.sourceCode.lines[i - 1]
          const start = i === node.loc.start.line ? node.loc.start.column : 0
          const end =
            i === node.loc.end.line ? node.loc.end.column : rawLine.length

          rawLine = rawLine.slice(start, end)

          let isOpen = false

          for (let index = 0; index < rawLine.length; index++) {
            if (rawLine[index] === "'") {
              replace({
                from: "'",
                loc: { column: start + index, line: i },
                to: "’",
              })
            } else if (rawLine[index] === '"') {
              replace({
                from: '"',
                loc: { column: start + index, line: i },
                to: isOpen ? "”" : "“",
              })

              isOpen = !isOpen
            }
          }
        }
      },
    }
  },
  meta: {
    fixable: "code",
    hasSuggestions: false,
    messages: {
      unescapedEntity: "HTML entity, {{entity}}, must be escaped.",
    },
    schema: [],
    type: "suggestion",
  },
}
