<template>
  <div class="container-fluid">
    <div class="maincontainer">
      <!-- Profile Image -->
      <div class="col-md-5 leftpanel">
        <div class="profile-image">
          <!-- <div class="vignette"></div> -->
          <span class="profile-name">John McDonough<br/>Software Engineer
          </span>
        </div>

        <!-- Summary About Me -->
        <div class="row">
          <div class="col-xs-3">
            <i class="fa fa-user sidebar-icon" aria-hidden="true"></i>
          </div>
          <div class="col-xs-8">
            <div class="sidebar-text">
              John is a highly motivated programmer seeking to gain insights and improve his skills while creating meaningful software. </div>
            <!-- <hr> -->
          </div>
        </div>

        <!-- Phone Number -->
        <div class="row">
          <div class="col-xs-3">
            <i class="fa fa-phone sidebar-icon" aria-hidden="true"></i>
          </div>
          <div class="col-xs-8">
            <div class="sidebar-text">(770) 335-2452<br/>
              <span class="sidebar-subtext">mobile</span>
            </div>
            <!-- <hr> -->
          </div>
        </div>

        <!-- Email -->
        <div class="row">
          <div class="col-xs-3">
            <i class="fa fa-envelope sidebar-icon" aria-hidden="true"></i>
          </div>
          <div class="col-xs-8">
            <div class="sidebar-text">john.c.mcdonough@icloud.com<br/>
              <span class="sidebar-subtext">personal</span>
            </div>
            <div class="sidebar-text">jmcdonough@vertical.com<br/>
              <span class="sidebar-subtext">work</span>
            </div>
            <!-- <hr> -->
          </div>
        </div>

        <!-- Address -->
        <div class="row">
          <div class="col-xs-3">
            <i class="fa fa-map sidebar-icon" aria-hidden="true"></i>
          </div>
          <div class="col-xs-8">
            <div class="sidebar-text">Chamblee, Ga<br/>
              <span class="sidebar-subtext">home</span>
            </div>
            <div class="sidebar-text">Chamblee, Ga<br/>
              <span class="sidebar-subtext">home</span>
            </div>
            <!-- <hr> -->
          </div>
        </div>

        <!-- Links -->
        <div class="row">
          <div class="col-xs-3">
            <i class="fa fa-link sidebar-icon" aria-hidden="true"></i>
          </div>
          <div class="col-xs-8">
            <div class="sidebar-text">
              <a href="https://github.com/JohnCMcDonough">JohnCMcDonough</a><br/>
              <span class="sidebar-subtext">github</span>
            </div>
            <div class="sidebar-text">
              <a href="https://www.linkedin.com/in/john-c-mcdonough/">john-c-mcdonough</a><br/>
              <span class="sidebar-subtext">Linkedin</span>
            </div>
            <!-- <hr> -->
          </div>
        </div>

      </div>
      <div class="col-md-6 col-md-offset-1 rightpanel">
        <jmcd-card v-for="(card,index) in cards" :key="index" :index="index" v-bind:cardData="card" />
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Card from "./Card.vue"
export default {
  name: 'Main',
  data() {
    return {
      cards: {
        workCard: {
          iconClass: "fa fa-briefcase",
          title: "Work Experience",
          sections: [{
            title: "Vertical Communications",
            jobTitle: "Software Engineer",
            date: "MAY 2015 - CURRENT",
            text: "One of a 3-man team creating a microservice based cloud platform for other developers within the company.",
            bullets: ["Massively scalable, built using TypeScript, Node.js, Docker and Kubernetes",
              "Wrote all of the build and deployment code for creating and updating microservices",
              "Wrote various utilities such as multi-tiered Cache and Distributed Workers to aid in developing company platform",
              "Wrote API validation code that validates messages coming into and out of our platform, based on our own custom JSON API documentation"]
          },
          {
            title: "Bigger Apps",
            jobTitle: "Co-founder and Software Developer",
            date: "NOV 2014 - MAR 2017",
            text: "Co-founder of software development company licensing commercial software to universities to track attendance and social incentives for college events.",
            bullets: ["Responsive Web Interface", "Admin and Managment Interface", "Customizable branding for different Universities", "Custom serverside MVC and rendering framework"]
          }, {
            title: "Georgia Tech Research Insitute",
            jobTitle: "Programming Intern",
            date: "MAY 2013 - APR 2014",
            text: "Created a game to help rehabilitate people with wrist indjuries using the leap motion device.",
            bullets: ["C# in Unity", "Wrote large portions of network synchronization code for using 4th degree Runge Kutta (RK4) for extrapolation", "Documented code and architecture, and kept up to date UML diagrams"]
          }]
        },
        schoolCard: {
          iconClass: "fa fa-graduation-cap",
          title: "Education",
          sections: [{
            title: "Southern Polytechnic State University",
            date: "AUG 2014 - MAY 2017",
            text: "Studdied topics such as Machine Learning, GPU Processing, and Software Development",
            bullets: ["BS in Computer Science", "Co-founded a startup", "GPA 3.5"]
          },
          {
            title: "Gwinnett School of Math, Science, and Technology",
            jobTitle: "",
            date: "AUG 2010 - MAY 2014",
            text: "Co-founder of software development company licensing commercial software to universities to track attendance and social incentives for college events.",
            bullets: ["Responsive Web Interface", "Admin and Managment Interface", "Customizable branding for different Universities", "Custom serverside MVC and rendering framework"]
          }]
        },
        activitiesCard: {
          iconClass: "fa fa-futbol-o",
          title: "Activities",
          sections: [{
            title: "Robotics",
            date: "AUG 2012 - MAY 2014",
            text: "Wrote code on both the FTC and FRC teams",
            bullets: ["Competed in the 2017 world championships and placed 24/64 in our subdivision","Wrote a custom onboard web server and websocket server to allow for real-time diagnostics information and feedback to the robot's driver."]
          },
          {
            title: "Digital Media Club",
            jobTitle: "",
            date: "AUG 2012 - MAY 2014",
            text: "Learned how to manage a film schedule, plan shot lists, and coordinate film shoots involving many people.",
            bullets: ["Worked with the city of Duluth, GA to create their Public Service Announcements", "Gathered detailed requirements from clients such as the police and fire department", "Worked within a very strict timeframe","Used video editing tools such as Final Cut Pro, Motion, Premiere, and After Effects"]
          },
          {
            title: "Personal File Sharing and Backup Server",
            jobTitle: "",
            date: "AUG 2012 - MAY 2014",
            text: "Wrote a web server that allowed my friends and I to upload and share files using a variety of protocols.",
            bullets: ["Wrote a custom server to backup and serve files over multiple protocols","Created a simple template language for making custom UI themes", "Used PHP and PAM for unified user logins between FTP, WebDAV, SSH, and the web frontend"]
          }]
        }
      }
    }
  },
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vignette {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 200px 5px rgba(0, 0, 0, 0.9) inset;
}

.card {
  background-color: #FAFCFB;
  /* border-radius: 3px; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 25px;
  transition: 0.3s;
  /* as per google spec */
  font-family: 'Roboto', sans-serif;
  color: #727272;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 25px;
}

.card-text {
  font-size: 16px;
  padding-left: 25px;
}

a {
  color: rgba(255, 255, 255, .85);
  text-decoration: underline;
}

hr {
  color: rgba(1, 1, 1, .2);
  background-color: rgba(1, 1, 1, .2);
  height: 1px;
  width: 100%;
  border: none;
}

.sidebar-icon {
  color: white;
  margin: 25px;
  font-size: 30px;
  vertical-align: top;
}

.sidebar-text {
  color: rgba(255, 255, 255, .70);
  margin: 15px 10px;
  font-size: 16px;
  min-height: 50px;
  font-family: 'Roboto', sans-serif;
}

.sidebar-subtext {
  color: rgba(255, 255, 255, .6);
  margin: 0px;
  font-size: 16px;
  min-height: 50px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
}

.profile-name {
  bottom: 0px;
  position: absolute;
  width: 100%;
  font-family: 'Roboto-Medium', sans-serif;
  /* font-weight: bold; */
  font-size: 30px;
  padding: 0px 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  /* font-weight: 400; */
  text-align: center;
}

.profile-image {
  background: url("../assets/profile_image.jpg");
  background-size: cover;
  width: 100%;
  height: 480px;
  color: white;
  position: relative;
}

.profileimage {
  width: 100%;
}

.leftpanel {
  background-color: #5EA3DA;
  min-height: 500px;
  padding: 0px;
}

.rightpanel {
  padding: 0px;
  margin-bottom: 100px;
}

.maincontainer {
  padding-top: 15px;
}
</style>
