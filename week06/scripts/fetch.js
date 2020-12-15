function GetBookings() {
    let url = 'https://api.sheety.co/75a76b35adaf013b208189431322a525/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
        });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function () {
    GetBookings();
});