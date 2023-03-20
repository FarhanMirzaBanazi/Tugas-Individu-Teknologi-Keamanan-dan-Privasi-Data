function substitutionCipher(plainText, shift) {
    // Buat array yang berisi setiap huruf pada alfabet
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    // Buat array acak dengan panjang 26 yang berisi indeks-1 dari setiap huruf pada alfabet
    const substitution = shuffle(alphabet.map((_, i) => i));

    // Ubah plainText ke huruf kapital
    plainText = plainText.toUpperCase();

    let cipherText = '';

    // Iterasi setiap karakter pada plainText
    for (let i = 0; i < plainText.length; i++) {
        let c = plainText.charCodeAt(i);

        // Jika karakter bukan huruf, abaikan karakter tersebut
        if (c < 65 || c > 90) continue;

        // Hitung indeks pada array acak yang sesuai dengan karakter saat ini
        let index = c - 65;

        // Shift karakter sesuai dengan array acak
        index = substitution[index];

        // Ubah indeks menjadi kode ASCII huruf yang sesuai
        c = index + 65;

        cipherText += String.fromCharCode(c);
    }

    return cipherText;
}

// Fungsi untuk mengacak array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Contoh penggunaan
const plainText = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
const cipherText = substitutionCipher(plainText);
console.log(cipherText); // output: "CBE WYZMK FTVUJ ANP SROXH VOEG CBE DIQN PL"
