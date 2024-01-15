let Add_Data_Dec = [
    {
      date: "1/1/2024",
      sale: "28750",
      profit: "9000",
      ayaz: "3350",
      afzal: "3350",
    },
  {
      date: "2/1/2024",
      sale: "55850",
      profit: "11500",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "3/1/2024",
      sale: "70700",
      profit: "13700",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "4/1/2024",
      sale: "34300",
      profit: "9200",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "5/1/2024",
      sale: "9200",
      profit: "1500",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "6/1/2024",
      sale: "27360",
      profit: "8900",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "7/1/2024",
      sale: "68600",
      profit: "12500",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "8/1/2024",
      sale: "55500",
      profit: "11800",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "9/1/2024",
      sale: "65900",
      profit: "11600",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "10/1/2024",
      sale: "43360",
      profit: "10900",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "11/1/2024",
      sale: "50800",
      profit: "11300",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "12/1/2024",
      sale: "10000",
      profit: "1500",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "13/1/2024",
      sale: "62600",
      profit: "11400",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "14/1/2024",
      sale: "96500",
      profit: "14800",
      ayaz: "3350",
      afzal: "3350",
    },{
      date: "15/1/2024",
      sale: "40040",
      profit: "10500",
      ayaz: "3350",
      afzal: "3350",
    },
    ];
  
  let sumayaz = 0;
  for (let i = 0; i < Add_Data_Dec.length; i++) {
    sumayaz += parseInt(Add_Data_Dec[i].ayaz);
  }
  
  let sumafzal = 0;
  for (let i = 0; i < Add_Data_Dec.length; i++) {
    sumafzal += parseInt(Add_Data_Dec[i].afzal);
  }
  
  let sum = 0;
  for (let i = 0; i < Add_Data_Dec.length; i++) {
    sum += parseInt(Add_Data_Dec[i].sale);
  }
  let sumPro = 0;
  for (let i = 0; i < Add_Data_Dec.length; i++) {
    sumPro += parseInt(Add_Data_Dec[i].profit);
  }
  
  let sum_Ans = [
    {
      Sumvalue: sum,
      Sumprofit: sumPro,
      ayaz: sumayaz,
      afzal: sumafzal,
    },
  ];
  export { Add_Data_Dec, sum_Ans };
  
