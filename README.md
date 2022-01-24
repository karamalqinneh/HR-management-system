# HR-management-system 

I'm building an HR management system for a company, where they can organize their employees with their information and filter them.
 
## Task One Outline

I will create two pages index.html and accounting.html.

#### **Home page**

1. Header for navigating to any other pages.
2. Main render the information for each employee from javascript.
3. Footer will have some social media links with copyright.

### **Javascript**

1. create a constructor to generate an employee object which will be rendered in the main section from your app.js file.
    - Employee ID
    - Full Name
    - Department:
        - Administration
        - Marketing
        - Development
        - Finance

    - Level:
        - Junior
        - Mid-Senior
        - Senior

    - Image URL
    - Salary
2. create a prototype function for calculating the salary using the provided table by generating a random number between the minimum and maximum salary for each level, use the below table to calculate the salary depends on the employee level.

3. After calculating the random salary you should calculate the net salary where the tax percent is 7.5.

    |Level|Min|Max|
    |-----|---|---|
    |Senior|1500|2000|
    |Mid-Senior|1000|1500|
    |Junior|500|1000|

4. create a render prototype function to render each employee name with their salary in the home page.

5. Use the information shown in the table below to create employees instances.

    |Employee ID|Full Name|Department|Level|
    |-----------|---------|----------|-----|
    |1000|Ghazi Samer|Administration|Senior|
    |1001|Lana Ali|Finance|Senior|
    |1002|Tamara Ayoub|Marketing|Senior|
    |1003|Safi Walid|Administration|Mid-Senior|
    |1004|Omar Zaid|Development|Senior|
    |1005|Rana Saleh|Development|Junior|
    |1006|Hadi Ahmad|Finance|Mid-Senior|

### **Accounting page**

- For now this page should have:

1. Header for navigating to any other pages.
2. Main will be empty for today's task.
3. Footer will have some social media links with copyright.
