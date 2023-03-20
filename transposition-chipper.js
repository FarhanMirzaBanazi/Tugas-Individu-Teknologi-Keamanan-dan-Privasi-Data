function transposeCipher(plainText, key) {
    // Mengubah plainText ke dalam bentuk array of character
    let plainTextArr = plainText.split('');

    // Mencari jumlah baris pada matriks
    let numRows = Math.ceil(plainTextArr.length / key.length);

    // Membuat matriks dengan jumlah baris dan kolom sebanyak numRows dan key.length
    let matrix = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        matrix[i] = new Array(key.length).fill('');
    }

    // Mengisi matriks dengan plainText
    let index = 0;
    for (let j = 0; j < key.length; j++) {
        let currentCol = key.indexOf(j + 1);
        for (let i = 0; i < numRows; i++) {
            if (index < plainTextArr.length) {
                matrix[i][currentCol] = plainTextArr[index];
                index++;
            } else {
                break;
            }
        }
    }

    // Membaca cipherText dari matriks
    let cipherText = '';
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < key.length; j++) {
            if (matrix[i][j] !== '') {
                cipherText += matrix[i][j];
            }
        }
    }
    return cipherText;
}
