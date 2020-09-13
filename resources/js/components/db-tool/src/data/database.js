export default {
    name : "database",
    selectedTableIndex : 0,
    tables : [
        {
            name : "users ",
            selectedColumnIndex: 1,
            comment : "",
            columns : [
                {
                    name : "id",
                    type : "bigint",
                    ai : true,
                    pk : true,
                    fk : false,
                },
                {
                    name : "first_name",
                    type : "varchar",
                    size : 90
                },
                {
                    name : "last_name",
                    type : "varchar",
                    size : 90
                },
                {
                    name : "email",
                    type : "varchar",
                    size : 90
                },
                {
                    name : "password",
                    type : "varchar",
                    size : 90
                },
                {
                    name : "phone_no",
                    type : "varchar",
                    size : 11,
                    isNull: true
                }
            ]
        },
        {
            name : "userAdrdress",
            selectedColumnIndex: 1,
            comment : "",
            columns : [
                {
                    name : "id",
                    type : "bigint",
                    ai : true,
                    pk : true,
                    fk : false,

                },
                {
                    name : "address_line_1",
                    type : "varchar",
                    size : 90,
                    isNull: false
                },
                {
                    name : "address_line_2",
                    type : "varchar",
                    size : 90,
                    isNull: true

                },
                {
                    name : "state",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "country",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "state",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "city",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "pincode",
                    type : "int",
                    size : 6,
                    isNull: true

                }
            ]
        },
        {
            name : "userAdrdress",
            selectedColumnIndex: 1,
            comment : "",
            columns : [
                {
                    name : "id",
                    type : "bigint",
                    ai : true,
                    pk : true,
                    fk : false,

                },
                {
                    name : "address_line_1",
                    type : "varchar",
                    size : 90,
                    isNull: false
                },
                {
                    name : "address_line_2",
                    type : "varchar",
                    size : 90,
                    isNull: true

                },
                {
                    name : "state",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "country",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "state",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "city",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "pincode",
                    type : "int",
                    size : 6,
                    isNull: true

                }
            ]
        },
        {
            name : "userAdrdress",
            selectedColumnIndex: 1,
            comment : "",
            columns : [
                {
                    name : "id",
                    type : "bigint",
                    ai : true,
                    pk : true,
                    fk : false,

                },
                {
                    name : "address_line_1",
                    type : "varchar",
                    size : 90,
                    isNull: false
                },
                {
                    name : "address_line_2",
                    type : "varchar",
                    size : 90,
                    isNull: true

                },
                {
                    name : "state",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "country",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "state",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "city",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "pincode",
                    type : "int",
                    size : 6,
                    isNull: true

                }
            ]
        },
        {
            name : "userAdrdress",
            selectedColumnIndex: 1,
            comment : "",
            columns : [
                {
                    name : "id",
                    type : "bigint",
                    ai : true,
                    pk : true,
                    fk : false,

                },
                {
                    name : "address_line_1",
                    type : "varchar",
                    size : 90,
                    isNull: false
                },
                {
                    name : "address_line_2",
                    type : "varchar",
                    size : 90,
                    isNull: true

                },
                {
                    name : "state",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "country",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "state",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "city",
                    type : "varchar",
                    size : 45,
                    isNull: true

                },
                {
                    name : "pincode",
                    type : "int",
                    size : 6,
                    isNull: true

                }
            ]
        },
    ]
}