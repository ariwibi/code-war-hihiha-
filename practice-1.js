

function sumMultiplesOf3And5(n) {
  //jika n negatif, kembalikan o
  if (n < 0) {
    return 0;
  }


  let sum = 0;

  //Iterasi melalui semua angka di bawah n
  for (let i = 0; i < n; i++) {
    //cek apaka angka merupakan kelipatan 3 atau 5
    if (i % 3 === 0 || i % 5 === 0) {
      //tambahkan angka ke dalam jumlah
      sum += i;
    }
  }
  return sum;
}

const result = (sumMultiplesOf3And5(10))
console.log(result)
//succcess
