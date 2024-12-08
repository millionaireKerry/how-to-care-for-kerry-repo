import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <h1>How to Care for Kerry</h1>
  <h2>Resident Details</h2>
  <form id="residentDetailsForm">
    <label for="myPhoto">My Photograph:</label>
    <input type="file" id="myPhoto"/>

    <label for="prefix">Prefix:</label>
    <select id="prefix">
      <option value="Mr">Mr</option>
      <option value="Mrs">Mrs</option>
      <option value="Miss">Miss</option>
      <option value="Ms">Ms</option>
      <option value="Dr">Dr</option>
      <option value="Sir">Sir</option>
      <option value="Lady">Lady</option>
    </select>

    <label for="forename">Forename:</label>
    <input type="text" id="forename" placeholder="Enter First Name"/>

    <label for="surname">Surname:</label>
    <input type="text" id="surname" placeholder="Enter Surname"/>

    <label for="knownAs">Known As:</label>
    <input type="text" id="knownAs" placeholder="Enter Known As"/>

    <label for="dateOfBirth">Date of Birth:</label>
    <input type="date" id="dateOfBirth"/>

    <label for="gender">Gender:</label>
    <select id="gender">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>

    <label for="personality">Personality:</label>
    <input type="text" id="personality" placeholder="Describe Personality"/>

    <label for="additionalInfo">Additional Information:</label>
    <textarea id="additionalInfo" placeholder="Things we should know"></textarea>

    <button type="button" id="saveResidentDetails">Save Resident Details</button>
  </form>


  <h2>Family Details</h2>
  <form id="familyForm">
  
    <label for="partner">Partner:</label>
    <input type="text" id="partner" placeholder="Husband or wife's name"/>
  
    <label for="partnerPhoto">Partner's Photograph:</label>
    <input type="file" id="partnerPhoto"/>
  
    <label for="weddingDate">Wedding Date:</label>
    <input type="date" id="weddingDate"/>
  
    <label for="weddingVenue">Wedding Venue:</label>
    <input type="text" id="weddingVenue" placeholder="Place of marriage"/>
  
    <label for="venuePhoto">Venue Photograph:</label>
    <input type="file" id="venuePhoto"/>
  
    <label for="weddingPhoto">Wedding Photograph:</label>
    <input type="file" id="weddingPhoto"/>
  
    <label for="children">Children:</label>
    <input type="text" id="children" placeholder="Names of children"/>
  
    <label for="grandchildren">Grandchildren:</label>
    <input type="text" id="grandchildren" placeholder="Names of grandchildren"/>
  
    <label for="greatGrandchildren">Great Grandchildren:</label>
    <input type="text" id="greatGrandchildren" placeholder="Names of great grandchildren"/>
  
    <label for="familyPhotos">Family Photographs:</label>
    <input type="file" id="familyPhotos" multiple/>
  
    <label for="motherName">Mother's Name:</label>
    <input type="text" id="motherName" placeholder="Mother's name"/>
  
    <label for="motherProfession">Mother's Profession:</label>
    <input type="text" id="motherProfession" placeholder="Mother's profession"/>
  
    <label for="motherPhoto">Mother's Photograph:</label>
    <input type="file" id="motherPhoto"/>
  
    <label for="fatherName">Father's Name:</label>
    <input type="text" id="fatherName" placeholder="Father's name"/>
  
    <label for="fatherProfession">Father's Profession:</label>
    <input type="text" id="fatherProfession" placeholder="Father's profession"/>
  
    <label for="fatherPhoto">Father's Photograph:</label>
    <input type="file" id="fatherPhoto"/>
  
    <label for="siblings">Siblings:</label>
    <input type="text" id="siblings" placeholder="Brothers and sisters"/>
  
    <label for="siblingPhoto">Sibling Photograph:</label>
    <input type="file" id="siblingPhoto" multiple/>
  
    <label for="pets">Pets:</label>
    <input type="text" id="pets" placeholder="List of pets and their names"/>
  
    <label for="petPhoto">Pet Photograph:</label>
    <input type="file" id="petPhoto" multiple/>
  
    <label for="additionalInfo">Additional Info:</label>
    <textarea id="additionalInfo" placeholder="Other information"></textarea>
  
    <label for="friends">Friends:</label>
    <input type="text" id="friends" placeholder="Friend's name"/>
  
    <label for="friendsPhotos">Friends' Photographs:</label>
    <input type="file" id="friendsPhotos" multiple/>
  
    <button type="button" id="saveFamilyDetails">Save Family Details</button>
  </form>
  

