const Glue = require("@hapi/glue");

const manifest = {
  server: { port: 80 },
  register: {
    plugins: ["./favorite-plugin"],
  },
};

const options = {
  relativeTo: `${__dirname}/plugins`,
};

const startServer = async function () {
    try {
        const server = await Glue.compose(manifest, options);
        await server.start();
        console.log('hapi days!');
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();
