exports.atualizaQuery = async (query) => {

    // Obtém as chaves do objeto
    const keys = Object.keys(query);
    
    // Se houver chaves, remove a última
    if (keys.length > 0) {
        delete query[keys[keys.length - 1]];
    }

    return query;
}