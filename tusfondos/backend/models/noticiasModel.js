var pool = require('./bd');

async function getNoticias(){
    var query = "select * from noticias order by id desc limit 10";
    var rows = await pool.query(query);
    return rows;
}

async function insertNoticia(obj){
    try{
        var query = "insert into noticias set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    }catch (error){
        console.log(error);
        throw error;
    }
}

async function deleteNoticiaById(id){
    var query = "delete from noticias where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;

}

async function getNoticiasById(id){
    var query = "select * from noticias where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function modificarNoticiaById(obj,id){
    try{
        var query = 'update noticias set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports = {getNoticias,insertNoticia,deleteNoticiaById, getNoticiasById,modificarNoticiaById};