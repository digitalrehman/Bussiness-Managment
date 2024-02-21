let Add_Data_Dec = [
    {
      date: "1/2/2023",
      sale: "14810",
      profit: "8410",
      Akbar: "600",
      Anwar: "400",
    },
    {
      date: "2/2/2023",
      sale: "18270",
      profit: "6330",
      Akbar: "4450",
      Anwar: "4450",
    },
    {
      date: "3/2/2023",
      sale: "18360",
      profit: "11870",
      Akbar: "2790",
      Anwar: "2740",
    },
    {
      date: "4/2/2023",
      sale: "12550",
      profit: "7360",
      Akbar: "2400",
      Anwar: "1930",
    },
    {
      date: "5/2/2023",
      sale: "24960",
      profit: "12030",
      Akbar: "6290",
      Anwar: "6290",
    },
    {
      date: "6/2/2023",
      sale: "13970",
      profit: "6790",
      Akbar: "5160",
      Anwar: "5500",
    },
    {
      date: "7/2/2023",
      sale: "24050",
      profit: "13720",
      Akbar: "5200",
      Anwar: "6480",
    },{
      date: "8/2/2023",
      sale: "00",
      profit: "00",
      Akbar: "00",
      Anwar: "00",
    },{
      date: "9/2/2023",
      sale: "00",
      profit: "00",
      Akbar: "00",
      Anwar: "00",
    },{
      date: "10/2/2023",
      sale: "22490",
      profit: "11520",
      Akbar: "1055",
      Anwar: "1835",
    },{
      date: "11/2/2023",
      sale: "00",
      profit: "8790",
      Akbar: "3100",
      Anwar: "3120",
    },{
      date: "12/2/2023",
      sale: "12900",
      profit: "4590",
      Akbar: "5560",
      Anwar: "5560",
    },{
      date: "13/2/2023",
      sale: "000",
      profit: "5880",
      Akbar: "7000",
      Anwar: "7170",
    },{
      date: "14/2/2023",
      sale: "00",
      profit: "3480",
      Akbar: "2670",
      Anwar: "2400",
    },{
      date: "15/2/2023",
      sale: "22030",
      profit: "9620",
      Akbar: "8290",
      Anwar: "8290",
    },{
      date: "16/2/2023",
      sale: "000",
      profit: "2020",
      Akbar: "1135",
      Anwar: "775",
    },{
      date: "17/2/2023",
      sale: "000",
      profit: "5280",
      Akbar: "1830",
      Anwar: "1600",
    },{
      date: "18/2/2023",
      sale: "00",
      profit: "6850",
      Akbar: "2040",
      Anwar: "2080",
    },{
      date: "19/2/2023",
      sale: "9630",
      profit: "4050",
      Akbar: "2300",
      Anwar: "2580",
    },{
      date: "20/2/2023",
      sale: "10210",
      profit: "5950",
      Akbar: "850",
      Anwar: "600",
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
