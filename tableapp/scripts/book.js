function BookNow(guestName, guestEmail, guestDate, guestPax, guestRemarks) {
    let url = 'https://api.sheety.co/75a76b35adaf013b208189431322a525/bookingApp/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            date: guestDate,
            pax: guestPax,
            remarks: guestRemarks,
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.booking.name + " added!");
        });
}


window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userDate = document.getElementById("userDate").value;
        let userPax = document.getElementById("userPax").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userEmail, userDate, userPax, userRemarks);
    });
});