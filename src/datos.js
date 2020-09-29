let DATA ={
    "floors": [
       {
            "id_floor": "201",
            "id_map": "212",
            "name": "Planta 1"
        },
        {
            "id_floor": "202",
            "id_map": "212",
            "name": "Planta 2"
        },
          {
            "id_floor": "203",
            "id_map": "212",
            "name": "Planta 3"
        }
    ],
    zones: [
        {
            "id_zone": "370",
            "id_map": "212",
            "name": "Z1",
            "floor": "201"
        },
         {
            "id_zone": "371",
            "id_map": "212",
            "name": "Z2",
            "floor": "202"
        },
       {
            "id_zone": "372",
            "id_map": "212",
            "name": "Z3",
            "floor": "203"
        }
    ],
    tables: [
         {
            "id_table": 1,
            "name_table": "Mesa1",
            "id_zone": "370",
            "x": "31",
            "y": "30"
        },
        {
            "id_table": 2,
            "name_table": "Mesa2",
            "id_zone": "370",
            "x": "133",
            "y": "32"
        },
         {
            "id_table": 3,
            "name_table": "Mesa3",
            "max": "2",
            "min": "1",
            "id_zone": "370",
            "x": "88",
            "y": "105"
        },
         {
            "id_table": 4,
            "name_table": "Mesa4",
            "id_zone": "370",
            "x": "203",
            "y": "107"
        },
         {
            "id_table": 5,
            "name_table": "Mesa5",
            "id_zone": "371",
            "x": "63",
            "y": "38"
        },
         {
            "id_table": 6,
            "name_table": "Mesa6",
            "id_zone": "371",
            "x": "63",
            "y": "109"
        },
         {
            "id_table": 7,
            "name_table": "Mesa7",
            "id_zone": "372",
            "x": "32",
            "y": "93"
        },

        
          {
            "id_table": 8,
            "name_table": "Mesa8",
            "id_zone": "372",
            "x": "111",
            "y": "95"
        },
         
    ]
}

 


export default DATA;

