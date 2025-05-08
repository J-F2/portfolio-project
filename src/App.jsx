import './App.css';
import GridElement from './GridElement';
import GridMount from './GridMount';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicPage from './DynamicPage';

function App() {
  const gridElements = [
    { id: 1, thumbnailUrl: "https://img.youtube.com/vi/3LopI4YeC4I/maxresdefault.jpg", content: "https://www.youtube.com/embed/3LopI4YeC4I", title: "Is Success Luck or Hard Work?", pdf:"../src/assets/Success.pdf", description: "My personal definition of success revolves around setting and comleting goals which are steps towards a greater one. There are many different fascets of life that play into a \"life goal\", and I think every acomplishment which advances or helps maintain that life goal is considered a success." },
    { id: 2, thumbnailUrl: "https://img.youtube.com/vi/TjPFZaMe2yw/maxresdefault.jpg", content: "https://www.youtube.com/embed/TjPFZaMe2yw", title: "Studying Skills", links: ["https://www.goodnotes.com/blog/cornell-notes#:~:text=Taking%20Cornell%20notes%20is%20straightforward,and%20prompts%20about%20the%20material.", "https://www.techtarget.com/whatis/definition/pomodoro-technique#:~:text=The%20Pomodoro%20Technique%20is%20a,after%20four%20consecutive%20work%20intervals.", "https://newsinhealth.nih.gov/2013/04/sleep-it"]},
    { id: 3, thumbnailUrl: "https://media.istockphoto.com/id/2186140978/photo/share-your-voice.jpg?s=612x612&w=0&k=20&c=vos1nH5fGdrEXz_7tMmbAL4veAVFC-rQTv_GzSGBRuA=", title: "Self Advocacy", links:["https://www.clcillinois.edu/why-clc/how-will-clc-help-me-to-be-successful/clc-cares-about-you", "https://www.clcillinois.edu/contact-us", "https://www.clcillinois.edu/why-clc/how-will-clc-help-me-to-be-successful/supporting-your-academic-journey"]},
    { id: 4, thumbnailUrl: "https://img.youtube.com/vi/j7w2Gv7ueOc/maxresdefault.jpg", content: "https://www.youtube.com/embed/j7w2Gv7ueOc", title: "Diversity", links: ["https://www.clcillinois.edu/aboutclc/diversity-at-clc", "https://www.purdueglobal.edu/blog/student-life/why-diversity-in-colleges-universities-matters/", "https://www.clcillinois.edu/why-clc/what's-it-like-to-be-a-student-at-clc/student-clubs-and-organizations"]},
    { id: 5, thumbnailUrl: "https://media.istockphoto.com/id/175590369/photo/pebble-on-beach.jpg?s=612x612&w=0&k=20&c=HUghk-nzB8lRi_Ctv0wqPGpAdxjON_byXpHVRLGFNW8=", title: "Wellness Plan", description: "I could not find what this Wellness Plan was, so here is a temporary response for CH 11 Observe and Analyze: \n For my entire life I've been quite out of shape. I've always been the \"fat\" kid at school, which doesn't help when you already don't fit in due to untreated mental issues. I grew up eating fast food because it's all we could afford, and it built an extremely negative habit for me. I find it difficult to eat most \"healthy\" foods or any food that doesn't taste \"good\" to me. I can eat it for one meal, sure, but as soon as I feel even slightly bad that day, I'd rather skip a meal than eat something I don't want to eat. My main goal, then, would be starting to eat healthier even when I don't feel the best. I think once I get used to it, it'll get a lot easier for me. Something I knew before but the book mentioned would be whole vs. processed foods. replacing processed ingredients in foods i already like with whole ones would help me work towards eating healthier. I also have a rather sedentary lifestyle, meaning I don't exercise much. Its hard to start exercising as a fat person with a sedentary lifestyle, so I'm going to start doing my best to take walks or do exercises in my room. There are a couple trails near where I live, so I could maybe even ride my bike there." },
    { id: 6, thumbnailUrl: "https://media.licdn.com/dms/image/v2/C4E12AQGklRSoDv2ItQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1593187641530?e=2147483647&v=beta&t=b4TQHtU5h8xgLBeRp2xTEKR-UfyJ6htKY3R80SsRmuw", title: "Financial Goals", links: ["https://www.clcillinois.edu/financial-aid", "https://studentaid.gov/", "https://www.investopedia.com/terms/f/financial_plan.asp#:~:text=A%20financial%20plan%20involves%20a,can%20base%20your%20investment%20planning"]},
    { id: 7, thumbnailUrl: "https://goqii.com/blog/wp-content/uploads/9-Tips-for-Self-Motivation-1024x683.jpg", title: "Goals & Motivation", description: "My main goal for college is to get to the end of next year with a good GPA and some achievements under my belt, that way I can either start an internship or transfer to another College. My motivation is being able to make enough money to live comfortably.", pdf:"../src/assets/ASA.pdf" },
    { id: 8, thumbnailUrl: "https://t3.ftcdn.net/jpg/05/00/19/52/360_F_500195243_kbaqmtYHI3RWSyqGCVLpOGC0vVqoTsuB.jpg", title: "Letter to Future Self", description: "My general advice to my future self was to work on my motivation and energy, and to keep persevering through hard times.", pdf:"../src/assets/Letter.pdf" },
  ];

  // Split the grid elements into two parts
  const firstHalf = gridElements.slice(0, 4);
  const secondHalf = gridElements.slice(4);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="grid">
              {/* Render the first 4 grid elements */}
              {firstHalf.map((element) => (
                <GridElement key={element.id} id={element.id} thumbnailUrl={element.thumbnailUrl} title={element.title} />
              ))}

              {/* Render the GridMount component */}
              <GridMount />

              {/* Render the remaining 4 grid elements */}
              {secondHalf.map((element) => (
                <GridElement key={element.id} id={element.id} thumbnailUrl={element.thumbnailUrl} title={element.title} />
              ))}
            </div>
          }
        />
        <Route
          path="/page/:id"
          element={<DynamicPage gridElements={gridElements} />}
        />
      </Routes>
    </Router>
  );
}

export default App;