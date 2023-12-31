let Add_Data_Dec = [
  {
    date: "1/12/2023",
    sale: "18020",
    profit: "8000",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "2/12/2023",
    sale: "11380",
    profit: "3080",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "3/12/2023",
    sale: "16150",
    profit: "7035",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "4/12/2023",
    sale: "9220",
    profit: "1850",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "5/12/2023",
    sale: "25380",
    profit: "17590",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "6/12/2023",
    sale: "16010",
    profit: "11250",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "7/12/2023",
    sale: "6400",
    profit: "700",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "8/12/2023",
    sale: "14000",
    profit: "4890",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "9/12/2023",
    sale: "15720",
    profit: "6530",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "10/12/2023",
    sale: "26650",
    profit: "12730",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "11/12/2023",
    sale: "14480",
    profit: "1470",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "12/12/2023",
    sale: "11900",
    profit: "5950",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "13/12/2023",
    sale: "11760",
    profit: "3960",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "14/12/2023",
    sale: "12060",
    profit: "4300",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "15/12/2023",
    sale: "10840",
    profit: "2940",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "16/12/2023",
    sale: "17050",
    profit: "7720",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "17/12/2023",
    sale: "7800",
    profit: "900",
    Akbar: "00",
    Anwar: "00",
  },
  {
    date: "18/12/2023",
    sale: "15450",
    profit: "6720",
    Akbar: "1350",
    Anwar: "1300",
  },{
    date: "19/12/2023",
    sale: "7850",
    profit: "1610",
    Akbar: "2675",
    Anwar: "2495",
  },{
    date: "20/12/2023",
    sale: "8470",
    profit: "4240",
    Akbar: "600",
    Anwar: "1850",
  },{
    date: "21/12/2023",
    sale: "14900",
    profit: "12510",
    Akbar: "1800",
    Anwar: "1850",
  }, {
    date: "22/12/2023",
    sale: "9090",
    profit: "4490",
    Akbar: "885",
    Anwar: "745",
  },{
    date: "23/12/2023",
    sale: "14780",
    profit: "9090",
    Akbar: "4640",
    Anwar: "4180",
  },{
    date: "24/12/2023",
    sale: "15300",
    profit: "7550",
    Akbar: "985",
    Anwar: "845",
  },{
    date: "25/12/2023",
    sale: "6880",
    profit: "3850",
    Akbar: "2680",
    Anwar: "2400",
  },{
    date: "26/12/2023",
    sale: "6340",
    profit: "2320",
    Akbar: "1080",
    Anwar: "790",
  },{
    date: "27/12/2023",
    sale: "4430",
    profit: "2590",
    Akbar: "700",
    Anwar: "1290",
  },{
    date: "28/12/2023",
    sale: "7060",
    profit: "3800",
    Akbar: "390",
    Anwar: "1240",
  },
      {
    date: "29/12/2023",
    sale: "9490",
    profit: "1720",
    Akbar: "700",
    Anwar: "550",
  },{
    date: "30/12/2023",
    sale: "11640",
    profit: "4170",
    Akbar: "4250",
    Anwar: "2950",
  },{
    date: "31/12/2023",
    sale: "22760",
    profit: "13770",
    Akbar: "4230",
    Anwar: "4270",
  },
];

let sum = 0;
for (let i = 0; i < Add_Data_Dec.length; i++) {
  sum += parseInt(Add_Data_Dec[i].sale);
}
let sumPro = 0;
for (let i = 0; i < Add_Data_Dec.length; i++) {
  sumPro += parseInt(Add_Data_Dec[i].profit);
}
let sumProAkbar = 0;
for (let i = 0; i < Add_Data_Dec.length; i++) {
  sumProAkbar += parseInt(Add_Data_Dec[i].Akbar);
}
let sumProAnwar = 0;
for (let i = 0; i < Add_Data_Dec.length; i++) {
  sumProAnwar += parseInt(Add_Data_Dec[i].Anwar);
}

let sum_Ans = [
  {
    Sumvalue: sum,
    Sumprofit: sumPro,
    Akbar: sumProAkbar,
    Anwar: sumProAnwar,
  },
];
export { Add_Data_Dec, sum_Ans };
