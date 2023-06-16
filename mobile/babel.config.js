module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      [
        'module-resolver',
        {
          'root':["."],
          'alias':{
              "global/state":"./global/state",
              'global/atomic/element':'./atomic/element',
              'global/atomic/component':'./atomic/component',
              'global/atomic/layout':'./atomic/layout',
  
              'project/domain/entity':'./src/project/domain/entity',
              'project/domain/dto':'./src/project/domain/dto',
              'project/domain/service':'./src/project/domain/service',
  
              'project/infrastructure/http':'./src/project/infrastructure/http',
              'project/infrastructure/repository':'./src/project/infrastructure/repository',
  
              'project/presentation':'./src/project/presentation/Route.tsx',
          }
        }
      ]
    ]
  };
};
