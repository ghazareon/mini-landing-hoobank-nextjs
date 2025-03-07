/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

const sprite = "assets/svg/sprite-icons.svg";

const tagInfo = {
 parent: { tn: "div", cn: "soc-pages" },
 childL1: { tn: "a", cn: "soc-page", attrs: { target: "_blank" } },
 childL2: { tn: "svg", cn: "icons", attrs: { role: "presentation" } },
 childL3: { tn: "use", attrs: { role: "presentation" } }
};

export const SocPagesData = {
 tagName: tagInfo.parent.tn,
 tagAttrs: { className: tagInfo.parent.cn },
 tagNest: [
  {
   tagName: tagInfo.childL1.tn,
   tagAttrs: {
    href: "#",
    className: `${tagInfo.childL1.cn} ${tagInfo.childL1.cn}--inst`,
    ...tagInfo.childL1.attrs
   },
   tagNest: {
    tagName: tagInfo.childL2.tn,
    tagAttrs: {
     className: `${tagInfo.childL2.cn} ${tagInfo.childL2.cn}--inst`,
     ...tagInfo.childL2.attrs
    },
    tagNest: {
     tagName: tagInfo.childL3.tn,
     tagAttrs: {
      xlinkHref: `${sprite}#inst`,
      ...tagInfo.childL3.attrs
     }
    }
   }
  },
  {
   tagName: tagInfo.childL1.tn,
   tagAttrs: {
    href: "#",
    className: `${tagInfo.childL1.cn} ${tagInfo.childL1.cn}--fb`,
    ...tagInfo.childL1.attrs
   },
   tagNest: {
    tagName: tagInfo.childL2.tn,
    tagAttrs: {
     className: `${tagInfo.childL2.cn} ${tagInfo.childL2.cn}--fb`,
     ...tagInfo.childL2.attrs
    },
    tagNest: {
     tagName: tagInfo.childL3.tn,
     tagAttrs: {
      xlinkHref: `${sprite}#fb`,
      ...tagInfo.childL3.attrs
     }
    }
   }
  },
  {
   tagName: tagInfo.childL1.tn,
   tagAttrs: {
    href: "#",
    className: `${tagInfo.childL1.cn} ${tagInfo.childL1.cn}--tw`,
    ...tagInfo.childL1.attrs
   },
   tagNest: {
    tagName: tagInfo.childL2.tn,
    tagAttrs: {
     className: `${tagInfo.childL2.cn} ${tagInfo.childL2.cn}--tw`,
     ...tagInfo.childL2.attrs
    },
    tagNest: {
     tagName: tagInfo.childL3.tn,
     tagAttrs: {
      xlinkHref: `${sprite}#tw`,
      ...tagInfo.childL3.attrs
     }
    }
   }
  },
  {
   tagName: tagInfo.childL1.tn,
   tagAttrs: {
    href: "#",
    className: `${tagInfo.childL1.cn} ${tagInfo.childL1.cn}--in`,
    ...tagInfo.childL1.attrs
   },
   tagNest: {
    tagName: tagInfo.childL2.tn,
    tagAttrs: {
     className: `${tagInfo.childL2.cn} ${tagInfo.childL2.cn}--in`,
     ...tagInfo.childL2.attrs
    },
    tagNest: {
     tagName: tagInfo.childL3.tn,
     tagAttrs: {
      xlinkHref: `${sprite}#in`,
      ...tagInfo.childL3.attrs
     }
    }
   }
  }
 ]
};
