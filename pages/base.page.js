import { test as base } from '@playwright/test';
import { HomePage } from './home.page';
import { SearchPage } from '../pages/search.page';
import { ItemDetailsPage } from '../pages/itemDetails.page';
import { TopMenu } from '../pages/topMenu.page';
import { CartPage } from '../pages/cart.page';

export const test = base.extend({

        homePage: async ({ page }, use) => {
            const homePage = new HomePage(page);
            await use(homePage);
        },
        searchPage: async ({ page }, use) => {
            const searchPage = new SearchPage(page);
            await use(searchPage);
        },
        itemDetailsPage: async ({ page }, use) => {
            const itemDetailsPage = new ItemDetailsPage(page);
            await use(itemDetailsPage);
        },
        topMenu: async ({ page }, use) => {
            const topMenu = new TopMenu(page);
            await use(topMenu);
        },
        cartPage: async ({ page }, use) => {
            const cartPage = new CartPage(page);
            await use(cartPage);
        }
});