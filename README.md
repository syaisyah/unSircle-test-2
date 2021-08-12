# unSircle-test-2

# User Role

```
- Super Admin: default permission crud product, can edit permission of user
- Admin: default permission crud product
- Employee: default permission read product
```

### URL:

```
http://localhost:4000
http://localhost:3005
http://localhost:3006
http://localhost:3007

```

### Methods:

1. Users

```
- POST /users/register
- POST /users/login
- GET /users/:id
```

2. Permissions

```
- GET /permissions/:id
- PUT /permissions/:id
```

3. Products

```
- POST /products
- GET /products/
- GET /products/:id
- PUT /products/:id
- DELETE /products/:id

```

# Endpoints

### USERS

1. Register

```
Create/Register new User
URL: /user/register
Method: POST
Required Auth: No
```

- Request Body:

```
{

}
```

- Success Response:

```
Status: 201 Created
Response Body:

{
  message: "Successfully create new user",
}
```

2. Login

```
Login with account that already register in database system
URL: /users/login
Method: POST
Required Auth: No
```

- Request Body:

```
{
 email: "<user email>",
 password: "<user password>"
}
```

- Success Response:

```
Status: 200 OK
Response Body:

{
  access_token: "<user access_token>"
}
```

3. Detail User

```
Get detail information of logged in user
URL: /users/:id
Method: GET
Required Auth: No
```

- Params:

```
id: integer
```

- Request Headers:

```
{
  access_token: "<user access_token>"
}
```

- Request Body:

```
{
 email: "<user email>",
 password: "<user password>"
}
```

- Success Response:

```
Status: 200 OK
Response Body:

{
  user: {}
}
```

### PERMISSIONS

1. Get User Permission

```
Get detail permission of logged in user
URL: /permissions/:userId
Method: GET
Required Auth: No
```

- Request Headers:

```
{
  access_token: "<access_token>"
}
```

- Success Response:

```
Status: 200 OK
Response Body:

{
   permission: {}
}
```

2. Update Permission

```
Update permission of logged in user
URL: /orders
Method: GET
Required Auth: Yes (only for super admin)
```

- Request Headers:

```
{
  access_token: "<super admin access_token>"
}
```

- Success Response:

```
Status: 200 OK
Response Body:
{
  message: "Successfully update user permission"
}

```

### PRODUCTS

1. Create Product

```
Create new product
URL: /products
Method: POST
Required Permission: Yes
```

- Request Headers:

```
{
  access_token: "<super admin or admin access_token>"
}
```

- Request Body:

```
{
  name, image, sku, stocks, price, marketplace_price
}
```

- Success Response:

```
Status: 201 Created
Response Body:

{
   message: "Successfully create new product"
   "product": {
     name, image, sku, stocks, price, marketplace_price
     }
}
```

2. Get All Products

```
Get all products from database
URL: /products
Method: GET
Required Permission: No
```

- Request Headers:

```
{
  access_token: "<user access_token>"
}
```

- Success Response:

```
Status: 200 OK
Response Body:
{
  products: [{obj produc}]
}
```

3. Get Product by Specific Id

```
Get detail product by specific id
URL: /products/:id
Method: GET
Required Permission: No
```

- Params:

```
id: integer
```

- Request Headers:

```
{
  access_token: "<user access_token>"
}
```

- Success Response:

```
Status: 200 OK
Response Body:
{
  products: {}
}
```

4. Update Product by Specific Id

```
Update product by specific id
URL: /products/:id
Method: PUT
Required Permission: Yes
```

- Params:

```
id: integer
```

- Request Headers:

```
{
  access_token: "<user access_token>"
}
```

- Success Response:

```
Status: 200 OK
Response Body:
{
 message: "Successfully updated product"
}
```

5. Delete Product by Specific Id

```
Delete product by specific id
URL: /products/:id
Method: DELETE
Required Permission: Yes
```

- Params:

```
id: integer
```

- Request Headers:

```
{
  access_token: "<user access_token>"
}
```

- Success Response:

```
Status: 200 OK
Response Body:
{
 message: "Successfully delete product"
}
```

# RESTful Error Message

1. Response Error (400) Bad Request - SequelizeValidationError

- Response Body:

```
{
  status: 400,
  message: "<array of error message>"
}
```

2. Status 400 Bad Request - SequelizeDatabaseError

- Response Body:

```
{
  status: 400,
  message: "<array of error message>"
}
```

3. Status 400 Bad Request - SequelizeUniqueConstraintError

- Response Body:

```
{
  status: 400,
  message: "<array of error message>"
}
```

4. Response Error (400) Bad Request - Invalid email or password

- Response Body:

```
{
  status: 400,
  message: ['Invalid email or password']
}
```

5. Status 401 JsonWebTokenError

- Response Body:

```
{
  status: 401,
  message: ['UnAuthenticated - You are not logged in']
}
```

6. Status 403 Forbidden UnAuthorized - Permission is denied

- Response Body:

```
{
  status: 403,
  message: ['UnAuthorized - Permission is denied']
}
```

7. Status 404 User Not Found

- Response Body:

```
{
  status: 404,
  message: ['User Not Found']
}
```

8. Status 404 Product Not Found

- Response Body:

```
{
  status: 404,
  message: ['Product Not Found']
}
```

8. Status 404 Product Not Found

- Response Body:

```
{
  status: 404,
  message: ['Product Not Found']
}
```

9. Status 500 Internal server errors

- Response Body:

```
{
  status: 500,
  message: ['Internal server errors']
}
```
