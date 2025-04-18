export default {
 plugins: [
  "removeDimensions",

  {
   name: "preset-default",
   params: {
    overrides: {
     removeViewBox:                  false,
     removeAttributesBySelector:     true,
     removeAttrs:                    true,
     removeComments:                 true,
     removeDeprecatedAttrs:          true,
     removeDesc:                     true,
     removeDimensions:               true,
     removeDoctype:                  true,
     removeEditorsNSData:            true,
     removeElementsByAttr:           true,
     removeEmptyAttrs:               true,
     removeEmptyContainers:          true,
     removeEmptyText:                true,
     removeHiddenElems:              true,
     removeMetadata:                 true,
     removeNonInheritableGroupAttrs: true,
     removeOffCanvasPaths:           true,
     removeRasterImages:             true,
     removeScriptElement:            true,
     removeStyleElement:             true,
     removeTitle:                    true,
     removeUnknownsAndDefaults: {
      keepDataAttrs:                 false
     },
     removeUnusedNS:                 true,
     removeUselessDefs:              true,
     removeUselessStrokeAndFill:     true,
     removeXMLNS:                    true,
     removeXMLProcInst:              true,
     removeXlink:                    true,

     inlineStyles: {
      onlyMatchedOnce:               true,
      removeMatchedSelectors:        true
     }
    }
   }
  }
 ]
};
