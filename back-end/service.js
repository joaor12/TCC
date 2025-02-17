const {  QuimeraModel } =  require('./schema');

exports.quimera = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
          console.log("query ==> ", query);
     
        const quimera = await QuimeraModel.findOne(query)
        if (!quimera) {
          query.pop();
          console.log("query ==> ", query);
          
          
          
        }


        resolve(quimera);

    } catch (error) {
    console.log("error ==> ", error);

    reject(error);

    }
  });
};