<h2>Contacts</h2>
<div id="contactsContainer">
  <form class="contactForm">
    <label for="contactName">Name:</label>
    <input type="text" class="contactName" placeholder="Name"/>

    <label for="contactPhotograph">Photograph:</label>
    <input type="file" class="contactPhotograph" accept="image/*"/>

    <label for="relationship">Relationship:</label>
    <select class="relationship">
      <option value="Spouse">Spouse</option>
      <option value="Sibling">Sibling</option>
      <option value="Son">Son</option>
      <option value="Daughter">Daughter</option>
      <option value="Grandchild">Grandchild</option>
      <option value="Friend">Friend</option>
      <option value="Professional">Professional</option>
      <option value="Other">Other</option>
    </select>

    <label for="telephoneNumber">Telephone Number:</label>
    <input type="text" class="telephoneNumber" placeholder="Number with area code"/>

    <label for="email">Email:</label>
    <input type="email" class="email" placeholder="Email address"/>

    <label for="contactPhotograph">Photograph:</label>
    <input type="file" class="contactPhotograph" accept="image*"/>

    <label for="bestTimeToContact">Best Time to Contact:</label>
    <input type="text" class="bestTimeToContact" placeholder="Contact time"/>

    <button type="button" class="removeContact">Remove Contact</button>
  </form>


