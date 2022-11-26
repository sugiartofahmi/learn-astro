<template>
  <main
    class="font-Poppins h-full w-full bg-gradient-to-r from-blue-500 to-green-400 flex flex-col md:flex-row px-5 py-5 gap-x-5 gap-y-5"
  >
    <section class="w-full md:w-1/4 container flex flex-col rounded-lg gap-y-5">
      <!-- Header -->
      <section class="flex px-10 py-10 flex-col gap-y-3 bg-gray-300 rounded-lg">
        <img
          width="100"
          class="rounded-lg border-solid border-2 border-gray-400 drop-shadow-lg"
          src="/assets/my-foto.jpg"
          alt="My Foto"
        />
        <h1 class="text-xl font-bold">Mohammad Nurfahmi Sugiarto</h1>
        <p>Junior Web Developer</p>
        <div>
          <button
            class="hover:scale-105 ease-in-out duration-300 transition text-base py-2 px-3 rounded-lg bg-blue-500 text-white font-bold hover:bg-green-400"
          >
            Download CV
          </button>
        </div>
      </section>
      <!--End  Header -->
      <!-- Skills -->
      <section class="flex px-10 py-10 flex-col gap-y-3 bg-gray-300 rounded-lg">
        <h1 class="text-xl font-bold">Skills</h1>
        <div class="flex flex-row gap-x-2">
          <h2 class="text-blue-500 font-bold">HTML/CSS</h2>
          <h2 class="text-blue-500 font-bold">Javascript</h2>
          <h2 class="text-blue-500 font-bold">Typescript</h2>
        </div>
        <div class="flex flex-row gap-x-2">
          <h2 class="text-blue-500 font-bold">SQL</h2>
          <h2 class="text-blue-500 font-bold">Vue</h2>
          <h2 class="text-blue-500 font-bold">React</h2>
        </div>
        <div class="flex flex-row gap-x-2">
          <h2 class="text-blue-500 font-bold">Java</h2>
          <h2 class="text-blue-500 font-bold">Python</h2>
          <h2 class="text-blue-500 font-bold">C++</h2>
        </div>
      </section>
      <!-- End Skills -->
    </section>
    <section class="w-full md:w-3/4 flex gap-y-5 flex-col">
      <!-- About -->
      <section class="flex px-10 py-10 flex-col gap-y-3 bg-gray-300 rounded-lg">
        <h1 class="text-xl font-bold">About Me</h1>
        <p>
          Professional with 2 years experience in web development. Skilled in
          team collaboration, problem solving and project management
        </p>
        <h2 class="text-blue-500 font-bold text-base">
          sugiartofahmi@gmail.com
        </h2>
        <div class="flex fle-row gap-x-3 items-center">
          <a
            class="hover:scale-125 ease-in-out duration-300 transition"
            href="https://github.com/sugiartofahmi"
            target="_blank"
            ><img src="/assets/icon-github.svg" alt="Icon github"
          /></a>
          <a
            class="hover:scale-125 ease-in-out duration-300 transition"
            href="https://www.instagram.com/fahmisugiarto24"
            target="_blank"
            ><img src="/assets/icon-instagram.svg" alt="Icon Instagram"
          /></a>
          <a
            class="hover:scale-125 ease-in-out duration-300 transition"
            href="https://api.whatsapp.com/send?phone=6289643242453"
            target="_blank"
            ><img src="/assets/icon-whatsapp.svg" alt="Icon Whatsapp"
          /></a>
          <a
            class="hover:scale-125 ease-in-out duration-300 transition"
            href="https://www.linkedin.com/in/mohammad-nurfahmi-sugiarto-a2a8b0249/"
            target="_blank"
            ><img src="/assets/icon-linkedin.svg" alt="Icon Linkedin"
          /></a>
        </div>
      </section>
      <!-- End About -->
      <section class="flex px-10 py-10 flex-col gap-y-3 bg-gray-300 rounded-lg">
        <h1 class="text-xl font-bold">Education</h1>
        <div class="flex flex-col gap-y-3">
          <div class="flex flex-col">
            <h2 class="font-bold">Nusantara Islamic University</h2>
            <p>Informatics Engineering</p>
            <p>2020 - Now</p>
          </div>
          <div class="flex flex-col">
            <h2 class="font-bold">Vocational High School 2 Baleendah</h2>
            <p>Computer and Network Engineering</p>
            <p>2017 - 2020</p>
          </div>
        </div>
      </section>
      <!-- Projects -->
      <section
        class="flex px-10 py-10 flex-col gap-y-5 bg-gray-300 rounded-lg drop-shadow-lg"
      >
        <h1 class="text-xl font-bold">Projects</h1>
        <div class="flex flex-col md:flex-row gap-x-5 gap-y-5">
          <div
            class="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer"
          >
            <img class="" src="/assets/project-himatif.png" alt="HIMATIF" />
            <div class="px-3 py-3">
              <h2 class="font-bold text-base">HIMATIF</h2>
              <p>Create an organization website</p>
            </div>
          </div>
          <div
            class="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer"
          >
            <img class="" src="/assets/project-survey.png" alt="Survey Form" />
            <div class="px-3 py-3">
              <h2 class="font-bold text-base">Survey Form</h2>
              <p>Create a talent interest survey website</p>
            </div>
          </div>
          <div
            class="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer"
          >
            <img class="" src="/assets/project-icc.png" alt="ICC" />
            <div class="px-3 py-3">
              <h2 class="font-bold text-base">Informatics Coding Camp</h2>
              <p>Create a training registration website</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-x-5 gap-y-5">
          <div
            class="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer"
          >
            <img class="" src="/assets/project-votsu.jpeg" alt="VOTING" />
            <div class="px-3 py-3">
              <h2 class="font-bold text-base">Voting</h2>
              <p>Create a voting website</p>
            </div>
          </div>
          <div
            class="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer"
          >
            <img class="" src="/assets/project-makrab.jpeg" alt="Makrab" />
            <div class="px-3 py-3">
              <h2 class="font-bold text-base">MAKRAB</h2>
              <p>create an event registration website</p>
            </div>
          </div>
          <div
            class="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer"
          >
            <img class="" src="/assets/project-adhoc.png" alt="ADHOC" />
            <div class="px-3 py-3">
              <h2 class="font-bold text-base">ADHOC</h2>
              <p>Create an organization head registration website</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-x-5 gap-y-5">
          <div
            class="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer"
          >
            <img class="" src="/assets/project-taskxu.jpeg" alt="TASKXU" />
            <div class="px-3 py-3">
              <h2 class="font-bold text-base">TASKXU</h2>
              <p>Create an assignment collection website</p>
            </div>
          </div>
          <div
            class="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer"
          >
            <img class="" src="/assets/project-makrab.jpeg" alt="Makrab" />
            <div class="px-3 py-3">
              <h2 class="font-bold text-base">MAKRAB</h2>
              <p>create an event registration website</p>
            </div>
          </div>
          <div
            class="hover:scale-105 ease-in-out duration-300 transition flex flex-col justify-center w-full md:w-1/3 bg-blue-500 rounded-lg overflow-hidden text-white hover:bg-green-400 cursor-pointer"
          >
            <img class="" src="/assets/project-adhoc.png" alt="ADHOC" />
            <div class="px-3 py-3">
              <h2 class="font-bold text-base">ADHOC</h2>
              <p>Create an organization head registration website</p>
            </div>
          </div>
        </div>
      </section>
      <!-- End Projects -->
    </section>
  </main>
</template>
