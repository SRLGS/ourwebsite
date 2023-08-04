import {Chrono} from 'react-chrono'
import "./index.css"

const items = [
  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },

    url: "http://www.history.com",
    title: 'May 1940',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },

  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },
    url: "http://www.history.com", 
    title: 'May 1941',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },

  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },

    url: "http://www.history.com",
    title: 'May 1942',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },

  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },
    url: "http://www.history.com",
    title: 'May 1943',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },

  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },
    url: "http://www.history.com",
    title: 'May 1944',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },
    url: "http://www.history.com",
    title: 'May 1945',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },
    url: "http://www.history.com",
    title: 'May 1946',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },

  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },
    url: "http://www.history.com",
    title: 'May 1947',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },
    url: "http://www.history.com",
    title: 'May 1948',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },
    title: 'May 1949',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
  {
    media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      },
    title: 'May 1950',
    cardTitle: 'Raviteja',
    cardSubtitle: ' Samboju Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
]

const Reactchrono = () => (
      <div className="chrono-container">
        <Chrono
        mode="VERTICAL_ALTERNATING"   
        items={items}>

        <img
        src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
        className="image"
        alt="chennai-super-kings"
      />
         
            <div>
            <h1>Mumbai Indians</h1>
            <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
          </div>

          <img
        src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
        className="image"
        alt="chennai-super-kings"
      />
         
            <div>
            <h1>Mumbai Indians</h1>
            <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
          </div>

          <img
        src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
        className="image"
        alt="chennai-super-kings"
      />
         
            <div>
            <h1>Mumbai Indians</h1>
            <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
          </div>

          <div className="chrono-icons">
<svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
</svg>
  </div>
        </Chrono>
      </div>
    )

export default Reactchrono