</div>
<button type="button" id="addContact">Add More Contacts</button>
<button type="button" id="saveContacts">Save Contacts</button>


  <h2>Life History</h2>
  <form id="lifeHistoryForm">
  
    <label for="lifeStory">Life Story:</label>
    <textarea id="lifeStory" placeholder="Life experiences"></textarea>
  
    <label for="whereBorn">Where I Was Born:</label>
    <input type="text" id="whereBorn" placeholder="Place of birth"/>
  
    <label for="birthplacePhoto">Birthplace Photograph:</label>
    <input type="file" id="birthplacePhoto"/>
  
    <label for="whereGrewUp">Where I Grew Up:</label>
    <input type="text" id="whereGrewUp" placeholder="Town/Country"/>
  
    <label for="whereGrewUpPhoto">Where I Grew Up Photograph:</label>
    <input type="file" id="whereGrewUpPhoto"/>
  
    <label for="starSign">Star Sign:</label>
    <select id="starSign">
      <option value="Aries">Aries</option>
      <option value="Taurus">Taurus</option>
      <option value="Gemini">Gemini</option>
      <option value="Cancer">Cancer</option>
      <option value="Leo">Leo</option>
      <option value="Virgo">Virgo</option>
      <option value="Scorpio">Scorpio</option>
      <option value="Sagittarius">Sagittarius</option>
      <option value="Capricorn">Capricorn</option>
      <option value="Aquarius">Aquarius</option>
      <option value="Pisces">Pisces</option>
    </select>
  
    <label for="mySchool">My School:</label>
    <input type="text" id="mySchool" placeholder="School name"/>
  
    <label for="schoolPhoto">School Photograph:</label>
    <input type="file" id="schoolPhoto"/>
  
    <label for="favouriteSubject">Favourite Subject:</label>
    <input type="text" id="favouriteSubject" placeholder="Favourite lesson"/>
  
    <label for="profession">Profession:</label>
    <input type="text" id="profession" placeholder="Career"/>
  
    <label for="achievements">Achievements:</label>
    <textarea id="achievements" placeholder="Proud moments"></textarea>
  
    <button type="button" id="saveLifeHistory">Save Life History</button>
  </form>

  <hr></hr>


 <h2>How to Care for Me</h2>
  <form id="careForm">
  
    <label for="introduction">Introduction:</label>
    <textarea id="introduction" placeholder="About my care"></textarea>
  
    <label for="sleepRoutine">Sleep Routine:</label>
    <select id="sleepRoutine">
      <option value="Early riser">Early riser</option>
      <option value="Night owl">Night owl</option>
    </select>
  
    <label for="personalHygiene">Personal Hygiene:</label>
    <select id="personalHygiene">
      <option value="Bath">Bath</option>
      <option value="Shower">Shower</option>
    </select>
  
    <label for="personalCare">Personal Care Preferences:</label>
    <textarea id="personalCare" placeholder="Personal care preferences"></textarea>
  
    <label for="myStyle">My Style:</label>
    <textarea id="myStyle" placeholder="Clothing choices"></textarea>
  
    <label for="styleAesthetic">My Style Aesthetic:</label>
    <input type="file" id="styleAesthetic"/>
  
    <label for="myRoom">My Room:</label>
    <textarea id="myRoom" placeholder="My personal space"></textarea>
  
    <label for="roomAesthetic">Room Aesthetic:</label>
    <input type="file" id="roomAesthetic"/>
  
    <label for="diet">Diet:</label>
    <select id="diet">
      <option value="Vegetarian">Vegetarian</option>
      <option value="Vegan">Vegan</option>
      <option value="Pescatarian">Pescatarian</option>
      <option value="Fruitarian">Fruitarian</option>
      <option value="Other">Other (please state)</option>
    </select>
  
    <label for="foodAllergies">Food Allergies:</label>
    <textarea id="foodAllergies" placeholder="List allergies"></textarea>
  
    <label for="foodPreferences">Food Preferences:</label>
    <textarea id="foodPreferences" placeholder="Food likes & dislikes"></textarea>
  
    <label for="favouriteDishes">My Favourite Dishes:</label>
    <input type="file" id="favouriteDishes"/>
  
    <label for="hobbies">My Hobbies:</label>
    <textarea id="hobbies" placeholder="How I like to spend my time"></textarea>
  
    <label for="relaxation">Relaxation:</label>
    <textarea id="relaxation" placeholder="What I find relaxing"></textarea>
  
    <label for="supplements">Supplements:</label>
    <textarea id="supplements" placeholder="Natural supplements taken"></textarea>
  
    <label for="medication">Medication:</label>
    <textarea id="medication" placeholder="Regular medication"></textarea>
  
    <label for="prescriptions">Prescriptions:</label>
    <input type="file" id="prescriptions"/>
  
    <label for="medicationAllergies">Medication Allergies:</label>
    <textarea id="medicationAllergies" placeholder="List allergies"></textarea>
  
    <label for="cantLiveWithout">I Can't Live Without:</label>
    <textarea id="cantLiveWithout" placeholder="List items"></textarea>
  
    <button type="button" id="saveCareForm">Save Care Details</button>
  </form>
  

  <hr></hr>


  <h2>My Favourites</h2>
  <form id="favouritesForm">
  
    <label for="favouritePlaces">Favourite Places:</label>
    <input type="text" id="favouritePlaces" placeholder="List of favourite places"/>
  
    <label for="favouritePlacesPhoto">Favourite Places Photograph:</label>
    <input type="file" id="favouritePlacesPhoto"/>
  
    <label for="favouriteTimeOfYear">Favourite Time of Year:</label>
    <select id="favouriteTimeOfYear">
      <option value="Spring">Spring</option>
      <option value="Summer">Summer</option>
      <option value="Autumn">Autumn</option>
      <option value="Winter">Winter</option>
    </select>
  
    <label for="favouriteProgrammes">Favourite Programmes:</label>
    <input type="text" id="favouriteProgrammes" placeholder="List of TV shows"/>
  
    <label for="favouriteFilms">Favourite Films:</label>
    <input type="text" id="favouriteFilms" placeholder="List of films"/>
  
    <label for="favouriteMusicians">Favourite Musicians:</label>
    <input type="text" id="favouriteMusicians" placeholder="List of musicians"/>
  
    <label for="favouriteSong">Favourite Song:</label>
    <input type="text" id="favouriteSong" placeholder="Song title"/>
  
    <label for="musicianPhoto">Musician Photographs:</label>
    <input type="file" id="musicianPhoto"/>
  
    <label for="favouriteActor">Favourite Actor:</label>
    <input type="text" id="favouriteActor" placeholder="Name of actor"/>
  
    <label for="actorPhoto">Actor Photograph:</label>
    <input type="file" id="actorPhoto"/>
  
    <label for="favouriteActress">Favourite Actress:</label>
    <input type="text" id="favouriteActress" placeholder="Name of actress"/>
  
    <label for="actressPhoto">Actress Photograph:</label>
    <input type="file" id="actressPhoto"/>
  
    <label for="favouriteShowLinks">Favourite Show Links:</label>
    <input type="url" id="favouriteShowLinks" placeholder="Add link to favourite show videos"/>
  
    <label for="favouriteSongLinks">Favourite Song Links:</label>
    <input type="url" id="favouriteSongLinks" placeholder="Add link to favourite song videos"/>
  
    <label for="favouriteMovieLinks">Favourite Movie Links:</label>
    <input type="url" id="favouriteMovieLinks" placeholder="Add link to favourite movie videos"/>
  
    <label for="additionalInfo">Additional Info:</label>
    <textarea id="additionalInfo" placeholder="Useful info"></textarea>
  
    <label for="addMoreLinks">Add More Links:</label>
    <input type="text" id="addMoreLinks" placeholder="Add additional links dynamically"/>
  
    <button type="button" id="saveFavourites">Save My Favourites</button>
  </form>
  
  <hr></hr>


  <h2>Messages</h2>
  <div id="messagesContainer">
    <form class="messageForm">
      <label for="videoMessageTitle">Video Message Title:</label>
      <input type="text" class="videoMessageTitle" placeholder="Enter title"/>
  
      <label for="videoMessage">Video Message:</label>
      <input type="file" class="videoMessage" accept="video/*"/>
  
      <label for="imageDescription">Image Description:</label>
      <input type="text" class="imageDescription" placeholder="Describe the image"/>
  
      <label for="photographicNews">Photographic News:</label>
      <input type="file" class="photographicNews" accept="image*"/>
  
      <button type="button" class="removeMessage">Remove Entry</button>
    </form>
  </div>
  <button type="button" id="addMessageEntry">Add More Messages</button>
  <button type="button" id="saveMessages">Save Messages</button>
  
