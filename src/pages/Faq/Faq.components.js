
import React, { useState } from 'react'

const FaqComponent = () => {
    const [openFaq, setOpenFaq] = useState(null);
    // Function to toggle the open FAQ
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };


    const faqList = [{
        id: 0,
        question: "Q: Where to find Train Dhaba?",
        answer: "While you travel, you can order food online through our website or an app available on Google play store or App Store."
    }, {
        id: 1,
        question: "Q: How to order food online on the train?",
        answer: "Ordering food online has become easy from Train Dhaba by entering your PNR number or train and journey details."
    }, {
        id: 2,
        question: "Q: How to book a meal on a train journey through a call?",
        answer: "To book a meal on call, dial 040-40077374 and share your 10-digit PNR number or train details. We will assist you to place your order.          "
    },
    {
        id: 3,
        question: "Q: What if an order delivery fails?  ",
        answer: "Given the commitment towards our job by our team and vendors, then we would try and deliver the same at the next available station.  "
    },
    {
        id: 4,
        question: "Q:  If the train is running late, then how will Train Dhaba ensure timely deliveries? ",
        answer: "In case there's a delay on arrival, we would prepone your order to a station before (post your approval). This will try and ensure that even if the train is running late, your order is delivered to you around the expected delivery time only.   "
    },
    {
        id: 5,
        question: "Q: How to avail discounts and offers while placing an order?  ",
        answer: " First choose food online, click on the next button. Check-out page appears scroll down to find “Apply Coupon” enter coupon code or apply running offer you find and place order. "
    },
    {
        id: 6,
        question: "Q: How will a customer know that his order is booked?",
        answer: " An order ID is generated which is sent to your registered mobile number through an SMS. All registered customers are also sent an email for the same"
    }
    ]
    return (
        <>
            <div className="page-title-section">
                <div className="container"><h2>FAQ's</h2></div>
            </div>
            <div className="page-main-container">


                <div className="container faq-container">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="accordion" id="faqExample">
                                {faqList.map((faq, index) => (
                                    <div className="card" key={index}>
                                        <div className="card-header p-2" id={`heading${index}`}>
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    onClick={() => toggleFaq(index)}
                                                    aria-expanded={openFaq === index}
                                                    aria-controls={`collapse${index}`}
                                                > {faq.question}
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id={`collapse${index}`}
                                            className={`collapse ${openFaq === index ? 'show' : ''}`}
                                            aria-labelledby={`heading${index}`}
                                            data-parent="#faqExample"
                                        >
                                            <div className="card-body"><span className="font-weight-bold">Answer:</span> {faq.answer}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}




export default FaqComponent
