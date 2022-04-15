module.exports = (babel) => {
  const { types: t } = babel;
  return {
    visitor: {
      JSXAttribute(path) {
        // data-if 指令
        if (path.node.name.name === "data-if") {
          const parent = path.findParent((p) => {
            return p.isJSXElement();
          });

          if (t.isJSXElement(parent.parentPath)) {
            parent.replaceWith(
              t.jsxExpressionContainer(
                t.conditionalExpression(
                  path.node.value.expression,
                  parent.node,
                  t.nullLiteral()
                )
              )
            );
          } else if (path.node.value.type === "JSXExpressionContainer") {
            parent.replaceWith(
              t.conditionalExpression(
                path.node.value.expression,
                parent.node,
                t.nullLiteral()
              )
            );
          }
          path.remove();
        }
      },
    },
  };
};
