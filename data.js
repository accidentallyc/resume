(function(){
  window.__resumeData__v1 = {
    status : 'LOOKING', /* WORKING, LOOKING */
    statusText: 'Looking for @ AKL',
    cv:'cassey_chavez_20190303.pdf',
    contact : {
      mobile:   ['+(64) 272461345'],
      email:    ['project.cassey@gmail.com'],
      workEmail:  ['n/a'],
    },
    about: {
      description :`
          <p>I am <b>Cassey Chavez</b>. </p>
          <p>I am a <b>software engineer</b> (++on the web)</p>
          <p>with a passion to improve and move forward!</p>
          <p>I love art, I love discovering new things and I love researching.</p>
      `,
    },
    get skill(){ return skill() },
    get sample(){ return sample() }
  }

  function skill(){
    const skills = {
      languages : [
        { level:'advanced', title:'Node', highlight:true },
        { level:'advanced', title:'Javascript' },
        { level:'advanced', title:'PHP' },
        { level:'advanced', title:'CSS' },
        { level:'intermediate', title:'Java' },
        { level:'intermediate', title:'Python' },
        { level:'basic', title:'C++' },
        { level:'basic', title:'C' },
        { level:'basic', title:'Japanese' },
      ],

      concepts: [
        { level:'intermediate', title:'react'},
        { level:'intermediate', title:'Java Google Appengine'},
        { level:'intermediate', title:'Python Google Appengine'},
        { level:'intermediate', title:'RegExp'},
        { level:'advanced', title:'OAuth 2.0'},
        { level:'advanced', title:'REST APIs'},
        { level:'advanced', title:'Wordpress', highlight: true },
        { level:'advanced', title:'angular'},
      ],
      
      media: [
        { level:'basic', title:'Audio Editing'},
        { level:'basic', title:'Photo Editing'},
        { level:'intermediate', title:'3D Modelling'},
        { level:'skilled', title:'Video Editing'},
        { level:'skilled', title:'Vector Graphics'},
      ],

      get all(){
        return []
          .concat(this.languages)
          .concat(this.concepts)
          .concat(this.media)
      },

      get highlight(){
        return this.all.filter((s)=> s.highlight )
      }
    }

    return skills
  
  }

    function sample(){
    return {
      website :[
         {
          "type": "website",
          "title": "Picture Perfect",
          "position": "Developer",
          "description": "Resume Website with a photography theme",
          "href": "#"
        },
        {
          "type": "website",
          "title": "CFC-CCF Website",
          "position": "Principal Developer",
          "description": "Wordpress website with custome made theme, paid for by Couples for Christ Cooperative Foundation",
          "href": "http://cfc-ccf.org/",
          "history": {
            "stamp": {
              "-time": "6/*/2014",
              "#text": "Release date"
            }
          }
        },
        {
          "type": "website",
          "title": "ArchCon Website",
          "position": "Developer",
          "description": "Wordpress website for a comicon like event named ArchCon in Philippines",
          "href": "http://www.archcon-cebu.com/",
        },

      ],
      experiment:[
        // {
        //   "type": "experiment",
        //   "title": "Steamclock",
        //   "position": "Developer",
        //   "description": "Novelty HTML Page. The gears and the clock hands are rotating via JS and CSS",
        //   "href": "/projects/Steamclock/"
        // },
        {
          "type": "experiment",
          "title": "Wedding Invitation",
          "description": "Invitation to my wedding for those who could not receive a manual invitation",
          "href": "https://accidentallyc.github.io/WeddingInvitation/",
          "position": "Developer",
          "history": {
            "stamp": {
              "-time": "11/*/2014",
              "#text": "Estimate Release Date"
            }
          }
        },
        {
          "type": "experiment",
          "title": "React Chat",
          "description": "Sample project using react, webpack and firebase",
          "href": "https://accidentallyc.github.io/react-chat-sample/",
          "position": "Developer",
          "history": {
            "stamp": {
              "-time": "12/*/2018",
              "#text": "Release Date"
            }
          }
        },
      ],
      video:[
        {
          "type": "video",
          "title": "Count On Me - Animation w/ Lyrics",
          "description": "A short video made for my soon to be wife ( now current )",
          "position": "Producer",
          "href": "https://www.youtube.com/watch?v=56y6Z5xyNUU"
        },
        {
          "type": "video",
          "title": "On the molecular level",
          "description": "A video for a competition in eyeka",
          "position": "Producer",
          "href": "https://www.youtube.com/watch?v=QI_-bPrddwk"
        }
      ],
      get all(){
        return []
          .concat(this.website)
          .concat(this.experiment)
          .concat(this.video)
      }
    }
  }
})();