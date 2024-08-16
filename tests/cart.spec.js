const { test } = require('../pages/base.page');
const testData = require('../test-data/productItemsData.json');

test('Guest user adds a product to cart successfully', async ({ homePage, searchPage, itemDetailsPage, topMenu, cartPage, page }) => {

    await homePage.openPage();
    await homePage.acceptPrivacy();

    await searchPage.searchForKeyword(testData.searchKeyword);
    await searchPage.productItemsLoaded();
    await searchPage.selectProduct(testData.productItem1.itemName); 
    
    await itemDetailsPage.addToCartButtonLoaded();
    await itemDetailsPage.clickAddToCart();

    await topMenu.assertNumberOfItems(1);
    
    await itemDetailsPage.viewToCartButtonLoaded();
    await itemDetailsPage.clickViewToCart();
    
    await cartPage.buyNowButtonLoaded();
    await cartPage.assertProductAdded(testData.productItem1);
    
});