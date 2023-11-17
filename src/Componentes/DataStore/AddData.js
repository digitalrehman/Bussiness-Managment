let Add_Data = [
  {
    date: "11/11/2023",
    sale: "18030",
    profit: "9045",
  },
   {
    date: "12/11/2023",
    sale: "14460",
    profit: "7610",
  },
   {
    date: "13/11/2023",
    sale: "11520",
    profit: "4470",
  },
   {
    date: "14/11/2023",
    sale: "9540",
    profit: "4420",
  },
    {
    date: "15/11/2023",
    sale: "8270",
    profit: "3090",
  } ,
    {
    date: "16/11/2023",
    sale: "7350",
    profit: "1995",
  },
    {
    date: "17/11/2023",
    sale: "7050",
    profit: "3435",
  }
];

let sum = 0;
for (let i = 0; i < Add_Data.length; i++) {
  sum += parseInt(Add_Data[i].sale);
}
let sumPro = 0;
for (let i = 0; i < Add_Data.length; i++) {
  sumPro += parseInt(Add_Data[i].profit);
}

let sum_Ans = [
  {
    Sumvalue : sum,
    Sumprofit : sumPro

  },
]
export { Add_Data, sum_Ans };
