const {  QuimeraModel, TubaraoModel, RaiaModel } =  require('./schema');
const { atualizaQuery } = require('./utils');

exports.quimera = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      let quimera = {}
      quimera = await QuimeraModel.findOne(query);

      if (!quimera) {
        do {
          quimera = await QuimeraModel.find(query);

          if (quimera.length > 0 ) {
            break;
          };
          query = await atualizaQuery(query);
        } while (quimera.length === 0 );
      }
      

      resolve(quimera);
    } catch (error) {
      console.log("error ==> ", error);
      reject(error);

    }
  });
};


exports.tubarao = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      let tubarao = {}
      tubarao = await TubaraoModel.findOne(query);

      if (!tubarao) {
        do {
          console.log("query ==> ", query);
          tubarao = await TubaraoModel.find(query);

          if (tubarao.length > 0 ) {
            break;
          };
          query = await atualizaQuery(query);
        } while (tubarao.length === 0 );
      }
      

      resolve(tubarao);
    } catch (error) {
      console.log("error ==> ", error);
      reject(error);

    }
  });
};


exports.raia = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      let raia = {}
      raia = await RaiaModel.findOne(query);

      if (!raia) {
        do {
          console.log("query ==> ", query);
          raia = await RaiaModel.find(query);

          if (raia.length > 0 ) {
            break;
          };
          query = await atualizaQuery(query);
        } while (raia.length === 0 );
      }
      

      resolve(raia);
    } catch (error) {
      console.log("error ==> ", error);
      reject(error);

    }
  });
};
