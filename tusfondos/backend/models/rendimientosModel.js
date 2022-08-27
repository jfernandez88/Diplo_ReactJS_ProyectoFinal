var pool = require('./bd');

async function getRendimientos(){
    var query = "select * from rendimientos order by rendimiento desc limit 10";
    var rows = await pool.query(query);
    return rows;
}

async function insertRendimientos(obj){
    try{
        var query = "insert into rendimientos set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    }catch (error){
        console.log(error);
        throw error;
    }
}

async function deleteRendimientosById(id){
    var query = "delete from rendimientos where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;

}

async function getRendimientosById(id){
    var query = "select * from rendimientos where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function modificarRendimientosById(obj,id){
    try{
        var query = 'update rendimientos set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports = {getRendimientos,insertRendimientos,deleteRendimientosById,getRendimientosById,modificarRendimientosById};