let Add_Data_Dec = [
  {
    date: "1/12/2023",
    sale: "8000",
    profit: "2000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "2/12/2023",
    sale: "72000",
    profit: "14000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "3/12/2023",
    sale: "77770",
    profit: "16000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "4/12/2023",
    sale: "55200",
    profit: "12000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "5/12/2023",
    sale: "40550",
    profit: "11000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "6/12/2023",
    sale: "99835",
    profit: "16200",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "7/12/2023",
    sale: "62600",
    profit: "11500",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "8/12/2023",
    sale: "10300",
    profit: "3000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "9/12/2023",
    sale: "64600",
    profit: "13500",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "10/12/2023",
    sale: "120650",
    profit: "19600",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "11/12/2023",
    sale: "44850",
    profit: "10200",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "12/12/2023",
    sale: "51800",
    profit: "10300",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "13/12/2023",
    sale: "36050",
    profit: "9500",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "14/12/2023",
    sale: "45150",
    profit: "9700",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "15/12/2023",
    sale: "6800",
    profit: "00",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "16/12/2023",
    sale: "79840",
    profit: "12700",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "17/12/2023",
    sale: "55100",
    profit: "10100",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "18/12/2023",
    sale: "39440",
    profit: "9500",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "19/12/2023",
    sale: "58850",
    profit: "11100",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "20/12/2023",
    sale: "58900",
    profit: "10300",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "21/12/2023",
    sale: "36230",
    profit: "9200",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "22/12/2023",
    sale: "1300",
    profit: "1000",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "23/12/2023",
    sale: "83500",
    profit: "12200",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "24/12/2023",
    sale: "35850",
    profit: "10100",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "25/12/2023",
    sale: "56150",
    profit: "11100",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "26/12/2023",
    sale: "51200",
    profit: "12100",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "27/12/2023",
    sale: "54450",
    profit: "10900",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "28/12/2023",
    sale: "43900",
    profit: "10500",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "29/12/2023",
    sale: "9200",
    profit: "1500",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "30/12/2023",
    sale: "61100",
    profit: "12200",
    ayaz: "3350",
    afzal: "3350",
  },
  {
    date: "31/12/2023",
    sale: "74480",
    profit: "13500",
    ayaz: "3350",
    afzal: "3350",
  },
];

let sumayaz = 0;
for (let i = 0; i < Add_Data_Dec.length; i++) {
  sumayaz += parseInt(Add_Data_Dec[i].ayaz);
}

let sumafzal = 0;
for (let i = 0; i < Add_Data_Dec.length; i++) {
  sumafzal += parseInt(Add_Data_Dec[i].afzal);
}

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
    ayaz: sumayaz,
    afzal: sumafzal,
  },
];
export { Add_Data_Dec, sum_Ans };
