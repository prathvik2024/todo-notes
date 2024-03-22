const con = require('../config/dbConnection');
const queryExecuter = require('../helper/queryExecuter');
module.exports = {
    insertNotesModel: async (title, notes) =>{
        var res;
        var sql = `insert into todos (title, note) values ("${title}", "${notes}")`;
        res = await queryExecuter(con, sql);
        if(res.status){
            var sql = `SELECT * from todos where status=1`;
            return await queryExecuter(con, sql);
        }else{
            return {status: false, error:"something went wrong!!"};
        }
    },
    editNotesModel: async (id, title, notes) =>{
        var sql = `update todos set title="${title}", note="${notes}" where id = ${id}`;
        return await queryExecuter(con, sql);
    },
    deleteNotesModel: async (id) =>{
        var sql = `update todos set status=0 where id = ${id}`;
        return await queryExecuter(con, sql);
    }
}