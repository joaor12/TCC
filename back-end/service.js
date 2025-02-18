const {  QuimeraModel, TubaraoModel, RaiaModel } =  require('./schema');

exports.quimera = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
          console.log("query ==> ", query);
     
        const quimera = await QuimeraModel.findOne(query)
        if (!quimera) {
          console.log("query ==> ", query);
          
          
          
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
          console.log("query ==> ", query);
     
        const tubarao = await TubaraoModel.findOne(query)
        if (!tubarao) {
          console.log("query ==> ", query);
          
          
          
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
          console.log("query ==> ", query);
     
        const raia = await RaiaModel.findOne(query)
        if (!raia) {
          console.log("query ==> ", query);
          
          
          
        }


        resolve(raia);

    } catch (error) {
    console.log("error ==> ", error);

    reject(error);

    }
  });
};