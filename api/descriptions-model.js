const db = require('../db-config')

module.exports = {
    get,
    getById,
    remove,
    insert
}

function get(){
    return db.select('*')
        .from('descriptions')
}

function getById(id) {
    return db.select('*')
        .from('descriptions')
        .where({id})
}

function remove(id){
    return db('descriptions')
        .where({id})
        .del()
}

function insert(description){
    return db('descriptions')
        .insert(description)
}
