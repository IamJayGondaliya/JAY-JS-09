/*
    AJAX & API:

        AJAX:
            - Asynchronous JavaScript And XML
            - to call the http request.

        API:
            - Stands for Application Programming Interface.
            - API is a mediator which pass the request from the software, converts it
              into query and provides to the database. Also it takes reqposnce from the
              database, converts it into the JSON and provides to the software.
            - It is an URL which gives the JSON data.

        API integration:
            - call the api using appropriate http request.
            - validate the status code from api.
            - store or integrate the data.

        HTTP Request methods:
            - GET   : to get the data from API.
            - POST  : to upload data in server.
            - PUT   : to update single or entire data in the server.
            - PATCH : to update single data in the server.
            - DELETE: to delete data from the server.

        Status Code:
            - 100..199  : Informative
            - 200..299  : Success
            - 300..399  : Redirective
            - 400..499  : Client error
            - 500..599  : Server error

            IMP:
                - 200   : success
                - 201   : uploaded or created
                - 404   : page not found
                
*/

let api = "https://dummyjson.com/products/1";

let myData = Array();

const loadData = async () => {
  await fetch(api)
    // Result/Response         =>  res.status | res.json()
    .then((res) => {
      console.log(`Status code: ${res.status}`);
      return res.json();
    })
    // Data
    .then((data) => {
      myData = data;
    })
    // Exception
    .catch((e) => {
      console.log(`ERROR: ${e}`);
    });

  console.log(myData);
};

loadData();
