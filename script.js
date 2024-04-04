window.addEventListener("load", checkInternetConnection);

function checkInternetConnection() {

    const statusText = document.getElementById('statusText');
    const ipAddressText = document.getElementById('ipAddressText');
    const networkStrengthText = document.getElementById('networkStrengthText');

    statusText.textContent = 'Checking Internet Connection...';


    if (navigator.onLine) {
        fetch('https://api.ipify.org?format=json')
            .then((responce) => responce.json())
            .then((data) => {
                statusText.textContent = 'Connected to the Internet';
                ipAddressText.textContent = data.ip;

                const connection = navigator.connection;
                const networkStrength = connection ? connection.downlink
                    + 'Mbps' : 'Unknown';
                networkStrengthText.textContent = networkStrength;

            })
            .catch(() => { 
                statusText.textContent = 'Internet Disconnected: ' + error.message;
                ipAddressText.textContent = 'Unknown';
                networkStrengthText.textContent = 'Unknown';
            });
       
    }
    else {
        statusText.textContent = 'Not Connected to the Internet';
        ipAddressText.textContent = 'Unknown';
        networkStrengthText.textContent = 'Unknown';
    }
}