### :rocket: What you'll build?

_Booking service for a barbershop_. The web app is requested by one imaginary barbershop company that is dealing with a lot of potential clients leaving them as they don't have a booking service.

#### :wrench: Recommended tools

> This is an example of tools you may use to complete the project.
> You are free to use any tech stack you like as the project is tool-agnostic :slightly_smiling_face:

- React and MobX
- [Styled Components](https://styled-components.com/)
- Parcel

##### To start the project

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

// TODO: Add tasks

&nbsp;

**with :heart: by Banda Works**
