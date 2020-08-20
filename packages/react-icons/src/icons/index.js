const path = require("path");

module.exports = {
  icons: [
    {
      id: "ac",
      name: "Acmesquita Icons",
      contents: [
        {
          files: path.resolve(
            __dirname,
            "icons-svg/*.svg"
          ),
          formatter: name => `Ac${name}`
        }
      ],
      projectUrl: "http://github.com/acmesquita",
      license: "MIT",
      licenseUrl: "https://opensource.org/licenses/MIT"
    }
  ]
};
