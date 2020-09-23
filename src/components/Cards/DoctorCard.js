import React from "react";

const DoctorCard = ({ specialization, name, aboutMe }) => {
  return (
    <div class="w-full lg:w-1/3 px-4 mb-8">
      <div class="h-full pb-6 rounded shadow-md">
        <img
          class="mx-auto mb-4 h-64"
          src="https://i.imgur.com/SK1ZjqA.png"
          alt=""
        />
        <div class="px-8">
          <h3 class="text-xl font-heading font-semibold">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h3>
          <span>{specialization}</span>
          <div class="flex justify-center py-3 my-4 mx-12 border-t border-b">
            <button class="cursor-pointer bg-gray-700 hover:bg-gray-600 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded">
              Book an Appointment
            </button>
          </div>
          <p>{aboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
