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
      profit: "340",
      Akbar: "3640",
      Anwar: "3990",
    },{
      date: "19/1/2024",
      sale: "10310",
      profit: "2110",
      Akbar: "1000",
      Anwar: "1600",
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
