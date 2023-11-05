import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to our Imedic study center</h1>
        <p>
          In here, you will learn how to communicate with patients, how to
          approach each type of sickness and most importantly, you will be
          working with high-educated doctors{" "}
        </p>
      </header>

      <div className="advice">
        <h2>Try to follow all of advice below: </h2>
        <ul>
          <li>
            Stay Hydrated: Drink plenty of water throughout the day to keep your
            body properly hydrated.
          </li>
          <li>
            Balanced Diet: Consume a variety of foods, including fruits,
            vegetables, lean proteins, and whole grains for a balanced diet.
          </li>
          <li>
            Regular Exercise: Incorporate regular physical activity into your
            routine to stay fit and maintain a healthy weight.
          </li>
          <li>
            Get Enough Sleep: Aim for 7-9 hours of quality sleep each night to
            rejuvenate your body and mind.
          </li>
          <li>
            Manage Stress: Practice stress-reduction techniques such as
            meditation, yoga, or deep breathing exercises.
          </li>
          <li>
            Limit Sugary and Processed Foods: Reduce your intake of sugary
            snacks and processed foods high in unhealthy fats.
          </li>
          <li>
            Regular Check-ups: Schedule regular check-ups with your healthcare
            provider for preventative care and early detection of health issues.
          </li>
          <li>
            Don't Skip Breakfast: Start your day with a nutritious breakfast to
            provide your body with essential nutrients.
          </li>
          <li>
            Practice Safe Sun Exposure: Use sunscreen and protective clothing to
            shield your skin from harmful UV rays.
          </li>
          <li>
            Stay Socially Active: Maintain social connections and engage in
            activities that boost your mental well-being.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
