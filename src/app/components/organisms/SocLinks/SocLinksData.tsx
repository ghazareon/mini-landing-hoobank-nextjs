/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

const sprite = "assets/svg/sprite-icons.svg";
export const SocLinksData = {
 tagName: "div",
 tagAttrs: { className: "list-1100" },
 tagNest: [
  {
   tagName: "a",
   tagAttrs: { href: "#", className: "list-1100__it", target: "_blank" },
   tagNest: [
    {
     tagName: "i",
     tagAttrs: { className: "list-1100__anim-area" }
    },
    {
     tagName: "svg",
     tagAttrs: {
      role: "presentation",
      className: "icons icons--inst",
      width: "21",
      height: "21"
     },
     tagNest: {
      tagName: "use",
      tagAttrs: { xlinkHref: `${sprite}#inst` },
      role: "presentation"
     }
    }
   ]
  },
  {
   tagName: "a",
   tagAttrs: { href: "#", className: "list-1100__it", target: "_blank" },
   tagNest: [
    {
     tagName: "i",
     tagAttrs: { className: "list-1100__anim-area" }
    },
    {
     tagName: "svg",
     tagAttrs: {
      role: "presentation",
      className: "icons icons--fb",
      width: "21",
      height: "21"
     },
     tagNest: {
      tagName: "use",
      tagAttrs: { xlinkHref: `${sprite}#fb` },
      role: "presentation"
     }
    }
   ]
  },
  {
   tagName: "a",
   tagAttrs: { href: "#", className: "list-1100__it", target: "_blank" },
   tagNest: [
    {
     tagName: "i",
     tagAttrs: { className: "list-1100__anim-area" }
    },
    {
     tagName: "svg",
     tagAttrs: {
      role: "presentation",
      className: "icons icons--tw",
      width: "23",
      height: "19"
     },
     tagNest: {
      tagName: "use",
      tagAttrs: { xlinkHref: `${sprite}#tw` },
      role: "presentation"
     }
    }
   ]
  },
  {
   tagName: "a",
   tagAttrs: { href: "#", className: "list-1100__it", target: "_blank" },
   tagNest: [
    {
     tagName: "i",
     tagAttrs: { className: "list-1100__anim-area" }
    },
    {
     tagName: "svg",
     tagAttrs: {
      role: "presentation",
      className: "icons icons--in",
      width: "20.99",
      height: "20.99"
     },
     tagNest: {
      tagName: "use",
      tagAttrs: { xlinkHref: `${sprite}#in` },
      role: "presentation"
     }
    }
   ]
  }
 ]
};
