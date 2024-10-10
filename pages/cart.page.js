import { expect } from "@playwright/test";

class CartPage{

    constructor(page){
    
        this.page = page;
        this.buyNowButton = page.getByTestId('BuyNowButton');
        this.itemBySeller = page.getByTestId('AnItemBySeller');
        this.removeItemButton = page.getByTestId('RemoveItem');
    }

    async assertProductAdded(productItem){

        const itemList = []
        const count = await this.itemBySeller.count();

        for (let i = 0; i < count; ++i){

            let singleItemObj = {};
            const itemName = await this.itemBySeller.nth(i).locator("[data-testid='AnItemName']").textContent();
            const itemPrice = await this.itemBySeller.nth(i).locator("[data-testid='AnItemPrice']").textContent();

            singleItemObj['itemName'] = itemName;
            singleItemObj['itemPrice'] = itemPrice;
            console.log(" item obj found is ", singleItemObj);
            itemList.push(singleItemObj);
        }
        console.log(" itemList ", itemList);
        await expect(itemList[0]).toEqual(productItem);
    }

    async buyNowButtonLoaded(){

        await this.page.waitForURL('**/cart/')
        await expect(this.buyNowButton).toBeVisible(); 
    }
}

module.exports = {CartPage};