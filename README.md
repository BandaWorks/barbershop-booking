### :rocket: What you'll build?

_Booking service for a barbershop_. The web app is requested by one imaginary barbershop company that is dealing with a lot of potential clients leaving them as they don't have a booking service.

#### :wrench: Recommended tools

> This is an example of tools you may use to complete the project.
> You are free to use any tech stack you like as the project is tool-agnostic :slightly_smiling_face:

- React and MobX
- [Styled Components](https://styled-components.com/)
- [date-fns](https://date-fns.org/) for handling the dates
- [Web Intl API: NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) for working with different currencies

##### Start the project

[Parcel](https://parceljs.org/) is already set up as the module bundler. To start the project:

```bash
npm start
```

##### API

There's a [MirageJS](https://miragejs.com/) set up as a fake backend service. It is initialized when you start the project (see `api-fake` folder).

**Get all barbers, each barber contains own collection of services**

```
GET /api/barbers/

Response example: [
    {
        "id": 1,
        "firstName": "James",
        "lastName": "Richards",
        "photo": "https://via.placeholder.com/150",
        // Services that this barber provides
        "services": [
            {
                "id": 1,
                "name": "Buzz Cut",
                "price": 2000,
                "currency": "usd",
                "duration": 75
            }
        ]
    }
]
```

**Get all available services**

```
GET /api/barbers/

Response example:
[
    {
        "id": 1,
        "name": "Buzz Cut",
        // Price is retured in cents
        "price": 2000,
        "currency": "usd",
        // Duration is returned in minutes
        "duration": 75,
    }
]
```

&nbsp;

### Tasks

- [ ] "Choose a service" flow

  - [ ] When I click on "Choose a service", I can see list of services with their corresponding names, durations and prices
  - [ ] When I select a specific service, I can see list of barbers that provide this service
  - [ ] When I select a barber, I can see the order details with barber's name, the service name and its price

- [ ] "Choose a barber" flow
  - [ ] When I click on "Choose a barber", I can see list of barbers with their corresponding profile images, names and availability status
  - [ ] When I select a specific barber, I can see list of the services this barber provides
  - [ ] When I select a service, I can see the order details with barber's name, the service name and its price

&nbsp;

**with :heart: by Banda Works**
