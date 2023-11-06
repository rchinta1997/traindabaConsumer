
import React, { useState } from 'react'

const FaqComponent = () => {
    const [openFaq, setOpenFaq] = useState(null);
    // Function to toggle the open FAQ
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };


    const faqList=[{
        id:0,
        question: "Q: Where to find Train Dhaba?",
        answer:"While you travel, you can order food online through our website or an app available on Google play store or App Store."
    }, {
        id:1,
        question:  "Q: How to order food online on the train?",
        answer:"Ordering food online has become easy from Train Dhaba by entering your PNR number or train and journey details."
    }, {
        id:2,
        question:"Q: How to book a meal on a train journey through a call?",
        answer:"To book a meal on call, dial 040-40077374 and share your 10-digit PNR number or train details. We will assist you to place your order.          "
    }, 
    {
        id:3,
        question:"Q: What if an order delivery fails?  ",
        answer:"Given the commitment towards our job by our team and vendors, then we would try and deliver the same at the next available station.  "
    },
    {
        id:4,
        question:"Q:  If the train is running late, then how will Train Dhaba ensure timely deliveries? ",
        answer:"In case there's a delay on arrival, we would prepone your order to a station before (post your approval). This will try and ensure that even if the train is running late, your order is delivered to you around the expected delivery time only.   "
    },
    {
        id:5,
        question:"Q: How to avail discounts and offers while placing an order?  ",
        answer:" First choose food online, click on the next button. Check-out page appears scroll down to find “Apply Coupon” enter coupon code or apply running offer you find and place order. "
    },
    {
        id:6,
        question:"Q: How will a customer know that his order is booked?",
        answer:" An order ID is generated which is sent to your registered mobile number through an SMS. All registered customers are also sent an email for the same"
    }
]
  return (
    <div>
            <div className="ritekhana-subheader-view1">
    <span className="ritekhana-banner-transparent"></span>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Faq</h1>
            </div>

            <ul className="ritekhana-breadcrumb">

                <li>Home</li>
                <li><i className="fa fa-angle-right"></i> Faq </li>
            </ul>
        </div>
    </div>
    <div>
    {/* <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="ritekhana-contact-form">
                       <p>Train Dhaba and the Vendor shall collectively be referred to as "Parties and individually as "Party, as the case may be.

                        </p>
                      
                       </div>
                </div>
            </div>
        </div> */}
    </div>
   
</div> 
         {/* <div className="container">
        <div className="row">
            <div className="col-12 mx-auto">
                <div className="accordion" id="faqExample">
                    <div className="card">
                        <div className="card-header p-2" id="headingOne1">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                    Q: Where to find Train Dhaba?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne1" className="collapse" aria-labelledby="headingOne1" data-parent="#faqExample">
                            <div className="card-body">
                                <b>Answer:</b> While you travel, you can order food online through our website or an app available on Google play store or App Store.
                            </div>
                        </div>
                    </div>
                
                    <div className="card">
                        <div className = "card-header p-2" id="headingTwo2">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                    Q: How to order food online on the train?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2" data-parent="#faqExample">
                            <div className="card-body">
                                <b>Answer:</b> Ordering food online has become easy from Train Dhaba by entering your PNR number or train and journey details.
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                        <div className="card-header p-2" id="headingthree3">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsethree3" aria-expanded="false" aria-controls="collapsethree3">
                                    Q: How to book a meal on a train journey through a call?
                                </button>
                            </h5>
                        </div>
                        <div id="collapsethree3" className="collapse" aria-labelledby="headingthree3" data-parent="#faqExample">
                            <div className="card-body">
                                <b>Answer:</b> To book a meal on call, dial 040-40077374 and share your 10-digit PNR number or train details. We will assist you to place your order.                                       </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header p-2" id="headingfour4">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsefour4" aria-expanded="false" aria-controls="collapsefour4">
                                        Q: What if an order delivery fails?       
                                    </button>
                                </h5>
                            </div>
                            <div id="collapsefour4" className="collapse" aria-labelledby="headingfour4" data-parent="#faqExample">
                                <div className="card-body">
                                    <b>Answer:</b> Given the commitment towards our job by our team and vendors, then we would try and deliver the same at the next available station.                                       </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header p-2" id="headingfive5">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsefive5" aria-expanded="false" aria-controls="collapsefive5">
                                            Q:  If the train is running late, then how will Train Dhaba ensure timely deliveries?                                           </button>
                                        
                                    </h5>
                                </div>
                                <div id="collapsefive5" className="collapse" aria-labelledby="headingfive5" data-parent="#faqExample">
                                    <div className="card-body">
                                        <b>Answer:</b> In case there's a delay on arrival, we would prepone your order to a station before (post your approval). This will try and ensure that even if the train is running late, your order is delivered to you around the expected delivery time only.                                       </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header p-2" id="headingsix6">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsesix6" aria-expanded="false" aria-controls="collapsesix6">
                                                Q: How to avail discounts and offers while placing an order?                                           </button>
                                          
                                        </h5>
                                    </div>
                                    <div id="collapsesix6" className="collapse" aria-labelledby="headingsix6" data-parent="#faqExample">
                                        <div className="card-body">
                                            <b>Answer:</b> First choose food online, click on the next button. Check-out page appears scroll down to find “Apply Coupon” enter coupon code or apply running offer you find and place order.                                       </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header p-2" id="headingseven7">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseseven7" aria-expanded="false" aria-controls="collapseseven7">
                                                    Q: How will a customer know that his order is booked?                                           </button>
                                             
                                            </h5>
                                        </div>
                                        <div id="collapseseven7" className="collapse" aria-labelledby="headingseven7" data-parent="#faqExample">
                                            <div className="card-body">
                                                <b>Answer:</b> An order ID is generated which is sent to your registered mobile number through an SMS. All registered customers are also sent an email for the same                                       </div>
                                            </div>
                                        </div>
                        </div>
                    </div>
    
                    
                </div> */}
{/* 
                <script>
        // Use JavaScript to toggle answer visibility
        const questionButtons = document.querySelectorAll('[data-toggle="collapse"]');
        questionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const answer = document.querySelector(button.getAttribute('data-target'));
                if (answer) {
                    if (answer.classList.contains('show')) {
                        answer.classList.remove('show');
                    } else {
                        answer.classList.add('show');
                    }
                }
            });
        });
      
    </script>
     */}

<div className="container">
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
                    >
                      {faq.question}
                    </button>
                  </h5>
                </div>
                <div
                  id={`collapse${index}`}
                  className={`collapse ${openFaq === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-parent="#faqExample"
                >
                  <div className="card-body"><span className="font-weight-bold">Answer:</span>{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
                
            </div>

  )
}




export default FaqComponent
