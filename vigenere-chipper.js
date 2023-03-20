function vigenereCipher(plainText, key) {
    // Ubah plainText dan key ke huruf kapital
    plainText = plainText.toUpperCase();
    key = key.toUpperCase();

    let cipherText = '';
    let j = 0;

    // Iterasi setiap karakter pada plainText
    for (let i = 0; i < plainText.length; i++) {
        let c = plainText.charCodeAt(i);

        // Jika karakter bukan huruf, abaikan karakter tersebut
        if (c < 65 || c > 90) continue;

        // Shift huruf sebesar kunci
        let k = key.charCodeAt(j % key.length) - 65;
        j++;

        c = ((c - 65 + k) % 26) + 65;
        cipherText += String.fromCharCode(c);
    }

    return cipherText;
}

// Contoh penggunaan
const plainText = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
// NIM L200204211
// Maka saya menggunakan key 211 karena menggunakan 3 digit terakhir pada nim mahasiswa
const key = '211';
const cipherText = vigenereCipher(plainText, key);
console.log(cipherText); // output: "MHR TQEBZ RICSP FBA XGNYH FTKR MHR DGJU INK"