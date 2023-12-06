let Add_Data_Dec = [
    {
      date: "1/12/2023",
      sale: "18020",
      profit: "8000",
    },{
      date: "2/12/2023",
      sale: "11380",
      profit: "3080",
    },{
      date: "3/12/2023",
      sale: "16150",
      profit: "7035",
    }
    ,{
      date: "4/12/2023",
      sale: "9220",
      profit: "1850",
    },{
      date: "5/12/2023",
      sale: "25380",
      profit: "17590",
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
  
