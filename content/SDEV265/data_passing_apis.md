---
title: Data Passing and APIs
course: SDEV265
---

- [Data Passing and APIs](#data-passing-and-apis)
  - [Application Programming Interface (API)](#application-programming-interface-api)
  - [Web Services](#web-services)
  - [Demos](#demos)

# Data Passing and APIs

## Application Programming Interface (API)

An **API** is a set of rules and protocols that allow one software application to interact with another.

A function signature is a type of API.

Can be used to:

- Access web services
- Access databases
- Access hardware
- Access software libraries

## Web Services

Web services are a type of API that is accessed over the internet.

Your application sends a request to a web service (someone else's application) and receives a response.

Common use cases:

- Data exchange between systems
- Payment processing
- Weather data
- Geolocation

## Demos

[Google Address Validation Service](https://developers.google.com/maps/documentation/address-validation/requests-validate-address)

\*You will need a Google Maps API key to run this demo on your own. It's free but they require a credit card on file.

```bash
curl -X POST -d '{
  "address": {
    "regionCode": "US",
    "postalCode": "47905",
    "addressLines": ["3101 S Creasy Ln"]
  }
}' \
-H 'Content-Type: application/json' \
"https://addressvalidation.googleapis.com/v1:validateAddress?key=$GOOGLE_MAPS_API_KEY" \
> api_result.json
```
