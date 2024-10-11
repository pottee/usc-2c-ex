const { test } = require('../pages/base.page');
const testData = require('../test-data/productItemsData.json');

test('As guest user, I can add a product at item details page to cart @smoke', async({ homePage, searchPage, itemDetailsPage, topMenu, cartPage }) => {

    await test.step('When I select a product item from search result', async () => {

        await homePage.openPage();
        await homePage.acceptPrivacy();

        await searchPage.searchForKeyword(testData.searchKeyword);
        await searchPage.productItemsLoaded();
        await searchPage.selectProduct(testData.productItem1.itemName); 
    });
    await test.step('And I add product to cart', async () => {

        await itemDetailsPage.addToCartButtonLoaded();
        await itemDetailsPage.clickAddToCart();
    });
    await test.step('Then I should see number 1 in cart icon', async () => {

        await topMenu.assertNumberOfItems(1);
    });
    await test.step('And I should see the product information in my cart', async () => {
        
        await itemDetailsPage.viewToCartButtonLoaded(); // it might navigate to cart page by clicking cart badge icon first then 'View cart' button instead. If it's not in item details page and the item already added.
        await itemDetailsPage.clickViewToCart();
        
        await cartPage.buyNowButtonLoaded();
        await cartPage.assertProductAdded(testData.productItem1);
    });
});
