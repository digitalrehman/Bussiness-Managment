let Add_Data = [
  {
    date: "10/11/2023",
    sale: "00",
    profit: "00",
    Akbar: "67401",
    Anwar: "67685",
  },
  {
    date: "11/11/2023",
    sale: "18030",
    profit: "9045",
    Akbar: "850",
    Anwar: "1620",
  },
  {
    date: "12/11/2023",
    sale: "14460",
    profit: "7610",
    Akbar: "770",
    Anwar: "620",
  },
  {
    date: "13/11/2023",
    sale: "11520",
    profit: "4470",
    Akbar: "620",
    Anwar: "725",
  },
  {
    date: "14/11/2023",
    sale: "9540",
    profit: "4420",
    Akbar: "3950",
    Anwar: "3850",
  },
  {
    date: "15/11/2023",
    sale: "8270",
    profit: "3090",
    Akbar: "1600",
    Anwar: "2250",
  },
  {
    date: "16/11/2023",
    sale: "7350",
    profit: "1995",
    Akbar: "2415",
    Anwar: "2740",
  },
  {
    date: "17/11/2023",
    sale: "7050",
    profit: "3435",
    Akbar: "2550",
    Anwar: "2350",
  },
  {
    date: "18/11/2023",
    sale: "19150",
    profit: "9685",
    Akbar: "600",
    Anwar: "450",
  },
  {
    date: "19/11/2023",
    sale: "19850",
    profit: "11775",
    Akbar: "2300",
    Anwar: "2150",
  },
  {
    date: "20/11/2023",
    sale: "10370",
    profit: "4250",
    Akbar: "4090",
    Anwar: "4060",
  },
  {
    date: "21/11/2023",
    sale: "9910",
    profit: "4425",
    Akbar: "960",
    Anwar: "1360",
  },
  {
    date: "22/11/2023",
    sale: "21220",
    profit: "15505",
    Akbar: "6920",
    Anwar: "6770",
  },
  {
    date: "23/11/2023",
    sale: "8820",
    profit: "2710",
    Akbar: "2370",
    Anwar: "2210",
  },
  {
    date: "24/11/2023",
    sale: "7240",
    profit: "1300",
    Akbar: "810",
    Anwar: "660",
  },
  {
    date: "25/11/2023",
    sale: "11450",
    profit: "2240",
    Akbar: "2030",
    Anwar: "2455",
  },
  {
    date: "26/11/2023",
    sale: "19000",
    profit: "10420",
    Akbar: "2850",
    Anwar: "2950",
  },
  {
    date: "27/11/2023",
    sale: "23230",
    profit: "4110",
    Akbar: "600",
    Anwar: "730",
  },
  {
    date: "28/11/2023",
    sale: "8230",
    profit: "160",
    Akbar: "1450",
    Anwar: "2300",
  },
  {
    date: "29/11/2023",
    sale: "14250",
    profit: "8790",
    Akbar: "760",
    Anwar: "1010",
  },
  {
    date: "30/11/2023",
    sale: "10350",
    profit: "5890",
    Akbar: "1485",
    Anwar: "2685",
  },
];

let sumProAkbar = 0;
for (let i = 0; i < Add_Data.length; i++) {
  sumProAkbar += parseInt(Add_Data[i].Akbar);
}
let sumProAnwar = 0;
for (let i = 0; i < Add_Data.length; i++) {
  sumProAnwar += parseInt(Add_Data[i].Anwar);
}

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
    Sumvalue: sum,
    Sumprofit: sumPro,
    Akbar: sumProAkbar,
    Anwar: sumProAnwar,
  },
];
export { Add_Data, sum_Ans };
