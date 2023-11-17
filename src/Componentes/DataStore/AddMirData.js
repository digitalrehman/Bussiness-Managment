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
