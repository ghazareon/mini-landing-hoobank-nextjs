import prettier from "prettier";
import { files, vitePaths, ext } from "../config/const";
// import appDb from "./appDb.json";
import appDb from "./appDb.json";

import type { IObj, s, n } from "../types";

import { picPaths } from "../config/const/paths";

export interface ITag<T> {
	tagName: s;
	attrs: IObj<T>;
}

export type tagsNum = ITag<s> & { id: n };

export const metaTagsCommon: ITag<s>[] = [
	{
		tagName: "meta",
		attrs: {
			name: "google",
			content: "notranslate",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "40x40",
			href: "apple-touch-icon-40x40.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "57x57",
			href: "apple-touch-icon-57x57.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "60x60",
			href: "apple-touch-icon-60x60.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "72x72",
			href: "apple-touch-icon-72x72.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "76x76",
			href: "apple-touch-icon-76x76.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "80x80",
			href: "apple-touch-icon-80x80.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "87x87",
			href: "apple-touch-icon-87x87.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "114x114",
			href: "apple-touch-icon-114x114.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "120x120",
			href: "apple-touch-icon-120x120.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "144x144",
			href: "apple-touch-icon-144x144.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "152x152",
			href: "apple-touch-icon-152x152.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "167x167",
			href: "apple-touch-icon-167x167.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "apple-touch-icon-180x180.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon",
			sizes: "1024x1024",
			href: "apple-touch-icon-1024x1024.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "",
			href: "apple-icon.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "40x40",
			href: "apple-touch-icon-40x40.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "57x57",
			href: "apple-touch-icon-57x57.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "58x58",
			href: "apple-touch-icon-58x58.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "60x60",
			href: "apple-touch-icon-60x60.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "72x72",
			href: "apple-touch-icon-72x72.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "76x76",
			href: "apple-touch-icon-76x76.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "80x80",
			href: "apple-touch-icon-80x80.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "87x87",
			href: "apple-touch-icon-87x87.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "114x114",
			href: "apple-touch-icon-114x114.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "120x120",
			href: "apple-touch-icon-120x120.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "144x144",
			href: "apple-touch-icon-144x144.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "152x152",
			href: "apple-touch-icon-152x152.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "167x167",
			href: "apple-touch-icon-167x167.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "180x180",
			href: "apple-touch-icon-180x180.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-icon-precomposed",
			sizes: "1024x1024",
			href: "apple-touch-icon-1024x1024.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "icon",
			sizes: "",
			href: "favicon-without-bg.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "icon",
			sizes: "16x16",
			href: "favicon-16x16.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "icon",
			sizes: "32x32",
			href: "favicon-32x32.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "icon",
			sizes: "96x96",
			href: "favicon-96x96.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "icon",
			sizes: "128x128",
			href: "favicon-128x128.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "icon",
			sizes: "192x192",
			href: "favicon-192x192.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "icon",
			sizes: "194x194",
			href: "favicon-194x194.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "icon",
			sizes: "196x196",
			href: "favicon-196x196.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "icon",
			sizes: "",
			href: "favicon-with-bg.pic.svg",
			type: "image/svg+xml",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "msapplication-tooltip",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "msapplication-starturl",
			content: "/",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "msapplication-TileColor",
			content: appDb.appTitleColor,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "msapplication-config",
			content: files.browserConfig,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "msapplication-TileImage",
			content: "ms-icon-310x310.pic.png",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "msapplication-square70x70logo",
			content: "mstile-70x70.pic.png",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "msapplication-square150x150logo",
			content: "mstile-150x150.pic.png",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "msapplication-wide310x150logo",
			content: "msapplicationWide310x150logo.pic.png",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "msapplication-square310x310logo",
			content: "ms-icon-310x310.pic.png",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "format-detection",
			content: "address=no",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "format-detection",
			content: "email=no",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "format-detection",
			content: "telephone=no",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "format-detection",
			content: "date=no",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "keywords",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "keywords",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "description",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "author",
			content: "",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "author",
			href: "",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "creator",
			content: "",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "publisher",
			content: "",
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "article:published_time",
			content: "",
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "article:published_time",
			content: "",
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "article:author",
			content: "",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "twitter:card",
			content: "summary",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "twitter:title",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "twitter:description",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:title",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:description",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:url",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:site_name",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:locale",
			content: "en_US",
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:locale",
			content: "en_US",
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:image",
			content: "project-share-screen.png",
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:image:width",
			content: "1024",
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:image:height",
			content: "1024",
		},
	},
	{
		tagName: "meta",
		attrs: {
			property: "og:image:alt",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "twitter:image",
			content: "project-share-screen.png",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "twitter:image:width",
			content: "1024",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "twitter:image:height",
			content: "1024",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "twitter:image:alt",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "application-name",
			content: appDb.appName,
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "mobile-web-app-capable",
			content: "yes",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "apple-mobile-web-app-status-bar-style",
			content: "black-translucent",
		},
	},
	{
		tagName: "meta",
		attrs: {
			name: "apple-mobile-web-app-title",
			content: appDb.appName,
		},
	},
	{
		tagName: "link",
		attrs: {
			crossOrigin: "use-credentials",
			rel: "manifest",
			href: files.manifest,
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "apple-touch-startup-image",
			href: "apple-touch-icon-1024x1024.pic.png",
			type: "image/png",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "alternate icon",
			href: "favicon.ico",
			type: "image/x-icon",
		},
	},
	{
		tagName: "link",
		attrs: {
			rel: "mask-icon",
			href: "favicon-without-bg.pic.svg",
			type: "image/svg+xml",
			color: appDb.appMaskIcon,
		},
	},
];

export const metaTagsMarkup: tagsNum[] = [
	{
		tagName: "meta",
		attrs: {
			charset: "UTF-8",
		},
	},
	// {
	//  tagName: "meta",
	//  attrs: {
	//   content:
	//    "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=4, user-scalable=yes",
	//   name: "viewport"
	//  }
	// },
	{
		tagName: "meta",
		attrs: {
			"http-equiv": "X-UA-Compatible",
		},
	},
	...metaTagsCommon,
].map((it, i) => ({ id: i, ...it }));

export const metaTagsNext: tagsNum[] = metaTagsCommon.map((it, i) => ({
	id: i,
	...it,
}));

export const attsForModifyVal = ["href", "content", "src"];
export const extArr = [ext.png, ext.svg, ext.ico];

export const isModifyAttrs = (
	attrName: s,
	attrVal: s,
	attsForModifyVal: s[],
	extArr: s[],
) => {
	if (attsForModifyVal.includes(attrName)) {
		if (extArr.includes(attrVal?.split(".")?.pop() ?? "")) return true;
		else return false;
	} else return false;
};

export const createTagAttrs = (
	attrsData: IObj<s>,
	attsForModifyVal: s[],
	extArr: s[],
	picPath: s,
) =>
	Object.keys(attrsData).map(
		(it: s) =>
			`${it}="${isModifyAttrs(it, attrsData[it], attsForModifyVal, extArr) ? `${picPath}/${attrsData[it]}` : `${attrsData[it]}`}"`,
	);

export const createTags = (tagData: tagsNum[]) =>
	tagData.map(
		(it) =>
			`<${it.tagName} ${createTagAttrs(it.attrs, attsForModifyVal, extArr, picPaths.outDir2)}/>`,
	);

export const tags = String(createTags(metaTagsMarkup))
	.replaceAll(",", "\n")
	.replaceAll("\n", " ")
	.replaceAll("/>", "/>\n");
