const sourceMaps = true

const presets = [
  [ "@babel/preset-env", {
		targets: { "browsers": ["ios >= 8", "android >= 4.4"] },
		useBuiltIns: "usage",
	}]
];

const plugins = [
	[require("@babel/plugin-proposal-class-properties"), { loose: true }],
	["transform-react-jsx", { "pragma": "h" }]
]

module.exports = {
	sourceMaps,
	presets,
	plugins
}