import React from "react";
import "../Styles/country.css";
import Card from "./Card";
import Afghanistan from "../img/Flag-Afghanistan.webp";
import Albania from "../img/Flag-Albania.webp";
import Algeria from "../img/Flag-Algeria.webp";
import Andorra from "../img/Flag-Andorra.webp";
import Angola from "../img/Flag-Angola.webp";
import AntiguaAndBarbuda from "../img/Flag-Antigua-and-Barbuda.webp";
import Argentina from "../img/Flag-Argentina.webp";
import Armenia from "../img/Flag-Armenia.webp";
import Australia from "../img/Flag-Australia.webp";
import Austria from "../img/Flag-Austria.webp";
import Azerbaijan from "../img/Flag-Azerbaijan.webp";
import Bahamas from "../img/Flag-of-The-Bahamas.webp";
import Bahrain from "../img/Flag-Bahrain.webp";
import Bangladesh from "../img/Flag-Bangladesh.webp";
import Barbados from "../img/Flag-Barbados.webp";
import Belarus from "../img/Flag-Belarus.webp";
import Belgium from "../img/Flag-Belgium.webp";
import Belize from "../img/Flag-Belize.webp";
import Benin from "../img/Flag-Benin.webp";
import Bhutan from "../img/flag-dragon-image-Bhutan-design.webp";
import Bolivia from "../img/Flag-Bolivia.webp";
import BosniaAndHerzegovina from "../img/Flag-Bosnia-and-Herzegovina.webp";
import Botswana from "../img/Flag-Botswana.webp";
import Brazil from "../img/Flag-Brazil.webp";
import Brunei from "../img/Flag-Brunei.webp";
import Bulgaria from "../img/Flag-Bulgaria.webp";
import BurkinaFaso from "../img/Flag-Burkina-Faso.webp";
import Burundi from "../img/Flag-Burundi.webp";
import CaboVerde from "../img/Flag-Cabo-Verde.webp";
import Cambodia from "../img/Flag-Cambodia.webp";
import Cameroon from "../img/Flag-Cameroon.webp";
import Canada from "../img/Flag-Canada.webp";
import CentralAfricanRepublic from "../img/Flag-Central-African-Republic.webp";
import Chad from "../img/Flag-Chad.webp";
import China from "../img/Flag-China.webp";
import Chile from "../img/Flag-Chile.webp";
import Colombia from "../img/Flag-Colombia.webp";
import Comoros from "../img/Flag-Comoros.webp";
import DRC from "../img/Flag-Democratic-Republic-of-the-Congo.webp";
import RepublicOfTheCongo from "../img/Flag-Republic-of-the-Congo.webp";
import CostaRica from "../img/Flag-Costa-Rica.webp";
import IvoryCoast from "../img/Flag-Cote-dIvoire.webp";
import Croatia from "../img/Flag-Croatia.webp";
import Cuba from "../img/Flag-Cuba.webp";
import Cyprus from "../img/Flag-Cyprus.webp";
import CzechRepublic from "../img/Flag-Czech-Republic.webp";
import Denmark from "../img/Flag-Denmark.webp";
import Djibouti from "../img/Flag-Djibouti.webp";
import Dominica from "../img/Flag-Dominica.webp";
import DominicanRepublic from "../img/Flag-Dominican-Republic.webp";
import EastTimor from "../img/Flag-of-East-Timor.webp";
import Ecuador from "../img/flag-design-similarities-Ecuador-Colombia-flags-Venezuela.webp";
import Egypt from "../img/Flag-Egypt.webp";
import ElSalvador from "../img/Flag-El-Salvador.webp";
import EquatorialGuinea from "../img/Flag-Equatorial-Guinea.webp";
import Eritrea from "../img/Flag-Eritrea.webp";
import Estonia from "../img/Flag-Estonia.webp";
import Eswatini from "../img/Flag-Eswatini.webp";
import Ethiopia from "../img/Flag-Ethiopia.webp";
import Fiji from "../img/Flag-Fiji.webp";
import Finland from "../img/Flag-Finland.webp";
import France from "../img/Flag-France.webp";
import Gabon from "../img/Flag-Gabon.webp";
import TheGambia from "../img/Flag-of-The-Gambia.webp";
import Georgia from "../img/Flag-Republic-of-Georgia.webp";
import Germany from "../img/Flag-Germany.webp";
import Ghana from "../img/Flag-Ghana.webp";
import Greece from "../img/Flag-Greece.webp";
import Grenada from "../img/Flag-Grenada.webp";
import Guatemala from "../img/Flag-Guatemala.webp";
import Guinea from "../img/Flag-Guinea.webp";
import GuineaBissau from "../img/Flag-Guinea-Bissau.webp";
import Guyana from "../img/Flag-Guyana.webp";
import Haiti from "../img/Flag-Haiti.webp";
import Honduras from "../img/Flag-Honduras.webp";
import Hungary from "../img/Flag-Hungary.webp";
import Iceland from "../img/Flag-Iceland.webp";
import India from "../img/Flag-India.webp";
import Indonesia from "../img/Flag-Indonesia.webp";
import Iran from "../img/Flag-Iran.webp";
import Iraq from "../img/Flag-Iraq.webp";
import Ireland from "../img/FLAG-Ireland.webp";
import Israel from "../img/Flag-Israel.webp";
import Italy from "../img/Flag-Italy.webp";
import Jamaica from "../img/Flag-Jamaica.webp";
import Japan from "../img/Flag-Japan.webp";
import Jordan from "../img/Flag-Jordan.webp";
import Kazakhstan from "../img/Flag-Kazakhstan.webp";
import Kiribati from "../img/Flag-Kiribati.webp";
import Kenya from "../img/Flag-Kenya.webp";
import NorthKorea from "../img/Flag-North-Korea.webp";
import SouthKorea from "../img/Flag-South-Korea.webp";
import Kosovo from "../img/Flag-Kosovo.webp";
import Kuwait from "../img/Flag-Kuwait.webp";
import Kyrgyzstan from "../img/Flag-Kyrgyzstan.webp";
import Laos from "../img/Flag-Laos.webp";
import Latvia from "../img/Flag-Latvia.webp";
import Lebanon from "../img/Flag-Lebanon.webp";
import Lesotho from "../img/Lesotho-flag-colours-design-countries-sub-Saharan-African.webp";
import Liberia from "../img/Flag-Liberia.webp";
import Libya from "../img/Flag-Libya.webp";
import Liechtenstein from "../img/Flag-Liechtenstein.webp";
import Lithuania from "../img/Flag-Lithuania.webp";
import Luxembourg from "../img/Flag-Luxembourg.webp";


