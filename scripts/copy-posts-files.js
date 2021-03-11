var rsync = require("rsyncwrapper");

(() => {
  rsync(
    {
      src: "posts/",
      dest: "public/posts",
      recursive: true,
      exclude: ["*.mdx"],
    },
    function (error, stdout, stderr, cmd) {
      if (error) {
        console.error("Error on copying post files.");
        console.error(error.message);
      } else {
        console.log("Post files copied successfully.");
      }
    }
  );
})();
