var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

var total = 0;
for (var account of accounts){
  total += account["amount"];
} 

console.log(total)

// largest = []
// for (var account of accounts){
//   largest.push(account.amount)
// }

// var arrayMax = Math.max(...[largest]);
// console.log(arrayMax);


var largest=account.amount;
for (var account of accounts){  
  if (account.amount>largest){
    largest=account.amount;
  }
}

console.log(largest);

var min = account.amount;
for (var account of accounts){  
  if (account.amount<largest){
    min=account.amount;
  }
} 
console.log(min);


for (var account of accounts)
  if (account.amount==min){
    console.log(account.name);
  }

var avr = total/accounts.length;
console.log(avr);

for (var account of accounts)
  if (account.name=="marc"){
    console.log(account.amount);
  } 


for (var account of accounts)
  if (account.amount==largest){
    console.log(account.name);
  }

var totalBusiness = 0;
for (var account of accounts)
  if (account.type=='business'){
    totalBusiness+=account.amount;
  }
console.log(totalBusiness);


for (var account of accounts)
 if ((account.type) && (account.amount==largest)){
   console.log(account.name);
 } 