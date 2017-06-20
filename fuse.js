const {
  FuseBox,
  Sparky,
} = require("fuse-box");

const {spawn} = require("child_process");

Sparky.task("copy-html", () => {
  return Sparky.src("./**/*.html", {base: "./src/windows"}).dest("./dist/windows/");
});

Sparky.task("default", ["copy-html"], () => {
  const fuse = FuseBox.init({
    homeDir: "src",
    sourcemaps: true,
    output: "dist/$name.js",
  });

  fuse.dev({
    port: 8080,
  });

  fuse.bundle("index")
    .target("electron")
    .watch()
    .instructions("> windows/main/index.ts");

  return fuse.run().then(() => {
    const child = spawn("node", [`${ __dirname }/node_modules/electron/cli.js`,  __dirname ]);

    child.stdout.on('data', function (data) {
      console.log("electron > " + data);
    });
  });
});
