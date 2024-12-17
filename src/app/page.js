import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>How to Care for Kerry</h1>
      <h2>Resident Details</h2>
      <form id="residentDetailsForm">
        <label htmlFor="myPhoto">My Photograph:</label>
        <input type="file" id="myPhoto" />

        <label htmlFor="prefix">Prefix:</label>
        <select id="prefix">
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
          <option value="Sir">Sir</option>
          <option value="Lady">Lady</option>
        </select>

        <label htmlFor="forename">Forename:</label>
        <input type="text" id="forename" placeholder="Enter First Name" />

        <label htmlFor="surname">Surname:</label>
        <input type="text" id="surname" placeholder="Enter Surname" />

        <label htmlFor="knownAs">Known As:</label>
        <input type="text" id="knownAs" placeholder="Enter Known As" />

        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input type="date" id="dateOfBirth" />

        <label htmlFor="gender">Gender:</label>
        <select id="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="personality">Personality:</label>
        <input type="text" id="personality" placeholder="Describe Personality" />

        <label htmlFor="additionalInfo">Additional Information:</label>
        <textarea id="additionalInfo" placeholder="Things we should know"></textarea>

        <button type="button" id="saveResidentDetails">Save Resident Details</button>
      </form>


      <h2>Family Details</h2>
      <form id="familyForm">

        <label htmlFor="partner">Partner:</label>
        <input type="text" id="partner" placeholder="Husband or wife's name" />

        <label htmlFor="partnerPhoto">Partner's Photograph:</label>
        <input type="file" id="partnerPhoto" />

        <label htmlFor="weddingDate">Wedding Date:</label>
        <input type="date" id="weddingDate" />

        <label htmlFor="weddingVenue">Wedding Venue:</label>
        <input type="text" id="weddingVenue" placeholder="Place of marriage" />

        <label htmlFor="venuePhoto">Venue Photograph:</label>
        <input type="file" id="venuePhoto" />

        <label htmlFor="weddingPhoto">Wedding Photograph:</label>
        <input type="file" id="weddingPhoto" />

        <label htmlFor="children">Children:</label>
        <input type="text" id="children" placeholder="Names of children" />

        <label htmlFor="grandchildren">Grandchildren:</label>
        <input type="text" id="grandchildren" placeholder="Names of grandchildren" />

        <label htmlFor="greatGrandchildren">Great Grandchildren:</label>
        <input type="text" id="greatGrandchildren" placeholder="Names of great grandchildren" />

        <label htmlFor="familyPhotos">Family Photographs:</label>
        <input type="file" id="familyPhotos" multiple />

        <label htmlFor="motherName">Mother's Name:</label>
        <input type="text" id="motherName" placeholder="Mother's name" />

        <label htmlFor="motherProfession">Mother's Profession:</label>
        <input type="text" id="motherProfession" placeholder="Mother's profession" />

        <label htmlFor="motherPhoto">Mother's Photograph:</label>
        <input type="file" id="motherPhoto" />

        <label htmlFor="fatherName">Father's Name:</label>
        <input type="text" id="fatherName" placeholder="Father's name" />

        <label htmlFor="fatherProfession">Father's Profession:</label>
        <input type="text" id="fatherProfession" placeholder="Father's profession" />

        <label htmlFor="fatherPhoto">Father's Photograph:</label>
        <input type="file" id="fatherPhoto" />

        <label htmlFor="siblings">Siblings:</label>
        <input type="text" id="siblings" placeholder="Brothers and sisters" />

        <label htmlFor="siblingPhoto">Sibling Photograph:</label>
        <input type="file" id="siblingPhoto" multiple />

        <label htmlFor="pets">Pets:</label>
        <input type="text" id="pets" placeholder="List of pets and their names" />

        <label htmlFor="petPhoto">Pet Photograph:</label>
        <input type="file" id="petPhoto" multiple />

        <label htmlFor="additionalInfo">Additional Info:</label>
        <textarea id="additionalInfo" placeholder="Other information"></textarea>

        <label htmlFor="friends">Friends:</label>
        <input type="text" id="friends" placeholder="Friend's name" />

        <label htmlFor="friendsPhotos">Friends' Photographs:</label>
        <input type="file" id="friendsPhotos" multiple />

        <button type="button" id="saveFamilyDetails">Save Family Details</button>
      </form>


      <h2>Contacts</h2>
      <div id="contactsContainer">
        <form className="contactForm">
          <label htmlFor="contactName">Name:</label>
          <input type="text" className="contactName" placeholder="Name" />

          <label htmlFor="contactPhotograph">Photograph:</label>
          <input type="file" className="contactPhotograph" accept="image/*" />

          <label htmlFor="relationship">Relationship:</label>
          <select className="relationship">
            <option value="Spouse">Spouse</option>
            <option value="Sibling">Sibling</option>
            <option value="Son">Son</option>
            <option value="Daughter">Daughter</option>
            <option value="Grandchild">Grandchild</option>
            <option value="Friend">Friend</option>
            <option value="Professional">Professional</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="telephoneNumber">Telephone Number:</label>
          <input type="text" className="telephoneNumber" placeholder="Number with area code" />

          <label htmlFor="email">Email:</label>
          <input type="email" className="email" placeholder="Email address" />

          <label htmlFor="contactPhotograph">Photograph:</label>
          <input type="file" className="contactPhotograph" accept="image*" />

          <label htmlFor="bestTimeToContact">Best Time to Contact:</label>
          <input type="text" className="bestTimeToContact" placeholder="Contact time" />

          <button type="button" className="removeContact">Remove Contact</button>
        </form>


      </div>
      <button type="button" id="addContact">Add More Contacts</button>
      <button type="button" id="saveContacts">Save Contacts</button>


      <h2>Life History</h2>
      <form id="lifeHistoryForm">

        <label htmlFor="lifeStory">Life Story:</label>
        <textarea id="lifeStory" placeholder="Life experiences"></textarea>

        <label htmlFor="whereBorn">Where I Was Born:</label>
        <input type="text" id="whereBorn" placeholder="Place of birth" />

        <label htmlFor="birthplacePhoto">Birthplace Photograph:</label>
        <input type="file" id="birthplacePhoto" />

        <label htmlFor="whereGrewUp">Where I Grew Up:</label>
        <input type="text" id="whereGrewUp" placeholder="Town/Country" />

        <label htmlFor="whereGrewUpPhoto">Where I Grew Up Photograph:</label>
        <input type="file" id="whereGrewUpPhoto" />

        <label htmlFor="starSign">Star Sign:</label>
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

        <label htmlFor="mySchool">My School:</label>
        <input type="text" id="mySchool" placeholder="School name" />

        <label htmlFor="schoolPhoto">School Photograph:</label>
        <input type="file" id="schoolPhoto" />

        <label htmlFor="favouriteSubject">Favourite Subject:</label>
        <input type="text" id="favouriteSubject" placeholder="Favourite lesson" />

        <label htmlFor="profession">Profession:</label>
        <input type="text" id="profession" placeholder="Career" />

        <label htmlFor="achievements">Achievements:</label>
        <textarea id="achievements" placeholder="Proud moments"></textarea>

        <button type="button" id="saveLifeHistory">Save Life History</button>
      </form>

      <hr></hr>


      <h2>How to Care for Me</h2>
      <form id="careForm">

        <label htmlFor="introduction">Introduction:</label>
        <textarea id="introduction" placeholder="About my care"></textarea>

        <label htmlFor="sleepRoutine">Sleep Routine:</label>
        <select id="sleepRoutine">
          <option value="Early riser">Early riser</option>
          <option value="Night owl">Night owl</option>
        </select>

        <label htmlFor="personalHygiene">Personal Hygiene:</label>
        <select id="personalHygiene">
          <option value="Bath">Bath</option>
          <option value="Shower">Shower</option>
        </select>

        <label htmlFor="personalCare">Personal Care Preferences:</label>
        <textarea id="personalCare" placeholder="Personal care preferences"></textarea>

        <label htmlFor="myStyle">My Style:</label>
        <textarea id="myStyle" placeholder="Clothing choices"></textarea>

        <label htmlFor="styleAesthetic">My Style Aesthetic:</label>
        <input type="file" id="styleAesthetic" />

        <label htmlFor="myRoom">My Room:</label>
        <textarea id="myRoom" placeholder="My personal space"></textarea>

        <label htmlFor="roomAesthetic">Room Aesthetic:</label>
        <input type="file" id="roomAesthetic" />

        <label htmlFor="diet">Diet:</label>
        <select id="diet">
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Pescatarian">Pescatarian</option>
          <option value="Fruitarian">Fruitarian</option>
          <option value="Other">Other (please state)</option>
        </select>

        <label htmlFor="foodAllergies">Food Allergies:</label>
        <textarea id="foodAllergies" placeholder="List allergies"></textarea>

        <label htmlFor="foodPreferences">Food Preferences:</label>
        <textarea id="foodPreferences" placeholder="Food likes & dislikes"></textarea>

        <label htmlFor="favouriteDishes">My Favourite Dishes:</label>
        <input type="file" id="favouriteDishes" />

        <label htmlFor="hobbies">My Hobbies:</label>
        <textarea id="hobbies" placeholder="How I like to spend my time"></textarea>

        <label htmlFor="relaxation">Relaxation:</label>
        <textarea id="relaxation" placeholder="What I find relaxing"></textarea>

        <label htmlFor="supplements">Supplements:</label>
        <textarea id="supplements" placeholder="Natural supplements taken"></textarea>

        <label htmlFor="medication">Medication:</label>
        <textarea id="medication" placeholder="Regular medication"></textarea>

        <label htmlFor="prescriptions">Prescriptions:</label>
        <input type="file" id="prescriptions" />

        <label htmlFor="medicationAllergies">Medication Allergies:</label>
        <textarea id="medicationAllergies" placeholder="List allergies"></textarea>

        <label htmlFor="cantLiveWithout">I Can't Live Without:</label>
        <textarea id="cantLiveWithout" placeholder="List items"></textarea>

        <button type="button" id="saveCareForm">Save Care Details</button>
      </form>


      <hr></hr>


      <h2>My Favourites</h2>
      <form id="favouritesForm">

        <label htmlFor="favouritePlaces">Favourite Places:</label>
        <input type="text" id="favouritePlaces" placeholder="List of favourite places" />

        <label htmlFor="favouritePlacesPhoto">Favourite Places Photograph:</label>
        <input type="file" id="favouritePlacesPhoto" />

        <label htmlFor="favouriteTimeOfYear">Favourite Time of Year:</label>
        <select id="favouriteTimeOfYear">
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
        </select>

        <label htmlFor="favouriteProgrammes">Favourite Programmes:</label>
        <input type="text" id="favouriteProgrammes" placeholder="List of TV shows" />

        <label htmlFor="favouriteFilms">Favourite Films:</label>
        <input type="text" id="favouriteFilms" placeholder="List of films" />

        <label htmlFor="favouriteMusicians">Favourite Musicians:</label>
        <input type="text" id="favouriteMusicians" placeholder="List of musicians" />

        <label htmlFor="favouriteSong">Favourite Song:</label>
        <input type="text" id="favouriteSong" placeholder="Song title" />

        <label htmlFor="musicianPhoto">Musician Photographs:</label>
        <input type="file" id="musicianPhoto" />

        <label htmlFor="favouriteActor">Favourite Actor:</label>
        <input type="text" id="favouriteActor" placeholder="Name of actor" />

        <label htmlFor="actorPhoto">Actor Photograph:</label>
        <input type="file" id="actorPhoto" />

        <label htmlFor="favouriteActress">Favourite Actress:</label>
        <input type="text" id="favouriteActress" placeholder="Name of actress" />

        <label htmlFor="actressPhoto">Actress Photograph:</label>
        <input type="file" id="actressPhoto" />

        <label htmlFor="favouriteShowLinks">Favourite Show Links:</label>
        <input type="url" id="favouriteShowLinks" placeholder="Add link to favourite show videos" />

        <label htmlFor="favouriteSongLinks">Favourite Song Links:</label>
        <input type="url" id="favouriteSongLinks" placeholder="Add link to favourite song videos" />

        <label htmlFor="favouriteMovieLinks">Favourite Movie Links:</label>
        <input type="url" id="favouriteMovieLinks" placeholder="Add link to favourite movie videos" />

        <label htmlFor="additionalInfo">Additional Info:</label>
        <textarea id="additionalInfo" placeholder="Useful info"></textarea>

        <label htmlFor="addMoreLinks">Add More Links:</label>
        <input type="text" id="addMoreLinks" placeholder="Add additional links dynamically" />

        <button type="button" id="saveFavourites">Save My Favourites</button>
      </form>

      <hr></hr>


      <h2>Messages</h2>
      <div id="messagesContainer">
        <form className="messageForm">
          <label htmlFor="videoMessageTitle">Video Message Title:</label>
          <input type="text" className="videoMessageTitle" placeholder="Enter title" />

          <label htmlFor="videoMessage">Video Message:</label>
          <input type="file" className="videoMessage" accept="video/*" />

          <label htmlFor="imageDescription">Image Description:</label>
          <input type="text" className="imageDescription" placeholder="Describe the image" />

          <label htmlFor="photographicNews">Photographic News:</label>
          <input type="file" className="photographicNews" accept="image*" />

          <button type="button" className="removeMessage">Remove Entry</button>
        </form>
      </div>
      <button type="button" id="addMessageEntry">Add More Messages</button>
      <button type="button" id="saveMessages">Save Messages</button>

      <hr></hr>


      <h2>Scrapbook</h2>
      <div id="scrapbookContainer">
        <form className="scrapbookForm">
          <label htmlFor="photoTitle">Photograph Title:</label>
          <input type="text" className="photoTitle" placeholder="Activity details" />

          <label htmlFor="activityPhotos">Activity Photos:</label>
          <input type="file" className="activityPhotos" accept="image/*" />

          <label htmlFor="videoTitle">Video Title:</label>
          <input type="text" className="videoTitle" placeholder="Video details" />

          <label htmlFor="activityVideos">Activity Videos:</label>
          <input type="file" className="activityVideos" accept="video/*" />

          <button type="button" className="removeScrapbook">Remove Entry</button>
        </form>
      </div>
      <button type="button" id="addScrapbookEntry">Add More Photos/Videos</button>
      <button type="button" id="saveScrapbook">Save Scrapbook</button>

      <h2>End of Life</h2>
      <form id="endOfLifeForm">

        <label htmlFor="endOfLifeWishes">End of Life Wishes:</label>
        <textarea id="endOfLifeWishes" placeholder="When the time comes I would like..."></textarea>

        <label htmlFor="funeral">Funeral Arrangements:</label>
        <textarea id="funeral" placeholder="Where?"></textarea>

        <label htmlFor="specialPhotographs">Special Photographs:</label>
        <input type="file" id="specialPhotographs" multiple />

        <button type="button" id="saveEndOfLife">Save End of Life Wishes</button>
      </form>
    </>
  );
}