function Country() {
  return (
    <>
      <div className="country-container">
        <div className="card-body">
          <Card
            name="Afghanistan"
            head0fgovt="President: Mohammad Ashraf Ghani"
            headofstate="President: Mohammad Ashraf Ghani"
            image={Afghanistan}
            capital="Kabul"
            population="40 million"
            formofgovt="Islamic Republic"
            lang="Pashto, Dari"
            officialrel="None"
            area="652,230 sq km"
            location="South Asia"
            money="Afghan afghani (AFN)"
          />

          <Card
            name="Albania"
            head0fgovt="Prime Minister: Edi Rama"
            headofstate="President: Bajram Begaj"
            image={Albania}
            capital="Tirana"
            population="2.8 million"
            formofgovt="Parliamentary Republic"
            lang="Albanian"
            officialrel="None"
            area="28,748 sq km"
            location="Southeast Europe"
            money="Albanian lek (ALL)"
          />

          <Card
            name="Algeria"
            head0fgovt="President: Abdelmadjid Tebboune"
            headofstate="President: Abdelmadjid Tebboune"
            image={Algeria}
            capital="Algiers"
            population="44 million"
            formofgovt="Presidential Republic"
            lang="Arabic, Berber"
            officialrel="None"
            area="2,381,741 sq km"
            location="North Africa"
            money="Algerian dinar (DZD)"
          />

          <Card
            name="Andorra"
            head0fgovt="Co-Princes: Emmanuel Macron (France) and Joan Enric Vives Sicília (Spain)"
            headofstate="Co-Princes: Emmanuel Macron (France) and Joan Enric Vives Sicília (Spain)"
            image={Andorra}
            capital="Andorra la Vella"
            population="77,000"
            formofgovt="Co-principality"
            lang="Catalan"
            officialrel="None"
            area="468 sq km"
            location="Southwest Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Angola"
            head0fgovt="President: João Lourenço"
            headofstate="President: João Lourenço"
            image={Angola}
            capital="Luanda"
            population="35 million"
            formofgovt="Presidential Republic"
            lang="Portuguese"
            officialrel="None"
            area="1,246,700 sq km"
            location="Southwest Africa"
            money="Angolan kwanza (AOA)"
          />

          <Card
            name="Antigua and Barbuda"
            head0fgovt="Prime Minister: Gaston Browne"
            headofstate="Governor-General: Sir Rodney Williams"
            image={AntiguaAndBarbuda}
            capital="St. John's"
            population="100,000"
            formofgovt="Constitutional Monarchy"
            lang="English"
            officialrel="None"
            area="442 sq km"
            location="Caribbean"
            money="East Caribbean dollar (XCD)"
          />

          <Card
            name="Argentina"
            head0fgovt="President: Javier Milei"
            headofstate="President: Javier Milei"
            image={Argentina}
            capital="Buenos Aires"
            population="45 million"
            formofgovt="Federal Republic"
            lang="Spanish"
            officialrel="None"
            area="2,780,400 sq km"
            location="South America"
            money="Argentine peso (ARS)"
          />

          <Card
            name="Armenia"
            head0fgovt="Prime Minister: Nikol Pashinyan"
            headofstate="President: Vahagn Khachaturyan"
            image={Armenia}
            capital="Yerevan"
            population="3 million"
            formofgovt="Parliamentary Republic"
            lang="Armenian"
            officialrel="None"
            area="297,000 sq km"
            location="Caucasus"
            money="Armenian dram (AMD)"
          />

          <Card
            name="Australia"
            head0fgovt="Prime Minister: Anthony Albanese"
            headofstate="King: Charles III"
            image={Australia}
            capital="Canberra"
            population="25 million"
            formofgovt="Federal Parliamentary Democracy and Constitutional Monarchy"
            lang="English"
            officialrel="None"
            area="7,692,024 sq km"
            location="Oceania"
            money="Australian dollar (AUD)"
          />

          <Card
            name="Austria"
            head0fgovt="Chancellor: Karl Nehammer"
            headofstate="President: Alexander Van der Bellen"
            image={Austria}
            capital="Vienna"
            population="9 million"
            formofgovt="Federal Republic"
            lang="German"
            officialrel="None"
            area="83,871 sq km"
            location="Central Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Azerbaijan"
            head0fgovt="President: Ilham Aliyev"
            headofstate="President: Ilham Aliyev"
            image={Azerbaijan}
            capital="Baku"
            population="10 million"
            formofgovt="Presidential Republic"
            lang="Azerbaijani"
            officialrel="None"
            area="86,600 sq km"
            location="South Caucasus"
            money="Azerbaijani manat (AZN)"
          />

          <Card
            name="The Bahamas"
            head0fgovt="Prime Minister: Philip Davis"
            headofstate="King: Charles III"
            image={Bahamas}
            capital="Nassau"
            population="400,000"
            formofgovt="Constitutional Monarchy"
            lang="English"
            officialrel="None"
            area="13,880 sq km"
            location="Caribbean"
            money="Bahamian dollar (BSD)"
          />

          <Card
            name="Bahrain"
            head0fgovt="King: Hamad bin Isa Al Khalifa"
            headofstate="King: Hamad bin Isa Al Khalifa"
            image={Bahrain}
            capital="Manama"
            population="1.7 million"
            formofgovt="Monarchy"
            lang="Arabic"
            officialrel="None"
            area="765 sq km"
            location="Middle East"
            money="Bahraini dinar (BHD)"
          />

          <Card
            name="Bangladesh"
            head0fgovt="Prime Minister: Sheikh Hasina"
            headofstate="President: Mohammad Shahabuddin"
            image={Bangladesh}
            capital="Dhaka"
            population="169 million"
            formofgovt="Parliamentary Republic"
            lang="Bengali"
            officialrel="None"
            area="147,570 sq km"
            location="South Asia"
            money="Bangladeshi taka (BDT)"
          />

          <Card
            name="Barbados"
            head0fgovt="Prime Minister: Mia Mottley"
            headofstate="President: Sandra Mason"
            image={Barbados}
            capital="Bridgetown"
            population="290,000"
            formofgovt="Parliamentary Republic"
            lang="English"
            officialrel="None"
            area="432 sq km"
            location="Caribbean"
            money="Barbadian dollar (BBD)"
          />

          <Card
            name="Belarus"
            head0fgovt="President: Alexander Lukashenko"
            headofstate="President: Alexander Lukashenko"
            image={Belarus}
            capital="Minsk"
            population="9.4 million"
            formofgovt="Presidential Republic"
            lang="Belarusian, Russian"
            officialrel="None"
            area="207,600 sq km"
            location="Eastern Europe"
            money="Belarusian ruble (BYN)"
          />

          <Card
            name="Belgium"
            head0fgovt="Prime Minister: Alexander De Croo"
            headofstate="King: Philippe"
            image={Belgium}
            capital="Brussels"
            population="11.5 million"
            formofgovt="Federal Parliamentary Democracy and Constitutional Monarchy"
            lang="Dutch, French, German"
            officialrel="None"
            area="30,688 sq km"
            location="Western Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Belize"
            head0fgovt="Prime Minister: John Briceño"
            headofstate="King: Charles III"
            image={Belize}
            capital="Belmopan"
            population="450,000"
            formofgovt="Constitutional Monarchy"
            lang="English"
            officialrel="None"
            area="22,966 sq km"
            location="Central America"
            money="Belize dollar (BZD)"
          />

          <Card
            name="Benin"
            head0fgovt="President: Patrice Talon"
            headofstate="President: Patrice Talon"
            image={Benin}
            capital="Porto-Novo"
            population="12 million"
            formofgovt="Presidential Republic"
            lang="French"
            officialrel="None"
            area="114,763 sq km"
            location="West Africa"
            money="West African CFA franc (XOF)"
          />

          <Card
            name="Bhutan"
            head0fgovt="King: Jigme Khesar Namgyel Wangchuck"
            headofstate="King: Jigme Khesar Namgyel Wangchuck"
            image={Bhutan}
            capital="Thimphu"
            population="800,000"
            formofgovt="Constitutional Monarchy"
            lang="Dzongkha"
            officialrel="None"
            area="38,394 sq km"
            location="South Asia"
            money="Bhutanese ngultrum (BTN)"
          />

          <Card
            name="Bolivia"
            head0fgovt="President: Luis Arce"
            headofstate="President: Luis Arce"
            image={Bolivia}
            capital="Sucre (constitutional), La Paz (administrative)"
            population="11.5 million"
            formofgovt="Presidential Republic"
            lang="Spanish, Quechua, Aymara"
            officialrel="None"
            area="1,098,581 sq km"
            location="South America"
            money="Bolivian boliviano (BOB)"
          />

          <Card
            name="Bosnia and Herzegovina"
            head0fgovt="Chairman of the Council of Ministers: Borjana Krišto"
            headofstate="Presidency: Šefik Džaferović, Milorad Dodik, and Željko Komšić"
            image={BosniaAndHerzegovina}
            capital="Sarajevo"
            population="3.3 million"
            formofgovt="Federal Parliamentary Republic"
            lang="Bosnian, Croatian, Serbian"
            officialrel="None"
            area="51,197 sq km"
            location="Southeast Europe"
            money="Bosnia and Herzegovina convertible mark (BAM)"
          />

          <Card
            name="Botswana"
            head0fgovt="President: Mokgweetsi Masisi"
            headofstate="President: Mokgweetsi Masisi"
            image={Botswana}
            capital="Gaborone"
            population="2.3 million"
            formofgovt="Presidential Republic"
            lang="English, Setswana"
            officialrel="None"
            area="581,730 sq km"
            location="Southern Africa"
            money="Botswana pula (BWP)"
          />

          <Card
            name="Brazil"
            head0fgovt="President: Luiz Inácio Lula da Silva"
            headofstate="President: Luiz Inácio Lula da Silva"
            image={Brazil}
            capital="Brasília"
            population="205,223,000"
            formofgovt="Multiparty Federal Republic"
            lang="Portuguese"
            officialrel="None"
            area="8,510,418 sq km"
            location="South America"
            money="Real (R$; plural reais)"
          />

          <Card
            name="Brunei"
            head0fgovt="Sultan: Hassanal Bolkiah"
            headofstate="Sultan: Hassanal Bolkiah"
            image={Brunei}
            capital="Bandar Seri Begawan"
            population="450,000"
            formofgovt="Absolute Monarchy"
            lang="Malay"
            officialrel="None"
            area="5,765 sq km"
            location="Southeast Asia"
            money="Brunei dollar (BND)"
          />

          <Card
            name="Bulgaria"
            head0fgovt="Prime Minister: Nikolay Denkov"
            headofstate="President: Rumen Radev"
            image={Bulgaria}
            capital="Sofia"
            population="6.9 million"
            formofgovt="Parliamentary Republic"
            lang="Bulgarian"
            officialrel="None"
            area="110,879 sq km"
            location="Southeast Europe"
            money="Bulgarian lev (BGN)"
          />

          <Card
            name="Burkina Faso"
            head0fgovt="President: Ibrahim Traoré"
            headofstate="President: Ibrahim Traoré"
            image={BurkinaFaso}
            capital="Ouagadougou"
            population="20 million"
            formofgovt="Presidential Republic"
            lang="French"
            officialrel="None"
            area="272,967 sq km"
            location="West Africa"
            money="West African CFA franc (XOF)"
          />

          <Card
            name="Burundi"
            head0fgovt="President: Evariste Ndayishimiye"
            headofstate="President: Evariste Ndayishimiye"
            image={Burundi}
            capital="Gitega"
            population="13 million"
            formofgovt="Presidential Republic"
            lang="Kirundi, French, English"
            officialrel="None"
            area="27,834 sq km"
            location="East Africa"
            money="Burundian franc (BIF)"
          />
          <Card
            name="Cabo Verde"
            aka="Cape Verde"
            head0fgovt="President: José Maria Neves"
            headofstate="President: José Maria Neves"
            image={CaboVerde}
            capital="Praia"
            population="550,000"
            formofgovt="Presidential Republic"
            lang="Portuguese"
            officialrel="None"
            area="4,033 sq km"
            location="West Africa"
            money="Cape Verdean escudo (CVE)"
          />

          <Card
            name="Cambodia"
            head0fgovt="Prime Minister: Hun Sen"
            headofstate="King: Norodom Sihamoni"
            image={Cambodia}
            capital="Phnom Penh"
            population="17 million"
            formofgovt="Constitutional Monarchy"
            lang="Khmer"
            officialrel="None"
            area="181,035 sq km"
            location="Southeast Asia"
            money="Cambodian riel (KHR)"
          />

          <Card
            name="Cameroon"
            head0fgovt="President: Paul Biya"
            headofstate="President: Paul Biya"
            image={Cameroon}
            capital="Yaoundé"
            population="27 million"
            formofgovt="Presidential Republic"
            lang="French, English"
            officialrel="None"
            area="475,442 sq km"
            location="Central Africa"
            money="Central African CFA franc (XAF)"
          />

          <Card
            name="Canada"
            head0fgovt="Prime Minister: Justin Trudeau"
            headofstate="King: Charles III"
            image={Canada}
            capital="Ottawa"
            population="39 million"
            formofgovt="Federal Parliamentary Democracy and Constitutional Monarchy"
            lang="English, French"
            officialrel="None"
            area="9,984,670 sq km"
            location="North America"
            money="Canadian dollar (CAD)"
          />

          <Card
            name="Central African Republic"
            head0fgovt="President: Faustin-Archange Touadéra"
            headofstate="President: Faustin-Archange Touadéra"
            image={CentralAfricanRepublic}
            capital="Bangui"
            population="5 million"
            formofgovt="Presidential Republic"
            lang="Sango, French"
            officialrel="None"
            area="622,984 sq km"
            location="Central Africa"
            money="Central African CFA franc (XAF)"
          />

          <Card
            name="Chad"
            head0fgovt="President: Mahamat Idriss Déby"
            headofstate="President: Mahamat Idriss Déby"
            image={Chad}
            capital="N'Djamena"
            population="17 million"
            formofgovt="Presidential Republic"
            lang="French, Arabic"
            officialrel="None"
            area="1,284,000 sq km"
            location="Central Africa"
            money="Central African CFA franc (XAF)"
          />

          <Card
            name="Chile"
            head0fgovt="President: Gabriel Boric"
            headofstate="President: Gabriel Boric"
            image={Chile}
            capital="Santiago"
            population="19 million"
            formofgovt="Presidential Republic"
            lang="Spanish"
            officialrel="None"
            area="756,102 sq km"
            location="South America"
            money="Chilean peso (CLP)"
          />

          <Card
            name="China"
            head0fgovt="President: Xi Jinping"
            headofstate="President: Xi Jinping"
            image={China}
            capital="Beijing"
            population="1.4 billion"
            formofgovt="One-Party Socialist Republic"
            lang="Mandarin"
            officialrel="None"
            area="9,596,961 sq km"
            location="East Asia"
            money="Chinese yuan (CNY)"
          />

          <Card
            name="Colombia"
            head0fgovt="President: Gustavo Petro"
            headofstate="President: Gustavo Petro"
            image={Colombia}
            capital="Bogotá"
            population="51 million"
            formofgovt="Presidential Republic"
            lang="Spanish"
            officialrel="None"
            area="1,141,748 sq km"
            location="South America"
            money="Colombian peso (COP)"
          />

          <Card
            name="Comoros"
            head0fgovt="President: Azali Assoumani"
            headofstate="President: Azali Assoumani"
            image={Comoros}
            capital="Moroni"
            population="800,000"
            formofgovt="Federal Islamic Republic"
            lang="Comorian, Arabic, French"
            officialrel="None"
            area="2,235 sq km"
            location="East Africa"
            money="Comorian franc (KMF)"
          />

          <Card
            name="Congo, Democratic Republic of the"
            head0fgovt="President: Félix Tshisekedi"
            headofstate="President: Félix Tshisekedi"
            image={DRC}
            capital="Kinshasa"
            population="89 million"
            formofgovt="Semi-presidential Republic"
            lang="French, Lingala, Swahili, Kikuyu, Tshiluba"
            officialrel="None"
            area="2,344,858 sq km"
            location="Central Africa"
            money="Congolese franc (CDF)"
          />

          <Card
            name="Congo, Republic of the"
            head0fgovt="President: Denis Sassou Nguesso"
            headofstate="President: Denis Sassou Nguesso"
            image={RepublicOfTheCongo}
            capital="Brazzaville"
            population="5 million"
            formofgovt="Presidential Republic"
            lang="French"
            officialrel="None"
            area="342,000 sq km"
            location="Central Africa"
            money="Central African CFA franc (XAF)"
          />

          <Card
            name="Costa Rica"
            head0fgovt="President: Rodrigo Chaves Robles"
            headofstate="President: Rodrigo Chaves Robles"
            image={CostaRica}
            capital="San José"
            population="5 million"
            formofgovt="Presidential Republic"
            lang="Spanish"
            officialrel="None"
            area="51,100 sq km"
            location="Central America"
            money="Costa Rican colón (CRC)"
          />

          <Card
            name="Côte d'Ivoire"
            head0fgovt="President: Alassane Ouattara"
            headofstate="President: Alassane Ouattara"
            image={IvoryCoast}
            capital="Yamoussoukro (official), Abidjan (administrative)"
            population="26 million"
            formofgovt="Presidential Republic"
            lang="French"
            officialrel="None"
            area="322,463 sq km"
            location="West Africa"
            money="West African CFA franc (XOF)"
          />

          <Card
            name="Croatia"
            head0fgovt="Prime Minister: Andrej Plenković"
            headofstate="President: Zoran Milanović"
            image={Croatia}
            capital="Zagreb"
            population="4 million"
            formofgovt="Parliamentary Republic"
            lang="Croatian"
            officialrel="None"
            area="56,594 sq km"
            location="Southeast Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Cuba"
            head0fgovt="President: Miguel Díaz-Canel"
            headofstate="President: Miguel Díaz-Canel"
            image={Cuba}
            capital="Havana"
            population="11 million"
            formofgovt="One-Party Socialist Republic"
            lang="Spanish"
            officialrel="None"
            area="109,884 sq km"
            location="Caribbean"
            money="Cuban peso (CUP), Convertible peso (CUC)"
          />

          <Card
            name="Cyprus"
            head0fgovt="President: Nikos Christodoulides"
            headofstate="President: Nikos Christodoulides"
            image={Cyprus}
            capital="Nicosia"
            population="1.2 million"
            formofgovt="Presidential Republic"
            lang="Greek, Turkish"
            officialrel="None"
            area="9,251 sq km"
            location="Eastern Mediterranean"
            money="Euro (EUR)"
          />

          <Card
            name="Czech Republic"
            head0fgovt="Prime Minister: Petr Fiala"
            headofstate="President: Petr Pavel"
            image={CzechRepublic}
            capital="Prague"
            population="10.7 million"
            formofgovt="Parliamentary Republic"
            lang="Czech"
            officialrel="None"
            area="78,867 sq km"
            location="Central Europe"
            money="Czech koruna (CZK)"
          />
          <Card
            name="Denmark"
            head0fgovt="Prime Minister: Mette Frederiksen"
            headofstate="Monarch: Margrethe II"
            image={Denmark}
            capital="Copenhagen"
            population="5.8 million"
            formofgovt="Constitutional Monarchy"
            lang="Danish"
            officialrel="None"
            area="42,933 sq km"
            location="Northern Europe"
            money="Danish krone (DKK)"
          />

          <Card
            name="Djibouti"
            head0fgovt="President: Isaias Afwerki"
            headofstate="President: Isaias Afwerki"
            image={Djibouti}
            capital="Djibouti"
            population="1 million"
            formofgovt="Presidential Republic"
            lang="French, Arabic"
            officialrel="None"
            area="23,200 sq km"
            location="East Africa"
            money="Djiboutian franc (DJF)"
          />

          <Card
            name="Dominica"
            head0fgovt="Prime Minister: Roosevelt Skerrit"
            headofstate="President: Roosvelt Skerrit"
            image={Dominica}
            capital="Roseau"
            population="73,000"
            formofgovt="Parliamentary Republic"
            lang="English"
            officialrel="None"
            area="750 sq km"
            location="Caribbean"
            money="East Caribbean dollar (XCD)"
          />

          <Card
            name="Dominican Republic"
            head0fgovt="President: Luis Abinader"
            headofstate="President: Luis Abinader"
            image={DominicanRepublic}
            capital="Santo Domingo"
            population="11 million"
            formofgovt="Presidential Republic"
            lang="Spanish"
            officialrel="None"
            area="48,671 sq km"
            location="Caribbean"
            money="Dominican peso (DOP)"
          />

          <Card
            name="East Timor (Timor-Leste)"
            head0fgovt="President: José Ramos-Horta"
            headofstate="President: José Ramos-Horta"
            image={EastTimor}
            capital="Dili"
            population="2.3 million"
            formofgovt="Presidential Republic"
            lang="Tetum, Portuguese"
            officialrel="None"
            area="14,874 sq km"
            location="Southeast Asia"
            money="United States dollar (USD)"
          />

          <Card
            name="Ecuador"
            head0fgovt="President: Daniel Noboa"
            headofstate="President: Daniel Noboa"
            image={Ecuador}
            capital="Quito"
            population="17 million"
            formofgovt="Presidential Republic"
            lang="Spanish"
            officialrel="None"
            area="256,370 sq km"
            location="South America"
            money="United States dollar (USD)"
          />

          <Card
            name="Egypt"
            head0fgovt="President: Abdel Fattah el-Sisi"
            headofstate="President: Abdel Fattah el-Sisi"
            image={Egypt}
            capital="Cairo"
            population="105 million"
            formofgovt="Presidential Republic"
            lang="Arabic"
            officialrel="None"
            area="1,001,450 sq km"
            location="North Africa"
            money="Egyptian pound (EGP)"
          />

          <Card
            name="El Salvador"
            head0fgovt="President: Nayib Bukele"
            headofstate="President: Nayib Bukele"
            image={ElSalvador}
            capital="San Salvador"
            population="6.5 million"
            formofgovt="Presidential Republic"
            lang="Spanish"
            officialrel="None"
            area="21,041 sq km"
            location="Central America"
            money="United States dollar (USD)"
          />

          <Card
            name="Equatorial Guinea"
            head0fgovt="President: Teodoro Obiang Nguema Mbasogo"
            headofstate="President: Teodoro Obiang Nguema Mbasogo"
            image={EquatorialGuinea}
            capital="Malabo"
            population="1.5 million"
            formofgovt="Presidential Republic"
            lang="Spanish, French, Portuguese"
            officialrel="None"
            area="28,051 sq km"
            location="Central Africa"
            money="Central African CFA franc (XAF)"
          />

          <Card
            name="Eritrea"
            head0fgovt="President: Isaias Afwerki"
            headofstate="President: Isaias Afwerki"
            image={Eritrea}
            capital="Asmara"
            population="6 million"
            formofgovt="One-Party State"
            lang="Tigrinya, Arabic, English"
            officialrel="None"
            area="117,600 sq km"
            location="Horn of Africa"
            money="Eritrean nakfa (ERN)"
          />

          <Card
            name="Estonia"
            head0fgovt="Prime Minister: Kaja Kallas"
            headofstate="President: Alar Karis"
            image={Estonia}
            capital="Tallinn"
            population="1.3 million"
            formofgovt="Parliamentary Republic"
            lang="Estonian"
            officialrel="None"
            area="45,227 sq km"
            location="Northern Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Eswatini"
            aka=""
            head0fgovt="King: Mswati III"
            headofstate="King: Mswati III"
            image={Eswatini}
            capital="Mbabane (administrative), Lobamba (legislative)"
            population="1.2 million"
            formofgovt="Absolute Monarchy"
            lang="Swati, English"
            officialrel="None"
            area="17,364 sq km"
            location="Southern Africa"
            money="Swazi lilangeni (SZL)"
          />

          <Card
            name="Ethiopia"
            aka=""
            head0fgovt="Prime Minister: Abiy Ahmed"
            headofstate="President: Abiy Ahmed"
            image={Ethiopia}
            capital="Addis Ababa"
            population="120 million"
            formofgovt="Federal Parliamentary Republic"
            lang="Amharic"
            officialrel="None"
            area="1,104,300 sq km"
            location="Horn of Africa"
            money="Ethiopian birr (ETB)"
          />
          <Card
            name="Fiji"
            head0fgovt="President: Wiliame Katonivere"
            headofstate="President: Wiliame Katonivere"
            image={Fiji}
            capital="Suva"
            population="900,000"
            formofgovt="Parliamentary Republic"
            lang="Fijian, Hindi, English"
            officialrel="None"
            area="18,274 sq km"
            location="Oceania"
            money="Fijian dollar (FJD)"
          />

          <Card
            name="Finland"
            head0fgovt="Prime Minister: Petteri Orpo"
            headofstate="President: Sauli Väinämö Niinistö"
            image={Finland}
            capital="Helsinki"
            population="5.5 million"
            formofgovt="Parliamentary Republic"
            lang="Finnish, Swedish"
            officialrel="None"
            area="338,424 sq km"
            location="Northern Europe"
            money="Euro (EUR)"
          />

          <Card
            name="France"
            head0fgovt="President: Emmanuel Macron"
            headofstate="President: Emmanuel Macron"
            image={France}
            capital="Paris"
            population="67 million"
            formofgovt="Semi-presidential Republic"
            lang="French"
            officialrel="None"
            area="643,801 sq km"
            location="Western Europe"
            money="Euro (EUR)"
          />
          <Card
            name="Gabon"
            head0fgovt="President: Ali Bongo Ondimba"
            headofstate="President: Ali Bongo Ondimba"
            image={Gabon}
            capital="Libreville"
            population="2.4 million"
            formofgovt="Presidential Republic"
            lang="French"
            officialrel="None"
            area="267,668 sq km"
            location="Central Africa"
            money="Central African CFA franc (XAF)"
          />

          <Card
            name="The Gambia"
            head0fgovt="President: Adama Barrow"
            headofstate="President: Adama Barrow"
            image={TheGambia}
            capital="Banjul"
            population="2.4 million"
            formofgovt="Presidential Republic"
            lang="English"
            officialrel="None"
            area="11,295 sq km"
            location="West Africa"
            money="Gambian dalasi (GMD)"
          />

          <Card
            name="Georgia"
            head0fgovt="Prime Minister: Irakli Garibashvili"
            headofstate="President: Salome Zurabishvili"
            image={Georgia}
            capital="Tbilisi"
            population="3.7 million"
            formofgovt="Parliamentary Republic"
            lang="Georgian"
            officialrel="None"
            area="69,700 sq km"
            location="Eastern Europe/Caucasus"
            money="Georgian lari (GEL)"
          />

          <Card
            name="Germany"
            head0fgovt="Chancellor: Olaf Scholz"
            headofstate="President: Frank-Walter Steinmeier"
            image={Germany}
            capital="Berlin"
            population="83 million"
            formofgovt="Federal Parliamentary Republic"
            lang="German"
            officialrel="None"
            area="357,022 sq km"
            location="Central Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Ghana"
            head0fgovt="President: Nana Akufo-Addo"
            headofstate="President: Nana Akufo-Addo"
            image={Ghana}
            capital="Accra"
            population="32 million"
            formofgovt="Presidential Republic"
            lang="English"
            officialrel="None"
            area="238,533 sq km"
            location="West Africa"
            money="Ghanaian cedi (GHS)"
          />

          <Card
            name="Greece"
            head0fgovt="Prime Minister: Kyriakos Mitsotakis"
            headofstate="President: Katerina Sakellaropoulou"
            image={Greece}
            capital="Athens"
            population="10.4 million"
            formofgovt="Parliamentary Republic"
            lang="Greek"
            officialrel="None"
            area="131,957 sq km"
            location="Southern Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Grenada"
            head0fgovt="Prime Minister: Dickon Mitchell"
            headofstate="Governor-General: Dame Cécile La Grenade"
            image={Grenada}
            capital="St. George's"
            population="113,000"
            formofgovt="Parliamentary Democracy"
            lang="English"
            officialrel="None"
            area="344 sq km"
            location="Caribbean"
            money="East Caribbean dollar (XCD)"
          />

          <Card
            name="Guatemala"
            head0fgovt="President: Alejandro Giammattei"
            headofstate="President: Alejandro Giammattei"
            image={Guatemala}
            capital="Guatemala City"
            population="19 million"
            formofgovt="Presidential Republic"
            lang="Spanish"
            officialrel="None"
            area="108,889 sq km"
            location="Central America"
            money="Guatemalan quetzal (GTQ)"
          />

          <Card
            name="Guinea"
            head0fgovt="President: Mamadi Doumbouya"
            headofstate="President: Mamadi Doumbouya"
            image={Guinea}
            capital="Conakry"
            population="13 million"
            formofgovt="Presidential Republic"
            lang="French"
            officialrel="None"
            area="245,857 sq km"
            location="West Africa"
            money="Guinean franc (GNF)"
          />

          <Card
            name="Guinea-Bissau"
            head0fgovt="President: Umaro Sissoco Embaló"
            headofstate="President: Umaro Sissoco Embaló"
            image={GuineaBissau}
            capital="Bissau"
            population="2 million"
            formofgovt="Presidential Republic"
            lang="Portuguese"
            officialrel="None"
            area="36,125 sq km"
            location="West Africa"
            money="West African CFA franc (XOF)"
          />

          <Card
            name="Guyana"
            head0fgovt="President: Irfaan Ali"
            headofstate="President: Irfaan Ali"
            image={Guyana}
            capital="Georgetown"
            population="790,000"
            formofgovt="Presidential Republic"
            lang="English"
            officialrel="None"
            area="214,969 sq km"
            location="South America"
            money="Guyanese dollar (GYD)"
          />
          <Card
            name="Haiti"
            head0fgovt="President: Ariel Henry"
            headofstate="President: Ariel Henry"
            image={Haiti}
            capital="Port-au-Prince"
            population="11 million"
            formofgovt="Presidential Republic"
            lang="Haitian Creole, French"
            officialrel="None"
            area="27,750 sq km"
            location="Caribbean"
            money="Haitian gourde (HTG)"
          />

          <Card
            name="Honduras"
            head0fgovt="President: Xiomara Castro"
            headofstate="President: Xiomara Castro"
            image={Honduras}
            capital="Tegucigalpa"
            population="10 million"
            formofgovt="Presidential Republic"
            lang="Spanish"
            officialrel="None"
            area="112,492 sq km"
            location="Central America"
            money="Honduran lempira (HNL)"
          />

          <Card
            name="Hungary"
            head0fgovt="Prime Minister: Viktor Orbán"
            headofstate="President: Katalin Novák"
            image={Hungary}
            capital="Budapest"
            population="9.6 million"
            formofgovt="Parliamentary Republic"
            lang="Hungarian"
            officialrel="None"
            area="93,030 sq km"
            location="Central Europe"
            money="Forint (HUF)"
          />
          <Card
            name="Iceland"
            head0fgovt="President: Guðni Th. Jóhannesson"
            headofstate="President: Guðni Th. Jóhannesson"
            image={Iceland}
            capital="Reykjavík"
            population="370,000"
            formofgovt="Parliamentary Republic"
            lang="Icelandic"
            officialrel="None"
            area="103,000 sq km"
            location="Northern Europe"
            money="Icelandic króna (ISK)"
          />

          <Card
            name="India"
            head0fgovt="Prime Minister: Narendra Modi"
            headofstate="President: Droupadi Murmu"
            image={India}
            capital="New Delhi"
            population="1.4 billion"
            formofgovt="Federal Parliamentary Republic"
            lang="Hindi, English (official)"
            officialrel="None"
            area="3,287,263 sq km"
            location="South Asia"
            money="Indian rupee (INR)"
          />

          <Card
            name="Indonesia"
            head0fgovt="President: Joko Widodo"
            headofstate="President: Joko Widodo"
            image={Indonesia}
            capital="Jakarta"
            population="273 million"
            formofgovt="Presidential Republic"
            lang="Indonesian"
            officialrel="None"
            area="1,904,569 sq km"
            location="Southeast Asia"
            money="Indonesian rupiah (IDR)"
          />

          <Card
            name="Iran"
            head0fgovt="President: Ebrahim Raisi"
            headofstate="Supreme Leader: Ali Khamenei"
            image={Iran}
            capital="Tehran"
            population="86 million"
            formofgovt="Theocratic Republic"
            lang="Persian"
            officialrel="None"
            area="1,648,195 sq km"
            location="Western Asia"
            money="Iranian rial (IRR)"
          />

          <Card
            name="Iraq"
            head0fgovt="President: Abdul Latif Rashid"
            headofstate="President: Abdul Latif Rashid"
            image={Iraq}
            capital="Baghdad"
            population="42 million"
            formofgovt="Federal Parliamentary Republic"
            lang="Arabic, Kurdish"
            officialrel="None"
            area="438,317 sq km"
            location="Middle East"
            money="Iraqi dinar (IQD)"
          />

          <Card
            name="Ireland"
            head0fgovt="Taoiseach: Leo Varadkar"
            headofstate="President: Michael D. Higgins"
            image={Ireland}
            capital="Dublin"
            population="5 million"
            formofgovt="Parliamentary Republic"
            lang="Irish, English"
            officialrel="None"
            area="70,273 sq km"
            location="Western Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Israel"
            head0fgovt="Prime Minister: Benjamin Netanyahu"
            headofstate="President: Isaac Herzog"
            image={Israel}
            capital="Jerusalem"
            population="9 million"
            formofgovt="Parliamentary Republic"
            lang="Hebrew"
            officialrel="None"
            area="22,072 sq km"
            location="Middle East"
            money="Israeli new shekel (ILS)"
          />

          <Card
            name="Italy"
            head0fgovt="Prime Minister: Giorgia Meloni"
            headofstate="President: Sergio Mattarella"
            image={Italy}
            capital="Rome"
            population="60 million"
            formofgovt="Parliamentary Republic"
            lang="Italian"
            officialrel="None"
            area="301,340 sq km"
            location="Southern Europe"
            money="Euro (EUR)"
          />
          <Card
            name="Jamaica"
            head0fgovt="Prime Minister: Andrew Holness"
            headofstate="Governor-General: Sir Patrick Allen"
            image={Jamaica}
            capital="Kingston"
            population="3 million"
            formofgovt="Parliamentary Democracy"
            lang="English"
            officialrel="None"
            area="10,991 sq km"
            location="Caribbean"
            money="Jamaican dollar (JMD)"
          />

          <Card
            name="Japan"
            head0fgovt="Prime Minister: Fumio Kishida"
            headofstate="Emperor: Naruhito"
            image={Japan}
            capital="Tokyo"
            population="125 million"
            formofgovt="Constitutional Monarchy"
            lang="Japanese"
            officialrel="None"
            area="377,975 sq km"
            location="East Asia"
            money="Japanese yen (JPY)"
          />

          <Card
            name="Jordan"
            head0fgovt="Prime Minister: Bisher al-Khasawneh"
            headofstate="King: Abdullah II"
            image={Jordan}
            capital="Amman"
            population="11 million"
            formofgovt="Constitutional Monarchy"
            lang="Arabic"
            officialrel="None"
            area="89,342 sq km"
            location="Middle East"
            money="Jordanian dinar (JOD)"
          />
          <Card
            name="Kazakhstan"
            head0fgovt="President: Kassym-Jomart Tokayev"
            headofstate="President: Kassym-Jomart Tokayev"
            image={Kazakhstan}
            capital="Astana"
            population="19 million"
            formofgovt="Presidential Republic"
            lang="Kazakh, Russian"
            officialrel="None"
            area="2,724,900 sq km"
            location="Central Asia"
            money="Kazakhstani tenge (KZT)"
          />

          <Card
            name="Kenya"
            head0fgovt="President: William Ruto"
            headofstate="President: William Ruto"
            image={Kenya}
            capital="Nairobi"
            population="54 million"
            formofgovt="Presidential Republic"
            lang="Swahili, English"
            officialrel="None"
            area="580,367 sq km"
            location="East Africa"
            money="Kenyan shilling (KES)"
          />

          <Card
            name="Kiribati"
            head0fgovt="President: Taneti Maamau"
            headofstate="President: Taneti Maamau"
            image={Kiribati}
            capital="Tarawa"
            population="120,000"
            formofgovt="Presidential Republic"
            lang="Gilbertese, English"
            officialrel="None"
            area="811 sq km"
            location="Oceania"
            money="Australian dollar (AUD)"
          />

          <Card
            name="Korea, North"
            head0fgovt="Supreme Leader: Kim Jong-un"
            headofstate="Supreme Leader: Kim Jong-un"
            image={NorthKorea}
            capital="Pyongyang"
            population="25 million"
            formofgovt="One-Party State"
            lang="Korean"
            officialrel="None"
            area="120,538 sq km"
            location="East Asia"
            money="North Korean won (KPW)"
          />

          <Card
            name="Korea, South"
            head0fgovt="President: Yoon Suk-yeol"
            headofstate="President: Yoon Suk-yeol"
            image={SouthKorea}
            capital="Seoul"
            population="52 million"
            formofgovt="Presidential Republic"
            lang="Korean"
            officialrel="None"
            area="100,363 sq km"
            location="East Asia"
            money="South Korean won (KRW)"
          />

          <Card
            name="Kosovo"
            head0fgovt="President: Vjosa Osmani"
            headofstate="President: Vjosa Osmani"
            image={Kosovo}
            capital="Pristina"
            population="1.8 million"
            formofgovt="Parliamentary Republic"
            lang="Albanian, Serbian"
            officialrel="None"
            area="10,887 sq km"
            location="Southeastern Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Kuwait"
            head0fgovt="Amir: Nawaf Al-Ahmad Al-Jaber Al-Sabah"
            headofstate="Amir: Nawaf Al-Ahmad Al-Jaber Al-Sabah"
            image={Kuwait}
            capital="Kuwait City"
            population="4.3 million"
            formofgovt="Constitutional Monarchy"
            lang="Arabic"
            officialrel="None"
            area="17,818 sq km"
            location="Middle East"
            money="Kuwaiti dinar (KWD)"
          />

          <Card
            name="Kyrgyzstan"
            head0fgovt="President: Sadyr Japarov"
            headofstate="President: Sadyr Japarov"
            image={Kyrgyzstan}
            capital="Bishkek"
            population="6.7 million"
            formofgovt="Presidential Republic"
            lang="Kyrgyz, Russian"
            officialrel="None"
            area="199,951 sq km"
            location="Central Asia"
            money="Kyrgyzstani som (KGS)"
          />
          <Card
            name="Laos"
            head0fgovt="President: Thongloun Sisoulith"
            headofstate="President: Thongloun Sisoulith"
            image={Laos}
            capital="Vientiane"
            population="7.3 million"
            formofgovt="One-Party Socialist Republic"
            lang="Lao"
            officialrel="None"
            area="236,800 sq km"
            location="Southeast Asia"
            money="Lao kip (LAK)"
          />

          <Card
            name="Latvia"
            head0fgovt="Prime Minister: Krišjānis Kariņš"
            headofstate="President: Edgars Rinkēvičs"
            image={Latvia}
            capital="Riga"
            population="1.8 million"
            formofgovt="Parliamentary Republic"
            lang="Latvian"
            officialrel="None"
            area="64,589 sq km"
            location="Northern Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Lebanon"
            head0fgovt="President: Michel Aoun"
            headofstate="President: Michel Aoun"
            image={Lebanon}
            capital="Beirut"
            population="6.8 million"
            formofgovt="Parliamentary Republic"
            lang="Arabic"
            officialrel="None"
            area="10,452 sq km"
            location="Middle East"
            money="Lebanese pound (LBP)"
          />

          <Card
            name="Lesotho"
            head0fgovt="Prime Minister: Sam Matekane"
            headofstate="King: Letsie III"
            image={Lesotho}
            capital="Maseru"
            population="2.3 million"
            formofgovt="Constitutional Monarchy"
            lang="Sesotho, English"
            officialrel="None"
            area="30,355 sq km"
            location="Southern Africa"
            money="Lesotho loti (LSL)"
          />

          <Card
            name="Liberia"
            head0fgovt="President: George Weah"
            headofstate="President: George Weah"
            image={Liberia}
            capital="Monrovia"
            population="5 million"
            formofgovt="Presidential Republic"
            lang="English"
            officialrel="None"
            area="111,369 sq km"
            location="West Africa"
            money="Liberian dollar (LRD)"
          />

          <Card
            name="Libya"
            head0fgovt="Prime Minister: Abdul Hamid Dbeibeh"
            headofstate="Chairman of the Presidential Council: Mohamed al-Menfi"
            image={Libya}
            capital="Tripoli"
            population="7 million"
            formofgovt="Parliamentary Republic"
            lang="Arabic"
            officialrel="None"
            area="1,759,541 sq km"
            location="North Africa"
            money="Libyan dinar (LYD)"
          />

          <Card
            name="Liechtenstein"
            head0fgovt="Prime Minister: Daniel Risch"
            headofstate="Prince: Hans-Adam II"
            image={Liechtenstein}
            capital="Vaduz"
            population="40,000"
            formofgovt="Constitutional Monarchy"
            lang="German"
            officialrel="None"
            area="160 sq km"
            location="Central Europe"
            money="Swiss franc (CHF)"
          />

          <Card
            name="Lithuania"
            head0fgovt="Prime Minister: Ingrida Šimonytė"
            headofstate="President: Gitanas Nausėda"
            image={Lithuania}
            capital="Vilnius"
            population="2.8 million"
            formofgovt="Parliamentary Republic"
            lang="Lithuanian"
            officialrel="None"
            area="65,300 sq km"
            location="Eastern Europe"
            money="Euro (EUR)"
          />

          <Card
            name="Luxembourg"
            head0fgovt="Prime Minister: Xavier Bettel"
            headofstate="Grand Duke: Henri"
            image={Luxembourg}
            capital="Luxembourg City"
            population="700,000"
            formofgovt="Constitutional Monarchy"
            lang="Luxembourgish, French, German"
            officialrel="None"
            area="2,586 sq km"
            location="Western Europe"
            money="Euro (EUR)"
          />
        </div>
      </div>
    </>
  );
}

export default Country;
