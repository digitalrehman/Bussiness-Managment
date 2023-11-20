let Bank = [
  {
    date: "00",
    name: "00",
    credit_mir: "00",
    credit_kar: "00",
    debit_mir: "00",
    debit_kar: "00",
  },
];

let summ = 0;
for (let i = 0; i < Bank.length; i++) {
  summ += parseInt(Bank[i].credit_mir);
}
let sumk = 0;
for (let i = 0; i < Bank.length; i++) {
  sumk += parseInt(Bank[i].credit_kar);
}
let summir = 0;
for (let i = 0; i < Bank.length; i++) {
  summir += parseInt(Bank[i].debit_mir);
}
let sumkar = 0;
for (let i = 0; i < Bank.length; i++) {
  sumkar += parseInt(Bank[i].debit_kar);
}
let sum_Ans = [
  {
    Summir: summ,
    Sumk: sumk,
    Sumprofit: summir,
    Sumkar: sumkar,
  },
];

export { Bank, sum_Ans };
