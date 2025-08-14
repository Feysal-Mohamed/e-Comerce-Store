const DataApi=[
    { "id": 1,
      "category": "electronics", 
      "name": "Portable Charger", 
      "image": "https://example.com/images/electronics1.jpg", 
      "price": 19.99, 
      "rating": 4.8 
    },
    { "id": 2,
      "category": "electronics", 
      "name": "Wireless Earbuds", 
      "image": "https://example.com/images/electronics2.jpg", 
      "price": 39.99, 
      "rating": 4.6 
    },
    { "id": 3,
      "category": "electronics", 
      "name": "Bluetooth Speaker", 
      "image": "https://example.com/images/electronics3.jpg", 
      "price": 29.99, 
      "rating": 4.5 
    },
    { "id": 4,
      "category": "electronics", 
      "name": "Smart Watch", 
      "image": "https://example.com/images/electronics4.jpg", 
      "price": 69.99, 
      "rating": 4.4 
    },
    { "id": 5,
      "category": "electronics", 
      "name": "Webcam", 
      "image": "https://example.com/images/electronics5.jpg", 
      "price": 49.99, 
      "rating": 4.3 
    },
    { "id": 6,
      "category": "electronics", 
      "name": "USB-C Hub", 
      "image": "https://example.com/images/electronics6.jpg", 
      "price": 24.99, 
      "rating": 4.2 
    },
    { "id": 7,
      "category": "electronics", 
      "name": "LED Light Strip", 
      "image": "https://example.com/images/electronics7.jpg", 
      "price": 14.99, 
      "rating": 4.4 
    },
    { "id": 8,
      "category": "electronics", 
      "name": "VR Headset", 
      "image": "https://example.com/images/electronics8.jpg", 
      "price": 109.99, 
      "rating": 4.1 
    },
    { "id": 9,
      "category": "electronics", 
      "name": "Portable Projector", 
      "image": "https://example.com/images/electronics9.jpg", 
      "price": 199.99, 
      "rating": 4.3 
    },
    { "id": 10,
      "category": "electronics", 
      "name": "External SSD", 
      "image": "https://example.com/images/electronics10.jpg", 
      "price": 89.99, 
      "rating": 4.6 
    },

    { "id": 11,
      "category": "fashion", 
      "name": "Crew Neck T‑Shirt", 
      "image": "https://example.com/images/fashion1.jpg", 
      "price": 19.99, 
      "rating": 4.5 
    },
    { "id": 12,
      "category": "fashion", 
      "name": "Slim-fit Jeans", 
      "image": "https://example.com/images/fashion2.jpg", 
      "price": 49.99, 
      "rating": 4.4 
    },
    { "id": 13,
      "category": "fashion", 
      "name": "Canvas Sneakers", 
      "image": "https://example.com/images/fashion3.jpg", 
      "price": 59.99, 
      "rating": 4.6 
    },
    { "id": 14,
      "category": "fashion", 
      "name": "Leather Belt", 
      "image": "https://example.com/images/fashion4.jpg", 
      "price": 24.99, 
      "rating": 4.3 
    },
    { "id": 15,
      "category": "fashion", 
      "name": "Sunglasses (Aviator)", 
      "image": "https://example.com/images/fashion5.jpg", 
      "price": 29.99, 
      "rating": 4.4 
    },
    { "id": 16,
      "category": "fashion", 
      "name": "Wool Scarf", 
      "image": "https://example.com/images/fashion6.jpg", 
      "price": 22.99, 
      "rating": 4.2 
    },
    { "id": 17,
      "category": "fashion", 
      "name": "Denim Jacket", 
      "image": "https://example.com/images/fashion7.jpg", 
      "price": 79.99, 
      "rating": 4.5 
    },
    { "id": 18,
      "category": "fashion", 
      "name": "Chelsea Boots", 
      "image": "https://example.com/images/fashion8.jpg", 
      "price": 99.99, 
      "rating": 4.7 
    },
    { "id": 19,
      "category": "fashion", 
      "name": "Baseball Cap", 
      "image": "https://example.com/images/fashion9.jpg", 
      "price": 14.99, 
      "rating": 4.1 
    },
    { "id": 20,
      "category": "fashion", 
      "name": "Canvas Backpack", 
      "image": "https://example.com/images/fashion10.jpg", 
      "price": 44.99, 
      "rating": 4.6 
    },

    { "id": 21,
      "category": "home", 
      "name": "Air Fryer", 
      "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da083d3e-ed73-4726-a8fa-77f163946605/dkbmnvn-a858482a-3927-4795-adfc-01b2917b330a.png/v1/fill/w_1280,h_960/toxic_yuri__d_by_bubblybutterflies_dkbmnvn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvZGEwODNkM2UtZWQ3My00NzI2LWE4ZmEtNzdmMTYzOTQ2NjA1XC9ka2JtbnZuLWE4NTg0ODJhLTM5MjctNDc5NS1hZGZjLTAxYjI5MTdiMzMwYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xdKCB4rPfG8LzC7Isr-F1VUtdSbs5gQNlHr_3OF91eA", 
      "price": 89.99, 
      "rating": 4.5 
    },
    { "id": 22,
      "category": "home", 
      "name": "Robot Vacuum", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13llWoo2P6ypww8YeeIzBWxKnHlaG1qxAYQ&s", 
      "price": 249.99, 
      "rating": 4.3 
    },
    { "id": 23,
      "category": "home", 
      "name": "LED Table Lamp", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPMPE1kbc90bsp4SCE07R3uRoDdPvVT968w&s", 
      "price": 29.99, 
      "rating": 4.4 
    },
    { "id": 24,
      "category": "home", 
      "name": "Decorative Rug", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNF7wgUx0c9DwsnGypmv74c1urYwtq0BsZw&s", 
      "price": 59.99, 
      "rating": 4.2 
    },
    { "id": 25,
      "category": "home", 
      "name": "Wall Art Print", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJm11CpXyGpJzTjqWS8oXLXDA8gzvxZ9ilw&s", 
      "price": 39.99, 
      "rating": 4.5 
    },
    { "id": 26,
      "category": "home", 
      "name": "Bookshelf", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyON5wM0EDz2tzplEszS9bcu-7XKLX3laKw&s", 
      "price": 129.99, 
      "rating": 4.3 
    },
    { "id": 27,
      "category": "home", 
      "name": "Dining Table (Wooden)", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCg9TwowSK8lolmTNro_6LIe9QbL1Uoe8mg&s", 
      "price": 299.99, 
      "rating": 4.6 
    },
    { "id": 28,
      "category": "home", 
      "name": "Curtain Panels", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJ-LK7pPCEhpA_b-PDZMazA6sqzR1OZ_7gg&s", 
      "price": 49.99, 
      "rating": 4.1 
    },
    { "id": 29,
      "category": "home", 
      "name": "Floor Mirror", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgdNdqmxXOEIbNnqqkyqub6Pmh-qW7VCJ8Q&s", 
      "price": 89.99, 
      "rating": 4.4 
    },
    { "id": 30,
      "category": "home", 
      "name": "Storage Bins (Set of 3)", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUkiCDpowEHppG80WziA-LuyamvRCr0rIxg&s", 
      "price": 34.99, 
      "rating": 4.2 
    },
    { "id": 31,
      "category": "books", 
      "name": "The Great Gatsby", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0G17L5_d2kL0MtjGsH-UTS7RHQXjR8NbWA&s", 
      "price": 9.99, 
      "rating": 4.7 
    },
    { "id": 32,
      "category": "books", 
      "name": "1984 by George Orwell", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_W5fHCkYbvD4AYUDsFh9XjXOpKrHe4Hnvw&s", 
      "price": 8.99, 
      "rating": 4.8 
    },
    { "id": 33,
      "category": "books", 
      "name": "To Kill a Mockingbird", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuspdwBwKWi5knId9_BrJTw4fO_wR7PZDqg&s", 
      "price": 7.99, 
      "rating": 4.9 
    },
    { "id": 34,
      "category": "books", 
      "name": "The Hobbit", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyV19gd98ip0DowY95d2LvAWw1TE201ei9Hw&s", 
      "price": 10.99, 
      "rating": 4.8 
    },
    { "id": 35,
      "category": "books", 
      "name": "Sapiens: A Brief History of Humankind", 
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0C10OwM1g1A_5KaCaXi4yHR3znwmqkSSGjQ&s", 
      "price": 14.99, 
      "rating": 4.7 
    },
   {
  "id": 36,
  "category": "books",
  "name": "The Catcher in the Rye",
  "image": "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg",
  "price": 9.49,
  "rating": 4.2
},
{
  "id": 37,
  "category": "books",
  "name": "Harry Potter and the Sorcerer's Stone",
  "image": "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg",
  "price": 12.99,
  "rating": 4.9
},
{
  "id": 38,
  "category": "books",
  "name": "Pride and Prejudice",
  "image": "https://m.media-amazon.com/images/I/91HHqVTAJQL.jpg",
  "price": 8.49,
  "rating": 4.6
},
{
  "id": 39,
  "category": "books",
  "name": "Meditations by Marcus Aurelius",
  "image": "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
  "price": 6.99,
  "rating": 4.8
},
{
  "id": 40,
  "category": "books",
  "name": "Atomic Habits",
  "image": "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  "price": 11.99,
  "rating": 4.7
},
{
  "id": 41,
  "category": "fitness",
  "name": "Yoga Mat",
  "image": "https://m.media-amazon.com/images/I/71oT0m1N5yL._AC_SL1500_.jpg",
  "price": 19.99,
  "rating": 4.8
},
{
  "id": 42,
  "category": "fitness",
  "name": "Dumbbell Set (10-50 lbs)",
  "image": "https://m.media-amazon.com/images/I/71pZK0J7uDL._AC_SL1500_.jpg",
  "price": 79.99,
  "rating": 4.7
},
{
  "id": 43,
  "category": "fitness",
  "name": "Resistance Bands",
  "image": "https://m.media-amazon.com/images/I/71n1xgQfGmL._AC_SL1500_.jpg",
  "price": 14.99,
  "rating": 4.5
},
{
  "id": 44,
  "category": "fitness",
  "name": "Adjustable Kettlebell",
  "image": "https://m.media-amazon.com/images/I/71z0VYwQ2yL._AC_SL1500_.jpg",
  "price": 49.99,
  "rating": 4.6
},
{
  "id": 45,
  "category": "fitness",
  "name": "Fitness Tracker Watch",
  "image": "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
  "price": 59.99,
  "rating": 4.7
},
{
  "id": 46,
  "category": "fitness",
  "name": "Jump Rope",
  "image": "https://m.media-amazon.com/images/I/71nVtZ+4n-L._AC_SL1500_.jpg",
  "price": 9.99,
  "rating": 4.3
},
{
  "id": 47,
  "category": "fitness",
  "name": "Foam Roller",
  "image": "https://m.media-amazon.com/images/I/71y6VvZ1PCL._AC_SL1500_.jpg",
  "price": 24.99,
  "rating": 4.6
},
{
  "id": 48,
  "category": "fitness",
  "name": "Pull-up Bar",
  "image": "https://m.media-amazon.com/images/I/71v3ZpQn2yL._AC_SL1500_.jpg",
  "price": 39.99,
  "rating": 4.5
},
{
  "id": 49,
  "category": "fitness",
  "name": "Exercise Ball",
  "image": "https://m.media-amazon.com/images/I/71nVZbZy2-L._AC_SL1500_.jpg",
  "price": 29.99,
  "rating": 4.4
},
{
  "id": 50,
  "category": "fitness",
  "name": "Cycling Gloves",
  "image": "https://m.media-amazon.com/images/I/71hZpQn2yL._AC_SL1500_.jpg",
  "price": 14.99,
  "rating": 4.2
}
  



  ]


//     {
//     id:1,
//     category:"electrinics",
//     name:"Charger",
//     image:"",
//     price:2,
//     rating:4.9,

// }


  // Electronics (10)
 

export default DataApi