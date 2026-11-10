const readline = require('readline');

function lottery(num) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(num) || num < 1 || num > 150) {
      reject(new Error('Nomor harus bilangan bulat antara 1 dan 150'));
      return;
    }

    console.log('Sedang mengundi nomor... mohon tunggu 10 detik');

    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 150) + 1;

      if (randomNum === num) {
        resolve(`Selamat! Anda memenangkan lotere dengan nomor ${num}`);
      } else {
        reject(new Error(`Maaf, Anda tidak memenangkan lotere. Nomor yang diundi adalah ${randomNum}`));
      }
    }, 10000);
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan nomor pilihan Anda (1-150): ', (jawaban) => {
  rl.close();

  lottery(Number(jawaban))
    .then((hasil) => console.log(hasil))
    .catch((err) => console.error(err.message))
    .finally(() => console.log('Terima kasih telah bermain lotere!'));
});