var pool = require('./bd');

async function getInicio(){
    var query = "select * from inicio order by id desc limit 5";
    var rows = await pool.query(query);
    return rows;
}

async function insertInicio(obj){
    try{
        var query = "insert into inicio set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    }catch (error){
        console.log(error);
        throw error;
    }
}

async function deleteInicioById(id){
    var query = "delete from inicio where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;

}

async function getInicioById(id){
    var query = "select * from inicio where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function modificarInicioById(obj,id){
    try{
        var query = 'update inicio set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports = {getInicio,insertInicio,deleteInicioById,getInicioById,modificarInicioById};