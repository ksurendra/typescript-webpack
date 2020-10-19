import * as _ from 'lodash';

var FormData = require('form-data');
const axios = require('axios');

console.log('Testing from index.ts Suren..');

type PersonScore = {
    name: string;
    password: string;
};

/*
const theForm = document.getElementById("theForm");
console.log(theForm);

theForm.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    const username = <HTMLInputElement>document.getElementById("username");
    const password = <HTMLInputElement>document.getElementById("username");

    console.log("username=" + username.value);
} );
*/

const theForm = document.getElementById("theForm");

theForm.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    const username = <HTMLInputElement>document.getElementById("username");
    const password = <HTMLInputElement>document.getElementById("username");

    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    console.log(formData);

    // Calling external API
    //var res = axios.get( 'https://reqres.in/api/users/2' );
    axios.get('https://reqres.in/api/users/2')
        .then(function (response:any) {
            // handle success
            console.log(response);
        })
        .catch(function (error:any) {
            // handle error
            console.log(error);
        })
        .then(function () {
        // always executed
    });

    // POST
    axios.post('https://reqres.in/api/users', formData)
      .then(function (response:any) {
        console.log(JSON.stringify(response));
      })
      .catch(function (error:any) {
        console.log(error);
      });
})