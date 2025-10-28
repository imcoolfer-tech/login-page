// Tunggu sampai seluruh elemen DOM siap
document.addEventListener('DOMContentLoaded', () => {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  // Pastikan elemen-elemen ditemukan
  if (!signUpButton || !signInButton || !container) {
    console.warn("Beberapa elemen (signUp, signIn, container) tidak ditemukan di HTML.");
    return;
  }

  console.log('UI elements found — attaching listeners');

  // Ketika tombol "Daftar" diklik
  signUpButton.addEventListener('click', () => {
    console.log('signUp clicked');
    container.classList.add('right-panel-active');
  });

  // Ketika tombol "Masuk" diklik
  signInButton.addEventListener('click', () => {
    console.log('signIn clicked');
    container.classList.remove('right-panel-active');
  });
});
