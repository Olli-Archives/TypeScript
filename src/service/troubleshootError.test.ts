import axios from 'axios';

describe(`Axios is willing to take a method as string, this works
when not in TypeScript, however with TypeScript, type check will fail`, () => {
    it(`give Axios method a string "post".
      Expected behavior: type check passes.
      Observed behavior: AxiosRequestConfig'.Types of property 'method' are incompatible.
  `, () => {
        const request = {
          url: 'http://localhost:5000/api/hello',
          method: 'post'
        };
        axios.request(request)
          /*
      Argument of type '{ url: string; method: string; }' is not assignable to parameter of type 
       'AxiosRequestConfig'.Types of property 'method' are incompatible.
        Type 'string' is not assignable to type '"post" | "get" | "GET" 
        | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "POST" | "put" 
        | "PUT" | "patch" | "PATCH" | undefined'.ts(2345)
        */
          .then(response => {
            expect(response).toEqual({
              data: 'Hello, world!',
              status: 200,
              statusText: 'OK'
            });
          });
      });
  });
