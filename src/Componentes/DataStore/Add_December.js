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
    },{
      date: "6/12/2023",
      sale: "16010",
      profit: "11250",
    },{
      date: "7/12/2023",
      sale: "6400",
      profit: "700",
    }
    ,{
      date: "8/12/2023",
      sale: "14000",
      profit: "4890",
    },{
      date: "9/12/2023",
      sale: "15720",
      profit: "6530",
    },{
      date: "10/12/2023",
      sale: "26650",
      profit: "12730",
          },{
      date: "11/12/2023",
      sale: "14480",
      profit: "1470",
          },{
      date: "12/12/2023",
      sale: "11900",
      profit: "5950",
          },{
      date: "13/12/2023",
      sale: "11760",
      profit: "3960",
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
  
