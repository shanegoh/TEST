var express = require("express");
var public_router = express.Router();
const multer = require("multer");
const formData = multer();
const { authenticate, authenticateToken } = require("../auth.js");
const { getAllWalletById } = require("../services.js");
const { getExchangeRateByCountry } = require("../services.js");

// Public Access
public_router.post("/test", formData.fields([]), function (req, res) {
    console.log(req.body.text);
    return res.send({ message: "success" });
});

// Customer Access
public_router.post("/login", formData.fields([]), function (req, res) {
    console.log(req.body);
    authenticate(req.body)
        .then((token) => {
            if (token) {
                res.status(200).send({ accessToken: token });
            } else {
                res.status(400).send({ message: "Invalid Username or Password" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(401).send({ message: err });
        });
});

public_router.get(
    "/findAllWalletById",
    authenticateToken,
    formData.fields([]),
    function (req, res) {
        console.log(req.id);
        getAllWalletById(req.id)
            .then((walletList) => {
                if (walletList) {
                    return res.send({ walletList: walletList });
                } else {
                    return res.status(400).send({ message: "No Wallet" });
                }
            })
            .catch((err) => {
                return res.status(400).send({ message: err });
            });
    }
);

public_router.get(
    "/getExchangeRateByCountry",
    authenticateToken,
    formData.fields([]),
    function (req, res) {
        console.log(req.id);
        getExchangeRateByCountry(req.id)
            .then((ExchangeRate) => {
                if (ExchangeRate) {
                    return res.send({ ExchangeRate: ExchangeRate });
                } else {
                    return res.status(400).send({ message: "No Exchange Rate found" });
                }
            })
            .catch((err) => {
                return res.status(400).send({ message: err });
            });
    }
);

public_router.get('/closeAccount', authenticateToken, formData.fields([]), function (req, res) {
    console.log(req.id)
    getAllCurrencyFromWalletId(req.params.id).then((currencyList) => {
        if (currencyList) {
            return res.send({ 'currencyList': currencyList })
        } else {
            return res.status(400).send({ 'message': 'No currency' })
        }
    })
        .catch((err) => {
            return res.status(400).send({ 'message': err })
        })
});

module.exports = public_router;
