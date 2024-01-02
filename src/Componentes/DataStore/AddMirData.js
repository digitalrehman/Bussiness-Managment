let Add_Mirpur = [
  {
    date: "11/11/2023",
    sale: "43720",
    profit: "9700",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "12/11/2023",
    sale: "35880",
    profit: "12300",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "13/11/2023",
    sale: "61260",
    profit: "13400",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "14/11/2023",
    sale: "65650",
    profit: "14100",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "15/11/2023",
    sale: "62700",
    profit: "13800",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "16/11/2023",
    sale: "45100",
    profit: "12100",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "17/11/2023",
    sale: "20680",
    profit: "6000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "18/11/2023",
    sale: "73250",
    profit: "15000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "19/11/2023",
    sale: "54360",
    profit: "12500",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "20/11/2023",
    sale: "54490",
    profit: "11200",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "21/11/2023",
    sale: "52600",
    profit: "10100",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "22/11/2023",
    sale: "40800",
    profit: "9800",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "23/11/2023",
    sale: "39900",
    profit: "10100",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "24/11/2023",
    sale: "6830",
    profit: "1200",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "25/11/2023",
    sale: "60800",
    profit: "13000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "26/11/2023",
    sale: "52080",
    profit: "10800",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "27/11/2023",
    sale: "38500",
    profit: "9800",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "28/11/2023",
    sale: "32000",
    profit: "8700",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "29/11/2023",
    sale: "48000",
    profit: "10500",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "30/11/2023",
    sale: "30090",
    profit: "9100",
    ayaz: "3350",
    afzal: "3350",
  },
];
let sumayaz = 0;
for (let i = 0; i < Add_Mirpur.length; i++) {
  sumayaz += parseInt(Add_Mirpur[i].ayaz);
}

let sumafzal = 0;
for (let i = 0; i < Add_Mirpur.length; i++) {
  sumafzal += parseInt(Add_Mirpur[i].afzal);
}

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
    Sumvalue: sum,
    Sumprofit: sumPro,
    ayaz: sumayaz,
    afzal: sumafzal,
  },
];
export { Add_Mirpur, sum_Ans };
