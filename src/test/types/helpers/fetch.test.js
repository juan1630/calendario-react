//imports 
import { fetchSinToken } from '../../../helpers/fetch';

describe('Test in fetch functions', () => {

    test('fetch should work', async()=> {
        const resp = await fetchSinToken('auth', {  "email":"juanpa1630@gmail.com","password":"123456" }, "POST");
        //console.log( resp  )
        const body = await resp.json();
        
        expect( resp instanceof Response ).toBe(true)

        expect(body.ok).toBe(true);
    
    });
});