import React from 'react';

export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create Listing
      </h1>

      <form className="flex flex-col sm:flex-row gap-4">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-4 flex-1">

          {/* TITLE (was Name in video) */}
          <input
            type="text"
            placeholder="Title (e.g. 1 BHK near Metro)"
            className="border p-3 rounded-lg"
            id="title"
            required
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
          />

          {/* LOCATION (was Address in video) */}
          <input
            type="text"
            placeholder="Location"
            className="border p-3 rounded-lg"
            id="location"
            required
          />

          {/* CONTACT */}
          <input
            type="text"
            placeholder="Contact Number"
            className="border p-3 rounded-lg"
            id="contactNumber"
            required
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-4 flex-1">

          {/* PROPERTY TYPE */}
          <select
            id="propertyType"
            className="border p-3 rounded-lg"
            required
          >
            <option value="">Select Property Type</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="1 Bed">1 Bed</option>
            <option value="2 Bed">2 Bed</option>
            <option value="3 Bed">3 Bed</option>
          </select>

          {/* TENANT PREFERENCE */}
          <select
            id="tenantPreference"
            className="border p-3 rounded-lg"
            required
          >
            <option value="">Tenant Preference</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Family">Family</option>
            <option value="Girls">Girls</option>
            <option value="Working">Working</option>
          </select>

          {/* RENT */}
          <input
            type="number"
            placeholder="Rent (₹ / month)"
            className="border p-3 rounded-lg"
            id="rent"
            required
          />

        {/* IMAGES */}
         <div className="flex flex-col gap-2 flex-1">
             <p className="font-semibold">
               Images:
              <span className="font-normal text-gray-600 ml-2">
               The first image will be the cover (max 6)
              </span>
            </p>

             <div className="flex gap-3 items-center">
             <input
              type="file"
              multiple
              accept="image/*"
              className="border p-2 rounded w-full"
              />
             <button
               type="button"
               className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg whitespace-nowrap"
             >
              Upload
         </button>
     </div>
</div>


          {/* SUBMIT */}
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
