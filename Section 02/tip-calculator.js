const bill_subtotal = 500;

const tip_percent = bill_subtotal >= 50 && bill_subtotal <= 300 ? 0.15 : 0.2;

const tip = bill_subtotal * tip_percent;
