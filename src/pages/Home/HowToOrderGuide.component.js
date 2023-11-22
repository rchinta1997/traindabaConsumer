import React from "react";

const HowToOrderGuide = () => {
  return (
    <>
      <section className="guide-section linear-gradiant pdtb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8 xs-text-center">
              <h3 className="sub-heading light-yellow uppercase">
                Ordering Food in Train
              </h3>
              <p className="fs-24 mt-3 text-white">
                Want to know how to Order Food in Train...
              </p>
            </div>
            <div className="col-md-4 xs-btn-center">
              <button
                type="button"
                role="button"
                onClick={() => console.log("Button Clicked")}
                className="btn btn-primary btn-lg mt-4"
                data-bs-toggle="modal"
                data-bs-target="#bd-example-modal-lg"
              >
                Guide Me
              </button>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="bd-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Ordering Food in Train
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="col-12 col-md-12">
                  <div className="footer-info mt-3">
                    <h3>
                      <strong>
                        Order Food in Trains with IRCTC-Authorized E-Catering
                        Partner
                      </strong>
                    </h3>
                    <p>
                      Order delicious food in trains with Train Dhaba and get
                      on-seat delivery of restaurant food of your choice all
                      across India.
                    </p>
                    <p>
                      You can book food in train before your train journey with
                      Train Dhaba website, app, or through Train Dhaba toll-free
                      contact number.
                    </p>
                    <p>
                      All you need to enter is your 10-digit PNR number or train
                      name or number.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Steps to Order Food on Trains Online From Train Dhaba
                      </strong>
                    </p>
                    <ol>
                      <li>
                        Every passenger is allotted a 10-digit PNR number
                        printed on the top left corner of the ticket. Any
                        passenger who wants to order food of their choice via
                        Train Dhaba can visit our website or download our app
                        from Google Play Store.
                      </li>
                      <li>
                        Enter the PNR number in the space provided and check the
                        list of restaurants and food available en route.
                      </li>
                      <li>Select the restaurant and food you want to order.</li>
                      <li>
                        The selected menu will be added in the cart, and the
                        total bill will be reflected on the screen.
                      </li>
                      <li>
                        Click the checkout button, and you will be taken to the
                        payment page.
                      </li>
                      <li>
                        Select the appropriate payment gateway and pay your bill
                        online by debit cards, credit cards, internet banking,
                        Paytm, PayUMoney or Freecharge wallets.
                      </li>
                      <li>
                        Want to pay offline? Choose the “Cash on Delivery” (COD)
                        option. Train Dhaba will charge no food booking or
                        delivery fee.
                      </li>
                      <li>
                        Now, sit back and relax! Let the train reach the
                        station. Your ordered food will be served at your berth.
                      </li>
                    </ol>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        How to Get Food in Trains from Train Dhaba?
                      </strong>
                    </p>
                    <p>
                      Here are the three ways you can get food in trains using
                      Train Dhaba:
                    </p>
                    <ul>
                      <li>
                        <strong>Train Dhaba website: www.traindhaba.com</strong>
                      </li>
                      <li>
                        <strong>Train Dhaba App</strong>
                      </li>
                      <li>
                        <strong>
                          Train Dhaba Contact Number: 040- 40077374{" "}
                        </strong>
                      </li>
                    </ul>
                    <p>
                      You can book food in trains in advance or at least one
                      hour before your train departs from your boarding station
                      with Train Dhaba.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Order Food on Trains Online from Trusted Restaurants:
                        2000+ Food Partners
                      </strong>
                    </p>
                    <p>
                      Order restaurant food on trains online with Train Dhaba in
                      simple steps. Enjoy tasty, hygienic, and fresh food on
                      your train seat anywhere you travel in India.
                    </p>
                    <p>
                      Train Dhaba collaborates with more than 2000 restaurants
                      that follow stringent food quality and hygiene guidelines
                      and get approval from FSSAI.
                    </p>
                    <p>
                      With Train Dhaba train food booking app, you can now
                      customise your menu online, receive your food at your
                      train seat, and choose to pay online or cash on delivery.
                    </p>
                    <p>
                      You can also earn discounts with Train Dhaba train food
                      coupons at checkout.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Food Delivery on Trains across India: Delivering in
                        7000+ Trains
                      </strong>
                    </p>
                    <p>
                      Train Dhaba offers the e-catering facility in more than
                      7000s of trains across India.
                    </p>
                    <p>
                      Whether you are travelling through Rajdhani Express,
                      Shatabdi Express, Tejas, Double-Decker trains, or other
                      trains equipped with or without pantry car, you will get{" "}
                      food delivery in train from Train Dhaba’s partner
                      restaurants.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Online Food Order in Trains at 450+ Stations across
                        India
                      </strong>
                    </p>
                    <p>
                      Get train food deliveries in more than 450 stations across
                      India including the major stations.
                    </p>
                    <p>
                      These include&nbsp;New Delhi (NDLS), Mumbai (BCT), Kolkata
                      (KOAA), Chennai (MAS), Ahmedabad (ADI), Agra (AGC),
                      Allahabad (PRYJ), Bhopal (BPL), Gorakhpur (GKP), Gwalior
                      (GWL), Hajipur (HJP), Itarsi (ET), Jaipur (JP), Jhansi
                      (JHS), Jodhpur (JU), Kanpur (CNB), Katni (KTE), Kerala
                      (TVC), Kota (KOTA), Lucknow (LJN), Ludhiana (LDH), Mathura
                      (MTJ), Madgaon (MAO), Mughalsarai (DDU), Nagpur (NGP),
                      Patna (PNBE), Pune (PUNE), Ratlam (RTM), Raipur (R),
                      Rajkot (RJT), Satna (STA), Secunderabad (SC), Solapur
                      (SUR), Surat (ST), Ujjain (UJN), Vadodara (BRC),
                      Vijayawada (BZA), Wardha (WR).
                    </p>
                    <p>
                      You can choose food from your local cuisine or go for your
                      favourite food item while travelling anywhere in India.
                      Enjoy your favourite “Khana” in trains while travelling
                      from any railway station in India.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Download Train Dhaba Food Delivery App: Best App to
                        Order Food in Trains
                      </strong>
                    </p>
                    <p>
                      Train Dhaba is one of the best apps that deliver food in
                      trains. Train Dhaba App provides all varieties of
                      restaurant food in train. You can download Train Dhaba app
                      free from Google Play Store or iOS store.
                    </p>
                    <p>
                      It works even in the offline mode, so you don't need even
                      internet services while travelling.
                    </p>
                    <p>
                      So, if you are planning to travel either long or short
                      journey, no need to worry because Train Dhaba will serve
                      you with good quality food in trains. Just enjoy the ride
                      while you order food with Train Dhaba.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Why Choose Train Dhaba for Online Food Ordering Services
                        in Trains?
                      </strong>
                    </p>
                    <p>
                      Train Dhaba provides freedom from carrying food from home.
                      When you avail e-catering services in trains, there is no
                      need to eat poor-quality pantry food or buy stale food
                      from food stalls at railway stations.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        What are the Benefits of Ordering Food on a Train from
                        Train Dhaba?
                      </strong>
                    </p>
                    <ul>
                      <li>
                        Get food delivered at your train seat at your
                        convenience
                      </li>
                      <li>
                        High quality of hygienic train food at affordable price
                      </li>
                      <li>
                        Get fresh and delicious restaurant food delivered at
                        your seat
                      </li>
                      <li>Wide variety of food options in trains</li>
                      <li>
                        Get refund when your food gets undelivered due to
                        missing the train
                      </li>
                      <li>
                        Discount on bulk orders for group travel in trains
                      </li>
                      <li>On-time delivery of food at your seat</li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        High-Quality and Hygienically Prepared Food Served with
                        Contactless Delivery
                      </strong>
                    </p>
                    <p>
                      Indian Railways is a transport giant mostly preferred to
                      travel by Indians from one destination to another across
                      India. Train Dhaba, through its distinctive e-catering
                      service, offers passengers a variety of food which
                      includes:
                    </p>
                    <ul>
                      <li>
                        <strong>North Indian Dishes:</strong>&nbsp;North Indian
                        cuisines are spicy and delicious in taste. The perfect
                        blend of spices and its exclusive cooking style makes it
                        a better choice to consume in trains.&nbsp;
                        <br />
                        &nbsp;
                      </li>
                      <li>
                        <strong>South Indian:</strong>&nbsp;Some of the south
                        Indian dishes which Train Dhaba offers to the passengers
                        are Masala Dosa, Uttapam Upma, Idli, Vada, Pongal, and a
                        south Indian Thali.&nbsp;
                        <br />
                        &nbsp;
                      </li>
                      <li>
                        <strong>Chinese:&nbsp;</strong>Chinese dishes are a
                        diverse mixture of thick sauces, veggies, or chicken
                        cooked with unique spices. Manchurian, Hakka noodles,
                        fried rice, soups and manchow are some of the finest
                        recipes. They are available anytime for the passengers
                        during the journey.
                        <br />
                        &nbsp;
                      </li>
                      <li>
                        <strong>Fast food:</strong>&nbsp; You can order fast
                        foods like burgers, French fries, veg and non-veg pizza
                        of different variety at any station. Enjoy your journey
                        with tasty fast food in train.
                        <br />
                        &nbsp;
                      </li>
                      <li>
                        <strong>Veg Thali</strong>&nbsp;(Mini, Deluxe, Standard
                        and Maharaja):&nbsp; A veg thali provides complete
                        nutrition to the body. The varieties available in Thali
                        are mini veg thali, deluxe thali, standard thali, and
                        maharaja thali. This platter can include paneer butter
                        masala, seasonal veg, chapatti, dal fry, raita, salad,
                        sweets, curd, papad, and pickle.
                        <br />
                        &nbsp;
                      </li>
                      <li>
                        <strong>Non-Veg Deluxe Thali:</strong>&nbsp;Non-veg
                        lovers must order this deluxe thali which contains
                        butter chicken/chicken curry, chapatti/paratha, seasonal
                        veg, dal fry, raita, sweet, curd, salad, papad, and
                        pickle. It is the most ordered thali in train.
                      </li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Popular Food Varieties Available in Trains with Train
                        Dhaba
                      </strong>
                    </p>
                    <ul style={{ listStyleType: "circle" }}>
                      <li>
                        <strong>Thali in Trains: </strong>Maharaja Thali, Deluxe
                        Thali, Mini Thali, Standard Veg Thali, Non-Veg Thali,
                        and many more
                      </li>
                      <li>Biryani in Trains</li>
                      <li>Pizza in trains</li>
                      <li>Pure Veg food on trains</li>
                      <li>Non-Veg Food on trains</li>
                      <li>
                        {/* <a href="https://traindhaba.com/jain-food-in-train"> */}
                        Jain Food on Trains
                        {/* </a> */}
                      </li>
                      <li>
                        {/* <a href="https://traindhaba.com/group-order"> */}
                        Group Food on Trains
                        {/* </a> */}
                      </li>
                      <li>Breakfast in Trains</li>
                      <li>Lunch in trains</li>
                      <li>Snacks in Trains</li>
                      <li>Dinner in trains</li>
                      <li>Cakes in trains</li>
                      <li>Milk in trains</li>
                      <li>
                        Beverages – Tea, Coffee, and Cold Drinks in trains
                      </li>
                      <li>
                        Train Food suitable for New Moms, Babies, Infants, and
                        Toddlers
                      </li>
                      <li>
                        All national, and international cuisines including North
                        Indian, South Indian, Chinese, Italian, and many more
                      </li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Why is Train Dhaba the Best App Among All Other
                        E-Catering Apps to Order Food on a Train?
                      </strong>
                    </p>
                    <ul>
                      <li>Train Dhaba is an ISO-certified company</li>
                      <li>IRCTC e-catering partner</li>
                      <li>Trusted FSSAI-approved restaurant partners</li>
                      <li>Transparent pricing model and no hidden charges</li>
                      <li>
                        Availability of train food at more than 450 stations
                        across India
                      </li>
                      <li>
                        Partners with more than 2000 restaurants across India
                      </li>
                      <li>
                        Food delivery in more than 7000 trains – both with
                        Pantry and Non-Pantry trains
                      </li>
                      <li>More than 30 Lakhs meals delivered in trains</li>
                      <li>
                        Among the best train food providers in trains in India
                      </li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>
                      <strong>
                        Beyond Food on Trains: Check PNR Status, Live Train
                        Running Status, and More with Train Dhaba
                      </strong>
                    </p>
                    <p>
                      Train Dhaba caters to all needs of a train passenger of
                      Indian Railways. Not only limited to meeting the train
                      food demands, but we have also diversified our services to
                      provide a solution to railway enquiries with our one-touch
                      app. With this one-stop solution for train travel, you can
                      check:
                    </p>
                    <ul>
                      <li>
                        <strong>Indian Railway PNR Status</strong>: Check
                        10-digit{" "}
                        {/* <a href="https://traindhaba.com/check-pnr-status"> */}
                        PNR number status
                        {/* </a> */}
                        with Train Dhaba. You can get results for your IRCTC PNR
                        enquiries in an instant from Train Dhaba. Checking your
                        railway PNR status before the journey will help you know
                        whether the ticket status is “confirmed” or not.
                        <br />
                        &nbsp;
                      </li>
                      <li>
                        <strong>Live Train Running Status</strong>: Spot the
                        live arrival and departure of your train through Train
                        Dhaba’s{" "}
                        {/* <a href="https://traindhaba.com/live-train-running-status"> */}
                        live train running status
                        {/* </a> */}
                        . The advanced AI-powered system of Train Dhaba connects
                        with the GPS of your train, which provides the exact
                        live train running status in seconds.
                        <br />
                        &nbsp;
                      </li>
                      <li>
                        <strong>Train Time Table</strong>: You can check{" "}
                        {/* <a href="https://traindhaba.com/train-time-table-schedule"> */}
                        Indian railway timetable
                        {/* </a> */}
                        through Train Dhaba to plan your journey efficiently.
                        Train Dhaba helps you check not only the train schedule,
                        days of running, name of the stations, but also the time
                        of arrival, and departure.
                        <br />
                        &nbsp;
                      </li>
                      <li>
                        <strong>Live Station Status</strong>: Train Dhaba helps
                        you check the{" "}
                        {/* <a href="https://traindhaba.com/live-station-arrival-departure"> */}
                        live station status
                        {/* </a> */}
                        in real-time. Enter the details of the origin station
                        and destination station and check upcoming trains on
                        those stations for the next 2, 4, or 8 hours.
                      </li>
                    </ul>
                    <p>
                      Travelling via train is a stress buster and overloaded
                      with benefits like social communication, fun, and memories
                      to cherish forever. The joy of travelling doubles when
                      healthy and tasty food accompanies you right at your
                      berth. During train journeys, food quality and
                      availability are the concerns for which every traveller
                      expresses their annoyance. Passengers’ resentment and
                      dissatisfaction towards the pantry food is visible, as the
                      food prepared in the pantry or food items sold at the
                      station premises are unfit and unhealthy to consume. This
                      breaks the pleasant mood during the journey and urges the
                      traveller to find out for some other options to fill their
                      belly with something hygienic and tasty. If you love train
                      journey and crave for some delicious food served hot and
                      fresh right at your seat, it’s the time to choose Train
                      Dhaba.
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToOrderGuide;
