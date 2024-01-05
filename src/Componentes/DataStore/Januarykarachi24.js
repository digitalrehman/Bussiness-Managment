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
