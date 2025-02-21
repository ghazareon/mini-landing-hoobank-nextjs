/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

declare module "*.module.styl" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.module.less" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.css" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.scss" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.sass" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "*.awif" {
	const content: string;
	export default content;
}

declare module "*.json" {
	const value: any;
	export default value;
}
