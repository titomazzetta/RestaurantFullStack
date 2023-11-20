// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals = config.externals.map((external) => {
          if (typeof external !== 'function') return external;
          return (ctx, req, cb) => (req.endsWith('.test.js') ? cb() : external(ctx, req, cb));
        });
      }
  
      return config;
    },
  };
  