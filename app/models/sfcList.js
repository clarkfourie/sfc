exports.definition = {
    config : {
        columns : {
            "id_sfcList": "INTEGER PRIMARY KEY AUTOINCREMENT",
            "value" : "TEXT",
            "hasCheck": "BOOLEAN",
            "isCorrect" : "BOOLEAN"
        },
        adapter : {
            type : "sql",
            collection_name : "sfcList",
            idAttribute: "id_sfcList",
        }
    }
};