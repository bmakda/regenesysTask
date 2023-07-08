## Description

Task made by Burhanudddin Makda for Regenesys Business School

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Request and Response for API Endpoints
```json
[
  {
    "name": "User",
    "item": [
      {
        "name": "Login",
        "request": {
          "method": "POST",
          "header": [],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"username\": \"bmakda\",\r\n    \"password\": \"123456789\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "http://localhost:8080/auth/login",
            "protocol": "http",
            "host": ["localhost"],
            "port": "8080",
            "path": ["auth", "login"]
          }
        },
        "response": [
			{
				"status": 200,
				"data": {
					"expiresIn": "21d",
					"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJtYWtkYSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjg4ODE2MDE0LCJleHAiOjE2OTA2MzA0MTR9.jL-LbGM6UwJ3mAlRG07zKmaJPws_PykjAbD9QacE4as"
				}
			}
		]
      }
    ]
  },
  {
    "name": "Salary",
    "item": [
      {
        "name": "Add Salary",
        "request": {
          "method": "POST",
          "header": [
            {
              "key": "Authorization",
              "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJtYWtkYSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjg4ODE2MDE0LCJleHAiOjE2OTA2MzA0MTR9.jL-LbGM6UwJ3mAlRG07zKmaJPws_PykjAbD9QacE4as",
              "type": "text"
            }
          ],
          "body": {
            "mode": "raw",
            "raw": "{\r\n    \"name\": \"Aman\",\r\n    \"salary\": 14500,\r\n    \"currency\": \"USD\",\r\n    \"on_contract\": true,\r\n    \"department\": \"Engineering\",\r\n    \"sub_department\": \"DevOps\"\r\n}",
            "options": {
              "raw": {
                "language": "json"
              }
            }
          },
          "url": {
            "raw": "http://localhost:8080/salary/",
            "protocol": "http",
            "host": ["localhost"],
            "port": "8080",
            "path": ["salary", ""]
          }
        },
        "response": [
			{
				"status": 201,
				"data": {
					"name": "Tman",
					"salary": 1400,
					"department": "Engineering",
					"sub_department": "DevOps",
					"currency": "USD",
					"on_contract": true,
					"_id": "64a949ff64de6349fe572477",
					"__v": 0
				}
			}
		]
      },
      {
        "name": "Delete Salary",
        "request": {
          "method": "DELETE",
          "header": [
            {
              "key": "Authorization",
              "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJtYWtkYSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjg4ODE2MDE0LCJleHAiOjE2OTA2MzA0MTR9.jL-LbGM6UwJ3mAlRG07zKmaJPws_PykjAbD9QacE4as",
              "type": "text"
            }
          ],
          "url": {
            "raw": "http://localhost:8080/salary/64a949ff64de6349fe572477",
            "protocol": "http",
            "host": ["localhost"],
            "port": "8080",
            "path": ["salary", "64a949ff64de6349fe572477"]
          }
        },
        "response": [
			{
				"status": 200,
				"data": {
					"acknowledged": true,
					"deletedCount": 1
				}
			}
		]
      },
      {
        "name": "Analytics Yearly",
        "request": {
          "method": "GET",
          "header": [
            {
              "key": "Authorization",
              "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJtYWtkYSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjg4ODE2MDE0LCJleHAiOjE2OTA2MzA0MTR9.jL-LbGM6UwJ3mAlRG07zKmaJPws_PykjAbD9QacE4as",
              "type": "text"
            }
          ],
          "url": {
            "raw": "http://localhost:8080/salary/analytics_yearly",
            "protocol": "http",
            "host": ["localhost"],
            "port": "8080",
            "path": ["salary", "analytics_yearly"]
          }
        },
        "response": [
			{
				"status": 200,
				"data": [
					{
						"_id": null,
						"min": 1400,
						"max": 34500,
						"mean": 14610
					}
				]
			}
		]
      },
      {
        "name": "Analytics Contract",
        "request": {
          "method": "GET",
          "header": [
            {
              "key": "Authorization",
              "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJtYWtkYSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjg4ODE2MDE0LCJleHAiOjE2OTA2MzA0MTR9.jL-LbGM6UwJ3mAlRG07zKmaJPws_PykjAbD9QacE4as",
              "type": "text"
            }
          ],
          "url": {
            "raw": "http://localhost:8080/salary/analytics_contract",
            "protocol": "http",
            "host": ["localhost"],
            "port": "8080",
            "path": ["salary", "analytics_contract"]
          }
        },
        "response": [
			{
				"status": 200,
				"data": [
					{
						"_id": null,
						"min": 1500,
						"max": 30500,
						"mean": 13381.818181818182
					}
				]
			}
		]
      },
      {
        "name": "Analytics Department",
        "request": {
          "method": "GET",
          "header": [
            {
              "key": "Authorization",
              "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJtYWtkYSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjg4ODE2MDE0LCJleHAiOjE2OTA2MzA0MTR9.jL-LbGM6UwJ3mAlRG07zKmaJPws_PykjAbD9QacE4as",
              "type": "text"
            }
          ],
          "url": {
            "raw": "http://localhost:8080/salary/analytics_department",
            "protocol": "http",
            "host": ["localhost"],
            "port": "8080",
            "path": ["salary", "analytics_department"]
          }
        },
        "response": [
			{
				"status": 200,
				"data": [
					{
						"_id": "Worker",
						"min": 1400,
						"max": 1700,
						"mean": 1525
					},
					{
						"_id": "Engineering",
						"min": 10500,
						"max": 30500,
						"mean": 16435.714285714286
					},
					{
						"_id": "Management",
						"min": 21500,
						"max": 34500,
						"mean": 28000
					}
				]
			}
		]
      },
      {
        "name": "Analytics Sub Department",
        "request": {
          "method": "GET",
          "header": [
            {
              "key": "Authorization",
              "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJtYWtkYSIsInBhc3N3b3JkIjoiMTIzNDU2Nzg5IiwiaWF0IjoxNjg4ODE2MDE0LCJleHAiOjE2OTA2MzA0MTR9.jL-LbGM6UwJ3mAlRG07zKmaJPws_PykjAbD9QacE4as",
              "type": "text"
            }
          ],
          "url": {
            "raw": "http://localhost:8080/salary/analytics_sub_department",
            "protocol": "http",
            "host": ["localhost"],
            "port": "8080",
            "path": ["salary", "analytics_sub_department"]
          }
        },
        "response": [
			{
				"status": 200,
				"data": [
					{
						"_id": "Worker",
						"sub_departments": [
							{
								"sub_department": "Cleaning",
								"min": 1400,
								"max": 1700,
								"mean": 1525
							}
						]
					},
					{
						"_id": "Engineering",
						"sub_departments": [
							{
								"sub_department": "Backend",
								"min": 13500,
								"max": 17500,
								"mean": 16166.666666666666
							},
							{
								"sub_department": "iOS",
								"min": 15500,
								"max": 16500,
								"mean": 16000
							},
							{
								"sub_department": "BA",
								"min": 12000,
								"max": 12000,
								"mean": 12000
							},
							{
								"sub_department": "Android",
								"min": 10500,
								"max": 16100,
								"mean": 13300
							},
							{
								"sub_department": "Analyst",
								"min": 15500,
								"max": 15500,
								"mean": 15500
							},
							{
								"sub_department": "Chip Designing",
								"min": 19500,
								"max": 19500,
								"mean": 19500
							},
							{
								"sub_department": "Team Leader",
								"min": 30500,
								"max": 30500,
								"mean": 30500
							},
							{
								"sub_department": "QA",
								"min": 19500,
								"max": 19500,
								"mean": 19500
							},
							{
								"sub_department": "DevOps",
								"min": 11500,
								"max": 14500,
								"mean": 13000
							}
						]
					},
					{
						"_id": "Management",
						"sub_departments": [
							{
								"sub_department": "CTO",
								"min": 21500,
								"max": 21500,
								"mean": 21500
							},
							{
								"sub_department": "CEO",
								"min": 34500,
								"max": 34500,
								"mean": 34500
							}
						]
					}
				]
			}
		]
      }
    ]
  }
]
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support