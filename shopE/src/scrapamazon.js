import puppeteer from 'puppeteer';
import { load } from 'cheerio';
import fs from 'fs/promises';

const list = ['iphone', 'samsung TV', 'apple watch' ,'samsung watch' , 'macbook pro' , 'iphone13' ];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

async function scrapeAmazon(name) {
    const baseURL = "https://www.amazon.com";
    const searchURL = `${baseURL}/s?k=${encodeURIComponent(name)}`;

    const rowData = [];

    try {
        const browser = await puppeteer.launch({ headless: true }); // Set headless to true
        const page = await browser.newPage();

        await page.goto(searchURL);

        // Wait for a specific indicator that the results are loaded
        await page.waitForSelector('.s-main-slot', { timeout: 60000 });

        const content = await page.content();
        const $ = load(content);

        $('.sg-row').each((index, element) => {
            let id = getRandomInt(1,100000000000);
            const description = $(element).find('.a-size-medium').first().text().trim();
            const priceText = $(element).find('.a-price .a-offscreen').first().text().trim();
            const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            // Remove non-numeric characters and parse as an integer

            let rating = $(element).find('.a-icon-star-small .a-icon-alt').first().text().trim();
            let reviewCount = $(element).find('.a-link-normal span').eq(1).text().trim();
            const image = $(element).find('.s-product-image-container img.s-image').attr('src');

            reviewCount = reviewCount.replace(',', '');

            if (description && price && description.length > 10) {
                if (reviewCount.length > 4) {
                    reviewCount = 'No reviews';
                    if (rating == '') {
                        rating = 'No rating';
                    }
                }
                rowData.push({
                    id,
                    name,
                    description,
                    price,
                    rating,
                    reviewCount,
                    image
                });
            }
        });

        await browser.close();

        return rowData;
    } catch (error) {
        console.error("Error scraping Amazon:", error);
        return [];
    }
}

async function fetchData() {
    const results = {}; // Create an object to store the results for each item in the list

    for (const item of list) {
        try {
            const data = await scrapeAmazon(item);
            results[item] = data; // Store the results in the object with the item name as the key
        } catch (error) {
            console.error(`Error scraping ${item}:`, error);
        }
    }
    return results;
}

async function main() {
    const finalData = await fetchData();

    try {
        // Convert the finalData object to a JSON string
        const jsonResults = JSON.stringify(finalData, null, 2);

        // Write the JSON data to a new file named "amazon_results.js"
        await fs.writeFile('amazon_results.js', jsonResults);

        console.log('Data saved');
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}

main();