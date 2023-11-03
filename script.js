




fetch('https://yearbackend-weld.vercel.app/years/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector("#year").textContent = data.message
    });
