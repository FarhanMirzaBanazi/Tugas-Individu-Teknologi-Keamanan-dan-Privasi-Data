// Membuat sebuah fuction untuk menampung berbagai method
function shiftCipher(message, key) {
    let result = ""; // Menginisialisai variabel

    for (let i = 0; i < message.length; i++) {
        let c = message.charCodeAt(i);

        // Enkripsi huruf besar A-Z
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode(((c - 65 + key) % 26) + 65);
        }

        // Enkripsi huruf kecil a-z
        else if (c >= 97 && c <= 122) {
            result += String.fromCharCode(((c - 97 + key) % 26) + 97);
        }

        // Karakter selain huruf tidak diubah
        else {
            result += message.charAt(i);
        }
    }
    return result;
}

// Contoh penggunaan
const message = "Ini adalah contoh pesan yang akan dienkripsi";
// NIM L200204211
// Maka saya menggunakan key 11 karena menggunakan 2 digit terakhir pada nim mahasiswa
const key = 11; // kunci yang digunakan
const encrypted = shiftCipher(message, key);

console.log(`Pesan asli: ${message}`); // Mencetak hasil message asli
console.log(`Pesan terenkripsi: ${encrypted}`); // Mencetak hasil message yang telah dienkripsi
