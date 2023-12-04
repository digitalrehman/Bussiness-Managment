let Add_Data_Dec = [
    {
      date: "1/12/2023",
      sale: "8000",
      profit: "2000",
    },{
      date: "2/12/2023",    
      sale: "72000",
      profit: "14000",
    },{
      date: "3/12/2023",    
      sale: "77770",
      profit: "16000",
    }
  ];
  
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
    },
  ];
  export { Add_Data_Dec, sum_Ans };
  
