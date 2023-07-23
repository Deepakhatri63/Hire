<!DOCTYPE html>
<html lang="en">

<head>
    <title>Hire Us</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
    </script>
    <script type="text/javascript">
        (function() {
            emailjs.init("PWPCGmT4fMbanb-lI");
        })();
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Playfair+Display+SC&family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <div class="navbar">
        <a href="#"><img class="logo" src="images/logo1.png" alt="Logo"></a>
        <div class="container">
            <a href="#">About Us</a>
            <a href="#">Works</a>
            <a href="#">Articles</a>
            <a class="contact" href="#">Contact</a>
        </div>
        <div class="hamburger" onclick="toggleNavbar()">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
    <div class="content">
        <div class="work-process">
            <div class="h1">
                <h1>Ok, let’s discuss about your requirement a bit in more detail.</h1>
            </div>
            <div class="vertical-line"></div>
            <div class="circle-icon">
                <i class="fa fa-file-text-o"></i>
            </div>
            <div class="h2title">
                <h2>To ensure our next face-to-face virtual meeting remains highly productive, let's collaborate and create something truly awesome together. Kindly follow the simple instructions provided below.</h2>
            </div>
        </div>

        <!-- first part -->
        <div class="first">
            <div class="left-1">
                <h1>Understanding you better</h1>
                <p>Could you kindly assist us in getting to know you better by sharing some details about your communication preferences and contact information? Your cooperation would be truly appreciated.</p>
            </div>
            <div class="circle1">
                <div class="number1">1</div>
            </div>
            <div class="right-1">
                <h1>Please provide me your communication details</h1>
                <div class="form-1">
                    <h5 class="first-h5">Your Name*</h5>
                    <div class="input-container">
                        <input type="text" placeholder="John Doe" name="name">
                    </div>
                    <div class="email-number">
                        <div class="input-container2">
                            <h5>Your Email*</h5>
                            <input id="email" type="text" placeholder="yourname@email.com" name="email">
                        </div>

                        <div class="input-container2">
                            <h5>Your Mobile Number*</h5>
                            <input class="mnum" type="text" placeholder="+00 000 000 000" name="phoneNumber">
                        </div>

                    </div>
                    <h5>Your Company or Brand Name</h5>
                    <div class="input-container">
                        <input type="text" placeholder="Pls mention the name here" name="companyOrBrand">
                    </div>
                    <h5>Website URL</h5>
                    <div class="input-container">
                        <input type="text" placeholder="www.company.com" name="websiteURL">
                    </div>
                </div>
            </div>
        </div>

        <!-- Second Part -->
        <div class="second">
            <div class="left-2">
                <h1>Requirements Gathering</h1>
                <p>Allow us to understand your vision and ambition to make this product live. This will help us to answer your queries promptly.
                </p>
            </div>
            <div class="circle2">
                <div class="number2">2</div>
            </div>
            <div class="right-2">
                <h1>Please explain your requirement?</h1>
                <h5>Describe your project in brief*</h5>
                <textarea placeholder="I wanted to develop content for…..or i will need elearning development" name="projectDescription"></textarea>
                <h5>May i know how much budget will you be allocating for this product? (Approx would help)</h5>
                <div class="range">
                    <div class="range-price">
                        <p>$</p>
                        <input type="text" name="min" value="3000" name="min" readonly>
                        <p class="to">To</p>
                        <p>$</p>
                        <input type="text" name="max" value="30000" name="max" readonly>
                    </div>
                    <div class="range-slider">
                        <span class="range-selected"></span>
                    </div>
                    <div class="range-input">
                        <input type="range" class="min" min="1000" max="100000" value="3000" step="1000">
                        <input type="range" class="max" min="1000" max="100000" value="30000" step="1000">
                    </div>
                </div>
                <div class="amount">
                    <h3>$1000</h3>
                    <h3>$100000</h3>
                </div>
            </div>
        </div>

        <!-- Third Part -->
        <div class="third">
            <div class="left-3">
                <h1>Assigning a subject matter expert</h1>
                <p>By gracefully choosing one or more services from the list provided to the right, we will be able to add a couple of more experts from the relevant vertical and they will be part of our upcoming virtual meeting.
                </p>
            </div>
            <div class="circle3">
                <div class="number3">3</div>
            </div>
            <div class="right-3">
                <h1>Choose the services you are looking over the project.</h1>
                <form>
                    <div class="options-row">
                        <label>
                            <input type="checkbox" name="option1" value="Course Development"> Course Development
                        </label>
                        <label>
                            <input type="checkbox" name="option2" value="Instructional Design Services"> Instructional Design Services
                        </label>
                    </div>
                    <div class="options-row">
                        <label>
                            <input type="checkbox" name="option3" value="Multi-media Development"> Multi-media Development
                        </label>
                        <label>
                            <input type="checkbox" name="option4" value="ILT or VLT or eLearning Development"> ILT or VLT or eLearning Development
                        </label>
                    </div>
                    <div class="options-row">
                        <label>
                            <input type="checkbox" name="option5" value="Trainers or Subject Matter experts"> Trainers or Subject Matter experts
                        </label>
                        <label>
                            <input type="checkbox" name="option6" value="Course Curation"> Course Curation
                        </label>
                    </div>
                    <div class="options-row">
                        <label>
                            <input type="checkbox" name="option7" value="Course Maintenance"> Course Maintenance
                        </label>
                        <label>
                            <input type="checkbox" name="option8" value="other"> other
                        </label>
                    </div>

                </form>

            </div>
        </div>

        <!-- Fourth Part -->
        <div class="fourth">
            <div class="left-4">
                <h1>Okay, just one last step. Let’s block a time convenient to you.</h1>
                <p>Join our inaugural virtual meet for meaningful discussions, creative brainstorming, and finalizing project requirements. Together, we'll craft thoughtful action points for a successful outcome.
                </p>
            </div>
            <div class="circle4">
                <div class="number4">4</div>
            </div>
            <div class="right-4">
                <h1>Let's start with a cup of virtual coffee! We have big things to do together.</h1>
                <div class="radio-row">
                    <label>
                        <input type="radio" name="option" value="30 min" onclick="updateTimeOptions(30)"> 30 minutes
                    </label>
                    <label>
                        <input type="radio" name="option" value="15 min" onclick="updateTimeOptions(15)"> 15 minutes
                    </label>
                </div>
                <p>Select a Day</p>
                <div class="cards-container" id="cardsContainer">
                    <div class="navigation">
                        <button id="prevButton">&larr;</button>
                    </div>

                    <div class="card">
                        <div class="content-date">
                            <h2 id="day">Day</h2>
                            <h1 id="date">Date</h1>
                            <h3 id="month">Month</h3>
                        </div>
                    </div>
                </div>
                <div class="navigation1">
                    <button id="nextButton">&rarr;</button>
                </div>
                <div class="schedule">
                    <p>Schedule Meeting</p>
                    <p>Time Zone</p>
                </div>
                <div class="select-time">
                    <select id="time-select">
                    </select>
                    <select class="select-2">
                        <option value="EST">EST</option>
                        <option value="IST">IST</option>
                        <option value="HST">HST</option>
                        <option value="CST">CST</option>
                        <option value="PST">PST</option>
                    </select>

                </div>
                <button id="sendDataButton" onclick="sendDataToServer()">Cheers! Submit Request</button>
            </div>
        </div>
    </div>
    <script src="js/script.js"></script>

</body>

</html>