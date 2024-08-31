import React from "react";
import "../Styles/about.css";
import Card  from './Continet-Card';
import Africa from '../img/africa-removebg-preview.png';
import Asia from '../img/asia-removebg-preview.png';
import Europe from '../img/europe-removebg-preview.png';
import NorthAmerica from '../img/northamerica-removebg-preview.png';
import SouthAmerica from '../img/southamerica-removebg-preview.png';
import Antarctica from '../img/antarctica-removebg-preview.png'
import Australia from '../img/oceania-removebg-preview.png'


function Continent() {
  return (
    <>
      <div className="continent-container">
        <div className="card-body">
        <Card
          name="Africa"
          popularCity="Lagos, Nigeria"
          richestCountry="Nigeria"
          poorestCountry="Burundi"
          smallestCountry="Seychelles"
          biggestCountry="Algeria"
          mostPopulatedCountry="Nigeria"
          leastPopulatedCountry="Seychelles"
          image={Africa}
          population="1.4 billion"
          area="30,370,000 sq km"
          location="Second largest continent"
        />

        <Card
          name="Asia"
          popularCity="Tokyo, Japan"
          richestCountry="Qatar"
          poorestCountry="Yemen"
          smallestCountry="Maldives"
          biggestCountry="Russia"
          mostPopulatedCountry="China"
          leastPopulatedCountry="Maldives"
          image={Asia}
          population="4.7 billion"
          area="44,579,000 sq km"
          location="Largest continent"
        />

        <Card
          name="Europe"
          popularCity="London, United Kingdom"
          richestCountry="Luxembourg"
          poorestCountry="Moldova"
          smallestCountry="Vatican City"
          biggestCountry="Russia"
          mostPopulatedCountry="Germany"
          leastPopulatedCountry="Vatican City"
          image={Europe}
          population="748 million"
          area="10,180,000 sq km"
          location="Second smallest continent"
        />

        <Card
          name="North America"
          popularCity="New York City, USA"
          richestCountry="United States"
          poorestCountry="Honduras"
          smallestCountry="Saint Kitts and Nevis"
          biggestCountry="Canada"
          mostPopulatedCountry="United States"
          leastPopulatedCountry="Saint Kitts and Nevis"
          image={NorthAmerica}
          population="592 million"
          area="24,709,000 sq km"
          location="Third largest continent"
        />

        <Card
          name="South America"
          popularCity="São Paulo, Brazil"
          richestCountry="Brazil"
          poorestCountry="Bolivia"
          smallestCountry="Suriname"
          biggestCountry="Brazil"
          mostPopulatedCountry="Brazil"
          leastPopulatedCountry="Suriname"
          image={SouthAmerica}
          population="430 million"
          area="17,840,000 sq km"
          location="Fourth largest continent"
        />

        <Card
          name="Australia (Oceania)"
          popularCity="Sydney, Australia"
          richestCountry="Australia"
          poorestCountry="Solomon Islands"
          smallestCountry="Nauru"
          biggestCountry="Australia"
          mostPopulatedCountry="Australia"
          leastPopulatedCountry="Nauru"
          image={Australia}
          population="42 million"
          area="8,600,000 sq km"
          location="Smallest continent"
        />

        <Card
          name="Antarctica"
          popularCity="None (Research stations only)"
          richestCountry="None"
          poorestCountry="None"
          smallestCountry="None"
          biggestCountry="None"
          mostPopulatedCountry="None (Transient research personnel)"
          leastPopulatedCountry="None (Transient research personnel)"
          image={Antarctica}
          population="None (Transient research personnel)"
          area="14,000,000 sq km"
          location="Southernmost continent"
        />
        </div>
      </div>
    </>
  );
}

export default Continent;
