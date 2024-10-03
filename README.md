# IP-RMT-53-Server
Individual Project RMT-53 Server Side

---
Admin Login Account:
```
email: admin@mail.com
password: 123456
```
---
User Login Account:
```
email: user@mail.com
password: 123456
```
---

### POST /register

> Create new user

_Request Body_

```
{
  "name": "<user name>",
  "email": "<email>",
  "password": "<password>",
}
```

_Response (201 - Created)_

```
{
    "id": <user id>,
    "name": "<user name>",
    "email": "<user email>",
    "role": "user",
    "imageUrl": "<user image Url>",
    "createdAt": "<user creation time>",
    "updatedAt": "<user updated time>"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "Email is required"
}
```
```
{
  "message": "Email must be unique"
}
```
```
{
  "message": "Password is required"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### POST /login

> User Login


_Request Body_

```
{
  "email": "<user email>",
  "password": "<user password>",
}
```

_Response (200 - OK)_

```
{
    "access_token": "<JWT access token>"
}
```

_Response (400 - Bad Request)_

```
{
  "message": "Email is required"
}
```
```
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid email address"
}
```
```
{
  "message": "Invalid password"
}
```
_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### POST /login/google

> User login using google account

_Request Body_

```
  "google_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImRlZDJjOT..."

```

_Response (200 - OK)_

```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid token."
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /profile

> Get the user profile


_Request Header_

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

_Request Params_

```
{
    id: <user id>
}
```
_Response (200 - OK)_

```
{
{
    "id": <user id>,
    "name": "<user name>",
    "imageUrl": "<user image url>"
}
}
```

_Response (401 - Unauthorized)_


