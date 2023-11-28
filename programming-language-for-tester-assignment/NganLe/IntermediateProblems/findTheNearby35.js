/**
 * 33. **Find the nearby country and city**
    - Write a function to filter the nearby city in the file countries_with_cities.json. The nearby city is the country has a long value or lat value has distance is less than or equal 10
    - Create a list of each group country has nearby 
    - for example :
    ```{
            "country": "Algeria",
            "city": "Algiers",
            "geo": {
            "lat": 36.72222791981175,
            "long": 3.0234475145605
            }
        },
          {
            "country": "Afghanistan",
            "city": "Kabul",
            "geo": {
            "lat": 34.5553,
            "long": 69.2075
            }
        }
    ``` 
    The above country is neary becasue the lat value of algeria is 36.72222791981175 and the lat value of Afghanistan is 34.5553. The distance between to country is 36.72222791981175 - 34.5553 < 10

    ```
    {
        "country": "Zambia",
        "city": "Lusaka",
        "geo": {
        "lat": -15.453630341948767,
        "long": 28.32388887816563
        }
    },
    {
        "country": "Zimbabwe",
        "city": "Harare",
        "geo": {
        "lat": -17.72870261965665,
        "long": 31.00387096064526
        }
    }
    ```
    
    The above country is neary becasue the long value of Zambia is 28.32388887816563 and the long value of Zimbabwe is 31.00387096064526. The distance between to country is 31.00387096064526 - 28.3238888781656 < 10
 */