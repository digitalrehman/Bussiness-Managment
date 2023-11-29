let Add_Mirpur = [
  {
    date: "11/11/2023",
    sale: "43720",
    profit: "9700",
  },
   {
    date: "12/11/2023",
    sale: "35880",
    profit: "12300",
  },
   {
    date: "13/11/2023",
    sale: "61260",
    profit: "13400",
  },
   {
    date: "14/11/2023",
    sale: "65650",
    profit: "14100",
  },
   {
    date: "15/11/2023",
    sale: "62700",
    profit: "13800",
  },
   {
    date: "16/11/2023",
    sale: "45100",
    profit: "12100",
  },
   {
    date: "17/11/2023",
    sale: "20680",
    profit: "6000",
  },
   {
    date: "18/11/2023",
    sale: "73250",
    profit: "15000",
  },
   {
    date: "19/11/2023",
    sale: "54360",
    profit: "12500",
  },
   {
    date: "20/11/2023",
    sale: "54490",
    profit: "11200",
  },
   {
    date: "21/11/2023",
    sale: "52600",
    profit: "10100",
  },
   {
    date: "22/11/2023",
    sale: "40800",
    profit: "9800",
  },
   {
    date: "23/11/2023",
    sale: "39900",
    profit: "10100",
  },
   {
    date: "24/11/2023",
    sale: "6830",
    profit: "1200",
  },
   {
    date: "25/11/2023",
    sale: "60800",
    profit: "13000",
  },
   {
    date: "26/11/2023",
    sale: "52080",
    profit: "10800",
  },
   {
    date: "27/11/2023",
    sale: "38500",
    profit: "9800",
  }
  ,
   {
    date: "28/11/2023",
    sale: "32000",
    profit: "8700",
     }
  
  
  
];
let sum = 0;
for (let i = 0; i < Add_Mirpur.length; i++) {
  sum += parseInt(Add_Mirpur[i].sale);
}

let sumPro = 0;
for (let i = 0; i < Add_Mirpur.length; i++) {
  sumPro += parseInt(Add_Mirpur[i].profit);
}

let sum_Ans = [
  {
    Sumvalue : sum,
    Sumprofit : sumPro

  },
]
;

export { Add_Mirpur, sum_Ans };
