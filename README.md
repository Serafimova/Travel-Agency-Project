Travel Agency Project for SoftUni Angular course

Pages:
- Home - visible for Guest and Registered Users with Search functionality;
- Catalog - visible for Guest and Registered users;
- Details - visible for Registered users;
    - Edit and Delete buttons to every offer - visible for the creator of the offer;
    - Book button to every offer - visible for Registered user with role Client;
    - Contacts to the offer - visible for both Client and Agent profiles;
- Terms and Conditions - visible for Guest and Registered users; Can see and download terms;
- About - visible for Guest and Registered users;
- Contacts - visible for Guest and Registered users;
- FAQ - visible for Guest and Registered users;
    - Agents can create new Question/Answer
- Register - visible for Guests;
    - All fileds are required;
    - Username - required, at least 4 characters;
    - Email - required, must be a valid email;
    - Password - required, at least 4 characters long;
    - Repeat password - required, at least 4 characters long, must be the same as password;
    - User role - required, Agent or Client
- Login - visible for Guests;
    - All fileds are required;
    - Username - requiredand;
    - Email - required and must be a valid email;
- Create New Offer - visible for Registered users with role Agent;
    - All fileds are required;
    - Offer Name - required, at least 6 characters long;
    - Country - required;
    - Image URL - required and must be a valid URL;
    - Days - required, number, min 1;
    - Transport - required;
    - Price - required, number, min 1;
    - Description - required, at least 20 characters long;
- Offer details - visible for Registered users with role Agent;
    - Book button for Client;
    - Edit and Delete for Agent, who is the creator of the Offer;
- Edit Offer - visible for the creator of the offer. Can edit the days, price or description of the offer;
- User Pofile - visible for Guest and Registered users. Users can create their information;
- My Offers - visible for Registered users with role Agent;
- My Reservations - visible for Registered users with role Client;

Registered users:
- Role Agent;
    - Can see Catalog Page;
    - Can create new offers;
    - Can edit and delete his own offers;
    - Can see Details page for every offer;
    - Can edit his own Profile page;
    - Can see his own Offers in My Offers Page;
    - Can create new Question/Answer in FAQ Page;

- Role Client;
    - Can see Catalog Page;
    - Can see Details page for every offer;
    - Can edit his own Profile page;
    - Can see his booked Offers in My Reservation Page; 

- Guest user;
    - Can see Catalog Page;
    - Can see Register and Login Page;