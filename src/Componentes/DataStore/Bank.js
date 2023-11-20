let Bank = [
    {
      date: "00",
      name: "00",
      credit: "00",
      debit_mir: "00",
      debit_kar: "00"
    },
    
  ];
  
  
  let sum = 0;
  for (let i = 0; i < Bank.length; i++) {
    sum += parseInt(Bank[i].credit);
  }
  let summir = 0;
for (let i = 0; i < Bank.length; i++) {
  summir += parseInt(Bank[i].debit_mir);
} let sumkar = 0;
for (let i = 0; i < Bank.length; i++) {
  sumkar += parseInt(Bank[i].debit_kar);
}
  let sum_Ans = [
    {
      Sumvalue : sum,
      Sumprofit : summir,
      Sumkar : sumkar
    },
  ]

  export { Bank, sum_Ans };