import * as handler from './index.js';
import {jest} from '@jest/globals';
describe('handler method',()=>{
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should successfully execute for correct url', async() => {
    jest.replaceProperty(process.env, 'apiUrl','https://jsonplaceholder.typicode.com/todos/');
    let result = await handler.handler({detail:{cronjobName:1}});
  });
  
  it('should give error for wrong route', async() => {
    try{
      jest.replaceProperty(process.env, 'apiUrl','https://jsonplaceholder.typicode.com/todos12/');
      let result = await handler.handler({detail:{cronjobName:1}});
    }
    catch(e){
      expect(e).toBeInstanceOf(Error)
    }
  });
  
  it('should give error if resource not found', async() => {
    try{
      jest.replaceProperty(process.env, 'apiUrl','https://jsonplaceholder.typicode.com/todos/100000');
      let result = await handler.handler({detail:{cronjobName:1}});
      console.log(result.status);
    }
    catch(e){
      expect(e).toBeInstanceOf(Error)
    }
  });
  
  it('should give error if error occured while hitting url', async() => {
    try{
      jest.replaceProperty(process.env, 'apiUrl','https://jsonplaceholder.typicodeWrong.com/todos12/');
      let result = await handler.handler({detail:{cronjobName:1}});
    }
    catch(e){
      expect(e).toBeInstanceOf(Error)
    }
  });
})

