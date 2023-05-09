# Curd-Node

## Goal:

Create RESTful endpoints for the API that allows users to create, read, update, and delete items from the database. using nodejs as well as
Implement the authentication system using JWT. Users should be able to register, log in, and log out.
Middleware functions to handle common tasks such as error handling, request logging, and authentication checks.

## Tech Stack:

Node JS , React JS , Typescript , MYSQL , Postman 

## Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/20884288-deba91eb-ffff-401f-9d8e-5ab8b59c9b94?action=collection%2Ffork&collection-url=entityId%3D20884288-deba91eb-ffff-401f-9d8e-5ab8b59c9b94%26entityType%3Dcollection%26workspaceId%3D86a49915-1bb2-43b5-a35d-6947d7734355)

- **Postman Collections:** [https://www.getpostman.com/collections/769c5f04be2bf6266abc](https://api.postman.com/collections/20884288-deba91eb-ffff-401f-9d8e-5ab8b59c9b94?access_key=PMAT-01H006CAHH7CFX56P60RFXZBJE)

Base Url for postman/deployed backend Url = https://backend-curd.onrender.com/

## API Endpoints:

```http
POST /api/register
```

| Parameter | Type      | Description                                                   |
| :-------- | :-------- | :------------------------------------------------------------ |
| `email`    | `string` | **Required**. email-id |
| `password`    | `string` | **Required**. password |

---

```http
POST /api/login
```

| Parameter | Type      | Description                                                   |
| :-------- | :-------- | :------------------------------------------------------------ |
| `email`    | `string` | **Required**. email-id |
| `Password`    | `string` | **Required**. password |

---

```http
GET /api/get/
```
```
no parameters
```
---

```http
POST /api/post/
```

| Parameter | Type      | Description                                                   |
| :-------- | :-------- | :------------------------------------------------------------ |
| `name`    | `string` | **Required**. name |
| `email`    | `string` | **Required**. email-id |
| `contact`    | `string` | **Required**. password |

---

```http
DELETE /api/remove/email/ (Find the data by email as primary key)
```
```
no-parameters
```


```http
PATCH /update/email/
```
| Parameter | Type      | Description                                                   |
| :-------- | :-------- | :------------------------------------------------------------ |
| `name`    | `string` | **Required**. name |
| `contact`    | `string` | **Required**. password |

---
---