<hr></hr>


<h2>Scrapbook</h2>
<div id="scrapbookContainer">
  <form class="scrapbookForm">
    <label for="photoTitle">Photograph Title:</label>
    <input type="text" class="photoTitle" placeholder="Activity details"/>

    <label for="activityPhotos">Activity Photos:</label>
    <input type="file" class="activityPhotos" accept="image/*"/>

    <label for="videoTitle">Video Title:</label>
    <input type="text" class="videoTitle" placeholder="Video details"/>

    <label for="activityVideos">Activity Videos:</label>
    <input type="file" class="activityVideos" accept="video/*"/>

    <button type="button" class="removeScrapbook">Remove Entry</button>
  </form>
</div>
<button type="button" id="addScrapbookEntry">Add More Photos/Videos</button>
<button type="button" id="saveScrapbook">Save Scrapbook</button>

<h2>End of Life</h2>
<form id="endOfLifeForm">

  <label for="endOfLifeWishes">End of Life Wishes:</label>
  <textarea id="endOfLifeWishes" placeholder="When the time comes I would like..."></textarea>

  <label for="funeral">Funeral Arrangements:</label>
  <textarea id="funeral" placeholder="Where?"></textarea>

  <label for="specialPhotographs">Special Photographs:</label>
  <input type="file" id="specialPhotographs" multiple/>

  <button type="button" id="saveEndOfLife">Save End of Life Wishes</button>
  </form>
</>
  );
}
