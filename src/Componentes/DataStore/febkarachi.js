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
