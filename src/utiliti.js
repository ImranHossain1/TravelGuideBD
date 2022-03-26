const data = [
    {
        areaId: 1,
        areaName : "Barguna",
        division : "Barisal", 
        established : 1969, 
        area: 1831,
        population: 882,
        travelCost: 5000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 2,
        areaName : "Barisal",
        division : "Barisal", 
        established : 1797, 
        area: 2785,
        population: 2291,
        travelCost: 7000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 3,
        areaName : "Bhola",
        division : "Barisal", 
        established : 1984 , 
        area: 3403,
        population: 1758,
        travelCost: 6000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 4,
        areaName : "Jhalokati",
        division : "Barisal", 
        established : 1984, 
        area: 749,
        population: 596,
        travelCost: 6500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 5,
        areaName : "Patuakhali",
        division : "Barisal", 
        established : 1969, 
        area: 3221,
        population: 1517,
        travelCost: 7500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 6,
        areaName : "Pirojpur",
        division : "Barisal", 
        established : 1984 , 
        area: 1308,
        population: 1103,
        travelCost: 7000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 7,
        areaName : "Bandarban",
        division : "Chittagong", 
        established : 1981, 
        area: 4479,
        population: 383,
        travelCost: 8000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 8,
        areaName : "Brahmanbaria",
        division : "Chittagong", 
        established : 1984, 
        area: 1927,
        population: 2808,
        travelCost: 2000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 9,
        areaName : "Chandpur",
        division : "Chittagong", 
        established : 1984, 
        area: 1704,
        population: 2393,
        travelCost: 4000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 10,
        areaName : "Chittagong",
        division : "Chittagong", 
        established : 1666, 
        area: 5283,
        population: 7509,
        travelCost: 2500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 11,
        areaName : "Comilla",
        division : "Chittagong", 
        established : 1790, 
        area: 3085,
        population: 5304,
        travelCost: 1500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 12,
        areaName : "Cox's Bazar",
        division : "Chittagong", 
        established : 1984 , 
        area: 2492,
        population: 2275,
        travelCost: 5500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 13,
        areaName : "Feni",
        division : "Chittagong", 
        established : 1984, 
        area: 928,
        population: 1420,
        travelCost: 1500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 14,
        areaName : "Khagrachhari",
        division : "Chittagong", 
        established : 1983, 
        area: 2700,
        population: 608,
        travelCost: 4500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 15,
        areaName : "Lakshmipur",
        division : "Chittagong", 
        established : 1984, 
        area: 1456,
        population: 1711,
        travelCost: 2800,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 16,
        areaName : "Noakhali",
        division : "Chittagong", 
        established : 1821 , 
        area: 3601,
        population: 3072,
        travelCost: 3000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 17,
        areaName : "Rangamati",
        division : "Chittagong", 
        established : 1983, 
        area: 6116,
        population: 596,
        travelCost: 5500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 18,
        areaName : "Bagerhat",
        division : "Khulna", 
        established : 1984, 
        area: 3959,
        population: 1461,
        travelCost: 4500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 19,
        areaName : "Chuadanga",
        division : "Khulna", 
        established : 1984 , 
        area: 1177,
        population: 1123,
        travelCost: 5500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 20,
        areaName : "Jessore",
        division : "Khulna", 
        established : 1781, 
        area: 2567,
        population: 2742,
        travelCost: 4200,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 21,
        areaName : "Jhenaidah",
        division : "Khulna", 
        established : 1984, 
        area: 1756,
        population: 1517,
        travelCost: 7500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 22,
        areaName : "Khulna",
        division : "Khulna", 
        established : 1882 , 
        area: 4394,
        population: 2294,
        travelCost: 7000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 23,
        areaName : "Kushtia",
        division : "Khulna", 
        established : 1947, 
        area: 1601,
        population: 1933,
        travelCost: 4600,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 24,
        areaName : "Magura",
        division : "Khulna", 
        established : 1984, 
        area: 1049,
        population: 913,
        travelCost: 5000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 25,
        areaName : "Meherpur",
        division : "Khulna", 
        established : 1984, 
        area: 716,
        population: 652,
        travelCost: 4000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 26,
        areaName : "Narail",
        division : "Khulna", 
        established : 1984, 
        area: 990,
        population: 715,
        travelCost: 2500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 27,
        areaName : "Satkhira",
        division : "Khulna", 
        established : 1984, 
        area: 3858,
        population: 1973,
        travelCost: 6500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 28,
        areaName : "Jamalpur",
        division : "Mymensingh", 
        established : 1978, 
        area: 2032,
        population: 2265,
        travelCost: 3500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 29,
        areaName : "Mymensingh",
        division : "Mymensingh", 
        established : 1787, 
        area: 4363,
        population: 5042,
        travelCost: 3800,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 30,
        areaName : "Netrokona",
        division : "Mymensingh", 
        established : 1984, 
        area: 2810,
        population: 2207,
        travelCost: 3500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 31,
        areaName : "Sherpur",
        division : "Mymensingh", 
        established : 1984, 
        area: 1364,
        population: 1334,
        travelCost: 3900,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 32,
        areaName : "Bogra",
        division : "Rajshahi", 
        established : 1821 , 
        area: 2920,
        population: 3371,
        travelCost: 3000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 33,
        areaName : "Joypurhat",
        division : "Rajshahi", 
        established : 1983, 
        area: 965,
        population: 909,
        travelCost: 4200,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 34,
        areaName : "Naogaon",
        division : "Rajshahi", 
        established : 1984 , 
        area: 3403,
        population: 1758,
        travelCost: 6000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 35,
        areaName : "Jhalokati",
        division : "Barisal", 
        established : 1984, 
        area: 1896,
        population: 1696,
        travelCost: 6500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 36,
        areaName : "Chapainawabganj",
        division : "Rajshahi", 
        established : 1984, 
        area: 1703,
        population: 1635,
        travelCost: 7500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 37,
        areaName : "Pabna",
        division : "Rajshahi", 
        established : 1832 , 
        area: 2372,
        population: 2297,
        travelCost: 6000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 38,
        areaName : "Rajshahi",
        division : "Rajshahi", 
        established : 1772, 
        area: 2407,
        population: 2573,
        travelCost: 4000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 39,
        areaName : "Sirajganj",
        division : "Rajshahi", 
        established : 1984, 
        area: 2498,
        population: 3072,
        travelCost: 2000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 40,
        areaName : "Dinajpur",
        division : "Rangpur", 
        established : 1786, 
        area: 3438,
        population: 2970,
        travelCost: 4500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 41,
        areaName : "Gaibandha ",
        division : "Rangpur", 
        established : 1984, 
        area: 2179,
        population: 2349,
        travelCost: 2500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 42,
        areaName : "Comilla",
        division : "Chittagong", 
        established : 1790, 
        area: 3085,
        population: 5304,
        travelCost: 1500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 43,
        areaName : "Kurigram",
        division : "Chittagong", 
        established : 1984 , 
        area: 2492,
        population: 2275,
        travelCost: 5500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 44,
        areaName : "Lalmonirhat",
        division : "Rangpur", 
        established : 1984, 
        area: 1241,
        population: 1249,
        travelCost: 7500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 45,
        areaName : "Nilphamari",
        division : "Rangpur", 
        established : 1984, 
        area: 1580,
        population: 1820,
        travelCost: 4500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 46,
        areaName : "Panchagarh",
        division : "Rangpur", 
        established : 1984, 
        area: 1405,
        population: 981,
        travelCost: 2800,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1200px-Guthiya_mosque_Ri_palash_03.jpg"
    },
    {
        areaId: 47,
        areaName : "Rangpur",
        division : "Rangpur", 
        established : 1772 , 
        area: 2368,
        population: 2866,
        travelCost: 8000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 48,
        areaName : "Thakurgaon",
        division : "Rangpur", 
        established : 1984 , 
        area: 1810,
        population: 1380,
        travelCost: 8500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 49,
        areaName : "Habiganj",
        division : "Sylhet", 
        established : 1984 , 
        area: 2637,
        population: 2059,
        travelCost: 1500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 50,
        areaName : "Moulvibazar",
        division : "Sylhet", 
        established : 1984 , 
        area: 2799,
        population: 1902,
        travelCost: 5500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 51,
        areaName : "Sunamganj ",
        division : "Sylhet", 
        established : 1984 , 
        area: 3670,
        population: 2443,
        travelCost: 2000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },
    {
        areaId: 52,
        areaName : "Sylhet",
        division : "Sylhet", 
        established : 1782 , 
        area: 3490,
        population: 3404,
        travelCost: 6500,
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1920px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%90%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%BF%E0%A6%95_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg"
    },

]