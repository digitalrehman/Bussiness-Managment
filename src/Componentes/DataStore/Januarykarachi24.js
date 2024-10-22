let Add_Data_Dec = [
    {
      date: "1/1/2024",
      sale: "26160",
      profit: "15400",
      Akbar: "1850",
      Anwar: "3140",
    },{
      date: "2/1/2024",
      sale: "18860",
      profit: "8170",
      Akbar: "1900",
      Anwar: "1750",
    },{
      date: "3/1/2024",
      sale: "14800",
      profit: "5470",
      Akbar: "3440",
      Anwar: "3230",
    },{
      date: "4/1/2024",
      sale: "14530",
      profit: "8120",
      Akbar: "6335",
      Anwar: "6195",
    },{
      date: "5/1/2024",
      sale: "15000",
      profit: "5900",
      Akbar: "945",
      Anwar: "1470",
    },{
      date: "6/1/2024",
      sale: "7410",
      profit: "2190",
      Akbar: "2440",
      Anwar: "2190",
    },{
      date: "7/1/2024",
      sale: "15810",
      profit: "5200",
      Akbar: "2845",
      Anwar: "2645",
    },{
      date: "8/1/2024",
      sale: "21700",
      profit: "15410",
      Akbar: "4390",
      Anwar: "4680",
    },{
      date: "9/1/2024",
      sale: "12710",
      profit: "4250",
      Akbar: "4950",
      Anwar: "5200",
    },{
      date: "10/1/2024",
      sale: "6050",
      profit: "50",
      Akbar: "00",
      Anwar: "00",
    },{
      date: "11/1/2024",
      sale: "7850",
      profit: "4450",
      Akbar: "650",
      Anwar: "00",
    },{
      date: "12/1/2024",
      sale: "11920",
      profit: "6240",
      Akbar: "730",
      Anwar: "00",
    },{
      date: "13/1/2024",
      sale: "17050",
      profit: "7130",
      Akbar: "3600",
      Anwar: "00",
    },{
      date: "14/1/2024",
      sale: "26200",
      profit: "10990",
      Akbar: "11350",
      Anwar: "00",
    },
    {
      date: "15/1/2024",
      sale: "10110",
      profit: "2870",
      Akbar: "5000",
      Anwar: "00",
    },{
      date: "16/1/2024",
      sale: "6120",
      profit: "340",
      Akbar: "1620",
      Anwar: "00",
    },{
      date: "17/1/2024",
      sale: "17270",
      profit: "5920",
      Akbar: "5980",
      Anwar: "6360",
    },{
      date: "18/1/2024",
      sale: "15980",
      profit: "10880",
      Akbar: "3640",
      Anwar: "3990",
    },{
      date: "19/1/2024",
      sale: "10310",
      profit: "2110",
      Akbar: "1000",
      Anwar: "1600",
    },{
      date: "20/1/2024",
      sale: "13180",
      profit: "5650",
      Akbar: "2900",
      Anwar: "2200",
    },{
      date: "21/1/2024",
      sale: "24555",
      profit: "15080",
      Akbar: "6455",
      Anwar: "5890",
    },{
      date: "22/1/2024",
      sale: "8210",
      profit: "3310",
      Akbar: "910",
      Anwar: "1000",
    },{
      date: "23/1/2024",
      sale: "15140",
      profit: "5505",
      Akbar: "1070",
      Anwar: "850",
    },{
      date: "24/1/2024",
      sale: "15140",
      profit: "5505",
      Akbar: "1070",
      Anwar: "850",
    },{
      date: "25/1/2024",
      sale: "10225",
      profit: "3980",
      Akbar: "1950",
      Anwar: "1505",
    },{
      date: "26/1/2024",
      sale: "10690",
      profit: "2830",
      Akbar: "600",
      Anwar: "480",
    },
    {
      date: "27/1/2024",
      sale: "15500",
      profit: "7640",
      Akbar: "850",
      Anwar: "1200",
    },{
      date: "28/1/2024",
      sale: "14230",
      profit: "3040",
      Akbar: "1800",
      Anwar: "4070",
    },{
      date: "29/1/2024",
      sale: "14000",
      profit: "3640",
      Akbar: "600",
      Anwar: "600",
    },{
      date: "30/1/2024",
      sale: "9500",
      profit: "1640",
      Akbar: "3600",
      Anwar: "3100",
    },{
      date: "31/1/2024",
      sale: "11010",
      profit: "3420",
      Akbar: "3300",
      Anwar: "2780",
    },
    
  ];
  
  let sum = 0;
  for (let i = 0; i < Add_Data_Dec.length; i++) {
    sum += parseInt(Add_Data_Dec[i].sale);
  }
  let sumPro = 0;
  for (let i = 0; i < Add_Data_Dec.length; i++) {
    sumPro += parseInt(Add_Data_Dec[i].profit);
  }
  let sumProAkbar = 0;
  for (let i = 0; i < Add_Data_Dec.length; i++) {
    sumProAkbar += parseInt(Add_Data_Dec[i].Akbar);
  }
  let sumProAnwar = 0;
  for (let i = 0; i < Add_Data_Dec.length; i++) {
    sumProAnwar += parseInt(Add_Data_Dec[i].Anwar);
  }
  
  let sum_Ans = [
    {
      Sumvalue: sum,
      Sumprofit: sumPro,
      Akbar: sumProAkbar,
      Anwar: sumProAnwar,
    },
  ];
  export { Add_Data_Dec, sum_Ans };
