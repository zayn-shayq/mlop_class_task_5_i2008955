document.getElementById('signupForm').onsubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
        alert('Signed Up Successfully!');
    } else {
        alert('Failed to Sign Up.');
    }
};
