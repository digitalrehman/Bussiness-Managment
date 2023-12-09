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
    },{
      date: "4/12/2023",    
      sale: "55200",
      profit: "12000",
    },{
      date: "5/12/2023",    
      sale: "40550",
      profit: "11000",
    },{
      date: "6/12/2023",    
      sale: "99835",
      profit: "16200",
    } ,{
      date: "7/12/2023",
      sale: "62600",
      profit: "11500",
    },{
      date: "8/12/2023",
      sale: "10300",
      profit: "3000",
    },{
      date: "9/12/2023",
      sale: "15720",
      profit: "6530",
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
  
