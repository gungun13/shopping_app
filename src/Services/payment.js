
export function payNow(amount) {
    const convertedAmount=Math.round(amount * 100)
var options = {
    key: "rzp_test_HRqwiUz0FBdtXo",
    key_secret: "IzDaJBD8NSaXLHG5lxGIEB",
    amount: convertedAmount,
    currency: "INR",
    order_receipt: 'order_rcptid_',
    name: "E-Bharat",
    description: "for testing purpose",
    handler: function (response) {
        console.log(response)
        toast.success('Payment Successful')
    },

    theme: {
        color: "#3399cc"
    }
};

var pay = new window.Razorpay(options);
pay.open();
console.log(pay)
}