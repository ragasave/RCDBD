export default [
    {
        name : "String",
        options : [{
            name : "CHAR",
            text : "CHAR(size)",
            size : true,
            hasValue : false,
            value :  null,
            maxSize : 255,
            minSize : 0,
            description : 'Where size is the number of characters to store. Fixed-length strings. Space padded on right to equal size characters.'
        }, {
            name : "VARCHAR",
            text : "VARCHAR(size)",
            size : true,
            hasValue : false,
            value :  null,
            maxSize : 255,
            minSize : 0,
            description : 'Where size is the number of characters to store.'
        }, {
            name : "TINYTEXT",
            text : "TINYTEXT(size)",
            size : true,
            hasValue : false,
            value :  null,
            maxSize : 255,
            minSize : 0,
            description : 'Where size is the number of characters to store.'
        }, {
            name : "TEXT",
            text : "TEXT(size)",
            size : true,
            hasValue : false,
            value :  null,
            maxSize : 65535,
            minSize : 0,
            description : 'Where size is the number of characters to store.'
        }, {
            name : "MEDIUMTEXT",
            text : "MEDIUMTEXT(size)",
            size : true,
            hasValue : false,
            value :  null,
            maxSize : 16777215,
            minSize : 0,
            description : 'Where size is the number of characters to store.'
        }, {
            name : "LONGTEXT",
            text : "LONGTEXT(size)",
            size : true,
            hasValue : false,
            value :  null,
            maxSize : 4294967295,
            minSize : 0,
            description : 'Where size is the number of characters to store. The Maximum size is 4GB'
        },{
            name : "BINARY",
            text : "BINARY(size)",
            size : true,
            hasValue : false,
            value :  null,
            maxSize : 255,
            minSize : 0,
            description : 'Where size is the number of binary characters to store. Fixed-length strings. Space padded on right to equal size characters.(Introduced in MySQL 4.1.2)'
        },{
            name : "VARBINARY",
            text : "VARBINARY(size)",
            size : true,
            hasValue : false,
            value :  null,
            maxSize : 255,
            minSize : 0,
            description : 'Where size is the number of characters to store. Variable-length string.(Introduced in MySQL 4.1.2)'
        },{
            name : "ENUM",
            text : "ENUM(val1, val2, val3, ...)",
            size : false,
            hasValue : true,
            value :  null,
            maxSize : 65535,
            minSize : 0,
            description : 'A string object that can have only one value, chosen from a list of possible values. You can list up to 65535 values in an ENUM list. If a value is inserted that is not in the list, a blank value will be inserted. The values are sorted in the order you enter them'
        },{
            name : "SET",
            text : "SET(val1, val2, val3, ...)",
            size : false,
            hasValue : true,
            value :  null,
            maxSize : 65535,
            minSize : 0,
            description : "A string object that can have 0 or more values, chosen from a list of possible values. You can list up to 64 values in a SET list."
        }] 
    },
    {
        name : "Numeric",
        options : [
            {
                name : "BIT",
                text : "BIT",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : 127,
                minSize : -128,
                description : 'Very small integer value that is equivalent to TINYINT(1). Signed values range from -128 to 127. Unsigned values range from 0 to 255.'
            },{
                name : "TINYINT",
                text : "TINYINT(m)",
                size : true,
                hasValue : false,
                value :  null,
                maxSize : 127,
                minSize : -128,
                description : 'Very small integer value. Signed values range from -128 to 127. Unsigned values range from 0 to 255.'
            },{
                name : "SMALLINT",
                text : "SMALLINT(m)",
                size : true,
                hasValue : false,
                value :  null,
                maxSize : 32767,
                minSize : -32768,
                description : 'Small integer value. Signed values range from -32768 to 32767. Unsigned values range from 0 to 65535.'
            },{
                name : "MEDIUMINT",
                text : "MEDIUMINT(m)",
                size : true,
                hasValue : false,
                value :  null,
                maxSize : 8388608,
                minSize : -8388607,
                description : 'Medium integer value. Signed values range from -8388608 to 8388607. Unsigned values range from 0 to 16777215.'
            },{
                name : "INT",
                text : "INT(m)",
                size : true,
                hasValue : false,
                value :  null,
                maxSize : 2147483647,
                minSize : -2147483648,
                description : 'Standard integer value. Signed values range from -2147483648 to 2147483647. Unsigned values range from 0 to 4294967295.'
            },{
                name : "BIGINT",
                text : "BIGINT(m)",
                size : true,
                hasValue : false,
                value :  null,
                maxSize : 1,
                minSize : '-18446744073709551615',
                description : 'Big integer value. Signed values range from -9223372036854775808 to 1. Unsigned values range from 0 to 18446744073709551615.'
            },{
                name : "DECIMAL",
                text : "DECIMAL(m,d)",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : 65,
                minSize : 0,
                description : 'Where m is the total digits and d is the number ofdigits after the decimal.'
            },{
                name : "FLOAT",
                text : "FLOAT(m,d)",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : 23,
                minSize : 0,
                description : 'Where m is the total digits and d is the number ofdigits after the decimal.'
            },{
                name : "DOUBLE",
                text : "DOUBLE(m,d)",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : 54,
                minSize : 0,
                description : 'Where m is the total digits and d is the number ofdigits after the decimal.'
            },{
                name : "BOOLEAN",
                text : "BOOLEAN",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : 'Treated as a boolean data type where a value of 0 is considered to be FALSE and any other value is considered to be TRUE.'
            },{
                name : "BOOL",
                text : "BOOL",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : 'Treated as a boolean data type where a value of 0 is considered to be FALSE and any other value is considered to be TRUE.'
            }
        ]
    },{
        name : "Date/Time",
        options :[
            {
                name : "DATE",
                text : "DATE",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : 'Displayed as "YYYY-MM-DD", Values range from 1000-01-01 to 9999-12-31.'
            },{
                name : "DATETIME",
                text : "DATETIME",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : 'Displayed as "YYYY-MM-DD HH:MM:SS", Values range from 1000-01-01 00:00:00 to 9999-12-31 23:59:59.'
            },{
                name : "TIMESTAMP",
                text : "TIMESTAMP",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : "A timestamp. TIMESTAMP values are stored as the number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC). Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC. Automatic initialization and updating to the current date and time can be specified using DEFAULT CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP in the column definition"
            },{
                name : "YEAR",
                text : "YEAR[(2|4)]",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : 'Year value as 2 digits or 4 digits, Default is 4 digits.'
            },{
                name : "TIME",
                text : "TIME(fsp)",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : 'A time. Format: hh:mm:ss. The supported range is from "-838:59:59" to "838:59:59"'
            }
        ]
    },
    {
        name : 'Large Object (LOB)',
        options : [
            {
                name : "TINYBLOB",
                text : "TINYBLOB",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : 'Maximum size of 255 bytes.'
            },{
                name : "BLOB",
                text : "BLOB(size)",
                size : true,
                hasValue : false,
                value :  null,
                maxSize : 65535,
                minSize : 0,
                description : 'Where size is the number of characters to store. (size is optional and was introduced in MySQL 4.1)'
            },{
                name : "MEDIUMBLOB",
                text : "MEDIUMBLOB",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : 'Maximum size of 16,777,215 bytes.'
            },{
                name : "LONGTEXT",
                text : "LONGTEXT",
                size : false,
                hasValue : false,
                value :  null,
                maxSize : null,
                minSize : null,
                description : 'Maximum size of 4GB or 4,294,967,295 characters.'
            },
        ]
    }

];