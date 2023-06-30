## Test Cases for Login Functionality

1. Test successful login:
   - Input: 
     - Username: testuser@example.com
     - Password: testpassword
   - Expected Output: User is successfully logged in and redirected to the home page.

2. Test login with incorrect username:
   - Input: 
     - Username: incorrectusername@example.com
     - Password: testpassword
   - Expected Output: User receives an error message indicating the wrong username or password.

3. Test login with incorrect password:
   - Input: 
     - Username: testuser@example.com
     - Password: incorrectpassword
   - Expected Output: User receives an error message indicating the wrong username or password.

4. Test login with empty fields:
   - Input: 
     - Username: ""
     - Password: ""
   - Expected Output: User receives an alert indicating that fields cannot be empty.

5. Test login with invalid email format:
   - Input: 
     - Username: invalidemailformat
     - Password: testpassword
   - Expected Output: User receives an alert indicating that the email format is invalid.

6. Test login when already logged in:
   - Input: User is already logged in.
   - Expected Output: User is redirected to the home page without having to log in again.

7. Test unauthorized access to the home page:
   - Input: User is not logged in and tries to access the home page directly.
   - Expected Output: User receives an alert indicating that they are not authorized and is redirected to the login page.

These test cases cover different scenarios for the login functionality, including successful login, incorrect credentials, empty fields, invalid email format, and handling of authorized and unauthorized access.

