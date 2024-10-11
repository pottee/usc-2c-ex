
A web project project automate test with playwright + JS
playwright is really good support and all out of the box. 
Its report, trace, auto-waiting, pallarel test (workers) and debuggin are awesome.

The code is rather example to a website, to not bother the web so url just not defined here.
but code can be learned like for its structure.

**Setup:** 
1. Install playwright

       $ npm init playwright@latest
   


4. Replace the url in page.goto('https://tba.com') with target url first ,
and the assertion 'tba' as title of homepage in expect(this.page).toHaveTitle('tba'), in ./pages/homepage.page.js.
 
**How to run test:**
   
    $ npx playwright test ./tests/cart.spec.js --headed 
    $ npx playwright test --grep '@smoke || @regression'

**How to re-open for report:**
    
    $ npx playwright show-report 
