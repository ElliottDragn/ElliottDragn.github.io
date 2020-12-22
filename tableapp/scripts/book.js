< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Book A Table - Table Booking App</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

                    <body>
                        <div class="container-fluid">
                            <!-- NavBar -->
        <div class="row">
                                <div class="col">
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                        <a class="navbar-brand" href="index.html">Table Booking App</a>
                                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>

                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul class="navbar-nav mr-auto">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="index.html">Home</a>
                                                </li>
                                                <li class="nav-item active">
                                                    <a class="nav-link" href="book.html">Book Table</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="list.html">View Bookings</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            <!-- Jumbotron -->
        <div class="row">
                                <div class="col">
                                    <div class="jumbotron">
                                        <h1 class="display-4">Yes... You are here!</h1>
                                        <p class="lead">Tell us your plan and fill-up your contact information</p>

                                    </div>
                                </div>
                            </div>
                            <!--Booking Form-->
        <div class="row">
                                <div class="col">
                                    <form>
                                        <div class="form-group">
                                            <label for="userName">Name</label>
                                            <input type="text" class="form-control" id="userName">
                    </div>
                                            <div class="form-group">
                                                <label for="userEmail">Email</label>
                                                <input type="text" class="form-control" id="userEmail">
                    </div>
                                                <div class="form-group">
                                                    <label for="userPax">Pax</label>
                                                    <select class="form-control" id="userPax">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                        <option>7</option>
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                                        </div>
        </div>
                                </div>

                                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                                    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                                    crossorigin="anonymous"></script>
                                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                                    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                                    crossorigin="anonymous"></script>
</body>

</html>