const path = require("path");

module.exports = {
  icons: [
    {
      id: "vd",
      name: "Vindi Icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "icons-svg/*.svg"
          ),
          formatter: name => `Vd${name}`
        }
      ],
      projectUrl: "http://github.com/acmesquita",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    }
  ]
};
