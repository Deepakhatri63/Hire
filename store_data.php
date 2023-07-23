<?php
// Check if the request method is POST (data is being sent)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data sent from JavaScript
    $jsonData = file_get_contents('php://input');

    // Convert the JSON data to an associative array
    $data = json_decode($jsonData, true);

    // Connect to your MySQL database
    $servername = 'localhost'; // Change this to your MySQL server name
    $username = 'root'; // Change this to your MySQL username
    $password = ''; // Change this to your MySQL password
    $dbname = 'hire_us_db'; // Change this to your MySQL database name

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    }

    // Prepare and execute the SQL query to insert the data into the table
    $stmt = $conn->prepare("INSERT INTO users (name, email, phoneNumber, companyOrBrand, websiteURL, projectDescription, minBudget, maxBudget, selectedServices, selectedDay, selectedMonth, selectedTime, selectedTimeZone)
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    $stmt->bind_param(
        'sssssssssssss',
        $data['name'],
        $data['email'],
        $data['phoneNumber'],
        $data['companyOrBrand'],
        $data['websiteURL'],
        $data['projectDescription'],
        $data['minBudget'],
        $data['maxBudget'],
        implode(', ', $data['selectedServices']),
        $data['selectedDay'],
        $data['selectedMonth'],
        $data['selectedTime'],
        $data['selectedTimeZone']
    );

    if ($stmt->execute()) {
        // Data insertion successful
        echo 'Data stored successfully.';
    } else {
        // Data insertion failed
        echo 'Error: ' . $stmt->error;
    }

    // Close the prepared statement and database connection
    $stmt->close();
    $conn->close();
}
?>
