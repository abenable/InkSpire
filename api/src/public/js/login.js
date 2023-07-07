const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3001/auth/login',
      data: { email, password },
    });
    console.log(res.data);
    alert(res.data.message);
    window.setTimeout(() => {
      location.assign('/');
    }, 800);
  } catch (error) {
    console.log(error.response.data);
    alert(error.response.data.error_message);
    window.setTimeout(() => {
      location.assign('/login');
    }, 500);
  }
};

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
