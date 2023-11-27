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
  },
    {
    date: "18/11/2023",
    sale: "19150",
    profit: "9685",
  },
    {
    date: "19/11/2023",
    sale: "19850",
    profit: "11775",
  },
    {
    date: "20/11/2023",
    sale: "10370",
    profit: "4250",
  },
    {
    date: "21/11/2023",
    sale: "9910",
    profit: "4425",
  },
    {
    date: "22/11/2023",
    sale: "21220",
    profit: "15505",
  },
    {
    date: "23/11/2023",
    sale: "8820",
    profit: "2710",
  },
    {
    date: "24/11/2023",
    sale: "7240",
    profit: "1300",
  },
    {
    date: "25/11/2023",
    sale: "11450",
    profit: "2240",
      },
    {
    date: "26/11/2023",
    sale: "19000",
    profit: "10420",
  },
    {
    date: "27/11/2023",
    sale: "23230",
    profit: "4110",
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
