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
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  // === LOGIN ===
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (savedUser && savedUser.email === email && savedUser.password === password) {
        // kalau cocok, redirect ke main page
        window.location.href = "https://imcoolfer-tech.github.io/main-pages";
      } else {
        alert("Email atau password salah!");
      }
    });
  }

  // === REGISTER ===
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = registerForm.querySelector('input[type="email"]').value;
      const password = registerForm.querySelector('input[type="password"]').value;

      // Simpan data user ke localStorage
      localStorage.setItem("user", JSON.stringify({ email, password }));

      alert("Akun berhasil dibuat! Silakan login sekarang.");
      // Pindah ke panel login
      document.getElementById('container').classList.remove('right-panel-active');
    });
  }
});

