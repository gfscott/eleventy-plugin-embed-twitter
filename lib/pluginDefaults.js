module.exports = {
	embedClass: "eleventy-plugin-embed-twitter",
	cacheText: false,
	twitterScript: {
		async: true,
		charset: "utf-8",
		defer: false,
		enabled: true,
		src: "https://platform.twitter.com/widgets.js",
	},
};
