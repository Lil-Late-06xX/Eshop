import express from 'express';
import cors from 'cors';
import stripe from 'stripe';

const sk_test = 'sk_test_51NnJhzDXaygwXiLFMZ6eiVjdvEReZaOPwsxTOpwfOxISsBHYtpXOOCKJE6M1JKli92zEbJruQIe1VD1RKgVtpJxi00BJcm6P8i'; // Replace with your actual Stripe secret key
const stripeInstance = stripe(sk_test);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post("/checkout", async (req, res) => {
    try {
        if (!req.body || !req.body.items || !Array.isArray(req.body.items)) {
            return res.status(400).json({ error: 'Invalid request body' });
        }


        const session = await stripeInstance.checkout.sessions.create({
            line_items: req.body.items.map(item => ({
              price_data: {
                  currency: "usd",
                  unit_amount: item.price * 100,
                  product_data: {
                      name: item.name, 
                  },
              },
              quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: "http://localhost:4000/success",
            cancel_url: "http://localhost:5174/cart"
        });

        res.send(JSON.stringify({
            url: session.url
        }));

        console.log(req.body.items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});


