// 3
function isPrime(n) {
    if (n <= 1) {
        return false; 
    }
    for (let i = 2; i <= isPrime2(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}


// 4
function group(array, keySelector, valueSelector) {
    let javob = {};

    for (let element of array) {
        let key = keySelector(element);
        let value = valueSelector(element);
        if (!javob[key]) {
            javob[key] = [];
        }
        javob[key].push(value);
    }
    return javob;
}

// 10
const products = [
    { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
    { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
    { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
    { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
    { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
  ];
  function calculateTotal(products) {
    let total = 0;
    for (const product of products) {
      const { price, discount, quantity } = product;
      const discountedPrice = price * (1 - discount / 100);
      total += discountedPrice * quantity;
    }
    return total;
  }
  const totalSum = calculateTotal(products);
  console.log("Umumiy summa:", totalSum);
  

  // 7
  function products1 (a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      if (result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
    }
    return result;
  }

  //9
  const books = [
    {
      title: "Halqa",
      author: "Akrom Malik",
      alreadyRead: false,
    },
    {
      title: "Dunyo ishlari",
      author: "O'tkir Hoshimov",
      alreadyRead: true,
    },
    {
      title: "Vaqtning qadri",
      author: "Abdulfattoh Abu G'udda",
      alreadyRead: false,
    },
  ];
  function checkBooksStatus(books) {
    books.forEach((book, index) => {
      const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
      console.log(
        `${index + 1}. ${book.author}ning "${book.title}" kitobi ${status};`
      );
    });
  }
  checkBooksStatus(books);
  
  //5 
  function etSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}

console.log(etSumBetweenNumbers(1, 5));
