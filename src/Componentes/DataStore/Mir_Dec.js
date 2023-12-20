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
      sale: "64600",
      profit: "13500",
          },{
      date: "10/12/2023",
      sale: "120650",
      profit: "19600",
    },{
      date: "11/12/2023",
      sale: "44850",
      profit: "10200",
        },{
      date: "12/12/2023",
      sale: "51800",
      profit: "10300",
        },{
      date: "13/12/2023",
      sale: "36050",
      profit: "9500",
        },{
      date: "14/12/2023",
      sale: "45150",
      profit: "9700",
        },{
      date: "15/12/2023",
      sale: "6800",
      profit: "00",
        },{
      date: "16/12/2023",
      sale: "79840",
      profit: "12700",
        },{
      date: "17/12/2023",
      sale: "55100",
      profit: "10100",
        },{
      date: "18/12/2023",
      sale: "39440",
      profit: "9500",
        },{
      date: "19/12/2023",
      sale: "58850",
      profit: "11100",
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
  