```
{
  "message": "Invalid token."
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### PUT /profile/:id

> Update user profile


_Request Header_

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

_Request Params_

```
{
    id: <user id>
}
```

_Request Body_

```
{
    name: "<new user name>",
    imageUrl: "<new imageUrl>"
}
```

_Response (200 - OK)_

```
{
    "message": "Successfully update the profile"
}
```

_Response (401 - Unauthorized)_


```
{
  "message": "Invalid token."
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /

> Show All Recipes (Data from third party API)

_Request Header_

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

_Response (200 - OK)_

```
{
    "results": [
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 11,
            "gaps": "no",
            "preparationMinutes": 10,
            "cookingMinutes": 45,
            "aggregateLikes": 1866,
            "healthScore": 100,
            "creditsText": "pinkwhen.com",
            "sourceName": "pinkwhen.com",
            "pricePerServing": 300.45,
            "id": 715415,
            "title": "Red Lentil Soup with Chicken and Turnips",
            "readyInMinutes": 55,
            "servings": 8,
            "sourceUrl": "https://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/",
            "image": "https://img.spoonacular.com/recipes/715415-312x231.jpg",
            "imageType": "jpg",
            "nutrition": {
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 477.24,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Fat",
                        "amount": 20.34,
                        "unit": "g",
                        "percentOfDailyNeeds": 31.29
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 3.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 19.37
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 51.78,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.26
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 27.99,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.18
                    },
                    {
                        "name": "Sugar",
                        "amount": 10.55,
                        "unit": "g",
                        "percentOfDailyNeeds": 11.72
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 29.75,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.92
                    },
                    {
                        "name": "Sodium",
                        "amount": 1335.78,
                        "unit": "mg",
                        "percentOfDailyNeeds": 58.08
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 100.0
                    },
                    {
                        "name": "Alcohol %",
                        "amount": 0.0,
                        "unit": "%",
                        "percentOfDailyNeeds": 100.0
                    },
                    {
                        "name": "Protein",
                        "amount": 26.93,
                        "unit": "g",
                        "percentOfDailyNeeds": 53.86
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 5029.39,
                        "unit": "IU",
                        "percentOfDailyNeeds": 100.59
                    },
                    {
                        "name": "Fiber",
                        "amount": 23.79,
                        "unit": "g",
                        "percentOfDailyNeeds": 95.16
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 95.8,
                        "unit": "µg",
                        "percentOfDailyNeeds": 91.23
                    },
                    {
                        "name": "Folate",
                        "amount": 327.55,
                        "unit": "µg",
                        "percentOfDailyNeeds": 81.89
                    },
                    {
                        "name": "Manganese",
                        "amount": 1.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 52.74
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.96,
                        "unit": "mg",
                        "percentOfDailyNeeds": 47.99
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 9.33,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.63
                    },
                    {
                        "name": "Potassium",
                        "amount": 1465.81,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.88
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 34.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.23
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.6,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.83
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 390.65,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.06
                    },
                    {
                        "name": "Iron",
                        "amount": 6.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 33.66
                    },
                    {
                        "name": "Copper",
                        "amount": 0.67,
                        "unit": "mg",
                        "percentOfDailyNeeds": 33.52
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 3.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.23
                    },
                    {
                        "name": "Magnesium",
                        "amount": 123.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.78
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 4.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 28.83
                    },
                    {
                        "name": "Zinc",
                        "amount": 3.62,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.12
                    },
                    {
                        "name": "Selenium",
                        "amount": 14.97,
                        "unit": "µg",
                        "percentOfDailyNeeds": 21.39
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.35,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.43
                    },
                    {
                        "name": "Calcium",
                        "amount": 103.76,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.38
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.12,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.98
                    }
                ],
                "properties": [
                    {
                        "name": "Glycemic Index",
                        "amount": 48.55,
                        "unit": ""
                    },
                    {
                        "name": "Glycemic Load",
                        "amount": 9.43,
                        "unit": ""
                    },
                    {
                        "name": "Inflammation Score",
                        "amount": -10.0,
                        "unit": ""
                    },
                    {
                        "name": "Nutrition Score",
                        "amount": 39.747391990345456,
                        "unit": "%"
                    }
                ],
                "flavonoids": [
                    {
                        "name": "Cyanidin",
                        "amount": 0.33,
                        "unit": "mg"
                    },
                    {
                        "name": "Petunidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Delphinidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Malvidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Pelargonidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Peonidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Catechin",
                        "amount": 0.16,
                        "unit": "mg"
                    },
                    {
                        "name": "Epigallocatechin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Epicatechin",
                        "amount": 0.37,
                        "unit": "mg"
                    },
                    {
                        "name": "Epicatechin 3-gallate",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Epigallocatechin 3-gallate",
                        "amount": 0.15,
                        "unit": "mg"
                    },
                    {
                        "name": "Theaflavin",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Thearubigins",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Eriodictyol",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Hesperetin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Naringenin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Apigenin",
                        "amount": 8.13,
                        "unit": "mg"
                    },
                    {
                        "name": "Luteolin",
                        "amount": 0.09,
                        "unit": "mg"
                    },
                    {
                        "name": "Isorhamnetin",
                        "amount": 0.69,
                        "unit": "mg"
                    },
                    {
                        "name": "Kaempferol",
                        "amount": 0.21,
                        "unit": "mg"
                    },
                    {
                        "name": "Myricetin",
                        "amount": 0.61,
                        "unit": "mg"
                    },
                    {
                        "name": "Quercetin",
                        "amount": 2.89,
                        "unit": "mg"
                    },
                    {
                        "name": "Theaflavin-3,3'-digallate",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Theaflavin-3'-gallate",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Theaflavin-3-gallate",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Gallocatechin",
                        "amount": 0.06,
                        "unit": "mg"
                    }
                ],
                "ingredients": [
                    {
                        "id": 9037,
                        "name": "additional toppings: avocado",
                        "amount": 1.0,
                        "unit": "servings",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.55,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 14.7,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 14.2,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 10.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 1.39,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 2.13,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 146.0,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.64,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.13,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 8.53,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 12.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 9.8,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.14,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 1.82,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 7.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.4,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 2.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 2.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.26,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 6.7,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 1.83,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.66,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 81.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 52.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.19,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 160.0,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 1.74,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 7.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 29.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 21.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 485.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 11124,
                        "name": "carrots",
                        "amount": 0.38,
                        "unit": "medium",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.05,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 2.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 1.35,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.06,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 3821.5,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 2.19,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 7.55,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Trans Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 0.73,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.02,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.21,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.64,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 1.55,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 1.08,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.23,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 4.35,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 8.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 9.38,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.22,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 15.78,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 2.74,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 3.02,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 73.2,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 10111143,
                        "name": "celery stalks",
                        "amount": 0.38,
                        "unit": "",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.09,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 6.74,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.04,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 0.6,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 0.06,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.01,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 0.54,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 0.36,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 0.21,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 1.2,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 0.17,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.44,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 3.9,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 5064,
                        "name": "chicken breast",
                        "amount": 0.25,
                        "unit": "cups",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.36,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 1.25,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 29.85,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.34,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.35,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 7.35,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.35,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 5.25,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.43,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.27,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 9.66,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.09,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 29.75,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 10.86,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.21,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 1.4,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 79.8,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.12,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 57.75,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 4.8,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 25.9,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 10.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.1,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 89.6,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.04,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 10311297,
                        "name": "flat leaf parsley",
                        "amount": 0.06,
                        "unit": "cup",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.23,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.03,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.48,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 4.99,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 315.9,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.24,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 5.18,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.11,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.12,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.11,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.03,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 5.7,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 2.17,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 1.35,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 2.1,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 1.88,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 61.5,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 20.77,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 11215,
                        "name": "garlic",
                        "amount": 0.75,
                        "unit": "cloves",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.52,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.7,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.2,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.74,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 4.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.32,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.14,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.05,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.7,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 0.07,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 3.44,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 3.35,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 0.38,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 0.56,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.04,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 9.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 4053,
                        "name": "olive oil",
                        "amount": 0.25,
                        "unit": "tablespoons",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 3.5,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.48,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.0,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 2.56,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.37,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.5,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 30.94,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 2.11,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 10011693,
                        "name": "canned tomatoes",
                        "amount": 3.5,
                        "unit": "ounce",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 1.29,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.28,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 12.8,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 9.13,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.28,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.04,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 213.33,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.27,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 7.23,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 33.74,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.04,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.18,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.11,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.6,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 1.24,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 1.63,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 1.89,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 5.35,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 4.37,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 5066.34,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 12.9,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 31.75,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.18,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 31.75,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 1.21,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 130.97,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 19.84,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 5.26,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 290.72,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 10016069,
                        "name": "lentils",
                        "amount": 0.25,
                        "unit": "cups",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 3.39,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.48,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.39,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 43.38,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 1.98,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.96,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.07,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 17.55,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 2.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 27.04,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.09,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 25.2,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.09,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.6,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.23,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 3.73,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.22,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 11.61,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.24,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 13.73,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 13.31,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.91,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 215.55,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 202.95,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.23,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 158.85,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 1.17,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 2.7,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 54.9,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 2.25,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 429.75,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 1102047,
                        "name": "salt and pepper",
                        "amount": 1.0,
                        "unit": "servings",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.0,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 0.12,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 0.0,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 193.79,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 11564,
                        "name": "turnip",
                        "amount": 0.13,
                        "unit": "large",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 2.54,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 4.8,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.0,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.06,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 1.47,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 6.86,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.16,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.21,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.41,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 1.06,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.87,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 3.43,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 6.18,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 6.41,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.09,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 15.33,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 2.52,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.02,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 43.69,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 6615,
                        "name": "vegetable stock",
                        "amount": 1.0,
                        "unit": "cups",
                        "nutrients": [
                            {
                                "name": "Fiber",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 3.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Sugar",
                                "amount": 2.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Calories",
                                "amount": 11.75,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 500.55,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Sodium",
                                "amount": 940.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 3.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Trans Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Iron",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Protein",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            }
                        ]
                    },
                    {
                        "id": 10511282,
                        "name": "onion",
                        "amount": 0.13,
                        "unit": "medium",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.84,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 1.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.28,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 1.28,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 3.16,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 0.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.07,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.15,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.23,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 1.05,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.58,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 2.61,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 3.99,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 5.5,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 0.55,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 1.38,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.05,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 20.08,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    }
                ],
                "caloricBreakdown": {
                    "percentProtein": 21.63,
                    "percentFat": 36.77,
                    "percentCarbs": 41.6
                },
                "weightPerServing": {
                    "amount": 585,
                    "unit": "g"
                }
            },
            "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "soup",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free"
            ],
            "occasions": [
                "fall",
                "winter"
            ],
            "spoonacularScore": 99.42481231689453,
            "spoonacularSourceUrl": "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415"
        },...
    ]
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid token."
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /detail/:id

> Show recipe detail

_Request Header_

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

_Response (200 - OK)_

```
{
    "results": [
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 11,
            "gaps": "no",
            "preparationMinutes": 10,
            "cookingMinutes": 45,
            "aggregateLikes": 1866,
            "healthScore": 100,
            "creditsText": "pinkwhen.com",
            "sourceName": "pinkwhen.com",
            "pricePerServing": 300.45,
            "id": 715415,
            "title": "Red Lentil Soup with Chicken and Turnips",
            "readyInMinutes": 55,
            "servings": 8,
            "sourceUrl": "https://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/",
            "image": "https://img.spoonacular.com/recipes/715415-312x231.jpg",
            "imageType": "jpg",
            "nutrition": {
                "nutrients": [
                    {
                        "name": "Calories",
                        "amount": 477.24,
                        "unit": "kcal",
                        "percentOfDailyNeeds": 23.86
                    },
                    {
                        "name": "Fat",
                        "amount": 20.34,
                        "unit": "g",
                        "percentOfDailyNeeds": 31.29
                    },
                    {
                        "name": "Saturated Fat",
                        "amount": 3.1,
                        "unit": "g",
                        "percentOfDailyNeeds": 19.37
                    },
                    {
                        "name": "Carbohydrates",
                        "amount": 51.78,
                        "unit": "g",
                        "percentOfDailyNeeds": 17.26
                    },
                    {
                        "name": "Net Carbohydrates",
                        "amount": 27.99,
                        "unit": "g",
                        "percentOfDailyNeeds": 10.18
                    },
                    {
                        "name": "Sugar",
                        "amount": 10.55,
                        "unit": "g",
                        "percentOfDailyNeeds": 11.72
                    },
                    {
                        "name": "Cholesterol",
                        "amount": 29.75,
                        "unit": "mg",
                        "percentOfDailyNeeds": 9.92
                    },
                    {
                        "name": "Sodium",
                        "amount": 1335.78,
                        "unit": "mg",
                        "percentOfDailyNeeds": 58.08
                    },
                    {
                        "name": "Alcohol",
                        "amount": 0.0,
                        "unit": "g",
                        "percentOfDailyNeeds": 100.0
                    },
                    {
                        "name": "Alcohol %",
                        "amount": 0.0,
                        "unit": "%",
                        "percentOfDailyNeeds": 100.0
                    },
                    {
                        "name": "Protein",
                        "amount": 26.93,
                        "unit": "g",
                        "percentOfDailyNeeds": 53.86
                    },
                    {
                        "name": "Vitamin A",
                        "amount": 5029.39,
                        "unit": "IU",
                        "percentOfDailyNeeds": 100.59
                    },
                    {
                        "name": "Fiber",
                        "amount": 23.79,
                        "unit": "g",
                        "percentOfDailyNeeds": 95.16
                    },
                    {
                        "name": "Vitamin K",
                        "amount": 95.8,
                        "unit": "µg",
                        "percentOfDailyNeeds": 91.23
                    },
                    {
                        "name": "Folate",
                        "amount": 327.55,
                        "unit": "µg",
                        "percentOfDailyNeeds": 81.89
                    },
                    {
                        "name": "Manganese",
                        "amount": 1.05,
                        "unit": "mg",
                        "percentOfDailyNeeds": 52.74
                    },
                    {
                        "name": "Vitamin B6",
                        "amount": 0.96,
                        "unit": "mg",
                        "percentOfDailyNeeds": 47.99
                    },
                    {
                        "name": "Vitamin B3",
                        "amount": 9.33,
                        "unit": "mg",
                        "percentOfDailyNeeds": 46.63
                    },
                    {
                        "name": "Potassium",
                        "amount": 1465.81,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.88
                    },
                    {
                        "name": "Vitamin C",
                        "amount": 34.02,
                        "unit": "mg",
                        "percentOfDailyNeeds": 41.23
                    },
                    {
                        "name": "Vitamin B1",
                        "amount": 0.6,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.83
                    },
                    {
                        "name": "Phosphorus",
                        "amount": 390.65,
                        "unit": "mg",
                        "percentOfDailyNeeds": 39.06
                    },
                    {
                        "name": "Iron",
                        "amount": 6.06,
                        "unit": "mg",
                        "percentOfDailyNeeds": 33.66
                    },
                    {
                        "name": "Copper",
                        "amount": 0.67,
                        "unit": "mg",
                        "percentOfDailyNeeds": 33.52
                    },
                    {
                        "name": "Vitamin B5",
                        "amount": 3.12,
                        "unit": "mg",
                        "percentOfDailyNeeds": 31.23
                    },
                    {
                        "name": "Magnesium",
                        "amount": 123.14,
                        "unit": "mg",
                        "percentOfDailyNeeds": 30.78
                    },
                    {
                        "name": "Vitamin E",
                        "amount": 4.32,
                        "unit": "mg",
                        "percentOfDailyNeeds": 28.83
                    },
                    {
                        "name": "Zinc",
                        "amount": 3.62,
                        "unit": "mg",
                        "percentOfDailyNeeds": 24.12
                    },
                    {
                        "name": "Selenium",
                        "amount": 14.97,
                        "unit": "µg",
                        "percentOfDailyNeeds": 21.39
                    },
                    {
                        "name": "Vitamin B2",
                        "amount": 0.35,
                        "unit": "mg",
                        "percentOfDailyNeeds": 20.43
                    },
                    {
                        "name": "Calcium",
                        "amount": 103.76,
                        "unit": "mg",
                        "percentOfDailyNeeds": 10.38
                    },
                    {
                        "name": "Vitamin B12",
                        "amount": 0.12,
                        "unit": "µg",
                        "percentOfDailyNeeds": 1.98
                    }
                ],
                "properties": [
                    {
                        "name": "Glycemic Index",
                        "amount": 48.55,
                        "unit": ""
                    },
                    {
                        "name": "Glycemic Load",
                        "amount": 9.43,
                        "unit": ""
                    },
                    {
                        "name": "Inflammation Score",
                        "amount": -10.0,
                        "unit": ""
                    },
                    {
                        "name": "Nutrition Score",
                        "amount": 39.747391990345456,
                        "unit": "%"
                    }
                ],
                "flavonoids": [
                    {
                        "name": "Cyanidin",
                        "amount": 0.33,
                        "unit": "mg"
                    },
                    {
                        "name": "Petunidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Delphinidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Malvidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Pelargonidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Peonidin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Catechin",
                        "amount": 0.16,
                        "unit": "mg"
                    },
                    {
                        "name": "Epigallocatechin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Epicatechin",
                        "amount": 0.37,
                        "unit": "mg"
                    },
                    {
                        "name": "Epicatechin 3-gallate",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Epigallocatechin 3-gallate",
                        "amount": 0.15,
                        "unit": "mg"
                    },
                    {
                        "name": "Theaflavin",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Thearubigins",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Eriodictyol",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Hesperetin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Naringenin",
                        "amount": 0.0,
                        "unit": "mg"
                    },
                    {
                        "name": "Apigenin",
                        "amount": 8.13,
                        "unit": "mg"
                    },
                    {
                        "name": "Luteolin",
                        "amount": 0.09,
                        "unit": "mg"
                    },
                    {
                        "name": "Isorhamnetin",
                        "amount": 0.69,
                        "unit": "mg"
                    },
                    {
                        "name": "Kaempferol",
                        "amount": 0.21,
                        "unit": "mg"
                    },
                    {
                        "name": "Myricetin",
                        "amount": 0.61,
                        "unit": "mg"
                    },
                    {
                        "name": "Quercetin",
                        "amount": 2.89,
                        "unit": "mg"
                    },
                    {
                        "name": "Theaflavin-3,3'-digallate",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Theaflavin-3'-gallate",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Theaflavin-3-gallate",
                        "amount": 0.0,
                        "unit": ""
                    },
                    {
                        "name": "Gallocatechin",
                        "amount": 0.06,
                        "unit": "mg"
                    }
                ],
                "ingredients": [
                    {
                        "id": 9037,
                        "name": "additional toppings: avocado",
                        "amount": 1.0,
                        "unit": "servings",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.55,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 14.7,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 14.2,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 10.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 1.39,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 2.13,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 146.0,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.64,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.13,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 8.53,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 12.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 9.8,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.14,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 1.82,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 7.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.4,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 2.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 2.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.26,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 6.7,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 1.83,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.66,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 81.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 52.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.19,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 160.0,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 1.74,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 7.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 29.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 21.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 485.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 11124,
                        "name": "carrots",
                        "amount": 0.38,
                        "unit": "medium",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.05,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 2.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 1.35,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.06,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 3821.5,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 2.19,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 7.55,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Trans Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 0.73,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.02,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.21,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.64,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 1.55,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 1.08,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.23,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 4.35,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 8.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 9.38,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.22,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 15.78,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 2.74,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 3.02,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 73.2,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 10111143,
                        "name": "celery stalks",
                        "amount": 0.38,
                        "unit": "",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.09,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 6.74,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.04,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 0.6,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 0.06,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.01,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 0.54,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 0.36,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 0.21,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 1.2,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 0.17,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.44,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 3.9,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 5064,
                        "name": "chicken breast",
                        "amount": 0.25,
                        "unit": "cups",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.36,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 1.25,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 29.85,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.34,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.35,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 7.35,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.35,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 5.25,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.43,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.27,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 9.66,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.09,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 29.75,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 10.86,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.21,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 1.4,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 79.8,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.12,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 57.75,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 4.8,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 25.9,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 10.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.1,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 89.6,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.04,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 10311297,
                        "name": "flat leaf parsley",
                        "amount": 0.06,
                        "unit": "cup",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.23,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.03,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.48,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 4.99,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 315.9,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.24,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 5.18,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.11,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.12,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.11,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.03,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 5.7,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 2.17,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 1.35,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 2.1,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 1.88,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 61.5,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 20.77,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 11215,
                        "name": "garlic",
                        "amount": 0.75,
                        "unit": "cloves",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.52,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.7,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.2,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.74,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 4.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.32,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.14,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.05,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.7,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 0.07,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 3.44,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 3.35,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 0.38,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 0.56,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.04,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 9.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 4053,
                        "name": "olive oil",
                        "amount": 0.25,
                        "unit": "tablespoons",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 3.5,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.48,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.0,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 2.56,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.37,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.5,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 30.94,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 2.11,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 10011693,
                        "name": "canned tomatoes",
                        "amount": 3.5,
                        "unit": "ounce",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 1.29,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.28,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 12.8,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 9.13,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.28,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.04,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 213.33,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.27,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 7.23,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 33.74,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.04,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.18,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.11,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.6,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 1.24,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 1.63,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 1.89,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 5.35,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 4.37,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 5066.34,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 12.9,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 31.75,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.18,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 31.75,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 1.21,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 130.97,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 19.84,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 5.26,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 290.72,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 10016069,
                        "name": "lentils",
                        "amount": 0.25,
                        "unit": "cups",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 3.39,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.48,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.39,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 43.38,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 1.98,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.96,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.07,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 17.55,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 2.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 27.04,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.09,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 25.2,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.09,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.6,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.23,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 3.73,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.22,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 11.61,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.24,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 13.73,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 13.31,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.91,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 215.55,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 202.95,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.23,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 158.85,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 1.17,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 2.7,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 54.9,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 2.25,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 429.75,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 1102047,
                        "name": "salt and pepper",
                        "amount": 1.0,
                        "unit": "servings",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.0,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 0.12,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 0.0,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 193.79,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 0.04,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 11564,
                        "name": "turnip",
                        "amount": 0.13,
                        "unit": "large",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.07,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.02,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 2.54,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 4.8,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.05,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.0,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.06,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 1.47,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Calcium",
                                "amount": 6.86,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.16,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.21,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.41,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 1.06,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.87,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 3.43,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 6.18,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 6.41,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.09,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 15.33,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 2.52,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.02,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 43.69,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    },
                    {
                        "id": 6615,
                        "name": "vegetable stock",
                        "amount": 1.0,
                        "unit": "cups",
                        "nutrients": [
                            {
                                "name": "Fiber",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 3.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Sugar",
                                "amount": 2.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Calories",
                                "amount": 11.75,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 500.55,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Sodium",
                                "amount": 940.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 3.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Trans Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Iron",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Protein",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            }
                        ]
                    },
                    {
                        "id": 10511282,
                        "name": "onion",
                        "amount": 0.13,
                        "unit": "medium",
                        "nutrients": [
                            {
                                "name": "Iron",
                                "amount": 0.03,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.66
                            },
                            {
                                "name": "Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 31.29
                            },
                            {
                                "name": "Vitamin B1",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.83
                            },
                            {
                                "name": "Choline",
                                "amount": 0.84,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Vitamin C",
                                "amount": 1.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.23
                            },
                            {
                                "name": "Vitamin B5",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 31.23
                            },
                            {
                                "name": "Saturated Fat",
                                "amount": 0.01,
                                "unit": "g",
                                "percentOfDailyNeeds": 19.37
                            },
                            {
                                "name": "Vitamin A",
                                "amount": 0.28,
                                "unit": "IU",
                                "percentOfDailyNeeds": 100.59
                            },
                            {
                                "name": "Zinc",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 24.12
                            },
                            {
                                "name": "Vitamin B2",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 20.43
                            },
                            {
                                "name": "Carbohydrates",
                                "amount": 1.28,
                                "unit": "g",
                                "percentOfDailyNeeds": 17.26
                            },
                            {
                                "name": "Calcium",
                                "amount": 3.16,
                                "unit": "mg",
                                "percentOfDailyNeeds": 10.38
                            },
                            {
                                "name": "Mono Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Manganese",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 52.74
                            },
                            {
                                "name": "Poly Unsaturated Fat",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Fluoride",
                                "amount": 0.15,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Selenium",
                                "amount": 0.07,
                                "unit": "µg",
                                "percentOfDailyNeeds": 21.39
                            },
                            {
                                "name": "Vitamin E",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 28.83
                            },
                            {
                                "name": "Cholesterol",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 9.92
                            },
                            {
                                "name": "Protein",
                                "amount": 0.15,
                                "unit": "g",
                                "percentOfDailyNeeds": 53.86
                            },
                            {
                                "name": "Alcohol",
                                "amount": 0.0,
                                "unit": "g",
                                "percentOfDailyNeeds": 100.0
                            },
                            {
                                "name": "Vitamin B6",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 47.99
                            },
                            {
                                "name": "Fiber",
                                "amount": 0.23,
                                "unit": "g",
                                "percentOfDailyNeeds": 95.16
                            },
                            {
                                "name": "Net Carbohydrates",
                                "amount": 1.05,
                                "unit": "g",
                                "percentOfDailyNeeds": 10.18
                            },
                            {
                                "name": "Folic Acid",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Sugar",
                                "amount": 0.58,
                                "unit": "g",
                                "percentOfDailyNeeds": 11.72
                            },
                            {
                                "name": "Lycopene",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Folate",
                                "amount": 2.61,
                                "unit": "µg",
                                "percentOfDailyNeeds": 81.89
                            },
                            {
                                "name": "Phosphorus",
                                "amount": 3.99,
                                "unit": "mg",
                                "percentOfDailyNeeds": 39.06
                            },
                            {
                                "name": "Copper",
                                "amount": 0.01,
                                "unit": "mg",
                                "percentOfDailyNeeds": 33.52
                            },
                            {
                                "name": "Vitamin B12",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 1.98
                            },
                            {
                                "name": "Calories",
                                "amount": 5.5,
                                "unit": "kcal",
                                "percentOfDailyNeeds": 23.86
                            },
                            {
                                "name": "Vitamin B3",
                                "amount": 0.02,
                                "unit": "mg",
                                "percentOfDailyNeeds": 46.63
                            },
                            {
                                "name": "Sodium",
                                "amount": 0.55,
                                "unit": "mg",
                                "percentOfDailyNeeds": 58.08
                            },
                            {
                                "name": "Caffeine",
                                "amount": 0.0,
                                "unit": "mg",
                                "percentOfDailyNeeds": 0.0
                            },
                            {
                                "name": "Magnesium",
                                "amount": 1.38,
                                "unit": "mg",
                                "percentOfDailyNeeds": 30.78
                            },
                            {
                                "name": "Vitamin K",
                                "amount": 0.05,
                                "unit": "µg",
                                "percentOfDailyNeeds": 91.23
                            },
                            {
                                "name": "Potassium",
                                "amount": 20.08,
                                "unit": "mg",
                                "percentOfDailyNeeds": 41.88
                            },
                            {
                                "name": "Vitamin D",
                                "amount": 0.0,
                                "unit": "µg",
                                "percentOfDailyNeeds": 0.23
                            }
                        ]
                    }
                ],
                "caloricBreakdown": {
                    "percentProtein": 21.63,
                    "percentFat": 36.77,
                    "percentCarbs": 41.6
                },
                "weightPerServing": {
                    "amount": 585,
                    "unit": "g"
                }
            },
            "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "soup",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free"
            ],
            "occasions": [
                "fall",
                "winter"
            ],
            "spoonacularScore": 99.42481231689453,
            "spoonacularSourceUrl": "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415"
        },...
    ]
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid token."
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /favorite/:id

> Show user's favorite

_Request Header_

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

_Request Params_

```
{
    id: <user id>
}
```
_Response (200 - OK)_

```

```

_Response (401 - Unauthorized)_

```
{
  "message": "Invalid token."
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---


### POST /favorite/:id

> Create favorite

_Request Header_

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

_Request Param_

```
{
    id: <recipe id>
}
```

_Response 200_
```

```


